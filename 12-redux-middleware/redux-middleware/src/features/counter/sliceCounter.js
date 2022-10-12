// slice / reducer via redux toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialStateForCounter = {
  user: "Abu",
  counter: 100000,
};

// bikin slicenya
const counterRTKSlice = createSlice({
  // berikan nama untuk slicenya
  name: "counterRTK",
  // intial statenya apa sih untuk si "slice" ini
  initialState: initialStateForCounter,
  //   definisikan "action" nya bisa ada apa saja
  reducers: {
    // increment, decrement, reset, incrementSpec, decrementSpec
    // fungsi minimal 1 parameter (state)
    // maksimal 2 parameter (state, action -> payload(data tambahan))
    increment(state) {
      // kita berikan hasil return nya
      // state harus immutable?

      // TAPI itu kalau kita menggunkaan reducer standard
      // jadi di dalam redux toolkit, dibalik layar, semua state itu sudah dibungkus
      // dengan suatu hal yang bernama "immer"

      // kita bisa menuliskan perubahsan state, SEOLAH OLAH seperti statenya itu MUTABLE !
      // ARTINYA KITA BOLEH LANGSUNG mengassign /mengsamadengankan !
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    reset(state) {
      state.counter = 0;
    },
    incrementSpec(state, action) {
      state.counter += action.payload;
    },
    decrementSpec(state, action) {
      state.counter -= action.payload;
    },
  },
});

// --- ACTIONS ----
export const { increment, decrement, reset, incrementSpec, decrementSpec } =
  counterRTKSlice.actions;

// --- SELECTORS ---
export const selectUser = (state) => state.counterRTK.user;
export const selectCounter = (state) => state.counterRTK.counter;

// --- REDUCERS ---
export default counterRTKSlice.reducer;
