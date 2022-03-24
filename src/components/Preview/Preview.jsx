import ReactDOMServer from "react-dom/server";
import OfferRowTemplate from "../templates/OfferTemplates";
import VehicleTemplate from "../templates/VehicleTemplate";
import CTATemplate from "../templates/CtaTemplates";
const Preview = ({ state }) => {
  const { vehicle, offers, cta, jellybean } = state;
  let preview = (
    <>
      <div className="specialContainer" style={{ maxHeight: "600px", backgroundImage: `url("https://pictures.dealer.com/e/elrtraining20/0344/32628f009b06f28cb73ba2c86eab163bx.jpg")`, backgroundImage: `url("${jellybean.backgroundImage}")`}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-5 col-lg-5 offerBox">
              <center>
                <VehicleTemplate vehicle={vehicle} />
                <OfferRowTemplate offers={offers} />
                <CTATemplate cta={cta} />
              </center>
            </div>
            <div className="col-xs-12 col-md-7 col-lg-7 vehicleJellybean">
              <center>
                <img
                  style={{ transform: `scale(${jellybean.scale})` }}
                  src={jellybean.link}
                />
                <p></p>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const handleClick = (preview) => {
    navigator.clipboard.writeText(ReactDOMServer.renderToStaticMarkup(preview));
    alert("Copied!");
  };

  return (
    <div class="d-flex flex-column" style={{ marginLeft: "10px", marginRight: "10px" }}>
      {preview}
      <button
        onClick={() => handleClick(preview)}
        style={{
          margin: "20px auto",
          width: "200px",
          padding: "10px",
          zIndex: "199999",
        }}
      >
        Generate + Copy
      </button>
    </div>
  );
};

export default Preview;
