interface InputProps {
  text: string;
  type?: string;
}

const Input = ({ text, type }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="name" className="text-purple-base">
        {text}
      </label>
      <input
        type={type ?? "text"}
        name="name"
        id="name"
        className="w-full border-2 p-2 border-purple-base rounded-lg"
      />
    </div>
  );
};

export default Input;
