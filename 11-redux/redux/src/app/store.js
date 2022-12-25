import { configureStore } from "@reduxjs/toolkit";

// import { initialValue, rootReducer } from "../reducers/rootReducer";

// Import slicenya
import sliceCounter from "../features/counter/sliceCounter";

export const store = configureStore({
  //   reducer: rootReducer,
  //   // preloaded
  //   preloadedState: initialValue,

  reducer: {
    // alias: value dari slice
    counterRTK: sliceCounter,
  },
});

// "ganti istilah", di dalam redux tookit, "reducer" => "slices"
