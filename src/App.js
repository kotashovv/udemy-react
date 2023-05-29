import logo from './logo.svg';
import './App.css';
import React, {StrictMode} from 'react';


const Header = ()=>{
  return(
      <h2>
        Hello World
      </h2>
  )
};


class Field extends React.Component {
  render(){
    const holder = "Введите текст";
    const styleField = {
      width: '300px'
    }
    return  <input
        style={styleField}
        placeholder={holder}
        type='text'/>
  }
}

function Btn(){
  const text = 'log in';
  const logged = false;
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <StrictMode>
          <Header/>
          <Field/>
          <Btn/>
      </StrictMode>
    </div>
  );
}

export {Header};
export default App;
