import PropTypes from "prop-types";
import profileImage from "../assets/profile.jpg";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import FactCheckIcon from "@mui/icons-material/FactCheck";

import RestoreFromTrashSharpIcon from "@mui/icons-material/RestoreFromTrashSharp";

export function PersonalInformation({ name, title, email, number, address }) {
  return (
    <section className="personal-info">
      <div className="profile">
        <img src={profileImage} className="profile-image" alt="Jemuel" />
        <h2>{name}</h2>
        <h3>{title}</h3>
      </div>
      <div className="contact">
        <h4 className="contact-h4">
          <PersonIcon className="custom-icon" />
          Contact
        </h4>
        <h5 className="contact-h5">
          <PhoneIcon className="custom-icon" /> Number
        </h5>
        <p>{number}</p>
        <h5 className="contact-h5">
          <ContactMailIcon className="custom-icon" fontSize="small" />
          Email
        </h5>
        <p>{email}</p>
        <h5 className="contact-h5">
          <HomeIcon className="custom-icon" />
          Address
        </h5>
        <p className="address">{address}</p>
      </div>
    </section>
  );
}

PersonalInformation.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  address: PropTypes.string.isRequired,
};

export function EducationalInformation({
  course,
  school,
  yearStarted,
  yearGraduated,
}) {
  return (
    <section className="educational-info">
      <h3 className="section-header">
        <SchoolIcon className="custom-icon" />
        Education
      </h3>
      <div className="education">
        <p>{course}</p>
        <span>
          {yearStarted} - {yearGraduated}
        </span>
      </div>
      <p>{school}</p>
    </section>
  );
}

EducationalInformation.propTypes = {
  course: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  yearStarted: PropTypes.number.isRequired,
  yearGraduated: PropTypes.number.isRequired,
};

export function ExperienceInformation({
  company,
  startDate,
  endDate,
  position,
  description,
}) {
  return (
    <section className="experience-info">
      <h3 className="section-header">
        <WorkIcon className="custom-icon" />
        Professional Experience
      </h3>
      <div className="experiences">
        <h4>{company}</h4>
        <p>
          {startDate} - {endDate}
        </p>
      </div>
      <h5 className="role">
        <em>{position}</em>
      </h5>
      <p className="description">{description}</p>
    </section>
  );
}

ExperienceInformation.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export function SkillSetInformation({ skills }) {
  return (
    <section className="skill-set-info">
      <h3 className="section-header">
        <FactCheckIcon className="custom-icon" />
        Core Competencies
      </h3>
      <ul className="skill-menu">
        {skills.map((skill) => (
          <li key={skill.id} className="skill-item">
            {skill.skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

SkillSetInformation.propTypes = {
  skills: PropTypes.array.isRequired,
};

export function SkillsEditList({ skills, handleSkillEditClick, handleDelete }) {
  return (
    <ul className="skill-edit-menu">
      {skills.map((skill) => (
        <li
          key={skill.id}
          className="skill-edit-item"
          onClick={() => handleSkillEditClick(skill.id)}
        >
          {skill.skill}

          <i>
            <RestoreFromTrashSharpIcon
              onClick={(e) => handleDelete(e, skill.id)}
            />
          </i>
        </li>
      ))}
    </ul>
  );
}

SkillsEditList.propTypes = {
  skills: PropTypes.array.isRequired,
  handleSkillEditClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
