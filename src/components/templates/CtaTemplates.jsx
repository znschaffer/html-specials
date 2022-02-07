const CTATemplate = ({ cta }) => {
  return (
    <div className="row" style={{ justifyContent: "space-around" }}>
      <a className="btn btn-primary" href={cta.leftButtonLink}>
        {cta.leftButtonText}
      </a>
      <a
        className="btn btn-primary dialog"
        data-width="400"
        href={cta.rightButtonLink}
      >
        {cta.rightButtonText}
      </a>
      <div className="truncatedDisclaimer">
        <i className="disclaimerHover">View Disclaimer</i>
        <div className="disclaimer-content flip-in-hor-top">
          {cta.disclaimer}
        </div>
      </div>
    </div>
  );
};

export default CTATemplate;
