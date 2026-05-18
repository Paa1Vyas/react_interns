import React, { useState } from 'react';

export default function ApiFetchDemo() {
  const [singleData, setSingleData] = useState(null);
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('single'); // 'single' or 'list'

  // Function to fetch a single data item
  const fetchSingleData = async () => {
    setLoading(true);
    setActiveTab('single');
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      setSingleData(data);
    } catch (error) {
      console.error("Error fetching single data:", error);
    }
    setLoading(false);
  };

  // Function to fetch multiple data items
  const fetchListData = async () => {
    setLoading(true);
    setActiveTab('list');
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      const data = await response.json();
      setListData(data);
    } catch (error) {
      console.error("Error fetching list data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="page-container">
      <div className="glass-card" style={{ maxWidth: '800px' }}>
        <h1>API Fetch Demo</h1>
        <p>Learn how to fetch single data or map through a list of data.</p>

        <div className="form-actions" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
          <button 
            className={activeTab === 'single' ? "btn-primary" : "btn-outline"}
            onClick={fetchSingleData}
          >
            Fetch 1 Item (JSON)
          </button>
          <button 
            className={activeTab === 'list' ? "btn-primary" : "btn-outline"}
            onClick={fetchListData}
          >
            Fetch List (Data Mapping)
          </button>
        </div>

        {loading && <p>Loading data...</p>}

        {/* Display Single Data Item in JSON Format */}
        {!loading && activeTab === 'single' && singleData && (
          <div style={{ textAlign: 'left', background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Single Data Item (JSON)</h3>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {JSON.stringify(singleData, null, 2)}
            </pre>
          </div>
        )}

        {/* Display Mapped Data List */}
        {!loading && activeTab === 'list' && listData.length > 0 && (
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Mapped Data List</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {listData.map((item) => (
                <div key={item.id} style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', transition: 'transform 0.2s ease' }} className="hover-lift">
                  <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>{item.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Initial state before fetching */}
        {!loading && !singleData && !listData.length && (
          <p className="badge">Click a button above to start fetching data!</p>
        )}
      </div>
    </div>
  );
}
