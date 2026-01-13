import { useEffect, useState } from "react";

export default function useKeyPress(tasto) {

    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {

        const keyDown = (e) => {
            if (e.key === tasto) {
                setIsPressed(true);
            }
        };
        window.addEventListener('keydown', keyDown);
        const keyUp = (e) => {
            if (e.key === tasto) {
                setIsPressed(false);
            }
        };
        window.addEventListener('keyup', keyUp);

        return () => { 
            window.removeEventListener('keydown',keyDown);
            window.removeEventListener('keyup',keyUp);
        }

    }, [tasto]);

    return isPressed;


}

