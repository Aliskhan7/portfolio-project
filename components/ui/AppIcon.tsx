import {
  LuAppWindow,
  LuBot,
  LuDoorOpen,
  LuFileCheck,
  LuGlobe,
  LuLayoutDashboard,
  LuSmartphone,
  LuTimer,
  LuWorkflow,
} from "react-icons/lu";
import type { Project, ServiceIcon } from "@/data";

const icons: Record<ServiceIcon | Project["icon"], typeof LuAppWindow> = {
  app: LuAppWindow,
  workflow: LuWorkflow,
  dashboard: LuLayoutDashboard,
  bot: LuBot,
  globe: LuGlobe,
  mobile: LuSmartphone,
  queue: LuTimer,
  window: LuDoorOpen,
  sign: LuFileCheck,
};

// Иконки услуг и обложек проектов из одного набора (Lucide)
const AppIcon = ({
  name,
  className,
}: {
  name: keyof typeof icons;
  className?: string;
}) => {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
};

export default AppIcon;
