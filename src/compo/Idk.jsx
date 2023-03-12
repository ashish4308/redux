import React from 'react'

import { useSelector ,useDispatch} from 'react-redux';
import { add } from '../store/cartSlice';

function Idk() {
    
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleAdd = (product) => {
        dispatch(add(product));
    };
    
  return (
    <div>Idk
        <div>{products.length}</div>
        <button onClick={()=>{handleAdd("sdffdv")}}>yo</button>
    </div>
  )
}

export default Idk