"use client";
import { useEffect, useState, useRef } from "react";
import { ResumePDF } from "components/Resume/ResumePDF";
import { initialResumeState } from "lib/redux/resumeSlice";
import { initialSettings } from "lib/redux/settingsSlice";
import { ResumeIframeCSR } from "components/Resume/ResumeIFrame";
import { START_HOME_RESUME, END_HOME_RESUME } from "home/constants";
import { makeObjectCharIterator } from "lib/make-object-char-iterator";
import { useTailwindBreakpoints } from "lib/hooks/useTailwindBreakpoints";
import { deepClone } from "lib/deep-clone";

const INTERVAL_MS = 50; // 20 Intervals Per Second
const CHARS_PER_INTERVAL = 10;


const RESET_INTERVAL_MS = 60 * 1000; // 60s

export const AutoTypingResume = () => {
  const [resume, setResume] = useState(deepClone(initialResumeState));
  const resumeCharIterator = useRef(
    makeObjectCharIterator(START_HOME_RESUME, END_HOME_RESUME)
  );
  const hasSetEndResume = useRef(false);
  const { isLg } = useTailwindBreakpoints();

  useEffect(() => {
    const intervalId = setInterval(() => {
      let next = resumeCharIterator.current.next();
      for (let i = 0; i < CHARS_PER_INTERVAL - 1; i++) {
        next = resumeCharIterator.current.next();
      }
      if (!next.done) {
        setResume(next.value);
      } else {
        if (!hasSetEndResume.current) {
          setResume(END_HOME_RESUME);
          hasSetEndResume.current = true;
        }
      }
    }, INTERVAL_MS);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      resumeCharIterator.current = makeObjectCharIterator(
        START_HOME_RESUME,
        END_HOME_RESUME
      );
      hasSetEndResume.current = false;
    }, RESET_INTERVAL_MS);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ResumeIframeCSR documentSize="Letter" scale={isLg ? 0.7 : 0.5}>
        <ResumePDF
          resume={resume}
          settings={{
            ...initialSettings,
            fontSize: "12",
            formToHeading: {
              educations: resume.educations[0].school ? "EDUCATION" : "",
              workExperiences: resume.workExperiences[0].company
                ? "WORK EXPERIENCE"
                : "",
              projects: resume.projects[0].project ? "PROJECT" : "",
              skills: resume.skills.featuredSkills[0].skill ? "SKILLS" : "",
              custom: "CUSTOM SECTION",
            },
          }}
        />
      </ResumeIframeCSR>
    </>
  );
};
