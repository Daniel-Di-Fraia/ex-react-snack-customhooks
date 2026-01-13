//import usestate e useeffect da react
import { useState, useEffect } from "react";

export default function useCustomPointer(obj) {

    //variabile di stato per la posizione del mouse
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    //comp che si monta una sola volta, evento per aggiornare coordinate puntatore
    useEffect(() => {

        const handleMouseMove = (e) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };

    }, []);

    const CursoreVisuale = (
        <div style={{
            position: 'fixed',
            top: mouse.y,
            left: mouse.x,
            transform: 'translate(-50%, -50%)',
            fontSize: '50px',
            cursor: 'none'
        }}>
            {obj}
        </div>
    );


    return CursoreVisuale;


}

