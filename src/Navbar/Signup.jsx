import React, { useContext, useRef } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { Addcontext } from '../App';
import "./Signup.css"
 

function Signup() {
  const {data,setData,nav} = useContext(Addcontext)
  const inputRef = useRef(null)
  const handlesubmit = () =>{
    let username = inputRef.current.username.value;
    let email = inputRef.current.email.value;
    let password = inputRef.current.password.value;
    let repassword = inputRef.current.repassword.value;
    if(password===repassword){
      setData([...data,{name:username,email:email,password:password,cart:[]}])
      nav('/login')
    }else{
      alert("password dosent match")
    }
  }
  console.log(data);

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://media.istockphoto.com/id/1294603953/vector/abstract-black-stripes-diagonal-background.jpg?s=612x612&w=0&k=20&c=nQZHTk-o97cNVqWnUe8BJg0A5jQG0tqylquzbt9YtcQ=)'}}>
      <div className='mask gradient-custom-3'></div>
      <form action='' ref={inputRef} onSubmit={handlesubmit}>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' name='username' required pattern='[A-Za-z]*' minLength={4} maxLength={16}  />
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' name='email' required/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' name='password' required pattern='[A-Za-z0-9]*' minLength={4} maxLength={16}/>
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' name='repassword' required pattern='[A-Za-z0-9]*'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4 signup' size='lg'  color='black' rippleColor='light'>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </form>
    </MDBContainer>
  )
}

export default Signup