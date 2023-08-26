import "./CardProduct.css";
import Content from "./Content";

function CardProduct({ data }) {
  return (
    <div className="card">
       <img src={data.foto}/> 
      <Content info={data}/>
    </div>
  );
}
//style="--i:url(img1.jpg)"
export default CardProduct;
