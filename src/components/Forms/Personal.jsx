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
      <input id="name" value={name} onChange={handlePersonalChange} />
      <label htmlFor="title">Title</label>
      <input id="title" value={title} onChange={handlePersonalChange} />
      <label htmlFor="email">Email</label>
      <input id="email" value={email} onChange={handlePersonalChange} />
      <label htmlFor="number">Number</label>
      <input id="number" value={number} onChange={handlePersonalChange} />
      <label htmlFor="address">Address</label>
      <input id="address" value={address} onChange={handlePersonalChange} />
    </form>
  );
}

export default PersonalEditor;
