"use client";
import React, { useCallback, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { useForm } from "@mantine/form";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import MagicButton from "@/components/ui/MagicButton";
import Notifications, {
  type Notification,
} from "@/components/ui/Notifications";
import { sendMessage } from "@/api/telegram";

export function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);
  const closeNotification = useCallback(() => setNotification(null), []);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      telegram: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value.trim()) ? null : "Некорректный email",
      telegram: (value) => (value.trim() ? null : "Укажите ник в Telegram"),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setIsLoading(true);
    try {
      await sendMessage(values);
      setNotification({
        message: "Заявка отправлена! Скоро свяжемся с вами.",
        type: "success",
      });
      form.reset();
    } catch (e) {
      setNotification({ message: `Ошибка: ${e}`, type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
      <form className="my-8" onSubmit={form.onSubmit(handleSubmit)} noValidate>
        <div className="flex flex-col gap-y-[14px] space-y-2 w-full mb-4">
          <div>
            <Label htmlFor="firstname">Имя</Label>
            <div className="mt-2">
              <Input
                id="firstname"
                placeholder="Ваше имя"
                type="text"
                autoComplete="name"
                key={form.key("name")}
                {...form.getInputProps("name")}
              />
            </div>
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <div className="mt-2">
              <Input
                id="email"
                placeholder="you@example.com"
                type="email"
                autoComplete="email"
                key={form.key("email")}
                {...form.getInputProps("email")}
              />
            </div>
          </div>
          <div className="mb-4">
            <Label htmlFor="telegram">Telegram</Label>
            <div className="mt-2 mb-5">
              <Input
                id="telegram"
                placeholder="@username"
                type="text"
                key={form.key("telegram")}
                {...form.getInputProps("telegram")}
              />
            </div>
          </div>
        </div>

        <MagicButton
          type="submit"
          title={isLoading ? "Отправляю…" : "Отправить заявку"}
          icon={<FaLocationArrow />}
          position="right"
          disabled={isLoading}
        />

        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
      <Notifications notification={notification} onClose={closeNotification} />
    </div>
  );
}
