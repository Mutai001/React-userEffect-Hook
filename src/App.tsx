import { useState , useEffect} from 'react';
import axios from 'axios';
import './App.css';
interface TUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
}

function App() {
  const [fetchData, setFetchedData] = useState<TUser[] | null>(null);

    /* useEffect that will fetch data from the API */
const getUsers = async () => {
  axios.get('https://jsonplaceholder.typicode.com/user')
    .then((res) => setFetchedData(res.data))
    .catch((error) => console.log(error));
}


useEffect(() => {

      // fetch('https://jsonplaceholder.typicode.com/user')
      // .then(response => response.json())
      // .then(data => setFetchedData(data))
      // .catch((error) => console.log(error));
}, []);


  return (
      <>
        {
          fetchData !== null ? (
            fetchData.map((user: TUser) => {
              return(
                <div key={user.id}>
                  <p>Name:{user.name}</p>  
                  <p>Username:{user.username}</p>
                  <p>Email:{user.email}</p>
                  <p>Address:{user.address.street}</p>
                  <p>Suite:{user.address.suite}</p>
                  <p>City:{user.address.city}</p>
                  <p>Zipcode:{user.address.zipcode}</p>
                  <p>Geo:{user.address.geo.lat}</p>
                  <p>Geo:{user.address.geo.lng}</p>
                </div>
              )
            })
          ) : <div>no data</div>
        }
      </>
    )
}

export default App
