const Jellybean = ({ updateJellybean }) => {
  const [jellybean, setJellybean] = updateJellybean;

  const handleChange = (e) => {
    setJellybean({ ...jellybean, [e.target.name]: e.target.value });
  };
  return (
    <div class="d-flex flex-column">
      {Object.keys(jellybean).map((option) => (
        <>
          <label htmlFor={option}>{option}</label>
          <input
            name={option}
            type="text"
            value={jellybean[option]}
            onChange={handleChange}
          />
        </>
      ))}
    </div>
  );
};

export default Jellybean;
