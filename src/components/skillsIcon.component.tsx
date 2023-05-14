import { ReactNode } from "react";

export type TsvgIcon = {
  svgIcon: ReactNode;
  name: string;
};

const SkillsIcon = ({ svgIcon, name }: TsvgIcon) => {
  return (
    <div
      className="bg-blue-900 p-1 px-2 m-1 
                  flex flex-row justify-between w-48 items-center rounded-2xl"
    >
      {svgIcon}
      <div className="px-1">{name}</div>
    </div>
  );
};

export default SkillsIcon;
