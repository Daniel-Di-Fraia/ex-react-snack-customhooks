import { useState } from "react";

export default function useSwitch() {

    const [stato, useStato] = useState(false)

    const handleChange = () => {
        useStato(prevState => !prevState);
    }

    return [stato, handleChange]


}

