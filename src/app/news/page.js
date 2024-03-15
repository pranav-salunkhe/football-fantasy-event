"use client";
import React, { useState, useEffect } from 'react';
import newsData from '../../assets/newsflash';

function News() {
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTimestamp = new Date().getTime();
      const filtered = newsData.filter(data => {
        const newsTimestamp = new Date(data.timestamp).getTime();
        return currentTimestamp >= newsTimestamp;
      });
      setFilteredNews(filtered);
    }, 600); // Check every minute, you can adjust the interval as needed

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div>
      <div>News</div>
      <div className='flex'>
        {filteredNews.map((data, index) => (
          <div key={index}>
            <p>{data.Title}</p>
            <p>{data.Description}</p>
            {/* Display other relevant information */}
            <p>Affected Player: {data.PlayerAffected}</p>
            <p>New Price: {data.NewPrice}</p>
            {/* Display updated stats */}
            <div>Updated Stats:</div>
            <ul>
              {Object.entries(data.UpdatedStats).map(([key, value]) => (
                <li key={key}>{key}: {value}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
