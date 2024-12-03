"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { useForm } from "@mantine/form";
import { TextInput } from "@mantine/core";
import { sendMessage } from "@/api/telegram";
import { notifications } from "@mantine/notifications";

export function Form() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      telegram: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
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

      notifications.show({
        title: "Заявка отпрвлена",
        message: "Вам ответят в ближайшее время 🙃",
      });
    } catch (e) {
      form.setFieldError("email", e as string);
    } finally {
      setIsLoading(false);
    }
  };

  // Создаём состояния для наших инпутов.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");

  // Состояния для валидации
  const [nameDirty, setEmailDirty] = useState(false);
  const [emailDirty, setNameDirty] = useState(false);
  const [telegramDirty, setTelegramDirty] = useState(false);
  const [nameError, setNameError] = useState("Имя не может быть пустым");
  const [emailError, setEmailError] = useState("email не может быть пустым");
  const [telegramError, setTelegramError] = useState(
    "Telegram не может быть пустым",
  );

  // Создаём функции для изменения состояния имени и валидации имени.
  const changeName = (e: any) => {
    setName(e.target.value);
    const re = /^([а-я]{1}[а-яё]{3,23}|[a-z]{1}[a-z]{3,23})$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError("Некоректное имя");
    } else {
      setNameError("");
    }
  };

  // Создаём функции для изменения состояния имени и валидации email.
  const changeEmail = (e: any) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некоректный email");
    } else {
      setEmailError("");
    }
  };

  // Создаём функции для изменения состояния имени и валидации Telegram.
  const changeTelegram = (e: any) => {
    setTelegram(e.target.value);
  };

  // Валидации всей формы и кнопки отправки
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    if (emailError || telegramError || nameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, telegramError, nameError]);

  // Функция для отправки формы
  const submitData = (e: any) => {
    e.preventDefault();
    fetch(" http://localhost:5000/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, telegram }),
    })
      .then((response) => response.json())
      .then((result) => alert(result.response.msg));
  };

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "telegram":
        setTelegramDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      default:
    }
  };

  return (
    <div className="max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
      <form className="my-8" onSubmit={form.onSubmit(handleSubmit)}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            {nameDirty && nameError && (
              <div className="error1">{nameError}</div>
            )}
            <>
              <Label htmlFor="firstname">First name</Label>
              <Input
                onBlur={(e) => blurHandler(e)}
                id="firstname"
                placeholder="Your name"
                type="text"
                key={form.key("Your name")}
                {...form.getInputProps("name")}
              />
            </>
            {emailDirty && emailError && (
              <div className="error2">{emailError}</div>
            )}
            <>
              <Label htmlFor="email">Email Address</Label>

              <Input
                onBlur={(e) => blurHandler(e)}
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                key={form.key("projectmayhem@fc.com")}
                {...form.getInputProps("email")}
              />
            </>
            {telegramDirty && telegramError && (
              <div className="error3">{telegramError}</div>
            )}
            <>
              <Label htmlFor="email">Telegram</Label>

              <Input
                onBlur={(e) => blurHandler(e)}
                id="telegram"
                placeholder="@name"
                type="text"
                key={form.key("@name")}
                {...form.getInputProps("telegram")}
              />
            </>
          </LabelInputContainer>
        </div>

        {/*<button*/}
        {/*  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"*/}
        {/*  type="submit"*/}
        {/*>*/}
        {/*  Send &rarr;*/}
        {/*  <BottomGradient />*/}
        {/*</button>*/}
        {isLoading ? (
          <p>loading....</p>
        ) : (
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        )}

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
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
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
