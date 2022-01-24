const Preview = ({ formData }) => {
  let row1 = "";
  let row2 = "";

  let offer1SingleContent = (
    <div className="row">
      <div className="col-xs-12 col-md-12 col-lg-12 vehicleOffer">
        {formData.offer1Top}
        <br />
        <span>{formData.offer1Middle}</span>{formData.offer1MiddleSuffix}
        <br />
        {formData.offer1Bottom}
      </div>
    </div>
  )

  if (formData.offer2) {
    row1 = (
      <div className="row">
        <div className="col-xs-6 col-md-6 col-lg-6 vehicleOffer">
          {formData.offer1Top}
          <br />
          <span>{formData.offer1Middle}</span>{formData.offer1MiddleSuffix}
          <br />
          {formData.offer1Bottom}
        </div>
        <div className="col-xs-6 col-md-6 col-lg-6 vehicleOffer">
          {formData.offer2Top}
          <br />
          <span>{formData.offer2Middle}</span>{formData.offer2MiddleSuffix}
          <br />
          {formData.offer2Bottom}
        </div>
      </div>

    )
  } else {
    row1 = offer1SingleContent
  }


  let offer3SingleContent = (
    <div className="row">
      <div className="col-xs-12 col-md-12 col-lg-12 vehicleOffer">
        {formData.offer3Top}
        <br />
        <span>{formData.offer3Middle}</span>{formData.offer3MiddleSuffix}
        <br />
        {formData.offer3Bottom}
      </div>
    </div>
  )

  if (formData.offer4) {
    row2 = (
      <div className="row">
        <div className="col-xs-6 col-md-6 col-lg-6 vehicleOffer">
          {formData.offer3Top}
          <br />
          <span>{formData.offer3Middle}</span>{formData.offer3MiddleSuffix}
          <br />
          {formData.offer3Bottom}
        </div>
        <div className="col-xs-6 col-md-6 col-lg-6 vehicleOffer">
          {formData.offer4Top}
          <br />
          <span>{formData.offer4Middle}</span>{formData.offer4MiddleSuffix}
          <br />
          {formData.offer4Bottom}
        </div>
      </div>

    )
  } else if (formData.offer3) {
    row2 = offer3SingleContent
  } else {
    row2 = ""
  }

  return (
    <>
      <div className="specialContainer" style={{ maxHeight: "600px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-5 col-lg-5 offerBox">
              <center>
                <h2>
                  New {formData.year} {formData.make}
                  <br />
                  {formData.model}
                  <br />
                </h2>
                {row1}
                {row2}
                <div className="row">
                  <a className="btn btn-primary" href={formData.leftButtonLink}>
                    {formData.leftButtonTitle}
                  </a>
                  <a
                    className="btn btn-primary dialog"
                    data-width="400"
                    href={formData.rightButtonLink}
                  >
                    {formData.rightButtonTitle}
                  </a>
                  <div className="truncatedDisclaimer">
                    <i className="disclaimerHover">View Disclaimer</i>
                    <div className="disclaimer-content flip-in-hor-top">
                      {formData.disclaimer}
                    </div>
                  </div>
                </div>
              </center>
            </div>
            <div className="col-xs-12 col-md-7 col-lg-7 vehicleJellybean">
              <center>
                <img src={formData.jellybeanImage} />
                <p></p>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
