import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://portfolio-matheus.netlify.app/" target="blank">
        <img src="https://fontmeme.com/permalink/200802/484e03d36b99eec22e03c4cfec758034.png" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/" target="blank">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}



export default Footer;
