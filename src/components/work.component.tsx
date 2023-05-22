type Twork = {
  heading: string;
  content: string[];
  logos: string[];
};

const Work = (props: Twork) => {
  const { heading, content, logos } = props;
  return (
    <div>
      <h1>{heading}</h1>
      <div>
        {content.map((c) => (
          <div>{c}</div>
        ))}
      </div>
      <div>
        {logos.map((l) => (
          <img src={l} alt={l} />
        ))}
      </div>
    </div>
  );
};
export default Work;
