import { useState } from "react";

export default function UseSwitch() {

    const [stato, useStato] = useState(false)

    const handleChange = () => {
        useStato(prevState => !prevState);
    }

    return [stato, handleChange]


}

