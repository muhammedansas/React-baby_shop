import React, { useContext } from 'react'
import {   MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { Addcontext } from '../../App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./Shop.css"

function Shop() {
  const {type} = useParams()
  const nav = useNavigate()
  const {dummyitem,iword,user,setUser} = useContext(Addcontext)

  const Dummycard = dummyitem.filter((x)=>x.type===type)


  return (
    <div style={{backgroundImage: 'url(https://media.istockphoto.com/id/1294603953/vector/abstract-black-stripes-diagonal-background.jpg?s=612x612&w=0&k=20&c=nQZHTk-o97cNVqWnUe8BJg0A5jQG0tqylquzbt9YtcQ=)'}}>
      <div style={{display:"flex",justifyContent:"center",cursor:"pointer",paddingTop:"40px"}}>
      <MDBListGroup horizontal>
        <MDBListGroupItem onClick={()=>nav('/gear')} className='shop-list'>Baby gear</MDBListGroupItem>
        <MDBListGroupItem onClick={()=>nav('/toys')} className='shop-list'>Toys</MDBListGroupItem>
        <MDBListGroupItem onClick={()=>nav('/dresses')} className='shop-list'>baby dresses</MDBListGroupItem>
        <MDBListGroupItem onClick={()=>nav('/skincare')} className='shop-list'>skin care</MDBListGroupItem>
      </MDBListGroup>
      </div>
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {(type==undefined?iword:type!=="shop"?Dummycard:dummyitem).map((items)=>(
        
        <MDBContainer fluid >
          
        <MDBRow className="justify-content-center mb-0" >
        <MDBCol md="12" xl="11" >
          <MDBCard className=" mt-5 mb-3" >
          <div className='shop-card'>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src={items.image}
                      fluid
                      style={{width:"170px",height:"170px"}}
                      className=""
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                
                <MDBCol md="6" style={{color:"white"}}>
                  
                  <h5>{items.title}</h5>
                  <div className="d-flex flex-row">
                  <div className="text-danger mb-1 me-2">
  <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStar} />
</div>
                    <span>310</span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>100% cotton</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Best finish
                      <br />
                    </span>
                  </div>
                  <div className="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span className="text-primary"> • </span>
                    <span>For men</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Casual
                      <br />
                    </span>
                  </div>
                  <p className="text-truncate mb-4 mb-md-0">
                    {items.description}
                  </p>
                  
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1" style={{color:"white"}}>${items.price}</h4>
                    <span className="text-danger">
                      <s>${items.dummyprice}</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn size="sm" className='shop-btn' onClick={()=>nav(`/${type}/${items.id}`)} >
                      Show
                    </MDBBtn>
                    <MDBBtn size="sm" className="shop-btn mt-2">
                      Add to Cart
                    </MDBBtn>
                  </div>
                  
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
            </div>
          </MDBCard>
          
        </MDBCol>
        
      </MDBRow>
     
      </MDBContainer>
      
      ))}
    </div>
   
    <div>
      

    {(type=="gear")?<>
        <MDBBtn style={{marginLeft:"60px",marginTop:"30px"}}>1</MDBBtn>
        <MDBBtn style={{marginLeft:"20px",marginTop:"30px"}} onClick={()=>nav('/shop2')}>2</MDBBtn>
        <MDBBtn style={{marginLeft:"20px",marginTop:"30px"}} onClick={()=>nav('/shop2')}>-</MDBBtn>
        </>:null
    }
    
    </div>
    </div>
    
  )
}

export default Shop