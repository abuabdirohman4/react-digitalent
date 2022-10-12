import axios from "axios";

// slice / reducer via redux toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialStateForCounter = {
  user: "Abu",
  counter: 100000,
};

// Membuat AsyncThunk
// nantinya variable ini akan di gunakan di tempat lain,
// sehingga harus di export
export const userAsync = createAsyncThunk(
  // parameter pertamanya adalah si prefix
  // prefix ini nantiny akan membuat beberapa (3) "konstanta string"
  // "prefix"/pending
  // "prefix"/fulfilled
  // "prefix"/rejected
  // (Kayak apa ini? Promise)

  // Nama Slice/Nama Fungsinya
  "counterRTK/comotDataUser",
  // Payload (function handler), sebuah fungsi sifatnya async
  // kita bikin fungsi untuk comot datanya
  async (id) => {
    // kita akan membautkan fungsi untuk comot datanya tadi
    // Hasilnya akan mengembalikan data kembaliannya
    const { data } = await axios.get(`https://reqres.in/api/users/${id}`);

    // dalam function handlernya ini
    // HARUS ada Return

    // Dalam case ini, kita akan mengembalikand ata
    return data.data;
  }
);

const counterRTKSlice = createSlice({
  name: "counterRTK",
  initialState: initialStateForCounter,
  reducers: {
    increment(state) {
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
  // extrareducers -> reducers yang sifatnya adalah dari middlewarenya -> AsyncThunk
  // fungsi menerima sebuah parameter
  // namanya "builder"
  extraReducers: (builder) => {
    // kita disini akan menggunakan si builder untuk membaut seluruh case
    // dari promise yang  bisa ternjadi
    builder
      // builder punya fungsi bernama addCase
      .addCase(userAsync.pending, () => {
        console.log("lagi nunggu data user nih");
      })
      .addCase(userAsync.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(userAsync.rejected, () => {
        console.log("gagal comot data nihh");
      });
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
