const SkillsIcon = ({ svgIcon, name }: any) => {
  return (
    <div className="bg-blue-900 p-4 m-1 flex ">
      {svgIcon}
      <div className="px-1">{name}</div>
    </div>
  );
};

export default SkillsIcon;
