import { React, useState } from "react";
import Preview from "./Preview";
import { useFormik } from "formik";
import makes from "./makesAndModels.json";

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const generateHTML = (formData) => {
    console.log(formData);
    let row1 = "";
    let row2 = "";

    let offer1SingleContent = `
      <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-12 vehicleOffer">
          ${formData.offer1Top}
          <br />
          <span>${formData.offer1Middle}</span>${formData.offer1MiddleSuffix}
          <br />
          ${formData.offer1Bottom}
        </div>
      </div>`;

    if (formData.offer2) {
      row1 = `
        <div class="row">
          <div class="col-xs-6 col-md-6 col-lg-6 vehicleOffer">
            ${formData.offer1Top}
            <br />
            <span>${formData.offer1Middle}</span>${formData.offer1MiddleSuffix}
            <br />
            ${formData.offer1Bottom}
          </div>
          <div class="col-xs-6 col-md-6 col-lg-6 vehicleOffer">
            ${formData.offer2Top}
            <br />
            <span>${formData.offer2Middle}</span>${formData.offer2MiddleSuffix}
            <br />
            ${formData.offer2Bottom}
          </div>
        </div>`;
    } else {
      row1 = offer1SingleContent;
    }

    let offer3SingleContent = `
      <div class="row">
        <div class="col-xs-12 col-md-12 col-lg-12 vehicleOffer">
          ${formData.offer3Top}
          <br />
          <span>${formData.offer3Middle}</span>${formData.offer3MiddleSuffix}
          <br />
          ${formData.offer3Bottom}
        </div>
      </div>
    `;

    if (formData.offer4) {
      row2 = `
        <div class="row">
          <div class="col-xs-6 col-md-6 col-lg-6 vehicleOffer">
            ${formData.offer3Top}
            <br />
            <span>${formData.offer3Middle}</span>${formData.offer3MiddleSuffix}
            <br />
            ${formData.offer3Bottom}
          </div>
          <div class="col-xs-6 col-md-6 col-lg-6 vehicleOffer">
            ${formData.offer4Top}
            <br />
            <span>${formData.offer4Middle}</span>${formData.offer4MiddleSuffix}
            <br />
            ${formData.offer4Bottom}
          </div>
        </div>`;
    } else if (formData.offer3) {
      row2 = offer3SingleContent;
    } else {
      row2 = "";
    }
    return `<div class="specialContainer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xs-12 col-md-5 col-lg-5 offerBox">
                                <center>
                                ${formData.manualEntryToggle ? ` 
                                  <h2>
                                  New ${formData.manualYear} ${formData.manualMake}
                                  <br />
                                  ${formData.manualModel} ${formData.trim}
                                  <br />
                                </h2>
                                </> `: `
                                  <h2>
                                  New ${formData.year} ${formData.make}
                                  <br />
                                  ${formData.model} ${formData.trim}
                                  <br />
                                </h2>`
                              }
                                    ${row1}
                                    ${row2}
                                    <div class="row">
                                        <a class="btn btn-primary" href="${formData.leftButtonLink}">
                                            ${formData.leftButtonTitle}
                                        </a>
                                        <a class="btn btn-primary dialog" data-width="400" href="${formData.rightButtonLink}">
                                            ${formData.rightButtonTitle}
                                        </a>
                                        <div class="truncatedDisclaimer">
                                            <i class="disclaimerHover">
                                                View Disclaimer
                                            </i>
                                            <div class="disclaimer-content flip-in-hor-top">
                                                ${formData.disclaimer}
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            </div>
                            <div class="col-xs-12 col-md-7 col-lg-7 vehicleJellybean">
                                <center>
                                    <img src=${formData.jellybeanImage} />
                                    <p></p>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>`;
  };

  const [beautifiedCode, setBeautifiedCode] = useState("");
  const apikey = "eIImf1T7l29aX2xMaVt8thGs3y87y8dIiC7wHSLR8IDcp"

  function beautifyCode(generatedHTML) {
    console.log(generatedHTML)
    const url = new URL('https://api.dotmaui.com/client/1.0/htmlbeautify/')
    const params = [['apikey', apikey], ['html', generatedHTML]]
    url.search = new URLSearchParams(params).toString();
    const formData = new URLSearchParams();
    formData.append('apikey', apikey);
    formData.append('html', generatedHTML);
    fetch(url, {method: "POST"}).then((html) => console.log("run", html))
  }

  const [generatedCode, setGeneratedCode] = useState("");
  const formik = useFormik({
    initialValues: {
      manualMakeYearModel: "",
      manualEntryToggle: false,
      manualMake: "",
      manualModel: "",
      manualYear: "",
      make: "",
      year: "",
      model: "",
      trim: "",
      offer1Top: "36 mo Lease",
      offer1Middle: "$499",
      offer1MiddleSuffix: "/mo",
      offer1Bottom: "$3499 total due at signing.",
      offer2: false,
      offer2Top: "",
      offer2Middle: "",
      offer2MiddleSuffix: "",
      offer2Bottom: "",
      offer3: false,
      offer3Top: "",
      offer3Middle: "",
      offer3Bottom: "",
      offer4: false,
      offer4Top: "",
      offer4Middle: "",
      offer4Bottom: "",
      leftButtonTitle: "View Inventory",
      leftButtonLink: "",
      rightButtonTitle: "Claim Offer",
      rightButtonLink: "",
      disclaimer: "",
      jellybeanImage:
        "https://pictures.dealer.com/e/elrtraining25/0562/0671ae5d76a92002d24a1a2a3340ca76x.jpg",
    },
    onSubmit: (values) => {
      // console.log(generateHTML(values).toString())
      // beautifyCode(generateHTML(values))
      setGeneratedCode(generateHTML(values));

    },
  });
  console.log(formik.values.offer1);
  const copyGeneratedCode = () => {
    let xmp = document.getElementById("generatedCode");
    navigator.clipboard.writeText(xmp.innerText);
    alert("Copied!");
  };

  const manualMake = (
    <>
      <label htmlFor="manualMake">Make</label>
      <input
        id="manualMake"
        name="manualMake"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.manualMake}
      />
    </>
  );

  const manualYear = (
    <>
      <label htmlFor="manualYear">Year</label>
      <input
        id="manualYear"
        name="manualYear"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.manualYear}
      />
    </>
  );

  const manualModel = (
    <>
      <label htmlFor="manualModel">Model</label>
      <input
        id="manualModel"
        name="manualModel"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.manualModel}
      />
    </>
  );

  const makeYearModel = (
    <>
      <label htmlFor="make">Make</label>
      <select
        id="make"
        name="make"
        onChange={(e) => {
          formik.handleChange(e);
          formik.setFieldValue("year", Object.keys(makes[e.target.value])[0]);
          console.log(formik.values.year);
          formik.setFieldValue(
            "model",
            makes[e.target.value][Object.keys(makes[e.target.value])[0]][0]
          );
        }}
        value={formik.values.make}
      >
        {Object.keys(makes).map((make) => (
          <option key={make}>{make}</option>
        ))}
      </select>
      <label htmlFor="year">Year</label>
      <select
        id="year"
        name="year"
        onChange={(e) => {
          console.log(e);
          formik.handleChange(e);
          formik.setFieldValue(
            "model",
            makes[formik.values.make][e.target.value][0]
          );
        }}
        value={formik.values.year}
      >
        {formik.values.make != "" ? (
          Object.keys(makes[formik.values.make]).map((year) => (
            <option key={`${formik.values.make} - ${year}`}>{year}</option>
          ))
        ) : (
          <option>Select A Make</option>
        )}
      </select>
      <label htmlFor="model">Model</label>
      <select
        id="model"
        name="model"
        onChange={formik.handleChange}
        value={formik.values.model}
      >
        {formik.values.year != "" ? (
          makes[formik.values.make][formik.values.year].map((model) => (
            <option key={model}>{model}</option>
          ))
        ) : (
          <option>Select A year</option>
        )}
      </select>
    </>
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          margin: "20px",
          gridGap: "10px",
        }}
      >
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            width: "800px",
            justifyContent: "center",
            padding: "20px",
            border: "1px solid black",
          }}
        >
          <label htmlFor="manualEntryToggle">Manual Entry?</label>
          <input
            id="manualEntryToggle"
            name="manualEntryToggle"
            type="checkbox"
            onChange={formik.handleChange}
            value={formik.values.manualEntryToggle}
          />
          {formik.values.manualEntryToggle ? (
            <>
              {manualMake} {manualYear} {manualModel}
            </>
          ) : (
            makeYearModel
          )}
          <label htmlFor="trim">Trim</label>
          <input 
            id="trim"
            name="trim"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.trim}
            />
          
          <label htmlFor="offer1Top">Offer #1 Top</label>
          <input
            id="offer1Top"
            name="offer1Top"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.offer1Top}
          />
          <label htmlFor="offer1Middle">Offer #1 Middle</label>
          <input
            id="offer1Middle"
            name="offer1Middle"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.offer1Middle}
          />
          <label htmlFor="offer1MiddleSuffix">Offer #1 Middle Suffix</label>
          <input
            id="offer1MiddleSuffix"
            name="offer1MiddleSuffix"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.offer1MiddleSuffix}
          />
          <label htmlFor="offer1Bottom">Offer #1 Bottom</label>
          <input
            id="offer1Bottom"
            name="offer1Bottom"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.offer1Bottom}
          />
          <label htmlFor="offer2">Offer #2?</label>
          <input
            id="offer2"
            name="offer2"
            type="checkbox"
            onChange={formik.handleChange}
            value={formik.values.offer2}
          />
          {formik.values.offer2 && (
            <>
              <label htmlFor="offer2Top">Offer #2 Top</label>
              <input
                id="offer2Top"
                name="offer2Top"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.offer2Top}
              />
              <label htmlFor="offer2Middle">Offer #2 Middle</label>
              <input
                id="offer2Middle"
                name="offer2Middle"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.offer2Middle}
              />
              <label htmlFor="offer2MiddleSuffix">Offer #2 Middle Suffix</label>
              <input
                id="offer2MiddleSuffix"
                name="offer2MiddleSuffix"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.offer2MiddleSuffix}
              />
              <label htmlFor="offer2Buttom">Offer #2 Bottom</label>
              <input
                id="offer2Buttom"
                name="offer2Bottom"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.offer2Bottom}
              />
            </>
          )}
          <label htmlFor="offer3">Offer #3?</label>
          <input
            id="offer3"
            name="offer3"
            type="checkbox"
            onChange={formik.handleChange}
            value={formik.values.offer3}
          />
          {formik.values.offer3 && (
            <>
              <label htmlFor="offer3Top">Offer #3 Top</label>
              <input
                id="offer3Top"
                name="offer3Top"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.offer3Top}
              />
              <label htmlFor="offer3Middle">Offer #3 Middle</label>
              <input
                id="offer3Middle"
                name="offer3Middle"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.offer3Middle}
              />
              <label htmlFor="offer3MiddleSuffix">Offer #3 Middle Suffix</label>
              <input
                id="offer3MiddleSuffix"
                name="offer3MiddleSuffix"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.offer3MiddleSuffix}
              />
              <label htmlFor="offer3Buttom">Offer #3 Bottom</label>
              <input
                id="offer3Buttom"
                name="offer3Bottom"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.offer3Bottom}
              />
            </>
          )}
          <label htmlFor="offer4">Offer #4?</label>
          <input
            id="offer4"
            name="offer4"
            type="checkbox"
            onChange={formik.handleChange}
            value={formik.values.offer4}
          />
          {formik.values.offer4 && (
            <>
              <label htmlFor="offer4Top">Offer #4 Top</label>
              <input
                id="offer4Top"
                name="offer4Top"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.offer4Top}
              />
              <label htmlFor="offer4Middle">Offer #4 Middle</label>
              <input
                id="offer4Middle"
                name="offer4Middle"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.offer4Middle}
              />
              <label htmlFor="offer4MiddleSuffix">Offer #4 Middle Suffix</label>
              <input
                id="offer4MiddleSuffix"
                name="offer4MiddleSuffix"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.offer4MiddleSuffix}
              />
              <label htmlFor="offer4Buttom">Offer #4 Bottom</label>
              <input
                id="offer4Buttom"
                name="offer4Bottom"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.offer4Bottom}
              />
            </>
          )}
          <label htmlFor="disclaimer">Disclaimer</label>
          <textarea
            id="disclaimer"
            name="disclaimer"
            cols={40}
            rows={5}
            onChange={formik.handleChange}
            value={formik.values.disclaimer}
          />
          <label htmlFor="jellybeanImage">Jellybean Image</label>
          <input
            id="jellybeanImage"
            name="jellybeanImage"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.jellybeanImage}
          />
          <button type="submit">Generate</button>
        </form>
        <br />
        <Preview formData={formik.values} />
      </div>
      <div id="generatedCodeContainer">
        {generatedCode != "" && (
          <button onClick={copyGeneratedCode}>Copy Generated Code</button>
        )}

        <xmp id="generatedCode">{generatedCode}</xmp>
      </div>
    </>
  );
};

export default SignupForm;
