import { useState } from "react";
import {
  initialPersonalState,
  initialEducationState,
  initialExperienceState,
  initialSkillSet,
  editors,
} from "./Data/Initials.jsx";

import {
  PersonalInformation,
  EducationalInformation,
  ExperienceInformation,
  SkillSetInformation,
  SkillsEditList,
} from "./Display.jsx";

import PersonalEditor from "./Forms/Personal.jsx";
import EducationalEditor from "./Forms/Educational.jsx";
import ExperienceEditor from "./Forms/Experience.jsx";
import SkillSetEditor from "./Forms/Skill_Set.jsx";

function Resume() {
  const [personal, setPersonal] = useState(initialPersonalState);
  const [education, setEducation] = useState(initialEducationState);
  const [experience, setExperience] = useState(initialExperienceState);

  const [activeEditor, setActiveEditor] = useState(editors[0].key);

  // Skill Set states
  const [skill, setSkill] = useState("");
  const [skillList, setSkillList] = useState(initialSkillSet);
  const [isDisabled, setIsDisabled] = useState(true);
  const [editingSkill, setEditingSkill] = useState(null);

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
    } else {
      setSkillList((prevSkill) =>
        prevSkill.map((skill) =>
          skill.id === editingSkill ? { ...skillList, skill: skill } : skill
        )
      );
      setIsDisabled(false);
    }
  };

  const handleAddSkill = (newSkill) => {
    setSkillList([...skillList, { id: skillList.length, skill: newSkill }]);
  };

  const handleSkillEditClick = (clickedSkillId) => {
    const clickedSkill = skillList.find((skill) => skill.id === clickedSkillId);
    setEditingSkill(clickedSkillId);
    if (clickedSkill) {
      setSkill(clickedSkill.skill);
      setIsDisabled(false);
    }
  };

  const handleSkillDelete = (e, deletedSkillId) => {
    e.stopPropagation();
    const newSkill = skillList.filter((skill) => skill.id !== deletedSkillId);
    if (newSkill) {
      setSkillList(newSkill);
    }
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
                {editor.label} <i className="rotate-icon ">{editor.icon}</i>
              </button>
            </li>
          ))}
        </ul>
        {activeEditor === "skill-set" && (
          <SkillsEditList
            skills={skillList}
            handleSkillEditClick={handleSkillEditClick}
            handleDelete={handleSkillDelete}
          />
        )}
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
          <ExperienceInformation {...experienceProps} />
          <EducationalInformation {...educationalProps} />
          <SkillSetInformation skills={skillList} />
        </section>
      </article>
    </>
  );
}

export default Resume;
