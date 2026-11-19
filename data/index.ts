export const SITE_URL = "https://ag-one.netlify.app";
export const CONTACT_EMAIL = "aliskhangazamatov@gmail.com";

export const navItems = [
  { name: "Услуги", link: "#services" },
  { name: "Проекты", link: "#projects" },
  { name: "Подход", link: "#approach" },
  { name: "Контакты", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Делаем продукт под ключ: от идеи и прототипа до запуска и поддержки",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Работаем удалённо с клиентами в любом часовом поясе",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Наш стек",
    description: "Современный и проверенный",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Интегрируем с вашей CRM: Bitrix24, WhatsApp, Telegram",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.webp",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Сейчас запускаем QueueUp, Раметр и платформу Халим",
    description: "Что в работе",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.webp",
    spareImg: "/grid.webp",
  },
  {
    id: 6,
    title: "Хотите начать проект вместе?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// Две колонки тегов в карточке «Наш стек»
export const stackLeft = ["React", "Next.js", "TypeScript"];
export const stackRight = ["NestJS", "PostgreSQL", "Bitrix24"];

export type ServiceIcon =
  | "app"
  | "workflow"
  | "dashboard"
  | "bot"
  | "globe"
  | "mobile";

export const services: {
  icon: ServiceIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: "app",
    title: "Веб-приложения и личные кабинеты",
    description:
      "Кабинеты клиентов и партнёров, админ-панели, маркетплейсы и сервисы с оплатой и ролями.",
  },
  {
    icon: "workflow",
    title: "Автоматизация и интеграции",
    description:
      "Связываем сайт, CRM и мессенджеры: заявки сразу попадают в Bitrix24, документы подписываются онлайн.",
  },
  {
    icon: "dashboard",
    title: "Дашборды и аналитика",
    description:
      "Показатели компании на одном экране: план/факт, светофор, сравнение периодов — данные подтягиваются сами.",
  },
  {
    icon: "bot",
    title: "Боты для WhatsApp и Telegram",
    description:
      "Уведомления клиентам, приём заявок из чатов и проверки данных без ручной работы.",
  },
  {
    icon: "globe",
    title: "Сайты и лендинги",
    description:
      "Быстрые сайты с калькуляторами и формами заявок, SEO-разметкой и аналитикой.",
  },
  {
    icon: "mobile",
    title: "Мобильные приложения",
    description:
      "Приложения на React Native для iOS и Android с общим кодом и выпуском в сторы.",
  },
];

export type ProjectCategory = "products" | "automation" | "sites";

export const projectCategories: {
  id: ProjectCategory | "all";
  name: string;
}[] = [
  { id: "all", name: "Все" },
  { id: "products", name: "Продукты" },
  { id: "automation", name: "Автоматизация" },
  { id: "sites", name: "Сайты и платформы" },
];

export type ProjectStatus = "live" | "development" | "internal";

export const projectStatusNames: Record<ProjectStatus, string> = {
  live: "Работает",
  development: "В разработке",
  internal: "Внутренний проект",
};

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  features: string[];
  stack: string[];
  link?: string;
  image?: string;
  // Обложка без скриншота: градиент и иконка проекта
  accent: string;
  icon: ServiceIcon | "queue" | "window" | "sign";
};

