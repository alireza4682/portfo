import SkillsIcon from "./skillsIcon.component";
const Skills = () => {
  return (
    <div>
      <h1>My Skills</h1>
      <div className="">
        tools:{" "}
        <div>
          <SkillsIcon svgIcon={<div>svgHere</div>} name={"iconName here"} />
        </div>
        dom: <div>dom</div>
      </div>
    </div>
  );
};
export default Skills;
