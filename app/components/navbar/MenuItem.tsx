"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}
export const MenuItem = ({ onClick, label }: MenuItemProps) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 transition  hover:bg-neutral-100 font-se"
    >
      {label}
    </div>
  );
};
