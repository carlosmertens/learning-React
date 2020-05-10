// Create Card component
function Card(props) {
  const title = props.data.course;
  function salesOn() {
    return false;
  }
  return (
    <div className="col s3">
      <div className="card hoverable medium">
        <div className="card-image">
          <img src={props.data.image} />
        </div>
        <div className="card-content">
          <p>"{title}"</p>
          <p>{props.data.instructor}</p>
        </div>
        <div className="card-action">
          <a href="#">${salesOn() ? 9.99 : 59.99}</a>
        </div>
      </div>
    </div>
  );
}
