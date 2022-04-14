import {
  Banner,
  CompanyArea,
  DiscountArea,
  Footer,
  HomeBanner,
  NewsLetter,
  Products,
  ProtectedArea,
} from "../../components";

const Home = () => (
  <div style={{ marginTop: "5rem" }}>
    <Banner />
    <HomeBanner />
    <ProtectedArea />
    <Products />
    <DiscountArea />
    <NewsLetter />
    <CompanyArea />
    <Footer />
  </div>
);

export default Home;
