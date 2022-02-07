const CTA = ({ updateCTA }) => {
  const [cta, setCTA] = updateCTA;
  const handleChange = (e) => {
    setCTA({ ...cta, [e.target.name]: e.target.value });
  };
  return (
    <div class="d-flex flex-column">
      <hr />
      {Object.keys(cta).map((option) => {
        return (
          <>
            <label htmlFor={option}>{option}</label>
            <input
              name={option}
              type="text"
              value={cta[option]}
              onChange={handleChange}
            />
          </>
        );
      })}
    </div>
  );
};

export default CTA;
