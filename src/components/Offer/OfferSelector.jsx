import { useState } from "react";

const OfferSelector = ({ updateOffers }) => {
  const [offers, setOffers] = updateOffers;
  const [type, setType] = useState("other");
  const offerID = offers.length == 0 ? 1 : offers[offers.length - 1].id + 1;
  const defaultTypes = {
    other: {
      id: offerID,
      type: "other",
      width: "6",
      top: "Test Drive from Home",
      bottom: "Delivered to Your Door",
    },
    lease: {
      id: offerID,
      type: "lease",
      width: "6",
      top: "Lease for",
      middle: "$299",
      suffix: "/mo",
      bottom: "for 36 Months.",
    },
    apr: {
      id: offerID,
      type: "apr",
      width: "6",
      top: "Finance with",
      middle: "1.9%",
      suffix: "APR",
      bottom: "for 24 Months.",
    },
  };

  const handleNewOffer = (e) => {
    e.preventDefault();
    setOffers([...offers, defaultTypes[type]]);
  };

  return offers.length < 4 ? (
    <form>
      <select onChange={(e) => setType(e.target.value)}>
        <option value="apr">APR</option>
        <option selected value="other">
          Other
        </option>
        <option value="lease">Lease</option>
      </select>
      <button onClick={handleNewOffer}>Add Offer</button>
    </form>
  ) : (
    <p>Only 4 Offers currently supported.</p>
  );
};

export default OfferSelector;
