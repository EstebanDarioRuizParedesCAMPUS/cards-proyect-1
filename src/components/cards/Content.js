import "./Content.css";
import RainbowButton from "./RainbowButton";

function Content({ info }) {
  return (
    <div className="content">
      <h2>{info.name}</h2>
      <p>{info.detail}</p>
      <h3>$ {info.price}</h3>
      <RainbowButton/>
    </div>
  );
}

export default Content;
