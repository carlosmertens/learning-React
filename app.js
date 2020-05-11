// Data for nav component
const navData = [
  {
    icon: "code",
    title: "Development",
  },
  {
    icon: "business",
    title: "Business",
  },
  {
    icon: "computer",
    title: "IT & Software",
  },
  {
    icon: "library_books",
    title: "Office Productivity",
  },
  {
    icon: "person",
    title: "Personal Development",
  },
  {
    icon: "mode_edit",
    title: "Personal Development",
  },
  {
    icon: "track_changes",
    title: "Marketing",
  },
  {
    icon: "directions_bike",
    title: "Health & Fitness",
  },
  {
    icon: "music_note",
    title: "Music",
  },
];

// Map through the data for the cards and return React elements
let cards = data.map((course, index) => {
  return <Card key={index} data={course} />;
});

// Test that cards holds an array of React elements with own keys
console.log(cards);

// Render with ReactDOM the App
// TODO: Render nav and cards
ReactDOM.render(
  <div>
    <div>
      <CatNav navData={navData} />
    </div>
    <div className="row">{cards}</div>
  </div>,
  document.getElementById("root")
);
