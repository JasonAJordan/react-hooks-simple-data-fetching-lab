// create your App component here
import React, { useEffect, useState} from "react";

function App() {
    const [dog, setDog] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        //.then((dogData) => console.log(dogData));
        .then((dogData) => setDog(dogData.message))
    }, [])
    

    if (dog === null) return <p>Loading...</p>

    return (
    <img src={dog} />
    )
}

export default App;