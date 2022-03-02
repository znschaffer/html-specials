import { useState } from "react";

const OfferSelector = ({ updateOffers }) => {
  const [offers, setOffers] = updateOffers;
  const [type, setType] = useState("callout");
  const offerID = offers.length == 0 ? 1 : offers[offers.length - 1].id + 1;
  const defaultTypes = {
    callout: {
      id: offerID,
      type: "callout",
      width: "6",
      top: "Test Drive from Home",
      bottom: "Delivered to Your Door",
    },
    apr: {
      id: offerID,
      type: "apr",
      width: "6",
      top: "Lease for",
      middle: "$299",
      suffix: "/mo",
      bottom: "for 36 Months",
    },
  };

  const handleNewOffer = (e) => {
    e.preventDefault();
    setOffers([...offers, defaultTypes[type]]);
  };

  return (
    <form>
      <select onChange={(e) => setType(e.target.value)}>
        <option selected value="callout">
          Callout
        </option>
        <option value="apr">APR</option>
      </select>
      <button onClick={handleNewOffer}>Add Offer</button>
    </form>
  );
};

export default OfferSelector;
