import './App.css';
import PrintDateMsg from './PrintDate.js';
import Message from './Message.js';
const App = () => {
  return (
    // Todo lo que hay aquí adentro es JSX, no HTML
    // Esto de abajo se llama fragment y permite no insertar elementos html
    <>
      <h1> Titulo de la APP </h1>
        <strong> Estamos trabajando en ello </strong>
      <div className="date">
        <PrintDateMsg />
        <Message message='Espero que pases un buen dia' color='green' />
        <Message message='Especialmente porque hoy es un dia especial' color='blue' />
      </div>
    </>
  );
}

export default App;
