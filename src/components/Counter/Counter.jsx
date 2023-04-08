import {useState} from 'react';

function Сounter({setNewId, setNewTime, id}) {
    const [time, setTime] = useState(1);
    function increment(){
      setTime(time+1)
      setNewTime(time+1)
    }

    function decrement(){
      setTime(time-1)
      setNewTime(time-1)
    }

  return (
    <div className="counter">
      <div>Time: {time} hour/s</div>
      <button onClick={()=>{increment();setNewId(id)}} >Increment</button>
      {time===0
      ?<button disabled>Decrement</button>
      :<button onClick={()=>{decrement();setNewId(id)}}>Decrement</button>}
    </div>  
    );
} 

export default Сounter;
