import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const summary = Object.keys(props.ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: "uppercase" }}>{igKey}</span>:
      {props.ingredients[igKey]}
    </li>
  ));
  return (
    <Aux>
      <h3>Your Order summary:</h3>
      <ul>{summary}</ul>
      <p>
        <strong>Total Price</strong>: {props.price.toFixed(2)}
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
