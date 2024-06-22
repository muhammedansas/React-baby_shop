import React, { useContext, useRef } from 'react'
import './Login.css'
import {
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBCardBody,
  MDBCard

}
from 'mdb-react-ui-kit';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Addcontext } from '../App';
import Swal from 'sweetalert2'
function Login() {
  const {data,nav,setUser}=useContext(Addcontext)
  const inputref = useRef(null)
  const submit = (e) =>{
    e.preventDefault()
    console.warn(data);
    let name = inputref.current.name.value
    let password = inputref.current.password.value
    console.log(name,password);
    let userData = data.find((item)=>item.name==name&&item.password==password)
    if(userData){
      setUser(userData)
      nav('/')
      Swal.fire({
        icon:'success',
        title:'Login Success',
        showConfirmButton:false,
        timer :1500,
      })
      // alert("Successfully logined")
    }else if(name=="ansas"&&password==12345){
      alert("Admin page now in use")
      nav('/admin')
    }else{
      // alert('Does not mach')
      Swal.fire({
        icon:'warning',
        text:"please try againe",
        title:'Login Failed',
        confirmButtonText:'ok'
      })
    }
  }
  
  return (
    <div>
      <form ref={inputref} onSubmit={submit}>
    <MDBContainer fluid className='login-main d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://media.istockphoto.com/id/1294603953/vector/abstract-black-stripes-diagonal-background.jpg?s=612x612&w=0&k=20&c=nQZHTk-o97cNVqWnUe8BJg0A5jQG0tqylquzbt9YtcQ=)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Log in</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' name="name" required pattern='[A-Za-z]*' minLength={4} maxLength={16} />
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' name="password" required pattern='[A-Za-z0-9]*' minLength={4} maxLength={16}/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>


          <div style={{display:"flex",justifyContent:"center"}}>
          <MDBBtn type='submit' className='log-in' color='black' rippleColor='light'>Log in</MDBBtn>
          </div>

          
          <div style={{marginTop:"30px",marginLeft:"70px"}}><p>Not a member? <Link to='/signup'>Register here</Link></p></div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </form>
    
  </div>
  )
}

export default Login