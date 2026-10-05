import { useEffect, useState } from "react";
import "./style.css";
import axios from 'axios';

function App() {
    const[jokes, setJokes] = useState([])

    useEffect(() =>{
        axios.get('/api/jokes')
        .then((response) =>{
            setJokes(response.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    })
  return (
    <>
      <h1>Hello World</h1>
      <p>JOKES:{jokes.length}</p>

      {
        jokes.map((joke, index) =>(
            <div key={joke.id}>
                <h3>{joke.title}
                    <p>{joke.content}</p>
                </h3>

            </div>
        ))
      }
    </>
  );
}

export default App;