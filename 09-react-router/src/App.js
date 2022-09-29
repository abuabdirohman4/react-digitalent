import React from "react";
import "./style.css";
// Perhatikan di sini kita import Routes, Route, Link
// Routes = Seluruh Rute yang bisa didefinisikan
// Route = satuan rute yang didefinisikan
//    (ketika pathnya ke mana, akan memanggil component apa)
// Link = anggap seperti anchor (<a></a>), namun untuk Router
import { Routes, Route, Link } from "react-router-dom";
import CustomForm from "./components/CustomForm";

export default function App() {
  return (
    <div className="App">
      <h1>Salam dari React Router!</h1>
      {/* Definisikan Routes di sini */}
      <Routes>
        {/* Di sini kita mendefinisikan path / akan memanggil Component Home */}
        <Route path="/" element={<Home />} />
        {/* Di sini kita mendefinisikan path /about akan memanggil Component About */}
        <Route path="about" element={<About />} />
        {/* Misalnya di sini kita menggunakan satu route lagi */}
        <Route path="formulir" element={<CustomForm />} />
      </Routes>
    </div>
  );
}

// Sangat tidak disarankan membuat multi component di App.js
// Hanya untuk pembelajaran belaka yah !
function Home() {
  return (
    <>
      <main>
        <h2>Halo dari Homepage</h2>
        <p>Mari belajar Routing, yuk yuk yuk !</p>
      </main>
      <nav>
        {/* Ini adalah anchor nya untuk Route */}
        <Link to="/about">About</Link>
        {/* Kita tambahkan untuk ke Form */}
        <Link style={{ marginLeft: 10 }} to="/formulir">
          Form
        </Link>
      </nav>
    </>
  );
}

// Sangat tidak disarankan membuat multi component di App.js
// Hanya untuk pembelajaran belaka yah !
function About() {
  return (
    <>
      <main>
        <h2>Siapakah pembuat halaman ini?</h2>
        <p>Duh, ga usah diragukan lagi, orang ga jelas !</p>
      </main>
      <nav>
        {/* Ini adalah anchor nya untuk Route */}
        <Link to="/">Home</Link>
        <Link style={{ marginLeft: 10 }} to="/formulir">
          Form
        </Link>
      </nav>
    </>
  );
}
