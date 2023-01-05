"use client";
import React from "react";
import Card from "react-bootstrap/Card";

const Product = ({ img }: { img: any }) => {
  return (
    <div className="grid-item">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <div className="card-title">
              <div className="category">
                Category: <strong>Category</strong>
              </div>
              <div className="price">
                <strong>100</strong>
              </div>
            </div>
          </Card.Title>
          <Card.Img variant="top" src={img} />
          <Card.Title>
            <div className="product-name">
              <strong>Caption</strong>
            </div>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
