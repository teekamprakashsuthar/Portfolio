import React from "react";
import html from "../../src/assets/html.png";
import css from "../../src/assets/css.png";
import js from "../../src/assets/js.png";
import ts from "../../src/assets/ts.png";
import bootstrap from "../../src/assets/bootstrap.png";
import tailwind from "../../src/assets/tailwind.png";
import jquery from "../../src/assets/jquery.png";
import react from "../../src/assets/react.png";
import next from "../../src/assets/next.png";
import reactnative from "../../src/assets/reactnative.png";

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML, HTML5",
    },
    {
      id: 1,
      logo: css,
      name: "CSS, CSS3",
    },
    {
      id: 1,
      logo: js,
      name: "JAVASCRIPT",
    },
    {
      id: 1,
      logo: ts,
      name: "TYPESCRIPT",
    },
    {
      id: 1,
      logo: bootstrap,
      name: "BOOTSTRAP",
    },
    {
      id: 1,
      logo: tailwind,
      name: "TAILWIND CSS",
    },
    {
      id: 1,
      logo: jquery,
      name: "JQUERY",
    },
    {
      id: 1,
      logo: react,
      name: "REACT JS",
    },
    {
      id: 1,
      logo: next,
      name: "NEXT JS",
    },
    {
      id: 1,
      logo: reactnative,
      name: "REACT NATIVE",
    },
  ];
  return (
    <div name="Skills" className="max-w-screen-6xl conatiner mx-auto px-4 md:px-20 mt-24">
      <div>
        <h1 className="text-3xl font-bold mv-5">Skills</h1>
        <div className="grid grid-col-2 md:grid-cols-3 gap-9 my-8">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center  border-[2px] rounded-full  shadow-md  p-1 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[150px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
              <div className="font-bold text-3xl mb-2">{name}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
