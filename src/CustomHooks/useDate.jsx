//import usestate e useeffect da react
import { useState, useEffect } from "react";

export default function useDate() {

    //variabile di stato per data e ora da aggiornare
    const [dateTime, setDateTime] = useState({
        data: new Date().toLocaleDateString(),
        ora: new Date().toLocaleTimeString()
    });

    //montaggio componente una sola volta
    useEffect(() => {

        //utilizzo di set interval per aggiornare la data ogni secondo
        const intervallo = setInterval(() => {
            const oraAttuale = new Date();
            //aggiorniamo la variabile di stato con la data in stringa
            setDateTime({
                data: oraAttuale.toLocaleDateString(),
                ora: oraAttuale.toLocaleTimeString()
            });
        }, 1000);

        //reset timer per non continuare l'operazione anche allo smontare del componente
        return () => clearInterval(intervallo)

    }, [])

    //dati da ritornare per utilizzare il custom hook
    return dateTime;


}