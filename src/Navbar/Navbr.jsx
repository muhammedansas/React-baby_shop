import React, { useContext,useState } from 'react'
import { Button,Container,Form,Nav,NavLink,Navbar } from 'react-bootstrap'
import {MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem, MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter, } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import "./Navbr.css"
import { Addcontext } from '../App';
import { TbLogout2 } from "react-icons/tb";

function Navbr() {
  
  
  const [staticModal, setStaticModal] = useState(false);

  const toggleOpen = () => setStaticModal(!staticModal);
    const nav = useNavigate()
    const {dummyitem,user,setUser,setIword} = useContext(Addcontext)
    const Search = (e)=>{
      e.preventDefault()
      let word = e.target[0].value
      let words = dummyitem.filter((x)=>x.title.includes(word))
      if (words[0]!==undefined){
        setIword(words)
        nav('/search')
      }else {
        alert("item not fount")
      }
    }
    const logout = ()=>{
      
      setUser(null)
      nav("/")
    }
    
    return (
      <div>
        <Navbar expand="lg" className="nav-main fixed-top" >
          <Container fluid  >
            <div >
              <img style={{width:"50px",height:"50px"}} src='https://img.freepik.com/free-vector/detailed-baby-logo-template_23-2148780976.jpg'/>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              > 
                <Nav.Link onClick={()=>nav('/')} className='nav-color'>Home</Nav.Link>
                <Nav.Link onClick={()=>nav('/shop')} className='nav-color'>Shop</Nav.Link>
                <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link nav-color' role='button'>  </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link onClick={()=>nav('/gear')}>Baby Gear</MDBDropdownItem>
                  <MDBDropdownItem link onClick={()=>nav('/toys')}>Toys</MDBDropdownItem>
                  <MDBDropdownItem link onClick={()=>nav('/dresses')}>Baby Dresses</MDBDropdownItem>
                  <MDBDropdownItem link onClick={()=>nav('/skincare')}>Skin Care</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
                <div style={{width:"10px"}}>
                
               </div>
                <Nav.Link onClick={()=>nav('/about')} className='nav-color'>About Us</Nav.Link>
                <Nav.Link onClick={()=>nav('/contact')} className='nav-color'>Contact Us</Nav.Link>
              </Nav>
              <Form className="d-flex" style={{marginRight:"30px"}}  onSubmit={Search}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  
                />
                <MDBBtn color='black' className='search-icon'>🔍</MDBBtn>
              </Form>
              
                <NavLink onClick={()=>nav(user?'/':'/login')} style={{marginRight:"30px"}}>
          
              {!user? <FaUser />:<><TbLogout2 onClick={toggleOpen} />  {   user.name}</>}
              
              </NavLink>

              <NavLink onClick={()=>nav(user?'/cart':'/login')} style={{marginRight:"30px"}}>
                
                <FaCartShopping />
              
              </NavLink>
            
            </Navbar.Collapse>
            
          </Container>
          
        </Navbar>
        <div style={{marginLeft:"350px"}}>
         <div>

          <MDBModal staticBackdrop tabIndex='-1' open={staticModal} setOpen={setStaticModal}>
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Modal title</MDBModalTitle>
                  <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>Are you want to Logout</MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color='secondary' onClick={toggleOpen}>
                    Close
                  </MDBBtn>
                  <MDBBtn onClick={()=>{logout();toggleOpen()}}>Loge out</MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
         </div>
        </div>
        </div>
        
        
        
      );
}

export default Navbr