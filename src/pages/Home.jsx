import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../common/ProductList";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../common/Clock";
import useGetData from "../custom-hooks/useGetData";

const Home = () => {
  const { data: products, loading } = useGetData("products");
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProduct, setMobileProduct] = useState([]);
  const [wirelessProduct, setWirelessProduct] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProduct = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProduct = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProduct = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWireLessProduct = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProduct = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProduct);
    setBestSalesProducts(filteredBestSalesProduct);
    setMobileProduct(filteredMobileProduct);
    setWirelessProduct(filteredWireLessProduct);
    setPopularProducts(filteredPopularProduct);
  }, [products]);
  return (
    <Helmet title="Home">
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year} </p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  consequatur obcaecati tempora quod vero veritatis nobis nisi
                  repudiandae sed laudantium.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center ">
              <h2 className="section__title">Trending Product</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
            {loading ? (
              <h5 className="fw-bold">Loading......</h5>
            ) : (
              <ProductList data={trendingProducts} />
            )}
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center ">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading......</h5>
            ) : (
              <ProductList data={bestSalesProducts} />
            )}
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading......</h5>
            ) : (
              <ProductList data={mobileProduct} />
            )}
            {loading ? (
              <h5 className="fw-bold">Loading......</h5>
            ) : (
              <ProductList data={wirelessProduct} />
            )}
          </Row>
        </Container>
      </section>
      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular in Category</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading......</h5>
            ) : (
              <ProductList data={popularProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
