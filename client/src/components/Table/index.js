import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table class="responsive-card-table unstriped">
      props.children;
    </table>
  );
}

export default Table;