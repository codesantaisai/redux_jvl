import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomer } from './customerSilce'

const CustomerView = () => {
const customers = useSelector((state)=>state.customers)
const dispatch =useDispatch();

  function deleteHandler (index){
      dispatch(deleteCustomer(index))
  }

  return (
    <div>
        <h3>Customer list</h3>
        <ul>
            {customers.map((customer,index)=>
            <li>
                {customer}<button onClick={()=>deleteHandler(index)}>Delete</button>
            </li>
            )}
            
        </ul>
       
    </div>
  )
}

export default CustomerView