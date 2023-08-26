import "./CardProduct.css";
import Content from "./Content";

function CardProduct({ data }) {
  return (
    <div className="card" >
        <div className="imagen" style={{ backgroundImage: `url(${data.foto})` }}>
          <div className="hoverText">
            <Content info={data}/>
          </div>
        </div>    
    </div>
  );
}

export default CardProduct;
