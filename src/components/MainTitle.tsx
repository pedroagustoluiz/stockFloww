interface MainTitle {
  text?: string;
  strong?: string;
}

const MainTitle = ({ text, strong }: MainTitle) => {
  return (
    <h1
      style={{ fontFamily: "Roboto, sans-serif" }}
      className="font-extralight text-3xl"
    >
      {text}
      <span className="font-black">{strong}</span>
    </h1>
  );
};

export default MainTitle;
