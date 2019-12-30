import React, { Fragment } from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
const modal = props => (
  <Fragment>
    <Backdrop clicked={props.clicked} show={props.show} />
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? 1 : 0
      }}
    >
      {props.children}
    </div>
  </Fragment>
);

export default modal;
