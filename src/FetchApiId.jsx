import React from 'react'
import { useState, useEffect,urlParams  } from 'react'

export default function FetchApiId() {
    const [data, setData] = useState([]);
        const [btn,setBtn] = useState(false);
        const { id } = useParams(); 
        alert(id);
        const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
    
    // 3. Get specific values by their key
    // const id = urlParams.get('id'); // "123"
    // const user = urlParams.get('user'); // "john"
    
    // Check if a parameter exists
    console.log(urlParams.has('id'));
        const url = 'https://jsonplaceholder.typicode.com/posts';
        // useEffect(()=>{
        //     fetch(url)        
        //     .then(response => response.json())
        //     .then(data => setData(data))
        //     .catch(error => console.error('Error fetching data:', error));
        // },[setBtn]);
        if(data.length > 0){
            alert("Data fetched successfully!");
            console.log(data);
        }
    
    // 2. Create a URLSearchParams object

  return (
    <div>

    </div>
  )
}
