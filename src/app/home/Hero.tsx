// Hero.jsx
import React from "react";
import Link from "next/link";
import { AutoTypingResume } from "home/AutoTypingResume";
// import { Steps } from "./Steps";

const STEPS = [
  { title: "Create a resume from scratch", text: "or a resume pdf" },
  { title: "Preview the design", text: "and make relevant edits" },
  { title: "Download new resume", text: "and apply to your dream jobs" },
];

// The Steps component
const Steps = () => {
  return (
    <div className="rounded-2xl bg-gray-100 bg-dot px-8 pb-12 pt-10">
      <h2 className="text-center text-3xl font-bold mb-8">Steps towards you dream job</h2>
      <dl className="space-y-10">
        {STEPS.map(({ title, text }, idx) => (
          <div className="flex flex-row justify-center items-center" key={idx}>
            {/* Number circle */}
            <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full p-1 opacity-80 mr-4">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                <span className="text-primary font-bold text-xl">{idx + 1}</span>
              </div>
            </div>
            {/* Text content */}
            <div className="text-left">
              <dt className="text-lg font-bold">{title}</dt>
              <dd className="mt-1">{text}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
};


// Main Hero component with Title, AutoTypingResume, and Steps
export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16">
      {/* Title Section */}
      <div className="text-center mb-8 w-full px-4">
        <h1 className="text-primary text-4xl font-bold lg:text-5xl">
        Create a professional resume with ease
        </h1>
        <p className="text-lg lg:text-xl">
        Start building your resume with our free and user-friendly tool
        </p>
        <Link href="/resume-import" className="btn-primary mt-4">
          Create Resume <span aria-hidden="true">→</span>
        </Link>
        
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between px-4">
        <div className="flex-1 mb-8 lg:mb-0 lg:mr-4">
          <AutoTypingResume />
        </div>
        <div className="flex-1">
          <Steps />
        </div>
      </div>
    </section>
  );
};