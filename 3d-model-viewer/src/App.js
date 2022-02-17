import React from 'react'
import Navbar from './components/Navbar/Navbar.js'
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="mv">
        <model-viewer id="model" camera-controls src="Miami_Street_web.glb">
        </model-viewer>
      </div>
    </div>
  );
}
