import React from "react";
import Card from "./Card";
import cpu from "../assets/cpu.png";
import gpu from "../assets/gpu.png";
import ram from "../assets/ram.png";
import banner from "../assets/banner.png";

export default function Free() {
  return (
    <div className="container">
      <div className="free">
        <div className="img-fluid">
          <img src={banner} alt="icon" />
        </div>
        <div className="description">
          <h2>Equipe de Ponta</h2>
          <p className="p">Com excelência para lhe atender!</p>
        </div>
      </div>
    </div>
  );
}
