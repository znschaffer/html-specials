const offerOtherTemplate = (offer) => {
  return (
    <div
      className={`col-xs-${offer.width} col-md-${offer.width} col-lg-${offer.width} vehicleOffer`}
      style={{ fontSize: "1.5em" }}
    >
      <br />
      <b>{offer.top}</b>
      <br />
      {offer.bottom}
    </div>
  );
};
// Lease/APR/MSRP/Callout
// Cashback/Rebate
const offerLeaseTemplate = (offer) => {
  return (
    <div
      className={`col-xs-${offer.width} col-md-${offer.width} col-lg-${offer.width} vehicleOffer`}
    >
      {offer.top}
      <br />
      <span>{offer.middle}</span>
      {offer.suffix}
      <br />
      {offer.bottom}
    </div>
  );
};

const offerAprTemplate = (offer) => {
  return (
    <div
      className={`col-xs-${offer.width} col-md-${offer.width} col-lg-${offer.width} vehicleOffer`}
    >
      {offer.top}
      <br />
      <span>{offer.middle}</span>
      {offer.suffix}
      <br />
      {offer.bottom}
    </div>
  );
};

const offerTemplate = (offer) => {
  switch (offer.type) {
    case "other":
      return offerOtherTemplate(offer);
    case "apr":
      return offerAprTemplate(offer);
    case "lease":
      return offerLeaseTemplate(offer);
    default:
      break;
  }
};

const OfferRowTemplate = ({ offers }) => {
  let amtOfOffers = offers.length;
  switch (amtOfOffers) {
    case 1:
      return <div className="row">{offerTemplate(offers[0])}</div>;
    case 2:
      return (
        <div className="row">
          {offerTemplate(offers[0])}
          {offerTemplate(offers[1])}
        </div>
      );
    case 3:
      return (
        <>
          <div className="row">
            {offerTemplate(offers[0])}
            {offerTemplate(offers[1])}
          </div>
          <div className="row">{offerTemplate(offers[2])}</div>
        </>
      );
    case 4:
      return (
        <>
          <div className="row">
            {offerTemplate(offers[0])}
            {offerTemplate(offers[1])}
          </div>
          <div className="row">
            {offerTemplate(offers[2])}
            {offerTemplate(offers[3])}
          </div>
        </>
      );
    default:
      return <></>;
  }
};

export default OfferRowTemplate;
