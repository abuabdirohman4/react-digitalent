import { configureStore } from "@reduxjs/toolkit";

// import { initialValue, rootReducer } from "../reducers/rootReducer";

// Import slicenya
import sliceCounter from "../features/counter/sliceCounter";
// Import service
import { reqresinColorAPI } from "../services/reqresinColorAPI";

export const store = configureStore({
  //   reducer: rootReducer,
  //   // preloaded
  //   preloadedState: initialValue,

  reducer: {
    // alias: value dari slice
    counterRTK: sliceCounter,
    [reqresinColorAPI.reducerPath]: reqresinColorAPI.reducer,
  },

  // Untuk tingakt lanjut, inging caching/validation
  // pulling data
  middleware: (getDefaultMiddleware) => {
    // secara otomatis DIGABUNGKAN
    return getDefaultMiddleware().concat(reqresinColorAPI.middleware);
  },
});

// "ganti istilah", di dalam redux tookit, "reducer" => "slices"
