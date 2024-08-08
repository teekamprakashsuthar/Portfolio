import React from "react";
import bada from "../../src/assets/bada-salesman.png";
import gym from "../../src/assets/The Fitness Zone-Ges1zdm2.png";
import pic from "../../src/assets/chessudaipur.png";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: bada,
      name: "BADA SALESMAN",
      description1: 'Ecommerce Project',
      description2: '1. Designed UI of this Project using Tailwind CSS.',
      description3: '2. Technology Used - HTML, Tailwind, Next.js, MongoDB.',
      description4: '3. User authentication and authorization.',
    },
    {
      id: 2,
      logo: gym,
      name: "THE FITNESS ZONE",
      description1: 'GYM Website - [Freelancing Project]',
      description2: '1. Technologies Used: React.js + Vite, JavaScript, HTML, CSS.',
      description3: '2. Using EMAILJS in Contact Form.',
      description4: '3. Developed a responsive gym website to enhance user experience and promote services.',
      description5: '4. Hosting on Vercel with our custom domain.',
    },
    {
      id: 3,
      logo: pic,
      name: "CHESS IN LAKE CITY",
      description1: 'Teekam,',
      description2: 'I have done design work on this website and created the Navbar.',
      description3: 'Technology Used - HTML, CSS & JavaScript',
    },
  ];

  return (
    <div name="Projects" className="max-w-screen-6xl mx-auto px-4 md:px-8 mt-16">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardItem.map(({ id, logo, name, description1, description2, description3, description4, description5, description6, description7, description8, description10, description11, description12 }) => (
          <div
            key={id}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={logo}
              alt={name}
              className="w-[230px] h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{name}</h2>
              <p className="text-lg font-semibold mb-1">{description1}</p>
              <p className="mb-1">{description2}</p>
              <p className="mb-1">{description3}</p>
              <p className="mb-1">{description4}</p>
              <p className="text-lg font-semibold mt-4">{description5}</p>
              <p className="mb-1">{description6}</p>
              <p className="mb-1">{description7}</p>
              <p className="mb-1">{description8}</p>
              <p className="mb-1">{description10}</p>
              <p className="text-lg font-semibold mt-4">{description11}</p>
              <p>{description12}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
