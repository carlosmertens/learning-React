// Map through the data for the cards and return React elements
let cards = cardData.map((course, index) => {
  return <Card key={index} data={course} />;
});

// Test that cards holds an array of React elements with own keys
console.log(cards);

// Render the App with ReactDOM
ReactDOM.render(
  <div>
    <div>
      <CatNav navData={navData} />
    </div>
    <div className="row">{cards}</div>
  </div>,
  document.getElementById("root")
);
