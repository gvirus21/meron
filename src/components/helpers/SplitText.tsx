

const SplitText = ({ children }: { children: string }) => {
  return (
    <>
      {children.split("").map((letter, index) => (
        <span id="letter" className="relative inline-block" key={index}>
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </>
  );
};

export default SplitText;
