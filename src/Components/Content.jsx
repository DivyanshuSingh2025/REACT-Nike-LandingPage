import "./Content.css";

export default function Content() {
  return (
    <div className="Content">
      <div className="ContentTitle">
        <h1 className="Title">
          YOUR FEET DESERVE <br /> THE BEST
        </h1>
        <p className="ContentPara">
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="ContentBtn">
          <div className="Shopnow">
            <button className="btn">Shop now</button>
          </div>
          <div className="Category">
            <button className="btn">Category</button>
          </div>
        </div>

        <div className="SmallImg">
          <span className="SpanText">Also Available on - </span>
          <img className="Img" src="/Images/flipkart.png" alt="flipkart-logo" />
          <img className="Img" src="/Images/amazon.png" alt="amazon-logo" />
        </div>
      </div>

      <div className="HeroImg">
        <img
          className="Hero"
          src="/Images/hero-image.png"
          alt="nike-shoes-img"
        />
      </div>
    </div>
  );
}
