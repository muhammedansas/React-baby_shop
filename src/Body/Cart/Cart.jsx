import React, { useContext, useEffect, useState } from 'react'
import { Addcontext } from '../../App'
import "./Cart.css"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function Cart() {
  const {user} = useContext(Addcontext)
  const [reRender,setRerender] =useState(false)
  const add = (id)=>{
let cartData = user.cart.find((item)=>item.id==id)
cartData.qty += 1
setRerender(!reRender)
  }
  const less = (id)=>{
let cartData = user.cart.find(item=>item.id==id)
if(cartData.qty>1){
  cartData.qty -= 1
}

setRerender(!reRender)
  }
  const remove = (id)=>{
let cartData = user.cart.filter(item=>item.id!==id)
user.cart = cartData
setRerender(!reRender)
  }
console.log(user.cart.length);
 
  return (
    <div style={{backgroundColor:'green'}}>
     
        <h1>Cart is Empty Please Add cart</h1>
      <>
      <span className='cart-total' style={{width:"400px",height:"100vh",backgroundColor:"black",position:"sticky",marginLeft:"810px"}}>
      <h1>Total price</h1>
      <h1>Demo price</h1>
    </span>
    
    {user&&user.cart.map((x)=>(
      <div>
         <MDBCard style={{width:'300px',marginTop:'40px',marginLeft:'400px'}}>
      <MDBCardImage src={x.image} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{x.title}</MDBCardTitle>
        <MDBCardText>
         
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBBtn onClick={()=>add(x.id)}>+</MDBBtn>
    {x.qty}
    <MDBBtn onClick={()=>less(x.id)}>-</MDBBtn>
    <MDBBtn onClick={()=>remove(x.id)}>remove</MDBBtn>
    {x.qty * x.price}

        </div>
    ))}

  

    Total:{user&&user.cart.reduce((acc,curr)=>acc += curr.qty*curr.price,0)}
    
    </>
      </div>
  )
  
}

export default Cart