import React from "react";
// di sini kita menggunakan useNavigate
import { useNavigate } from "react-router-dom";

function CustomForm() {
  // declare hooks di sini
  let navigate = useNavigate();

  function onFormSubmitHandler() {
    // di sini kita hanya menggunakan navigate untuk berpindah ke halaman "/", anggap seperti Link yang mengarah ke "/"
    navigate("/");
  }

  return (
    <>
      <main>
        <form onSubmit={onFormSubmitHandler}>
          <button type="submit">Submit Formulir</button>
        </form>
      </main>
    </>
  );
}

export default CustomForm;
