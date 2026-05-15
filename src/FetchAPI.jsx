import React, { useState, useEffect } from 'react'

export default function FetchAPI() {
    const [data, setData] = useState([]);
    const [btn,setBtn] = useState(false);
    const url = 'https://jsonplaceholder.typicode.com/posts';
    useEffect(()=>{
        fetch(url)        
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    },[setBtn]);
    if(data.length > 0){
        alert("Data fetched successfully!");
        console.log(data);
    }
  return (
    <div>
        <h1>Fetch API</h1>
        <button onClick={() => setBtn(true)}>Click to Fetch Api</button>
        <h4>Data Items</h4>
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.title}</li>
            ))} const id = url.queryparams;
        </ul>
    </div>
  )
}
