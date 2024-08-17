import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/JummyIceCreem');
      const data = await response.json();
      setBlogData(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-5xl text-center mt-5'>This is Blog Page</h1>
      <div>
        {blogData.length > 0 ? (
          blogData.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
