import React from "react";
import trends from "../../../data/trends.json";
import toast from "../../util/toast";

// Components
import Container from "../Shared/Container";
import Trend from "./TrendTitle";
import TrendItem from "./TrendItem";

const Trends = () => {
  const renderTrendProducts = () =>
    trends.map(item => <TrendItem item={item} key={item.id} toast={toast} />);

  return (
    <Container>
      <Trend />
      {renderTrendProducts()}
    </Container>
  );
};

export default Trends;
