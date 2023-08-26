import "./App.css";
import CardProduct from "./components/cards/CardProduct";
import FlexDisposing from "./components/FlexDisposing/FlexDisposing";

const infoCards = [
  {
    name: "Sahara",
    detail: "Un viaje de 7 días a Alaska",
    foto: "./img/img1.jpg",
    img:"--i:url(./img/img1.jpg)",
    date: new Date(2022, 6, 1),
    stars: 3,
  },
  {
    name: "Noruega",
    detail: "Un viaje de 4 días a Noruega",
    foto: "./img/img2.jpg",
    img:"--i:url(./img/img1.jpg)",
    date: new Date(2023, 8, 30),
    stars: 5,
  },
  {
    name: "Alaska",
    detail: "Un viaje de 10 días a Alaska",
    foto: "./img/img3.jpg",
    img:"--i:url(./img/img1.jpg)",
    date: new Date(2022, 6, 1),
    stars: 4,
  },
];

function App() {
  return (
    <FlexDisposing className="App">
      <h1 className="App-header">Planificación de viajes Artemis</h1>
      <FlexDisposing className="card-container">
        <CardProduct data={infoCards[0]} />
        <CardProduct data={infoCards[1]} />
        <CardProduct data={infoCards[2]} />
      </FlexDisposing>
    </FlexDisposing>
  );
}

export default App;
