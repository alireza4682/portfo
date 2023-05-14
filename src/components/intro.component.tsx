import me from "../assets/me.jpg";
import nextjsLogo from "../assets/nextjs.svg";
import reactLogo from "../assets/react.svg";
import reduxLogo from "../assets/redux.svg";
import tailwindLogo from "../assets/tailwindcss-icon.svg";
import typescriptLogo from "../assets/typescript-icon.svg";
import supabaseLogo from "../assets/supabase.svg";
const Intro = () => {
  const onDownloadClick = () => {
    return window.open(
      "https://drive.google.com/file/d/1c4YzROM0sbDlhzPA35C_i77JyznRayf6/view?usp=share_link"
    );
  };

  return (
    <div className="flex flex-col h-auto md:w-1/3 bg-white text-black dark:bg-black dark:text-white items-center">
      <div className=" flex w-64 h-64 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 justify-center items-center m-4">
        <img
          src={me}
          className="w-full h-full object-cover rounded-full p-1.5 contrast-125"
        />
      </div>
      <div className="">Alireza Arezoumandan</div>
      <div className="text-sm">
        Frontend engineer with 5+ years of experience
      </div>
      <button
        className="bg-white text-black p-1.5 rounded-md m-2"
        onClick={() => onDownloadClick()}
      >
        download CV.pdf
      </button>
      <div className="m-4">
        5+ years of experience in JavaScript and 3+ years of experience in
        Reactjs, TypeScript, Redux and RESTful APIs. 2+ years of experience
        working with Nextjs, GraphQl and MongoDB. 2+ years of experience working
        in cross functional environment 2+ years of test driven development. 1+
        year of experience working with Nodejs and Expressjs
      </div>
      <div className="w-4/5">
        <div className="text-center">prefered stack:</div>
        <div className="p-1 border-2 border-white rounded-lg grid grid-cols-3 m-2 ">
          <div className="rounded-full flex  w-16 h-16 bg-white m-2 self-center justify-self-center">
            <img
              src={nextjsLogo}
              alt="nextjsLogo"
              className="  w-16 h-16 p-0.5"
            />
          </div>
          <div className="rounded-full flex justify-center items-center w-16 h-16 bg-white m-2 self-center justify-self-center">
            <img src={reactLogo} alt="reactLogo" className="w-16 h-16 p-1" />
          </div>
          <div className="rounded-full flex justify-center items-center w-16 h-16 bg-white m-2 self-center justify-self-center">
            <img src={reduxLogo} alt="reduxLogo" className="w-16 h-16 p-1" />
          </div>
          <div className="rounded-full flex justify-center items-center w-16 h-16 bg-white m-2 self-center justify-self-center">
            <img
              src={tailwindLogo}
              alt="tailwindLogo"
              className="w-16 h-16 p-1"
            />
          </div>
          <div className="bg-white w-16 h-16 m-2 rounded-lg self-center justify-self-center">
            <img
              src={typescriptLogo}
              alt="typescriptLogo"
              className="w-16 h-16 rounded-lg"
            />
          </div>

          <div className="w-16 h-16 m-2 rounded-lg self-center justify-self-center">
            <img
              src={supabaseLogo}
              alt="supabaseLogo"
              className="w-16 h-16 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="font-extrabold">contact:</div>
        <div className="text-sm">alirezaarezoumandan1@gmail.com</div>
        <div className="text-sm">
          <a
            href="http://www.linkedin.com/in/seyedalireza-arezoumandan"
            target="_blank"
          >
            linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
