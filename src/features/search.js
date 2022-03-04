import React from "react";
import { connect } from "react-redux";
import { searchAction } from "../store/actions/searchAction";
import "../style/search.css";

export function Search(props) {
  return (
    <div>
      <input type="text" placeholder="Search User Name" onChange={(e) => props.searchAction(e.target.value)}/>
    </div>
  );
}

export default connect(null, { searchAction })(Search);
