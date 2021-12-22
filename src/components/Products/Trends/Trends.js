import React from "react";

// Components
import Container from "../Shared/Container";
import Trend from "./TrendTitle";
import TrendItem from "./TrendItem";

const Trends = () => {
  const renderTrendProducts = () => {
    return (
      <>
        <TrendItem />
        <TrendItem />
        <TrendItem />
      </>
    );
  };

  return (
    <Container>
      <Trend />
      {renderTrendProducts()}
    </Container>
  );
};

export default Trends;
