type Twork = {
  heading: string;
  content: string[];
  logos: string[];
};

const Work = (props: Twork) => {
  const { heading, content, logos } = props;
  logos.forEach((item) => import(`./library/${item}.svg`));

  return (
    <div>
      <h1>{heading}</h1>
      <div>
        {content.map((c, idx) => (
          <div key={idx}>{c}</div>
        ))}
      </div>
      <div>
        {logos.map((l) => (
          <img src={l} alt={l} key={l} />
        ))}
      </div>
    </div>
  );
};
export default Work;
