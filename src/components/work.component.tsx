const modules = import.meta.glob("./library/*.svg");

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
        {content.map((c, idx) => (
          <div key={idx}>{c}</div>
        ))}
      </div>
      <div>
        {logos.map((l, idx) => {
          const logoToRender = modules[`./library/${l}.svg`];
          return <img src={modules[`./library/${l}.svg`]} alt={l} key={idx} />;
        })}
      </div>
    </div>
  );
};
export default Work;
