import React, { useState } from 'react';
import './style.css';

// Import Component
import FirstComponent from './components/FirstComponent.jsx';
import SecondComponent from './components/SecondComponent.jsx';

export default function App() {
  // position bila 'A' = Component FirstComponent
  // position bila 'B' = Component SecondComponent

  // by default di sini kita menggunakan Component Pertama
  const [position, setPosition] = useState('A');

  // Di sini kita membuat sebuah fungsi yang menerima event dan
  // posisi yang ingin dituju
  const linkOnClickHandler = (event, pos) => {
    console.log(event);
    event.preventDefault();
    setPosition(pos);
  };

  return (
    <div>
      <h1>React Navigation - Intro</h1>
      {/* Link */}
      <span style={{ display: 'flex', gap: '0.5em' }}>
        {/* 
          Perhatikan di sini kita menggunakan function sendiri di dalam
          onClick agar bisa melempar data yang diinginkan 'A' / 'B'
         */}
        <a href="#" onClick={(event) => linkOnClickHandler(event, 'A')}>
          Component A
        </a>
        <a href="#" onClick={(event) => linkOnClickHandler(event, 'B')}>
          Component B
        </a>
      </span>

      {/* Conditional Rendering */}
      {position === 'A' ? <FirstComponent /> : <SecondComponent />}
    </div>
  );
}
