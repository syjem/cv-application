import PropTypes from "prop-types";

function PersonalEditor({
  name,
  title,
  email,
  number,
  address,
  handlePersonalChange,
}) {
  return (
    <form>
      <h2>Personal Details</h2>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        autoComplete="off"
        value={name}
        onChange={handlePersonalChange}
      />
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        autoComplete="off"
        value={title}
        onChange={handlePersonalChange}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        autoComplete="off"
        value={email}
        onChange={handlePersonalChange}
      />
      <label htmlFor="number">Number</label>
      <input
        id="number"
        name="number"
        autoComplete="off"
        value={number}
        onChange={handlePersonalChange}
      />
      <label htmlFor="address">Address</label>
      <input
        id="address"
        name="address"
        autoComplete="off"
        value={address}
        onChange={handlePersonalChange}
      />
    </form>
  );
}

PersonalEditor.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  address: PropTypes.string.isRequired,
  handlePersonalChange: PropTypes.func.isRequired,
};

export default PersonalEditor;
