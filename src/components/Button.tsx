interface ButtonProps {
  text: string;
  color?: string;
}
const Button = ({ text, color }: ButtonProps) => {
  return (
    <button
      className={`px-5 mr-2 py-1 rounded-xl border-2 cursor-pointer hover:opacity-60 ${color}`}
    >
      {text}
    </button>
  );
};

export default Button;
