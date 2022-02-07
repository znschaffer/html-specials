import { useState } from "react";

const OfferSelector = ({ updateOffers }) => {
  const [offers, setOffers] = updateOffers;
  const [type, setType] = useState("callout");

  const defaultTypes = {
    callout: {
      id: offers.length + 1,
      type: "callout",
      width: "6",
      top: "Default Top",
      bottom: "Default Bottom",
    },
    apr: {
      id: offers.length + 1,
      type: "apr",
      width: "6",
      top: "Default Top",
      middle: "",
      suffix: "",
      bottom: "for 60 Months for Well-Qualified Buyers",
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
