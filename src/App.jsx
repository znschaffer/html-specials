import React, { useState } from "react";
import "./style/App.css";
import Preview from "./components/Preview/Preview";
import Form from "./components/Form/Form.jsx";
import ParseSpreadsheet from "./components/parsing/parseSpreadsheet";

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
      <ParseSpreadsheet state={[formData, setFormData]} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Form state={[formData, setFormData]} />
        <div style={{ maxWidth: "2000px" }}>
          <Preview state={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;
