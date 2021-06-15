import { Divider } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import appStore from "../../assets/img/app-store.png";
import facebook from "../../assets/img/facebook.png";
import googlePlay from "../../assets/img/google-play.png";
import instagram from "../../assets/img/instagram.png";
import youtube from "../../assets/img/youtube.png";
import "./style.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="wrapper">
          <div className="main">
            <span>Baixe nosso app</span>
            <div>
              <Link to="https://play.google.com/store">
                <img src={googlePlay} alt="Google Play" />
              </Link>
              <Link to="https://www.apple.com/br/app-store/">
                <img src={appStore} alt="App Store" />
              </Link>
            </div>
          </div>
          <div className="main">
            <span>Siga nas redes</span>
            <div>
              <Link to="https://www.facebook.com/">
                <img src={facebook} alt="Facebook" />
              </Link>
              <Link to="https://www.instagram.com/">
                <img src={instagram} alt="Instagram" />
              </Link>
              <Link to="https://youtube.com/">
                <img src={youtube} alt="Youtube" />
              </Link>
            </div>
          </div>
        </div>
        <div className="footerText">
          <div>
            <span>FILMES ONLINE - ASSISTIR FILMES - FILMES ONLINE GRÁTIS</span>
            <span>Filmes Online - Assistir Filmes Online - Filmes Online Grátis - Filmes Comspanletos Dublados</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper odio a felis tincidunt, a euismod orci
            tincidunt. Fusce eget elit magna. Integer eget justo ornare, auctor turpis non, mollis lacus. Vestibulum
            suscipit molestie lectus viverra hendrerit. Phasellus convallis arcu sed egestas tristique. Donec at tortor
            a sem viverra cursus. Cras vel rutrum lacus, quis condimentum velit. Praesent eu nisi imperdiet, commodo
            elit nec, aliquam leo. Vivamus non mauris at libero tempor convallis ac in velit.
          </p>
        </div>
        <Divider className="divider" variant="middle" />
        <div className="rights">
          2019 © Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}