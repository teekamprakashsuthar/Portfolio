import React from "react";
import bada from "../../src/assets/bada-salesman.png";
import gym from "../../src/assets/The Fitness Zone-Ges1zdm2.png";
import pic from "../../src/assets/chessudaipur.png";
import { GoRows } from "react-icons/go";

function Projects() {
  const cardItem = [
    {
      
      id: 1,
      logo: bada,
      name: "BADA SALESMAN",
      description1: 'Ecommerce Project ',
      description2:'1. Designed UI of this Project using Tailwind CSS.',
      description3: '2. Technology Used- Html, Taliwind, Nextjs, MongoDB.',
      description4:'3. User authentication and authorization.',
    },

    {
        
      id: 1,
      logo: gym,
      name: "THE FITNESS ZONE",
      description5: 'GYM Website - [freelancing project]',
      description6: '1. Technologies Used: React.JS+Vite, JavaScript, HTML, CSS.',
      description7: '2. Using EMAILJS in Contact Form.',
      description8: '3. Developed a responsive gym website to enhance user experience and promote services.',
      description10: '4. Hosting on vercal with our coustom domain.',



    },

    {
      id: 1,
      logo: pic,
      name: "CHESS IN LAKE CITY",
      description11: 'Teekam,',
      description11: 'I have done design work in this website and created Navbar.',
      description12: 'Technology Used - Html, css & Javascript',
      

    },
  ];

  return (
    <div name="Projects" className="max-w-screen-6xl conatiner mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <div className="space-y-7">
          {cardItem.map(({ id, logo, name,description1,description2,description3,description4,description5,description6,description7,description8,description10,description11,description12 }) => (
            <div className="md:w-[1500px] px md:items-center md:h-[200px] border-[2px] md:flex rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300" key={id}>
                <img src={logo} className="md:w-44 w-28 p-1 rounded-full border-{2px}" alt="" />
                <div className="md:pl-8">
                    <div className="font-bold text-3xl mb-2">{name}</div>
                    <p className="font-bold text-2xl ">{description1}</p>
                    <p className="">{description2}</p>
                    <p className="">{description3}</p>
                    <p className="">{description4}</p>


                    <p className="font-bold text-2xl">{description5}</p>
                    <p className="">{description6}</p>
                    <p className="">{description7}</p>
                    <p className="">{description8}</p>
                    <p className="">{description10}</p>
                   
                    <p className="">{description11}</p>
                    <p className="">{description12}</p>
                    

                </div>
                
                
                {/* <div className="pl-44">
                <ul className="bg-blue-500 hover:bg-blue-700  text-white font-bold px-4 py-2 rounded"><li>GO TO SITE</li></ul>
            </div> */}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
