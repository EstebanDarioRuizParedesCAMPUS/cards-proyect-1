import "./Content.css";

function Content({ info }) {
  return (
    <div className="content">
      <h2>{info.name}</h2>
      <input type="button" value="Ver Detalles" />
    </div>
  );
}

export default Content;
