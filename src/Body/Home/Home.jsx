import React from 'react'
import { IoIosPricetags } from "react-icons/io";
import { MDBBtn } from 'mdb-react-ui-kit';
import "./Home.css"
import { useNavigate } from 'react-router-dom';

function Home() {
  const backgroundImageUrl ='url(https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1647262207/content-items/010/843/025/09NbL%25203-original.jpg?1647262207)'
   const containerStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: 'cover', // You can adjust this property as needed
    backgroundPosition: 'center', // You can adjust this property as needed
    width: '100%',
    height: '120vh  ', // Set the height as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  
  const nav = useNavigate()
  return (
    <div>
      <div style={{backgroundImage:'url(https://media.istockphoto.com/id/1294603953/vector/abstract-black-stripes-diagonal-background.jpg?s=612x612&w=0&k=20&c=nQZHTk-o97cNVqWnUe8BJg0A5jQG0tqylquzbt9YtcQ=)',width:"100%"}}></div>
    <div style={containerStyle} >
      
    <div className='home-top' >
      <h6><IoIosPricetags />Flat 100% Off + Cashback! * </h6>
      <br/>
      <h1 style={{fontSize:"32px"}}>Baby Essential Fashion & Nursery</h1>
      <h6 style={{fontSize:"17px"}} >
      Fermentum, cursus ultrices porttitor tincidunt suscipit quam facilisis<br/> sit massa pellentesque mi quis elit elementum tristique urna.<br/>
      </h6>
      <br/>
      <h6>* Enim cras quam et nullam risus nec tincidunt mattis nunc.</h6>
      <div className='home-top-btn'>
      <MDBBtn className='home-btn' color='white' onClick={()=>nav('/shop')}>
        shop now
      </MDBBtn>
      </div>
    </div>
    </div>
    <div>

    </div>
    </div>
  )
}

export default Home