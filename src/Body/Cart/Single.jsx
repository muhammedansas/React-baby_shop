import React, { useContext, useState } from 'react'
import { Addcontext } from '../../App'
import "./Single.css"
import { useNavigate, useParams } from 'react-router-dom'
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardImage,MDBBtn,MDBRow,MDBCol} from 'mdb-react-ui-kit';

function Single() {
  
    const {dummyitem,user,nav} = useContext(Addcontext)
    const {id} = useParams()
    let Singleparam = dummyitem.find((x)=>x.id==id)

    function addcart(single){
      if (user)
      {let cartData = user.cart.find((item)=>item.id===single.id)
      if(!cartData){
        user.cart.push(Singleparam)
        
      }else{
        cartData.qty += 1
        
      }}else{nav('/login')}
  
    }
   
  return (
    <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',backgroundImage:'url(https://media.istockphoto.com/id/1294603953/vector/abstract-black-stripes-diagonal-background.jpg?s=612x612&w=0&k=20&c=nQZHTk-o97cNVqWnUe8BJg0A5jQG0tqylquzbt9YtcQ=)'}}>
    <MDBCard style={{ maxWidth: '1140px' ,marginTop:'110px',marginBottom:'90px',textAlign:'center'}} className='single-card'>
      <MDBRow className='g-0'>
        <MDBCol md='3' style={{marginLeft:"60px",marginTop:"80px"}} >
          <MDBCardImage src={Singleparam.image} alt='...' fluid style={{borderRadius:"10px"}}/>
        </MDBCol>
        <MDBCol md='8'> 
          <MDBCardBody>
            <MDBCardTitle><h2 style={{marginTop:'10%',color:"white"}} >{Singleparam.title}</h2></MDBCardTitle>
            <MDBCardText style={{color:"white"}}>
               <h3 style={{color:"red"}}>₹{Singleparam.price}</h3> 
             {Singleparam.description}
            </MDBCardText>
            <MDBBtn style={{width:'210px',marginRight:'20px'}} onClick={()=>nav('/shop')} outline color="primary" size="lm" className="mt-2">← BACK TO STORE
</MDBBtn>
            <MDBBtn style={{width:'210px'}} onClick={() => addcart(Singleparam)} outline color="primary" size="lm" className="mt-2">Add to Cart 🛒
</MDBBtn>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
</div>
    
  
  )
}

export default Single