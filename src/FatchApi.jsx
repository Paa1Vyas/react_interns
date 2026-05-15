import React, { useEffect, useState } from 'react';

const FatchApi = () => {
    const [data, setData] = useState(null);
    const [btn, setBtn] = useState(false);
    const url = "https://official-joke-api.appspot.com/random_joke";

    useEffect(() => {
        fetch(url)        
        .then(response => response.json())
        .then(fetchedData => {
            setData(fetchedData);
            console.log("Data fetched successfully!", fetchedData);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, [btn]); 

  return (
    <div>
       <h1>Fetch API</h1>
       
        <button 
          onClick={() => setBtn(!btn)}
          style={{ padding: '8px 16px', backgroundColor: '#e0e0e0', border: '1px solid #ccc', cursor: 'pointer', borderRadius: '4px' }}
        >
          Fetch Data
        </button>

        <h4>Data Items</h4>
        <ul>
            {data ? (
                <li>
                    <strong>{data.setup}</strong> <br/>
                    {data.punchline}
                </li>
            ) : (
                <li>Loading joke...</li>
            )}
        </ul>
    </div>
  )
}

export default FatchApi;