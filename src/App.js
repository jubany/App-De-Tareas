import './App.css';
import FreecodecampLogo from '../src/imagenes/Freecodecamp-logo.png'
import ListOfHomeworks from './components/ListoOfHomeworks';

function App() {
  return (
      <div className='aplication-homework'>
        <div className='logo-container'>
          <img
          src={FreecodecampLogo}
          className='logo'
          alt='imagen logo'/>
        </div>
      <div className='list-homework-main'>
        <h1>My homeworks</h1>
        <ListOfHomeworks/>
      </div>
      </div>
  );
}

export default App;
