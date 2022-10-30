import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsLinkedin, } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
  const links = [
    {
      title: "Contato",
      data: [<a href="tel:+12023459999" class="item-link">(54) 3046-6350</a>, <a href="mailto:supportvast@gmail.com" class="item-link">atendimento@razorcomputadores.com.br</a>, <p>Rua Dr. Plínio Moura, 153C</p>, <p>Vila Planaltina - 99062-340</p>, <p>Passo Fundo/RS</p>,],
    },
  ];
  const socialLink = [
    <a href="https://pt-br.facebook.com/razorcomp/"><BsFacebook /></a>,
    <a href="https://mobile.twitter.com/razorbrasil"><BsTwitter /></a>,
    <a href="https://www.linkedin.com/company/razor-computadores-do-brasil"><BsLinkedin /></a>,
    <a href="https://www.youtube.com/c/RazorComputadores"><FaYoutube /></a>,
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
