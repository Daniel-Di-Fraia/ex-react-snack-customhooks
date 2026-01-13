import './App.css'

//importazione customhooks
import useSwitch from './CustomHooks/useSwitch';
import useDate from './CustomHooks/useDate';
import useCustomPointer from './CustomHooks/useCustomPointer';

function App() {

  //on e off
  const [isOn, toggle] = useSwitch();

  //data aggiornata ogni secondo
  const currentDate = useDate();

  //puntatore personalizzato
  const customPointer = useCustomPointer("🔥");

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

      <div>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        {customPointer}
      </div>
    </>
  )
}

export default App
