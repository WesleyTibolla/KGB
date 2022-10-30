import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  const links = [
    {
      title: "Contato",
      data: [<a href="tel:+12023459999" class="item-link">(54) 3046-6350</a>, <a href="mailto:supportvast@gmail.com" class="item-link">atendimento@razorcomputadores.com.br</a>, <p>Rua Dr. Plínio Moura, 153C</p>, <p>Vila Planaltina - 99062-340</p>, <p>Passo Fundo/RS</p>,],
    },
  ];
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
    <FaTiktok />,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Razor do Brasil LTDA</span>
      </div>
    </footer>
  );
}
