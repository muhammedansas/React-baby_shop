import React, { useContext } from 'react'
import { Addcontext } from '../App'
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBBtn} from 'mdb-react-ui-kit';

function Users() {
    const {data} = useContext(Addcontext)
  return (
    <div>
         {data.map((x,id)=>(
            <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>{x.name}</MDBCardTitle>
        <MDBCardText>
          {x.password}
        </MDBCardText>
        <MDBCardText>
          {x.email}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        ))}
    </div>
  )
}

export default Users