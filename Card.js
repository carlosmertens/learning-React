function Card(props) {
  const title = props.title;
  function salesOn() {
    return false;
  }
  return (
    <div className="col s2">
      <div className="card hoverable large">
        <div className="card-image">
          <img src={props.image} />
        </div>
        <div className="card-content">
          <p>"{title}"</p>
          <p>{props.name}</p>
        </div>
        <div className="card-action">
          <a href="#">${salesOn() ? 9.99 : 59.99}</a>
        </div>
      </div>
    </div>
  );
}
