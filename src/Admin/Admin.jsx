import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function Admin() {
    const nav = useNavigate()
  return (
    <div style={{backgroundImage:'url(https://media.istockphoto.com/id/1294603953/vector/abstract-black-stripes-diagonal-background.jpg?s=612x612&w=0&k=20&c=nQZHTk-o97cNVqWnUe8BJg0A5jQG0tqylquzbt9YtcQ=)'}}>
    <Container style={{height:"90vh",width:"100%",display:"flex",justifyContent:"center"}}>
    <div style={{width:"400px"}}>
      <div style={{marginTop:"160px",display:"flex",justifyContent:"center",color:"white"}}>
      <h1 >Admin Page</h1>
      <h4></h4>
      </div>
      <div style={{display:"flex",justifyContent:"space-evenly", marginTop:"50px",}} >
      <MDBBtn className='single-btn' color='light' rippleColor='black'  onClick={()=>nav('/users')}>users</MDBBtn>
      
      <MDBBtn className='single-btn' color='light' rippleColor='black' onClick={()=>nav('/productsview')}>products</MDBBtn>
     </div>
    </div>
    </Container>
    </div>
  )
}

export default Admin