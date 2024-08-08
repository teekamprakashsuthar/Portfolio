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
    { id: 1, logo: html, name: "HTML, HTML5" },
    { id: 2, logo: css, name: "CSS, CSS3" },
    { id: 3, logo: js, name: "JAVASCRIPT" },
    { id: 4, logo: ts, name: "TYPESCRIPT" },
    { id: 5, logo: bootstrap, name: "BOOTSTRAP" },
    { id: 6, logo: tailwind, name: "TAILWIND CSS" },
    { id: 7, logo: jquery, name: "JQUERY" },
    { id: 8, logo: react, name: "REACT JS" },
    { id: 9, logo: next, name: "NEXT JS" },
    { id: 10, logo: reactnative, name: "REACT NATIVE" },
  ];

  return (
    <div name="Skills" className="max-w-screen-6xl mx-auto px-4 md:px-8 mt-24">
      <h1 className="text-4xl font-bold text-center mb-12">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
          >
            <img
              src={logo}
              alt={name}
              className="w-24 h-24 mb-4 rounded-full border border-gray-200"
            />
            <span className="font-semibold text-lg text-center">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
