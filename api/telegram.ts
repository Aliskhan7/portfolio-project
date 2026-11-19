export type ContactPayload = {
  name: string;
  email: string;
  telegram: string;
};

// Заявка уходит на наш серверный роут, токен бота в браузер не попадает.
export const sendMessage = async (payload: ContactPayload): Promise<void> => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => null);
    throw data?.error || "Что-то пошло не так...";
  }
};
