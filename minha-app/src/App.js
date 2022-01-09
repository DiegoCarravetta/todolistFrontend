import './App.css';
import Contador from './components/Contador/Contador';
import Button from './components/Button/Button';
import List from './components/List/List';
import React, {useState} from 'react';

function App() {

  //Objeto na memória
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      titulo: 'Terminar o Projeto',
      descricao: 'Projeto final',
      propriedade: 'Alta',
      status: 'Fazendo',
      prazo: '11/12/2022',
      dataCriacao: '03/01/2022'
    },
    {
      id: 2,
      titulo: 'Terminar o Projeto',
      descricao: 'Projeto final',
      propriedade: 'Alta',
      status: 'Fazendo',
      prazo: '11/12/2022',
      dataCriacao: '03/01/2022'
    }
  ]);

  //Recebe o que o usuário digitou
  const handleSubmit = (evento) => {
    evento.preventDefault();

    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value;
    const propriedade = evento.target.propriedade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;

    setTarefas([
      ...tarefas,
      {
        id: tarefas.length + 1,
        titulo: titulo,
        descricao: descricao,
        propriedade: propriedade,
        status: status,
        prazo: prazo
      }
    ])
  }

  return(
    <div>
      <h1>Olá Blumers</h1>
      <Contador titulo='Blue'/>
      <Button text='Nome botão' estilo='normal'/>
      <Button text='Botão 2' estilo='erro'/>
      <Button text='Botão 3' estilo='sucesso'/>

      //Formulário para pegar informações do usuário
      <form onSubmit={handleSubmit}>
        <input type='text' id='titulo' name='titulo' placeholder='Título da tarefa'/>
        <input type='text' id='descricao' name='descricao' placeholder='Descrição da tarefa'/>
        <input type='text' id='propriedade' name='propriedade' placeholder='Propriedade da tarefa'/>
        <input type='text' id='status' name='status' placeholder='Situação da tarefa'/>
        <input type='date' id='prazo' name='prazo' placeholder='Prazo da tarefa'/>
        <button type='submit'>Enviar</button>
      </form>

      <List dados={tarefas}/>
    </div>
  );
}

export default App;
