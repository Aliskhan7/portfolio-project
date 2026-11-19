"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuArrowUpRight, LuCheck } from "react-icons/lu";
import {
  type Project,
  type ProjectCategory,
  projectCategories,
  projects,
  projectStatusNames,
} from "@/data";
import AppIcon from "@/components/ui/AppIcon";
import { cn } from "@/utils/cn";

const statusStyles: Record<Project["status"], string> = {
  live: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30",
  development: "bg-amber-500/15 text-amber-200 ring-amber-400/30",
  internal: "bg-sky-500/15 text-sky-200 ring-sky-400/30",
};

const Projects = () => {
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const visible = projects.filter(
    (p) => category === "all" || p.category === category,
  );

  return (
    <section className="py-20" id="projects">
      <h2 className="heading">
        Наши <span className="text-purple">проекты</span>
      </h2>
      <p className="text-center text-white-200 mt-4 max-w-2xl mx-auto">
        Собственные продукты, автоматизация для компаний и сайты для клиентов.
      </p>

      <div
        role="tablist"
        aria-label="Категории проектов"
        className="mt-10 flex flex-wrap justify-center gap-2"
      >
        {projectCategories.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={category === c.id}
            onClick={() => setCategory(c.id)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm transition-colors",
              category === c.id
                ? "text-black-100"
                : "text-white-200 hover:text-white",
            )}
          >
            {category === c.id && (
              <motion.span
                layoutId="project-tab"
                className="absolute inset-0 rounded-full bg-purple"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative">{c.name}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

// forwardRef нужен AnimatePresence в режиме popLayout, чтобы измерять уходящие карточки
const ProjectCard = React.forwardRef<HTMLElement, { project: Project }>(
  function ProjectCard({ project }, ref) {
    // Карточка с сайтом — ссылка целиком, без сайта — просто article
    const Wrapper = (
      project.link ? motion.a : motion.article
    ) as typeof motion.article;
    const linkProps = project.link
      ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <Wrapper
        ref={ref}
        layout
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25 }}
        {...(linkProps as object)}
        className="group flex flex-col overflow-hidden rounded-3xl border border-white/[0.1] bg-[#04071d] transition-colors hover:border-purple/40"
      >
        <ProjectCover project={project} />

        <div className="flex flex-1 flex-col p-6 lg:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl lg:text-2xl font-bold">{project.title}</h3>
            <span
              className={cn(
                "rounded-full px-2.5 py-0.5 text-xs ring-1",
                statusStyles[project.status],
              )}
            >
              {projectStatusNames[project.status]}
            </span>
          </div>
          <p className="mt-3 text-white-100">{project.description}</p>

          {project.features.length > 0 && (
            <ul className="mt-4 space-y-2 text-sm text-white-200">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <LuCheck
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
            <ul className="flex flex-wrap gap-2" aria-label="Технологии">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg bg-[#10132E] px-2.5 py-1 text-xs text-white-200"
                >
                  {tech}
                </li>
              ))}
            </ul>
            {project.link && (
              <span className="flex items-center gap-1 text-sm text-purple">
                Открыть сайт
                <LuArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            )}
          </div>
        </div>
      </Wrapper>
    );
  },
);

// Обложка: скриншот в рамке браузера или фирменный градиент с иконкой
const ProjectCover = ({ project }: { project: Project }) => (
  <div
    className={cn(
      "relative aspect-[16/9] overflow-hidden bg-gradient-to-br",
      project.accent,
    )}
  >
    <div className="absolute inset-0 bg-grid-white/[0.06]" />
    {project.image ? (
      <div className="absolute inset-x-6 top-6 -bottom-4 overflow-hidden rounded-t-xl border border-white/20 bg-[#0b0e24] shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 lg:inset-x-10 lg:top-10">
        <div className="flex h-6 items-center gap-1.5 border-b border-white/10 px-3">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`Скриншот проекта ${project.title}`}
          loading="lazy"
          className="h-[calc(100%-1.5rem)] w-full object-cover object-top"
        />
      </div>
    ) : (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/25 bg-white/10 backdrop-blur-md shadow-2xl transition-transform duration-500 group-hover:scale-105 lg:h-28 lg:w-28">
          <AppIcon
            name={project.icon}
            className="h-12 w-12 text-white lg:h-14 lg:w-14"
          />
        </div>
      </div>
    )}
  </div>
);

export default Projects;
