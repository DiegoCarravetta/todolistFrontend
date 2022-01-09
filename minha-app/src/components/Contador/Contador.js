import React, {useState} from 'react';
import Button from '../Button/Button';

function Contador(props) {
  const [contador, setContador] = useState(0);
  const titulo = props.titulo;

  const incrementa = () => {
    setContador(contador + 1)
  }

  return (
    <div>
      <p>Meu contador {titulo}: {contador}</p>
      <Button text='incrementa' estilo='normal' click={incrementa}/>
    </div>
  )
};

export default Contador;