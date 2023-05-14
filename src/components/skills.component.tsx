import SkillsIcon from "./skillsIcon.component";

import typescriptLogo from "../assets/typescript-icon.svg";
const Skills = () => {
  return (
    <div>
      <h1>My Skills</h1>
      <div className="">
        tools:
        <div>
          <SkillsIcon
            svgIcon={
              <img
                src={typescriptLogo}
                alt="typescriptLogo"
                className="bg-white text-black p-1.5 rounded-md m-2 w-16 h-16"
              />
            }
            name={"typescript"}
          />
        </div>
        dom: <div>dom</div>
      </div>
    </div>
  );
};
export default Skills;
