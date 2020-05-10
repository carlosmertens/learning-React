// Map through the data and return React elements
let cards = data.map((course, index) => {
  return <Card key={index} data={course} />;
});

// Test that cards holds an array of React elements with own keys
console.log(cards);

// Render with ReactDOM the App
ReactDOM.render(
  <div className="row">{cards}</div>,
  document.getElementById("root")
);
