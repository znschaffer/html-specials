import React, { useState } from "react";
import "./style/App.css";
import Preview from "./components/Preview/Preview";
import Form from "./components/Form/Form.jsx";

function App() {
  const [formData, setFormData] = useState({
    offers: [],
    vehicle: { make: "", year: "", model: "" },
    jellybean: "",
    cta: {
      leftButtonLink: "/contact-sales.htm",
      leftButtonText: "",
      rightButtonLink: "",
      rightButtonText: "",
      disclaimer: "",
    },
  });

  console.log({ formData });
  return (
    <div style={{ maxWidth: "2000px", margin: "auto auto" }}>
      <Preview state={formData} />
      <Form state={[formData, setFormData]} />
    </div>
  );
}

export default App;
