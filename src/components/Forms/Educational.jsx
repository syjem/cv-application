import PropTypes from "prop-types";

function EducationalEditor({
  course,
  school,
  yearStarted,
  yearGraduated,
  handleEducationChange,
}) {
  return (
    <>
      <form>
        <h2>Education</h2>
        <label htmlFor="course">Course</label>
        <input
          type="text"
          id="course"
          value={course}
          onChange={handleEducationChange}
        />
        <label htmlFor="school">University</label>
        <input
          type="text"
          id="school"
          value={school}
          onChange={handleEducationChange}
        />
        <label htmlFor="yearStarted">Year Started</label>
        <input
          type="number"
          id="yearStarted"
          value={yearStarted}
          onChange={handleEducationChange}
        />
        <label htmlFor="yearGraduated">Year Graduated</label>
        <input
          type="number"
          id="yearGraduated"
          value={yearGraduated}
          onChange={handleEducationChange}
        />
      </form>
    </>
  );
}

EducationalEditor.propTypes = {
  course: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  yearStarted: PropTypes.number.isRequired,
  yearGraduated: PropTypes.number.isRequired,
  handleEducationChange: PropTypes.func.isRequired,
};

export default EducationalEditor;
