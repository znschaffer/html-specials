import data from "../../data/makesAndModels.json";
const VehicleInputForm = ({ updateVehicle, isManual }) => {
  const [vehicle, setVehicle] = updateVehicle;

  const { make, model, year } = vehicle;

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  return isManual ? (
    <div className="d-flex flex-column">
      <label>Make</label>
      <input
        name="make"
        value={make}
        onChange={handleChange}
        placeholder="manual make input"
      />
      <label>Model</label>
      <input
        name="model"
        value={model}
        onChange={handleChange}
        placeholder="manual model input"
      />
      <label>Year</label>
      <input
        name="year"
        value={year}
        onChange={handleChange}
        placeholder="manual year input"
      />
    </div>
  ) : (
    <div className="d-flex flex-column">
      <label>Make</label>
      <select
        name="make"
        value={make}
        onChange={handleChange}
        placeholder="Choose Make"
      >
        <option>Choose Make</option>
        {Object.keys(data).map((make) => (
          <option key={make} value={make}>
            {make}
          </option>
        ))}
      </select>
      <label>Year</label>
      <select
        name="year"
        value={year}
        onChange={handleChange}
        placeholder="Choose Year"
      >
        <option>Choose Year</option>
        {Object.keys(data[make] || {}).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <label>Model</label>
      <select
        name="model"
        value={model}
        onChange={handleChange}
        placeholder="Choose Model"
      >
        <option>Choose Model</option>
        {year ? (
          data[make][year].map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))
        ) : (
          <></>
        )}
      </select>
    </div>
  );
};

export default VehicleInputForm;
