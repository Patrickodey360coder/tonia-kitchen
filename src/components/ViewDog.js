import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

function ViewDog() {  
  const {id} = useParams();
  const [dogs, setDogs] = useState([]);

  useEffect(()=> {
    let api = `https://api.thedogapi.com/v1/breeds?limit=12&page=100?api_key=2c1958d5-790f-4725-87cc-7e59767ba77f/${id}`;
    fetch(api)
      .then( res => res.json())
      .then( result => setDogs(result))
  },[id]
  );
  return (
    <div>
      This is my name: {id}
      {console.log(dogs[0])}
    </div>
  )
}

export default ViewDog
