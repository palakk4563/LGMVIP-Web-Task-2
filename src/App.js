
import { useState,useEffect } from 'react'
import './App.css';
import axios from 'axios';
import Navbar from "./components/navbar";
import UserCard from './components/usercard';
import Loader from './components/loader';

function App() {
  
  const [isClicked, setIsClicked] = useState(0);
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(false);
 
  const getApiData = async()=>{
    try{
       setLoading(true); // Set loading to true when API call starts
       const res = await axios.get("https://reqres.in/api/users?page=1");
       setMyData(res.data.data);
    }catch (error){
        setIsError(error.message);
     }
     finally{
      setLoading(false); // Set loading back to false when API call completes
     }
  };

  useEffect(()=>{
    isClicked && getApiData();
  }, [isClicked]);


  return (
    <>
    <Navbar onSetIsClicked={setIsClicked}/>; 
    {isError !== "" && <h2>{isError}</h2>}
    <div>
    {loading ? (<Loader /> // Render the loader component while loading
    ):(
    <div className="grid-container">
     {myData.map((post)=>{
      const {id, email, first_name, last_name, avatar} = post;
      return (
        <UserCard id={id} first_name={first_name} last_name={last_name} email={email} avatar={avatar}/>
      )
    })} 
    </div>
    )
    }
    </div>
    </>
    )
}

export default App;
