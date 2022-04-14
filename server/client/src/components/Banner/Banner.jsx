import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { bannerData } from "../../fakeData";

const Banner = () => (
  <Carousel fade className="banner">
    {bannerData.map((banner, i) => (
      <Carousel.Item key={`banner-${i}`}>
        <img className="d-block w-100" src={banner.imgPath} alt="First slide" />
        <Carousel.Caption className="banner__desc container-div">
          <h1>{banner.title}</h1>
          <p>{banner.desc}</p>

          <Link to="/shop">
            <button>View Collection</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default Banner;
