import type { ReactNode } from "react";
interface SquareProps {
  icon?: ReactNode;
  text?: string;
  value?: number;
  children?: React.ReactNode;
}
const Square = ({ text, icon, value, children }: SquareProps) => {
  return (
    <div className="p-5 min-h-32 w-full bg-white-100 shadow-purple rounded-2xl flex flex-col justify-between">
      <div className="flex gap-2">
        <img src={icon} alt="Ícone de valor total" />
        <p
          className="text-purple-base font-light"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          {text}
        </p>
      </div>
      <p className="text-center text-purple-base text-3xl font-bold">{value}</p>
      {children}
    </div>
  );
};

export default Square;
