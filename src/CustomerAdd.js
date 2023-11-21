import userEvent from '@testing-library/user-event';
import React, { useState } from 'react'
import {addCustomer as addCustomerAction} from './customerSilce'
import { useDispatch } from 'react-redux';


const CustomerAdd = () => {
    const [input , setInput] = useState('');
    // const [customers, setCustomers] = useState([]);
    const dispatch = useDispatch();

    function addCustomer(){
        if(input){
            // setCustomers((previousState)=> [...previousState,input])
            dispatch(addCustomerAction(input))
            setInput('');
        }
    }
  return (
    <div>
        <h3>Add New Customer</h3>
        <input type='text'value={input} onChange={(e)=>setInput(e.target.value)} style={{textDecoration:'none'}}/>
        <button onClick={addCustomer}>Add</button>
    </div>
  )
}

export default CustomerAdd