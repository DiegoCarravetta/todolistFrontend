import React from "react";
import './List.css';

const List = (props) => {
  const dados = props.dados;
  return (
    <ul className='dados'>
      {dados.map((dado) => (
        <li key={dado.id}>
          <div className='dados'>
            <h3 className='titulo'>Título: {dado.titulo}</h3>
            <h3 className='descricao'>Descrição: {dado.descricao}</h3>
            <h3 className='propriedade'>Propriedade: {dado.propriedade}</h3>
            <h3 className='status'>Status: {dado.status}</h3>
            <h3 className='prazo'>Prazo: {dado.prazo}</h3>
            <h3 className='dataCriacao'>Data de Criação: {dado.dataCriacao}</h3>
          </div>
        </li>
      ))};
    </ul>
  )
}

export default List;