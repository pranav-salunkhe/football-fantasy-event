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
    <div className='h-full w-full flex flex-col justify-start items-start'>
      <div className='flex justify-center items-center w-full text-center text-5xl'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <p className='m-2'>News</p>
</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-8'>
        {filteredNews.map((data, index) => (
          <div key={index} className='flex flex-col text-xl rounded-xl bg-neutral p-10'>
            <div className='flex justify-between items-start'>
                <p className='text-xl'>{data.Title}</p>
                <div className="badge badge-secondary">{(new Date(data.timestamp)).getHours()}:{(new Date(data.timestamp)).getMinutes()}:{(new Date(data.timestamp)).getSeconds()}</div>
            </div>
            <div className='flex text-gray-500 text-justify'>
                <p className='text-sm sm:text-lg'>{data.Description}</p>
            </div>
            {/* Display other relevant information */}
            {/* <p>Affected Player: {data.PlayerAffected}</p> */}
            {/* <p>New Price: {data.NewPrice}</p> */}
            {/* Display updated stats */}
            {/* <div>Updated Stats:</div> */}
            {/* <ul> */}
              {/* {Object.entries(data.UpdatedStats).map(([key, value]) => ( */}
                {/* <li key={key}>{key}: {value}</li> */}
              {/* ))} */}
            {/* </ul> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
