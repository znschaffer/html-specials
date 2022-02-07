import { useState } from "react";
import VehicleInputForm from "./VehicleInputForm";

const VehicleType = ({ updateVehicle }) => {
  const [isManual, setIsManual] = useState(false);

  const handleChange = (e) => {
    e.target.checked === true ? setIsManual(true) : setIsManual(false);
  };

  return (
    <div>
      <label htmlFor="manual">Manual? </label>
      <input type="checkbox" name="manual" onChange={handleChange} />
      <VehicleInputForm isManual={isManual} updateVehicle={updateVehicle} />
    </div>
  );
};

export default VehicleType;
