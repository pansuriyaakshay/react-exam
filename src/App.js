import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
  
function App() {

  const [data, setdata] = useState([]);
  const [updateTitle, setUpdateTitle] = useState([]);
  const [UpdateAuthor, setUpdateAuthor] = useState([]);

  console.log(data);
  
  useEffect(() => {
    axios.get("http://localhost:4000/posts").then((res) => {
      console.log(res);
      setdata(res.data);
    });
  }, []);

  const AddData = (postId) => {  
    axios.post('http://localhost:4000/posts/${postId}').then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div>
      <div>
        <input 
        type='text' 
        placeholder='update Title' 
        value={updateTitle} 
        onChange={(e) => setUpdateTitle(e.target.value)} 
        />

        <input 
        type='text' 
        placeholder='update Author' 
        value={UpdateAuthor} 
        onChange={(e) => setUpdateAuthor(e.target.value)} 
        />

        <button onClick={() => AddData}>Add</button>

        {data.map((e) => {
          return (
            <>
              <h1>{e.id}</h1>
              <h1>{e.title}</h1>
              <h1>{e.author}</h1>
              <delete>Delete</delete>
            </>
          );
        })}
      </div>
    </div>
  )
}

export default App;