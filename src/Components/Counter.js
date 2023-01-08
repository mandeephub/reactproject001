import { useState } from 'react';
const Counter = () => {

    const [Mycount, setMycount] = useState(0);

    const increment = () =>{
        setMycount(Mycount+1);
    }

    const decrement = () =>{
        if(Mycount === 0){
            alert('Sorry! Please increment the counter')
        }
        else{
            setMycount(Mycount-1);
        }
    }

    const reset = () => {
         setMycount(0);   
    }

    return (  

       <div className="counter_box">

            <div className='count'>{Mycount}</div>
            <div className='count_action'>
                <button className='btn-large' onClick={increment}>Increment</button>
                <button className='btn-large' onClick={decrement}>Decrement</button>
                <button className='btn-large' onClick={reset}>Reset</button>
            </div>
       </div>       

    );
}
 
export default Counter ;