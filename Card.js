function Card() {
  const theName = "Carlos Mertens";
  const title = "React Beginning";
  function salesOn() {
    return false;
  }
  return (
    <div className="row">
      <div className="col s2">
        <div className="card hoverable small">
          <div className="card-image">
            <img src="http://lorempixel.com/400/400/nature/" />
          </div>
          <div className="card-content">
            <p>{title}</p>
            <p>{theName}</p>
          </div>
          <div className="card-action">
            <a href="#">${salesOn() ? 9.99 : 59.99}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
