import { NextResponse } from "next/server";

const MAX_LENGTH = 200;

const clean = (value: unknown): string =>
  typeof value === "string" ? value.trim().slice(0, MAX_LENGTH) : "";

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы");
    return NextResponse.json(
      { error: "Форма временно недоступна" },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректный запрос" }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const telegram = clean(body.telegram);

  if (!/^\S+@\S+$/.test(email) || !telegram) {
    return NextResponse.json(
      { error: "Укажите корректный Email и Telegram" },
      { status: 400 },
    );
  }

  const text = [
    "Новая заявка с сайта",
    `Имя: ${name || "—"}`,
    `Email: ${email}`,
    `Telegram: ${telegram}`,
  ].join("\n");

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    },
  );

  if (!response.ok) {
    console.error("Telegram API error", response.status, await response.text());
    return NextResponse.json(
      { error: "Не удалось отправить сообщение" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
