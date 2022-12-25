// 1 - user (nama dari usernya itu siapa - string)
// 2 - counter (angkanya ada berapa - integer)
export const initialValue = {
  user: "Abu",
  counter: 100000,
};

export const rootReducer = (state, action) => {
  // tipeAksi  namanya harus "type"
  // sehingga action wajib punya property namanya "type "
  // "increment" untuk menambahkan counter (+1)
  // "decrement" untuk mengurangi counter (-1)
  // "incrementSpec" untuk menambahkan counter sejumlah "amount" (+ amount)
  // "decrementSpec" untuk mengurangi counter sejumlah "amount" (- amount)
  // "reset" untuk membuat counter jadi 0

  if (action.type === "increment") {
    // return counter + 1;
    // state itu HARUS IMMUTABLE (tidak boleh di reassign)

    // mengembalikan suatu object yang baru
    return {
      ...state, // ini sisinya seluruh state yang lama, yg punya property
      counter: state.counter + 1,
    };
  } else if (action.type === "decrement") {
    return { ...state, counter: state.counter - 1 };
  } else if (action.type === "incrementSpec") {
    return { ...state, counter: state.counter + action.amount };
  } else if (action.type === "decrementSpec") {
    return { ...state, counter: state.counter - action.amount };
  } else if (action.type === "reset") {
    return { ...state, counter: 0 };
  }
  // HARUS PUNYA SUATU DEFAULT ACTION
  else {
    return state;
  }
};
