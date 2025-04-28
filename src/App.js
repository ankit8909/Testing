import { useState } from "react";
import "./App.css";
import './index.css'
import Home from "./Components/Home";


function App() {
 const [data, setData] = useState()
  return (
    <>
      {/* <h1>hello world</h1>
      <p>ankit kumar</p>

      <input type="text" placeholder="Enter your name" name="ankit" id="myname"  value={data} onChange={(e)=>setData(e.target.value)} />

      <img
        src="/assets/360_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg"
        height={150}
        width={159}
        alt=""
        title="my img "
        
      /> */}


      <h1 className="clk"> Test click event with button  </h1>
      <button onClick={()=>setData("updated data is here")}>Updates</button>
       <h3 className="clks"> {data} </h3>
       <Home />

    </>
  );
}

export default App;
