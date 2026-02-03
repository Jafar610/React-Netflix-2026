import React from "react";
import Row from "../Row/Row";
import "./rowList.css";
import requests from "../../../utils/request";
function RowList() {
  return (
    <>
      <Row
        title = "Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
    </>
  );
}

export default RowList;
