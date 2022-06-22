import './App.css';
import { useEffect, useState } from 'react';

// const Person = (props) => {
//   return (
//     <>
//       <h1>Nome: {props.name}</h1>
//       <h1>Apelido: {props.nickname}</h1>
//       <h1>Idade: {props.age}</h1>
//       <hr />
//     </>
//   )
// }

const App = () => {
  // const name = 'Neymar'
  // const isNameShowing = true

  // Array destruction. Primeira parte: Nome. Segunda: função.
  // useState recebe o valor inicial 0.
  const [counter, setCounter] = useState(0);

  //Array de dependencias monitora a variavel que foi alterada e
  //executa o codigo
  useEffect(() => {
    alert('O contador foi alterado para o numero:' + counter)
  }, [counter])

  return (
    <div className="App">
      {/* <h1>Hello, {isNameShowing ? name : 'Guest'}!</h1> */}
      {/* <Person name={'Jose'} nickname={'Pepe'} age={88+2}/>
      <Person name={'Edson'} nickname={'Pele'} age={90}/>
      <Person name={'Leonardo'} nickname={'Léo'} age={40}/> */}
      <button 
      onClick={() => setCounter((prevCount) => prevCount - 1)}
      >-</button>
      <h1>{counter}</h1>
      <button
      onClick={() => setCounter((prevCount) => prevCount + 1)}
      >+</button>
    </div>
  );
}

export default App;
