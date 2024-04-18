import './App.css';
import { useState } from 'react';

const App4 = () => {

    const[color,setColor]=useState("red");
    const[colors,setColors]=useState(["blue","yellow"]);


  return (

    <div className="App">
     
     {color}
     {colors}

     <button onClick={()=>setColor("brown")}>newColor</button>
     <button onClick={()=>setColors(["dark","dark"])}>newColors</button>



    </div>
  );
}

export default App4;