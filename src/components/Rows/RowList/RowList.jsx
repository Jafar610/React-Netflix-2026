import React from "react";
import Row from "../Row/Row";
import "./rowList.css";
function RowList() {
  return (
    <>
      <div className="rowList">
        <Row />
        <Row />
        <Row />
      </div>
    </>
  );
}

export default RowList;
