import './App.css'

//importazione customhooks
import useSwitch from './CustomHooks/useSwitch';
import useDate from './CustomHooks/useDate';

function App() {

  //on e off
  const [isOn, toggle] = useSwitch();

  //data aggiornata ogni secondo
  const currentDate = useDate();

  return (
    <>
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>

      <div>
        <h1>Data e ora attuali:</h1>
        <h2>{currentDate.data}</h2>
        <h2>{currentDate.ora}</h2>
      </div>
    </>
  )
}

export default App
