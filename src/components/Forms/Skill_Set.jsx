import PropTypes from "prop-types";

function SkillSetEditor({
  skill,
  isDisabled,
  handleSkillChange,
  handleSkillSubmit,
}) {
  return (
    <form onSubmit={handleSkillSubmit}>
      <h2>Skill Set</h2>
      <label htmlFor="skill-set">Skills</label>
      <input
        type="text"
        id="skill-set"
        placeholder="Add Skills"
        autoComplete="off"
        autoFocus
        value={skill}
        onChange={handleSkillChange}
      />
      <br />
      <button type="submit" className="add-skill-btn" disabled={isDisabled}>
        Add
      </button>
    </form>
  );
}

SkillSetEditor.propTypes = {
  skill: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  handleSkillChange: PropTypes.func.isRequired,
  handleSkillSubmit: PropTypes.func.isRequired,
};

export default SkillSetEditor;
