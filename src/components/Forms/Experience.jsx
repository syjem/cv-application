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
        value={company}
        onChange={handleExperienceChange}
      />
      <label htmlFor="position">Position</label>
      <input
        type="text"
        id="position"
        value={position}
        onChange={handleExperienceChange}
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        type="text"
        id="startDate"
        value={startDate}
        onChange={handleExperienceChange}
      />
      <label htmlFor="endDate">End Date</label>
      <input
        type="text"
        id="endDate"
        value={endDate}
        onChange={handleExperienceChange}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        rows="5"
        value={description}
        onChange={handleExperienceChange}
      ></textarea>
    </form>
  );
}

export default ExperienceEditor;
