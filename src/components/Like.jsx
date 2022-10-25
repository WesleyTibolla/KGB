import React from "react";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={home1} alt="eth1" />
          </div>
          <h2 className="title">Suporte nacional e garantia de dar inveja</h2>
          <p className="description">
            Na Razor você tem um pós-venda que funciona de verdade.
          </p>
          <p className="description">
            Nosso nível de satisfação é de dar inveja para os concorrentes
            gringos.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={home2} alt="eth2" />
          </div>
          <h2 className="title">
            As workstations que não tem medo de pegar no pesado
          </h2>
          <p className="description">
            Máquinas para uso em computação gráfica, renderização profissional,
            simulações em realtime, análises complexas de dados e softwares de
            alta exigência.
          </p>
          <p className="description"></p>
        </div>
      </div>
    </div>
  );
}
