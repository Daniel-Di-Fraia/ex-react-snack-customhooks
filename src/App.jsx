import './App.css'

//importazione customhooks
import useSwitch from './CustomHooks/useSwitch';
import useDate from './CustomHooks/useDate';
import useCustomPointer from './CustomHooks/useCustomPointer';
import useKeyPress from './CustomHooks/useKeyPress';

function App() {

  //on e off
  const [isOn, toggle] = useSwitch();

  //data aggiornata ogni secondo
  const currentDate = useDate();

  //puntatore personalizzato
  const customPointer = useCustomPointer("🔥");

  //tasto premuto
  const isEnterPressed = useKeyPress("Enter");

  return (
    <>
    {/* snack 1 */}
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
    {/* snack 2 */}
      <div>
        <h1>Data e ora attuali:</h1>
        <h2>{currentDate.data}</h2>
        <h2>{currentDate.ora}</h2>
      </div>
    {/* snack 3 */}
      <div>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        {customPointer}
      </div>
    {/* snack bonus */}
      <div>
      <h1>Tieni premuto "Enter" per testare il custom hook</h1>
      <p>{isEnterPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
    </div>
    </>
  )
}

export default App
