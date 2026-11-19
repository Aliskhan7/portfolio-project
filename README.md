# Портфолио Алисхана Газаматова

Одностраничный сайт-портфолио на Next.js 14 (App Router), Tailwind CSS и Framer Motion.
Прод: https://ag-one.netlify.app

## Запуск

```bash
yarn install
cp .env.example .env.local   # заполнить TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID
yarn dev
```

## Структура

- `app/` — страница, layout с SEO-метаданными, `robots.ts`, `sitemap.ts`
- `app/api/contact` — приём заявок с формы и отправка в Telegram (токен только на сервере)
- `components/` — секции страницы, `components/ui/` — переиспользуемые UI-компоненты
- `data/index.ts` — весь контент: проекты, опыт, клиенты, соцсети, адрес сайта

## Переменные окружения

| Переменная           | Назначение                |
| -------------------- | ------------------------- |
| `TELEGRAM_BOT_TOKEN` | токен бота для заявок     |
| `TELEGRAM_CHAT_ID`   | чат, куда приходят заявки |

На Netlify задаются в Site settings → Environment variables.

## Проверки

```bash
yarn lint          # ESLint
yarn format:check  # Prettier
yarn build         # сборка с проверкой типов и линтера
```

Pre-commit (husky + lint-staged) автоматически запускает ESLint и Prettier на изменённых файлах.
