import { icons } from "lucide-react";

export const Icon = ({
  name,
  color = "currentColor", // 默认颜色
  size = 24,              // 默认大小
  className = "",         // 默认类名为空
}: {
  name: keyof typeof icons; // 图标名称类型限制
  color?: string;           // 可选颜色
  size?: number;            // 可选大小
  className?: string;       // 可选类名
}) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.error(`Lucide Icon "${name}" does not exist.`);
    return null;
  }

  return <LucideIcon color={color} size={size} className={className} />;
};
