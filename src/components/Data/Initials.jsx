import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const initialPersonalState = {
  name: "Jemuel Repoylo",
  email: "syjem143@gmail.com",
  number: "+639488450249",
  address: "Tambulig Zamboanga Del Sur, Philippines",
  title: "Web Developer",
};

export const initialEducationState = {
  course: "Bachelor of Science in Computer Science",
  school: "Western Mindanao State University - ESU Molave",
  yearStarted: 2018,
  yearGraduated: 2022,
};

export const initialExperienceState = {
  company: "Meta Inc.",
  position: "Senior Software Engineer",
  startDate: "03/2023",
  endDate: "Present",
  description:
    "Develop and maintain high-quality software solutions that align with Meta's vision and goals.",
};

export const initialSkillSet = [
  { id: 0, skill: "HTML" },
  { id: 1, skill: "CSS" },
  { id: 2, skill: "JavaScript" },
  { id: 3, skill: "React" },
  { id: 4, skill: "Bootstrap" },
  { id: 5, skill: "SCSS" },
  { id: 6, skill: "Python" },
  { id: 7, skill: "Flask" },
  { id: 8, skill: "SQL/SQLite" },
];

const iconChevron = <ExpandMoreIcon />;

export const editors = [
  {
    key: "personal",
    label: "Personal Details",
    icon: null,
  },
  {
    key: "experience",
    label: "Experience",
    icon: iconChevron,
  },
  {
    key: "education",
    label: "Education",
    icon: iconChevron,
  },
  {
    key: "skill-set",
    label: "Skill Set",
    icon: iconChevron,
  },
];
