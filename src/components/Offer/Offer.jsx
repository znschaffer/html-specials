const Offer = ({ offer, updateOffers }) => {
  const [offers, setOffers] = updateOffers;
  if (offer == null) {
    return <></>;
  }
  let inputs = Object.keys(offer).slice(2);
  const handleChange = (e) => {
    setOffers((offers) =>
      offers.map((bum) => {
        if (bum.id === offer.id) {
          return { ...bum, [e.target.name]: e.target.value };
        } else return bum;
      })
    );
  };

  const handleDelete = () => {
    setOffers([...offers].filter((bum) => bum.id !== offer.id));
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <hr></hr>
      <details class="d-flex flex-column">
        <summary>Offer #{offer.id}</summary>

        {inputs.map((input) => {
          return (
            <>
              <label htmlFor={input}>
                Offer #{offer.id} {input}
              </label>
              <input
                name={input}
                id={input}
                value={offer[input]}
                onChange={handleChange}
              />
            </>
          );
        })}
        <button onClick={handleDelete}>Delete</button>
      </details>
    </div>
  );
};

export default Offer;
