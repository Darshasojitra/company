import React from "react";

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="mb-8 relative overflow-hidden rounded-xl shadow-xl">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm">{role}</p>
      </div>
    </div>
  );
};

const AboutHero = () => {
  const teamMembers = [
    {
      name: "Maulik Gondaliya",
      role: "CEO",
      image: `https://api.dicebear.com/5.x/initials/svg?seed=mg`,
    },
    {
      name: "Heta Sapariya",
      role: "Marketing Manager",
      image: `https://api.dicebear.com/5.x/initials/svg?seed=hs`,
    },
    {
      name: "Kunj Radadiya",
      role: "CFO",
      image: `https://api.dicebear.com/5.x/initials/svg?seed=kr`,
    },
    {
      name: "Harsh Rupavatiya",
      role: "CTO",
      image: `https://api.dicebear.com/5.x/initials/svg?seed=hr`,
    },
  ];

  return (
    <section className="mt-32 mb-32">
      <div className="w-3/4 mx-auto flex justify-between items-center">
        {/* Intro Section */}
        <div className=" w-2/6 mb-8 max-w-md">
          <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
            Hello! We Are MindStormSoft. Designs
            <span className="text-pink-500">.</span>
          </h1>
          <p className="mt-2 text-gray-600 text-sm">
            Full-service agency specializing in creative, digital, and media
            services.
          </p>
        </div>

        {/* Team Grid */}
        <div className="w-3/5 columns-2 gap-8">
          <div className="h-14 w-full"></div>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
