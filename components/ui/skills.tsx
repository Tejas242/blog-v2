import React from "react";
import Image from "next/image";

import {
  CppIcon,
  FigmaIcon,
  GitIcon,
  JavascriptIcon,
  MongodbIcon,
  NextjsIcon,
  NodejsIcon,
  PythonIcon,
  ReactIcon,
  TailwindcssIcon,
  TrpcIcon,
  TypescriptIcon,
} from "../Icons";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: "C++", icon: <CppIcon /> },
  { name: "Python", icon: <PythonIcon /> },
  { name: "JavaScript", icon: <JavascriptIcon /> },
  { name: "TypeScript", icon: <TypescriptIcon /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "Next.js", icon: <NextjsIcon /> },
  { name: "Tailwind CSS", icon: <TailwindcssIcon /> },
  { name: "Node.js", icon: <NodejsIcon /> },
  //   { name: "Express", icon: <ExpressIcon /> },
  // { name: "Prisma", icon: }
  { name: "MongoDB", icon: <MongodbIcon /> },
  { name: "Git", icon: <GitIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "trpc", icon: <TrpcIcon /> },
];

const Skills: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {skills.map((skill) => (
        <div key={skill.name} className="flex h-32 w-24 flex-col items-center p-4 text-center">
          {skill.icon}
        </div>
      ))}
    </div>
  );
};

export default Skills;
