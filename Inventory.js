import "./inventory.css"
import Card from "./Card.js"
import "./Card.css"
//import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";

//install bootstrap for the rows and cols of cards using npm install bootstrap
export default function Inventory(props) {
    return(  
      <div className={props.cName}>
      <img src={props.heroImg} alt="HerpImg"/>


      <div className="hero-text">
        <h1>{props.title}</h1>
        <p> {props.text}</p>
        <a href={props.url} className={props.btnClass}>
        {props.buttonText}
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Card
                title='Red Rose'
                imageUrl="https://images.all-free-download.com/images/graphicwebp/red_rose_204835.webp"
                 body='A classic and romantic choice for any occasion.'/>
          </div>
          <div className="col-sm">
          <Card
                title='Red Rose'
                imageUrl="https://images.all-free-download.com/images/graphicwebp/red_rose_204835.webp"
                 body='A classic and romantic choice for any occasion.'/>
          </div>
          </div>
          </div>
      </div>
            
      );
  }