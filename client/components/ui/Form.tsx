"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";

import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { useForm } from "@mantine/form";
import { sendMessage } from "@/api/telegram";
import Notifications from "@/components/ui/Notifications";
import Spinner from "@/components/ui/Spinner";

export type Notification = {
  message: string;
  type: "success" | "error";
};

export function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      telegram: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Некоректный Email"),
      telegram: (value) => (value ? null : "Telegram не может быть пустым"),
    },
  });

  const handleSubmit = async ({
    email,
    name,
    telegram,
  }: typeof form.values) => {
    try {
      setIsLoading(true);
      const message = `Email: ${email}, Name: ${name}, Telegram: ${telegram},`;

      await sendMessage(message);

      setIsOpen(true);
      setNotification({
        message: "Сообщение успешно отправлено!",
        type: "success",
      });

      setTimeout(() => setIsOpen(false), 4000);
      form.reset();
    } catch (e) {
      form.setFieldError("email", e as string);
      form.setFieldError("telegram", e as string);

      setNotification({ message: `Ошибка: ${e}`, type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
      <form className="my-8" onSubmit={form.onSubmit(handleSubmit)}>
        <div className="flex flex-col  md:flex-row space-y-t md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <div>
              <Label htmlFor="firstname">Имя</Label>
              <div className="mt-2">
                <Input
                  id="firstname"
                  placeholder="Ваше имя"
                  type="text"
                  key={form.key("Your name")}
                  {...form.getInputProps("name")}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email </Label>
              <div className="mt-2">
                <Input
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                  key={form.key("projectmayhem@fc.com")}
                  {...form.getInputProps("email")}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Telegram</Label>
              <div className="mt-2">
                <Input
                  id="telegram"
                  placeholder="@ваш ник"
                  type="text"
                  key={form.key("@name")}
                  {...form.getInputProps("telegram")}
                />
              </div>
            </div>
          </LabelInputContainer>
        </div>

        {isLoading ? (
          <div className="mt-10 h-12">
            <Spinner />
          </div>
        ) : (
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        )}

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
      <Notifications
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        message={notification?.message}
        type={notification?.type}
      />
    </div>
  );
}
//-1002291965069

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("flex flex-col gap-y-[14px] space-y-2 w-full", className)}
    >
      {children}
    </div>
  );
};
