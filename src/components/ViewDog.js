import React from 'react'
import { useParams } from 'react-router-dom';

function ViewDog() {
  const {id} = useParams();
  return (
    <div>
      This is my name: {id}
    </div>
  )
}

export default ViewDog
