import classes from "./MealItemForm.module.css";
import React, { useRef } from "react";
import Input from "../../UI/Input";

function MealItemForm() {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form action="" className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </form>
  );
}

export default MealItemForm;
