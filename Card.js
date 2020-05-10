// Create Card component
/* function Card(props) {
  function salesOn() {
    return false;
  }
  return (
    <div className="col s3">
      <div className="card hoverable large">
        <div className="card-image">
          <img src={props.data.image} />
        </div>
        <div className="card-content">
          <p>"{props.data.course}"</p>
          <br />
          <p>{props.data.instructor}</p>
        </div>
        <div className="card-action">
          <a href="#">${salesOn() ? 9.99 : 59.99}</a>
        </div>
      </div>
    </div>
  );
} */

class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col s3">
        <div className="card hoverable large">
          <div className="card-image">
            <img src={this.props.data.image} />
          </div>
          <div className="card-content">
            <p>"{this.props.data.course}"</p>
            <br />
            <p>{this.props.data.instructor}</p>
          </div>
          <div className="card-action">
            <a href="#">€9.99</a>
          </div>
        </div>
      </div>
    );
  }
}
