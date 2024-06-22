import React, { useContext,useRef,useState } from 'react'
import { Addcontext } from '../App'
import { MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardImage,MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,MDBInput } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';


function ProductsView() {
  const {dummyitem,setItem} = useContext(Addcontext)
  const inputRef = useRef()
  const editTitle =useRef()
  const editImage = useRef()
  const editPrice = useRef()
  const editDescription = useRef()
  const [singleitems,setSingleitems] = useState() 

console.log(singleitems);


  const [staticModal, setStaticModal] = useState(false);
  const toggleOpen = () => setStaticModal(!staticModal);

  const [staticModal2, setStaticModal2] = useState(false);
  const toggleOpen2 = () => setStaticModal2(!staticModal2);

    
  const editsubmit =(e)=>{
    e.preventDefault();
    const editProduct = dummyitem.map((x) => x.id === singleitems.id ? {
      ...x,
      title: editTitle.current.value,
      image: editImage.current.value,
      price: editPrice.current.value,
      description: editDescription.current.value
    } : x);
    
    setItem(editProduct);
  }

    const remove = (id) =>{
      let removeitem = dummyitem.filter((x)=>x.id !== id)
      setItem(removeitem)
    }

    const submit = (e) =>{
      e.preventDefault()
      let id = dummyitem.length+1 
      const type = inputRef.current.type.value;
      const title = inputRef.current.title.value;
      const description = inputRef.current.description.value;
      const price = inputRef.current.price.value;
      const image = inputRef.current.image.value;
      const qty = inputRef.current.qty.value;
      
      const adminproducts = {id:id,type:type,title:title,description:description,price:price,image:image,qty:qty}
      
        setItem([...dummyitem,adminproducts])
     
      
    }
    
  return (

    <div style={{backgroundImage: 'url(https://media.istockphoto.com/id/1294603953/vector/abstract-black-stripes-diagonal-background.jpg?s=612x612&w=0&k=20&c=nQZHTk-o97cNVqWnUe8BJg0A5jQG0tqylquzbt9YtcQ=)'}}>
      <Container style={{display:"flex",justifyContent:"center",width:"100%"}}>
      <div  >
        <h1 style={{display:"flex",justifyContent:"center",color:"white"}}>This is Admin product view</h1>
        <h1 style={{color:"white"}}>Admin can Add and Remove products</h1>
       <div  style={{display:"flex",justifyContent:"center"}} >
        <MDBBtn className='single-btn' color='light' rippleColor='black' onClick={toggleOpen} >Add</MDBBtn>
        </div> 
      </div>
      </Container>
    <div style={{display:"flex",flexWrap:"wrap"}}>
        {dummyitem.map((items)=>(
          <MDBCard style={{width:'230px',height:"450px",marginTop:'40px',marginLeft:'60px',backgroundColor:"#424242"}}>
            <div className='bg-image hover-zoom'>
          <MDBCardImage className='w-70' src={items.image} position='top' alt='...' />
          </div>
          <MDBCardBody>
            <MDBCardTitle style={{color:"white"}}><h5>{items.title}</h5></MDBCardTitle>
            <MDBCardText><h6 style={{color:"white"}}>₹{items.price}</h6></MDBCardText>
            <div style={{marginRight:"10px"}}>
            <MDBBtn color='black' className='view' onClick={()=>remove(items.id)}>Remove</MDBBtn>
            <MDBBtn color='black' className='view' onClick={()=>{toggleOpen2();setSingleitems(items)}}>edit</MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
        ))}
    </div>
    
<div>
<MDBModal staticBackdrop tabIndex='-1' open={staticModal} setOpen={setStaticModal}>
  <MDBModalDialog>
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle>Modal title</MDBModalTitle>
        <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
      </MDBModalHeader>
      <form ref={inputRef} onSubmit={submit}>
      <MDBModalBody>
      <MDBInput label='Product Type' id='form1' type='text' name='type' />
      <br/>
      <MDBInput label='Product Title' id='form1' type='text' name='title' />
      <br/>
      <MDBInput label='Product Description' id='form1' type='text' name='description' />
      <br/>
      <MDBInput label='Product Price' id='form1' type='text' name='price' />
      <br/>
      <MDBInput label='Product img URL' id='form1' type='text' name='image' />
      <br/>
      <MDBInput label='Product QTY' id='form1' type='text' name='qty'/>
      </MDBModalBody>
      
      <MDBModalFooter>
        <MDBBtn color='secondary' onClick={toggleOpen}>
          Close
        </MDBBtn>
        <MDBBtn type='submit' onClick={toggleOpen}>Understood</MDBBtn>
        
      </MDBModalFooter>
      </form>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>
</div>
<div>
<MDBModal staticBackdrop tabIndex='-1' open={staticModal2} setOpen={setStaticModal2}>
  <MDBModalDialog>
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle>Modal title</MDBModalTitle>
        <MDBBtn className='btn-close' color='none' onClick={toggleOpen2}></MDBBtn>
      </MDBModalHeader>
      <form onSubmit={editsubmit} >
      <MDBModalBody>
        {/* <img  src={singleitems.image} /> */}
      <MDBInput required label='Product Title' id='form1' type='text' ref={editTitle} />
      <br/>
      <MDBInput required label='Product image' id='form1' type='text' ref={editImage} />
      <br/>
      <MDBInput required label='Product Price' id='form1' type='text' ref={editPrice}/>
      <br/>
      <MDBInput required label='Product Description' id='form1' type='text' ref={editDescription}/>
      </MDBModalBody>
      
      <MDBModalFooter>
        <MDBBtn color='secondary' onClick={toggleOpen2}>
          Close
        </MDBBtn>
        <MDBBtn type='submit' onClick={toggleOpen2}>Edit</MDBBtn>
        
      </MDBModalFooter>
      </form>
      
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>
</div>

    </div>
  )
}

export default ProductsView