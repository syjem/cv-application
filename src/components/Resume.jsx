import { useState } from "react";
import {
  initialPersonalState,
  initialEducationState,
  initialExperienceState,
  editors,
} from "./Data/Initials.jsx";

import {
  PersonalInformation,
  EducationalInformation,
  ExperienceInformation,
  SkillSetInformation,
} from "./Display.jsx";

import PersonalEditor from "./Forms/Personal.jsx";
import EducationalEditor from "./Forms/Educational.jsx";
import ExperienceEditor from "./Forms/Experience.jsx";
import SkillSetEditor from "./Forms/Skill_Set.jsx";

function Resume() {
  const [personal, setPersonal] = useState(initialPersonalState);
  const [education, setEducation] = useState(initialEducationState);
  const [experience, setExperience] = useState(initialExperienceState);
  const [skill, setSkill] = useState("");
  const [skillList, setSkillList] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [activeEditor, setActiveEditor] = useState(editors[0].key);

  const handlePersonalChange = (e) => {
    const { id, value } = e.target;
    setPersonal((prevPersonal) => ({
      ...prevPersonal,
      [id]: value,
    }));
  };

  const handleEducationChange = (e) => {
    const { id, value } = e.target;
    setEducation((prevEducation) => ({
      ...prevEducation,
      [id]: value,
    }));
  };

  const handleExperienceChange = (e) => {
    const { id, value } = e.target;
    setExperience((prevExperience) => ({
      ...prevExperience,
      [id]: value,
    }));
  };

  const handleSkillChange = (e) => {
    const newSkill = e.target.value;
    setSkill(newSkill);
    setIsDisabled(newSkill.length === 0);
  };

  const handleSkillSubmit = (e) => {
    e.preventDefault();
    if (!isDisabled) {
      handleAddSkill(skill);
      setSkill("");
      setIsDisabled(true);
    }
  };

  const handleAddSkill = (newSkill) => {
    setSkillList([...skillList, newSkill]);
  };

  const handleNavClick = (editorKey) => {
    setActiveEditor(editorKey);
  };

  const personalProps = {
    name: personal.name,
    title: personal.title,
    email: personal.email,
    number: personal.number,
    address: personal.address,
  };

  const educationalProps = {
    course: education.course,
    school: education.school,
    yearStarted: education.yearStarted,
    yearGraduated: education.yearGraduated,
  };

  const experienceProps = {
    company: experience.company,
    position: experience.position,
    startDate: experience.startDate,
    endDate: experience.endDate,
    description: experience.description,
  };

  return (
    <>
      <nav className="nav">
        <ul className="nav-menu">
          {editors.map((editor) => (
            <li className="nav-list" key={editor.key}>
              <button
                className={`nav-btn ${
                  activeEditor === editor.key ? "active" : ""
                }`}
                onClick={() => handleNavClick(editor.key)}
              >
                {editor.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <section className="editors">
        {activeEditor === "personal" && (
          <PersonalEditor
            {...personalProps}
            handlePersonalChange={handlePersonalChange}
          />
        )}
        {activeEditor === "education" && (
          <EducationalEditor
            {...educationalProps}
            handleEducationChange={handleEducationChange}
          />
        )}
        {activeEditor === "experience" && (
          <ExperienceEditor
            {...experienceProps}
            handleExperienceChange={handleExperienceChange}
          />
        )}
        {activeEditor === "skill-set" && (
          <SkillSetEditor
            skill={skill}
            disabled={isDisabled}
            handleSkillChange={handleSkillChange}
            handleSkillSubmit={handleSkillSubmit}
          />
        )}
      </section>
      <article className="resume-display">
        <section className="aside">
          <PersonalInformation {...personalProps} />
        </section>
        <section className="main-content">
          <EducationalInformation {...educationalProps} />
          <ExperienceInformation {...experienceProps} />
          <SkillSetInformation skills={skillList} />
        </section>
      </article>
    </>
  );
}

export default Resume;
