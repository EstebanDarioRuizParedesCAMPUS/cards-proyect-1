import "./App.css";
import CardProduct from "./components/cards/CardProduct";
import FlexDisposing from "./components/FlexDisposing/FlexDisposing";

const infoCards = [
  {
    name: "Sahara",
    detail: "Un viaje de 7 días a Alaska",
    foto: "./img/img1.jpg",
    price: 3500000,
  },
  {
    name: "Noruega",
    detail: "Un viaje de 4 días a Noruega",
    foto: "./img/img2.jpg",
    price: 5220000,
  },
  {
    name: "Alaska",
    detail: "Un viaje de 10 días a Alaska",
    foto: "./img/img3.jpg",
    price: 4800000,
  },
  {
    name: "Jardín del Edén",
    detail: "Un viaje de 5 días al Jardín del Edén",
    foto: "./img/img4.jpg",
    price: 1600000,
  },
  {
    name: "Sudafrica",
    detail: "Un viaje de 15 días a Sudafrica",
    foto: "./img/img5.jpg",
    price: 6100000,
  },
  {
    name: "Cataratas del Niágara",
    detail: "Un viaje de 10 días a las Cataratas del Niágara",
    foto: "./img/img6.jpg",
    price: 3000000,
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
        <CardProduct data={infoCards[3]} />
        <CardProduct data={infoCards[4]} />
        <CardProduct data={infoCards[5]} />
      </FlexDisposing>
    </FlexDisposing>
  );
}

export default App;
