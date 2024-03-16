"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import defaultPlayer from '../assets/default.jpeg';
import up from '../assets/arrowup.png';
import down from '../assets/arrowdown.png';
import newsData from '../assets/newsflash'; // Import the JSON file containing news data
import dot from '../assets/dot.png';
function Player(props) {
  const [arrow, setArrow] = useState(dot);
  const [playerData, setPlayerData] = useState(props.playerData);
  let playerPrice;
  playerPrice = ((playerData.Defence+playerData.Dribbling+playerData.Pace+playerData.Passing+playerData.Physical+playerData.Shooting)/6)*10000
  useEffect(() => {
    const futureTimestamp = new Date('2024-03-16T03:11:50').getTime(); // Replace with your desired future timestamp
    const currentTime = new Date().getTime();

    if (currentTime >= futureTimestamp) {
      setArrow(down);
    }
  }, []);

  useEffect(() => {
    const filteredNews = newsData.filter(data => {
      const newsTimestamp = new Date(data.timestamp).getTime();
      const currentTime = new Date().getTime();
      return currentTime >= newsTimestamp;
    });

    // Find the latest news affecting this player
    const latestNews = filteredNews.find(news => news.PlayerAffected === playerData.Name);

    // If there's no latest news, do nothing
    if (!latestNews || latestNews.UpdatedStats.Overall === playerData.Overall) {
      setArrow(dot);
      return;
    }
    
    // Determine whether to show the up arrow or the down arrow
    if (latestNews.NewPrice < playerData.Price) {
      setArrow(down);
    }else{
      setArrow(up);
    }
    // Update the player's data based on the latest news
    const updatedPlayerData = { ...playerData, ...latestNews.UpdatedStats };
    setPlayerData(updatedPlayerData);

  }, 6000); // Only re-run this effect when playerData changes

  let imgSrc;
  if (playerData.Image) {
    imgSrc = playerData.Image;
  } else {
    imgSrc = defaultPlayer;
  }

  let pos = 'DEF';
  if (playerData.Position === 'Goal Keeper') {
    pos = 'GK';
  } else if (playerData.Position === 'Forward') {
    pos = 'FR';
  } else if (playerData.Position === 'Mid Field') {
    pos = 'MF';
  }

  return (
    <div key={props.index} className="m-2 rounded-lg flex flex-col justify-center items-center border border-white w-44 h-44 sm:h-64 sm:w-60 md:h-max md:w-72">
      <div className='h-full w-full '>
        <div className='flex sm:w-60 md:w-72 p-4 justify-between absolute'>
          <div className=' flex flex-col justify-between items-start'>
            <div>{playerData.Overall}</div>
            <div className="badge badge-secondary">{pos}</div>
          </div>
          <div className=''>
            <Image
              src={arrow}
              alt='stats'
              height={24}
              width={24}
              quality={100}
            />
          </div>
        </div>
        <Image
          src={imgSrc}
          alt='player'
          // layout="responsive"
          height={100}
          width={100}
          className='h-full w-full object-fill'

        />
      </div>
      <div className="font-bold text-xl">{playerData.Name}</div>
      <div className='flex flex-row w-full h-full justify-evenly items-center'>
        <div className='flex flex-col'>
          <div>{playerData.Pace} PAC</div>
          <div>{playerData.Shooting} SHO</div>
          <div>{playerData.Passing} PAS</div>
        </div>
        {/* <div className="stats stats-vertical shadow">
  
        <div className="stat px-2 py-1">
          <div className="stat-title">PAC</div>
          <div className="stat-value">{playerData.Pace} </div>
        </div>
        
        <div className="stat px-2 py-1">
          <div className="stat-title">SHO</div>
          <div className="stat-value">{playerData.Shooting} </div>
        </div>
        
        <div className="stat px-2 py-1">
          <div className="stat-title">PAS</div>
          <div className="stat-value">{playerData.Passing} </div>
        </div>
        
      </div> */}
        <div className="divider lg:divider-horizontal"></div> 
        <div className='flex flex-col'>
          <div>{playerData.Dribbling} DRI</div>
          <div>{playerData.Defence} DEF</div>
          <div>{playerData.Physical} PHY</div>
        </div>
        {/* <div className="stats stats-vertical shadow">
  
        <div className="stat px-2 py-1">
          <div className="stat-title">DRI</div>
          <div className="stat-value">{playerData.Dribbling} </div>
        </div>
        
        <div className="stat px-2 py-1">
          <div className="stat-title">DEF</div>
          <div className="stat-value">{playerData.Defence} </div>
        </div>
        
        <div className="stat px-2 py-1">
          <div className="stat-title">PHY</div>
          <div className="stat-value">{playerData.Physical} </div>
        </div>
        
        </div> */}
      </div>
      <div>
        $ {Math.floor(playerPrice)}
      </div>
    </div>
  )
}

export default Player;
