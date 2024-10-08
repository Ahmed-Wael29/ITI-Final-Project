import React from "react";
import { Card, Col } from "react-bootstrap";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";

const ProductCard = ({ imgName, productTitle, price, rating, productId }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Link to={`/ProductDetails/${productId}`}>
        <Card
          className="my-2"
          style={{
            width: "100%",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
            boxShadow:
              "2px 2px 2px 0 rgba(151,151,151,0.5),-2px -2px 2px 0 rgba(151,151,151,0.5)",
            padding: "10px",
          }}
        >
          <Card.Img
            style={{ height: "250px", width: "250px", margin: "auto" }}
            src={imgName}
          />
          <div className="d-flex justify-content-end mx-2">
            <img
              src={favoff}
              alt="item-img"
              className="text-center"
              style={{
                height: "24px",
                width: "26px",
              }}
            />
          </div>
          <Card.Body>
            <Card.Title>
              <div className="card-title d-flex justify-content-start">
                {productTitle}
              </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="card-price">{price}</div>
                  <div className="card-currency mx-1">$</div>
                </div>
                <div className="d-flex">
                  <img src={rate} alt="star" height="16px" width="16px" />
                  <div className="card-rate mx-2">{rating}</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;
