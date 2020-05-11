// change this Component to a className!
//function CatNav(props) {

// ... code goes here
//  return <div>{/* Your Code Here */}</div>;
// }

// get data from props and use map to build an array of <li>

class CatNav extends React.Component {
  render() {
    console.log(this.props);

    let navTabs = this.props.navData.map((tab, index) => {
      return (
        <li key={index} className="cat-link left valign-wrapper">
          <i className="material-icons">{tab.icon}</i>
          {tab.title}
        </li>
      );
    });
    console.log(navTabs);

    return (
      <div className="row">
        <ul className="cat-nav center-align">{navTabs}</ul>
      </div>
    );
  }
}
