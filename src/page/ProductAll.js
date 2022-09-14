import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || ""; // 없으면 빈값
    console.log("쿼리값은?", searchQuery);
    let url = `https://my-json-server.typicode.com/mynameisleesiwon/
    hnm-react-router-practice/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  // api호출은 useEffect에서
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      {/* Container : 아이템을 가운데 둘 수 있게 해준다 */}
      <Container>
        <Row>
          {productList?.map((menu) => (
            <Col lg={3}>
              {" "}
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
