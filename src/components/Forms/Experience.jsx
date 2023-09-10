import PropTypes from "prop-types";

function ExperienceEditor({
  company,
  position,
  startDate,
  endDate,
  description,
  handleExperienceChange,
}) {
  return (
    <form>
      <h2>Experience</h2>
      <label htmlFor="company">Company</label>
      <input
        type="text"
        id="company"
        name="company"
        autoComplete="off"
        value={company}
        onChange={handleExperienceChange}
      />
      <label htmlFor="position">Position</label>
      <input
        type="text"
        id="position"
        name="position"
        autoComplete="off"
        value={position}
        onChange={handleExperienceChange}
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        type="text"
        id="startDate"
        name="startDate"
        autoComplete="off"
        value={startDate}
        onChange={handleExperienceChange}
      />
      <label htmlFor="endDate">End Date</label>
      <input
        type="text"
        id="endDate"
        name="endDate"
        autoComplete="off"
        value={endDate}
        onChange={handleExperienceChange}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        autoComplete="off"
        rows="5"
        value={description}
        onChange={handleExperienceChange}
      ></textarea>
    </form>
  );
}

ExperienceEditor.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleExperienceChange: PropTypes.func.isRequired,
};

export default ExperienceEditor;
