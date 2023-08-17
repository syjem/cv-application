import profileImage from "../assets/profile.jpg";

export function PersonalInformation({ name, title, email, number, address }) {
  return (
    <section className="personal-info">
      <div className="profile">
        <img src={profileImage} className="profile-image" alt="Jemuel" />
        <h2>{name}</h2>
        <h3>{title}</h3>
      </div>
      <div className="contact">
        <h4 className="yellow">Contact</h4>
        <h5 className="pink">Number</h5>
        <p>{number}</p>
        <h5 className="pink">Email</h5>
        <p>{email}</p>
        <h5 className="pink">Address</h5>
        <p>{address}</p>
      </div>
    </section>
  );
}

export function EducationalInformation({
  course,
  school,
  yearStarted,
  yearGraduated,
}) {
  return (
    <div className="educational-info">
      <h4>{course}</h4>
      <p>{school}</p>
      <span>
        {yearStarted} - {yearGraduated}
      </span>
    </div>
  );
}

export function ExperienceInformation({
  company,
  startDate,
  endDate,
  position,
  description,
}) {
  return (
    <section className="experience-info">
      <h3>Professional Experience</h3>
      <div className="experiences">
        <h4>{company}</h4>
        <p>
          {startDate} - {endDate}
        </p>
      </div>
      <h5>{position}</h5>
      <p>{description}</p>
    </section>
  );
}

export function SkillSetInformation({ skills }) {
  return (
    <section className="skill-set-info">
      <h3>Skill Set</h3>
      <div className="skill-set">
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
