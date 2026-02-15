import "./index.css";

const currentTime = 22;
let bgSite = "white";

if (currentTime >= 21 || currentTime <= 7) {
  bgSite = "black";
}

function App() {
  return (
    <div style={{ backgroundColor: bgSite }}>
      <p>Hello</p>
    </div>
  );
}

export default App;
