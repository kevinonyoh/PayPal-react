import React, {useState} from 'react' 
import PayPal from './PayPal'
import "./styles.css";

export default function App() {
  const [checkout,setCheckout] = useState(false)
  return (
    <div className="App">
    {checkout ?  <PayPal /> :
     <button onClick={()=>{
       setCheckout(true)
     }}>checkout</button>
    
    }
    </div>
  );
}
