import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// import selector
import { selectUser, selectCounter } from "../features/counter/sliceCounter";

// import actions
import {
  increment,
  decrement,
  reset,
  incrementSpec,
  decrementSpec,
} from "../features/counter/sliceCounter";

const CounterContainer = () => {
  // Harus memilih si state punya property bernama user & counter
  const user = useSelector((state) => state.user);
  const counter = useSelector((state) => state.counter);

  const [currAmount, setCurrAmount] = useState(0);

  // ambil dispatchernya
  const dispatcher = useDispatch();

  const buttonDecrementOnClickHandler = () => {
    // dispatcher({
    //   type: "decrement",
    // });

    // Redux Toolkit
    // dispatcher (namaActions())
    dispatcher(decrement());
  };
  const buttonIncrementOnClickHandler = () => {
    // dispatcher({
    //   type: "increment",
    // });
    dispatcher(increment());
  };
  const buttonResetOnClickHandler = () => {
    // dispatcher({
    //   type: "reset",
    // });
    dispatcher(reset());
  };

  const textFieldAmountOnChangeHandler = (event) => {
    // bisa not a number !
    setCurrAmount(event.target.value);
  };

  const buttonDecrementByAmountOnClickHandler = () => {
    // dispatcher({
    //   type: "decrementSpec",
    //   amount: +currAmount,
    //   // Konversi to number -> Number() parseInt() or +
    // });
    //
    // decremetnSpec(action.payload)
    dispatcher(decrementSpec(+currAmount));
  };

  const buttonIncrementByAmountOnClickHandler = () => {
    // dispatcher({
    //   type: "incrementSpec",
    //   amount: +currAmount,
    // });
    dispatcher(incrementSpec(+currAmount));
  };

  return (
    <>
      <Box
        sx={{
          border: "1px dashed grey",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="body1" component="div">
          React Redux
        </Typography>

        <Typography variant="body1" component="div">
          Nama Orang: {user}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            disabled
            label="Current Counter"
            // defaultValue="0"
            value={counter}
            size="small"
          />
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonDecrementOnClickHandler}
          >
            -1
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonResetOnClickHandler}
          >
            0
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonIncrementOnClickHandler}
          >
            +1
          </Button>
        </Box>

        {/* Mari kita tambahkan Bagian baru di sini */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            type="number"
            label="amount"
            size="small"
            // defaultValue={0}
            value={currAmount}
            onChange={textFieldAmountOnChangeHandler}
          />
          <Button
            variant="outlined"
            color="success"
            onClick={buttonDecrementByAmountOnClickHandler}
          >
            - Amount
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonIncrementByAmountOnClickHandler}
          >
            + Amount
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CounterContainer;