export const projects: Project[] = [
  {
    id: "khalim",
    title: "Платформа Халим",
    category: "sites",
    status: "live",
    description:
      "Сайт исламской рассрочки, маркет партнёров и личные кабинеты на общем бэкенде.",
    features: [
      "Кабинет партнёров: анкеты и заявки на рассрочку",
      "Калькулятор и каталог партнёров",
      "Инвесторский раздел",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    link: "https://khalim-partner.ru",
    image: "/projects/khalim-partner.webp",
    accent: "from-blue-700 to-red-600",
    icon: "app",
  },
  {
    id: "dashboard",
    title: "Дашборд генерального директора",
    category: "automation",
    status: "internal",
    description:
      "Панель управления компанией: 124 показателя по финансам, рынку, процессам и сотрудникам.",
    features: [
      "План/факт, светофор и нарастающий итог",
      "Сравнение с прошлым периодом и годом",
      "Данные из двух порталов Bitrix24",
    ],
    stack: ["Next.js", "TypeScript", "Bitrix24 API", "Docker"],
    accent: "from-amber-500 to-orange-700",
    icon: "dashboard",
  },
  {
    id: "bitrix",
    title: "Интеграции для Bitrix24",
    category: "automation",
    status: "internal",
    description:
      "Электронная подпись документов из карточки CRM и бот, который превращает заявки из WhatsApp в лиды.",
    features: [
      "Подпись PDF кодом из SMS или email — до 4 сторон",
      "Документ и сертификат возвращаются в CRM",
      "Заявки из WhatsApp-группы → лиды Bitrix24",
    ],
    stack: ["NestJS", "PostgreSQL", "Prisma", "Bitrix24 REST"],
    accent: "from-cyan-500 to-blue-700",
    icon: "sign",
  },
  {
    id: "queueup",
    title: "QueueUp",
    category: "products",
    status: "development",
    description: "Живая онлайн-очередь для автомоек, барберов, СТО и клиник.",
    features: [
      "Время ожидания и места на карте",
      "Запись в очередь без звонков",
      "Сообщение в WhatsApp/Telegram за 20 минут",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Leaflet"],
    accent: "from-violet-600 to-fuchsia-600",
    icon: "queue",
  },
  {
    id: "rametr",
    title: "Раметр",
    category: "products",
    status: "development",
    description:
      "Конструктор окон, дверей и витражей с расчётом цены и личным кабинетом.",
    features: [
      "Размеры, профиль, цвет и стеклопакет",
      "Сетка до 5×4 секций с открыванием",
      "Предварительный расчёт и заказы в кабинете",
    ],
    stack: ["React", "Cloudflare Workers", "D1", "Drizzle"],
    accent: "from-sky-500 to-teal-600",
    icon: "window",
  },
  {
    id: "halaltime",
    title: "Halal Time",
    category: "sites",
    status: "development",
    description:
      "Новый сайт исламской рассрочки и кабинет партнёров-магазинов.",
    features: [
      "Калькулятор рассрочки и заявка онлайн",
      "Кабинет партнёров и админ-панель",
      "Заявки сразу попадают в Bitrix24",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Drizzle"],
    accent: "from-emerald-500 to-green-800",
    icon: "globe",
  },
  {
    id: "rise",
    title: "Rise Speaking Club",
    category: "sites",
    status: "live",
    description:
      "Платформа разговорного клуба онлайн-школы английского языка Rise.",
    features: ["Расписание и запись на встречи", "Кабинеты студентов"],
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "https://club.riseacademy.ru/",
    image: "/rise.png",
    accent: "from-indigo-600 to-blue-800",
    icon: "app",
  },
  {
    id: "farcana",
    title: "Farcana",
    category: "sites",
    status: "live",
    description: "Платформа командного соревновательного шутера 4×4.",
    features: [],
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://platform.farcana.com",
    image: "/Far.png",
    accent: "from-orange-600 to-rose-700",
    icon: "globe",
  },
  {
    id: "azars",
    title: "Azars Property",
    category: "sites",
    status: "live",
    description: "Агентство недвижимости по продаже квартир и домов в Турции.",
    features: [],
    stack: ["Next.js", "React", "Tailwind CSS"],
    image: "/p1.png",
    accent: "from-slate-600 to-slate-800",
    icon: "globe",
  },
  {
    id: "calculator",
    title: "Калькулятор рассрочки",
    category: "sites",
    status: "live",
    description: "Калькулятор рассрочки для покупки товаров и услуг.",
    features: ["Расчёт платежей по срокам и взносу"],
    stack: ["React", "Tailwind CSS", "TypeScript"],
    link: "https://calculator-invest.netlify.app/",
    image: "/calc.png",
    accent: "from-purple-600 to-indigo-800",
    icon: "dashboard",
  },
];

export const companies = [
  { id: 1, name: "Халим", img: "/clients/khalim.svg" },
  { id: 2, name: "Halal Time", img: "/clients/halaltime.webp" },
  { id: 3, name: "Farcana", img: "/farcana.svg" },
  { id: 4, name: "SpaceView", img: "/spaceviewLogo.svg" },
  { id: 5, name: "Rise", img: "/rise-logo.svg" },
  { id: 6, name: "Azars", img: "/azarsLogo.svg" },
  { id: 7, name: "Expovision", img: "/expovisionLogo.png" },
];

export const socialMedia = [
  {
    id: 1,
    name: "WhatsApp",
    img: "/whatsappIcon.svg",
    link: "https://wa.me/79380048656",
  },
  {
    id: 2,
    name: "Telegram",
    img: "/telegram.svg",
    link: "https://t.me/agazamatov",
  },
  {
    id: 3,
    name: "Instagram",
    img: "/instagramIcon.svg",
    link: "https://www.instagram.com/a.gazamatov",
  },
  {
    id: 4,
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/Aliskhan7",
  },
  {
    id: 5,
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/aliskhan-gazamatov/",
  },
];
