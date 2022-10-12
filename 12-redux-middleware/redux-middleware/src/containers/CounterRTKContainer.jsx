import React from "react";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

// import selector
import { selectUser, selectCounter } from "../features/counter/sliceCounter";

// import actions
import {
  increment,
  decrement,
  reset,
  incrementSpec,
  decrementSpec,
  // import async
  userAsync,
} from "../features/counter/sliceCounter";

const CounterRTKContainer = () => {
  // Redux Toolkit
  const user = useSelector(selectUser);
  const counter = useSelector(selectCounter);

  // console.log(user)

  const [currAmount, setCurrAmount] = useState(0);

  // ambil dispatchernya
  const dispatcher = useDispatch();

  const buttonDecrementOnClickHandler = () => {
    // Redux Toolkit
    // dispatcher (namaActions())
    dispatcher(decrement());
  };
  const buttonIncrementOnClickHandler = () => {
    dispatcher(increment());
  };
  const buttonResetOnClickHandler = () => {
    dispatcher(reset());
  };

  const textFieldAmountOnChangeHandler = (event) => {
    // bisa not a number !
    setCurrAmount(event.target.value);
  };

  const buttonDecrementByAmountOnClickHandler = () => {
    // decremetnSpec(action.payload)
    dispatcher(decrementSpec(+currAmount));
  };

  const buttonIncrementByAmountOnClickHandler = () => {
    dispatcher(incrementSpec(+currAmount));
  };

  useEffect(
    // fn
    () => {
      dispatcher(userAsync(2))
    },
    // depsList
    [dispatcher]
  );

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

        <Avatar
          // src="https:placekitten.com/200"
          src={user.avatar}
          alt="Avatar"
          sx={{ width: 64, height: 64 }}
        />

        <Typography variant="body1" component="div">
          Nama Orang: {user.first_name}
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

export default CounterRTKContainer;
