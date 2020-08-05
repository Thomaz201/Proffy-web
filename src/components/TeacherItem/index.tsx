import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/60111139?s=460&v=4" alt="Lucas Thomaz" />
        <div>
          <strong>Lucas Thomaz</strong>
          <span>Italiano</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma de minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>
            R$ 300,00
          </strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;