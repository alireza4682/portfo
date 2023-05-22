import Work from "./work.component";

const freelancer = [
  "used React's best practices, code splitting and render optimization to make our customer's websites load 30% faster and 15% smoother.",
  "with writing unit tests, using storybook.js and migrating from redux to redux toolkit, median time to design and develop components was improved by 20%.",
];

const frontendDeveloper = [
  "worked with 20+ customers to improve their website's responsiveness and load time.",
];

const WorkSection = () => {
  return (
    <div>
      <div>
        <h1>Work experience</h1>
        <div> 5+ years of experience</div>
      </div>
      <Work heading={"hi"} content={freelancer} logos={["1", "2"]} />
      <Work heading={"hi"} content={frontendDeveloper} logos={["3", "4"]} />
    </div>
  );
};
export default WorkSection;
