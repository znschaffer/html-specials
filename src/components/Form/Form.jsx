import { React, useState, useEffect } from "react";
import Offer from "../Offer/Offer";
import OfferSelector from "../Offer/OfferSelector";
import VehicleType from "../VehicleType/VehicleType";
import CTA from "../CTA/CTA";
import Jellybean from "../Jellybean/Jellybean";

const Form = ({ state }) => {
  const [formData, setFormData] = state;

  const [offers, setOffers] = useState([]);
  const [vehicle, setVehicle] = useState({ make: "", year: "", model: "" });
  const [cta, setCTA] = useState({
    leftButtonLink: "/custom-mslp-audi-2-offer.htm#inventory",
    leftButtonText: "View Inventory",
    rightButtonLink: "/contact-form.htm",
    rightButtonText: "Contact Sales",
    disclaimer: "Disclaimer here...",
  });
  const [jellybean, setJellybean] = useState({
    link: "https://cdn2.webdamdb.com/1280_seiSh5BUfxe71QDs.png?1631033777",
    scale: "0.8",
  });

  useEffect(() => {
    if (
      formData.offers === offers &&
      formData.vehicle === vehicle &&
      formData.cta === cta &&
      formData.jellybean === jellybean
    )
      return;
    else
      setFormData({
        offers: offers,
        vehicle: vehicle,
        cta: cta,
        jellybean: jellybean,
      });
  }, [offers, vehicle, cta, jellybean]);

  return (
    <div
      className="d-flex flex-column"
      style={{
        width: "500px",
        marginLeft: "10px",
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <details>
        <summary>Vehicle</summary>
        <VehicleType updateVehicle={[vehicle, setVehicle]} />
      </details>
      <details>
        <summary>Offers</summary>
        {offers.map((offer, index) => (
          <Offer key={index} offer={offer} updateOffers={[offers, setOffers]} />
        ))}
        <OfferSelector updateOffers={[offers, setOffers]} />
      </details>
      <details>
        <summary>CTA</summary>
        <CTA updateCTA={[cta, setCTA]} />
      </details>
      <details>
        <summary>Jellybean</summary>
        <Jellybean updateJellybean={[jellybean, setJellybean]} />
      </details>
    </div>
  );
};

export default Form;
