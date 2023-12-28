import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "Jane Smith",
    summary:
      "Dedicated Full-Stack Developer with a passion for creating responsive and user-friendly applications",
    email: "jane.smith@domain.com",
    phone: "987-654-3210",
    location: "San Francisco, CA",
    url: "linkedin.com/in/jane-smith",
    github: "github.com/jane-smith",
    linkedin: "linkedin.com/in/jane-smith",
  },
  educations: [
    {
      school: "ABC University",
      degree: "Master of Science in Software Engineering",
      date: "Sep 2018 - May 2020",
      gpa: "3.9",
      descriptions: [
        "Recipient of the ABC Academic Excellence Scholarship for 2019-2020",
        "Active member of the Computer Science club, leading workshops on web development",
        "Coursework: Advanced Data Structures (A), Modern Web Applications (A), Software Project Management (A)",
      ],
    },
  ],
  workExperiences: [
    {
      company: "Innovative Tech Ltd",
      jobTitle: "Lead Frontend Developer",
      date: "June 2020 - Present",
      descriptions: [
        "Managed a team of 4 developers to design and implement a dynamic SPA using React and Redux",
        "Improved application performance by optimizing components and implementing code splitting, reducing load time by 30%",
        "Collaborated with UX designers to refine application design and user experience",
      ],
    },
    {
      company: "Tech Solutions Inc.",
      jobTitle: "Software Developer",
      date: "Summer 2019",
      descriptions: [
        "Developed a custom CRM tool with a Java backend and Angular frontend that increased department efficiency by 25%",
        "Assisted in integrating third-party APIs for enhanced functionality, including payment processing and social media integration",
      ],
    },
  ],
  
  projects: [
    {
      project: "Dynamic Portfolio Builder",
      projectlink: "https://project.com",
      descriptions: [
        "Spearheaded the development of an interactive portfolio builder for creatives to showcase their work, utilizing MERN stack",
        "Implemented user authentication and portfolio customization, receiving positive feedback from 500+ beta testers",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "JavaScript", rating: 5 },
      { skill: "React.js", rating: 4 },
      { skill: "Node.js", rating: 4 },
      { skill: "MongoDB", rating: 3 },
      { skill: "Angular", rating: 3 },
      { skill: "Ruby on Rails", rating: 3 },
    ],
    descriptions: [
      "Expert in frontend technologies including JavaScript, React, and Angular",
      "Proficient in backend development with Node.js, Ruby on Rails, and related frameworks",
      "Strong understanding of database management with MongoDB and SQL",
    ],
  },
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
  custom: {
    descriptions: [],
  },
};
