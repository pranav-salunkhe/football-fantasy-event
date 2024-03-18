"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import fifaPlayers from "@/data/fifaPlayers";
import Player from "../../components/Player";
import ks from "./DSC_1478.png";

export default function Dashboard() {
  // console.log(fifaPlayers[0])
  const [searchTerm, setSearchTerm] = useState('');
  const [positionFilter, setPositionFilter] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filterResults, setfilterResults] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const kishlay =   {
    "Name": "Kishlay Singh",
    "Nationality": "Indian",
    "Club": "ISTE",
    "Position": "Forward",

    "Overall": 85,
    "Pace": 100,
    "Shooting": 100,
    "Passing": 100,
    "Dribbling": 100,
    "Defence": 100,
    "Physical": 100,
    "Price": 696969,
    "Image": "https://drive.google.com/uc?export=download&id=1s9TJmxnZG2RqB-QkzK-P6qcV-ec_ndia"
  };
  let i = 0;
  let j = 1000;
  useEffect(() => {
    handleSearch();
  }, [searchTerm, positionFilter]);
  const handleSearch = () => {
    let results = fifaPlayers.filter(player =>
      player.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    let fresults = [];
    if (positionFilter) {
      fresults = fifaPlayers.filter(player => player.Position === positionFilter);
      results = results.filter(player => player.Position === positionFilter);
    }
    // setSearchResults([])
    setSearchResults(results);
    setfilterResults(fresults);
    console.log(searchResults[0])
  };
  const handleReset = () => {
    setSearchTerm('');
    setPositionFilter('');
    setSearchResults([]);
  };
  const handleSort = () => {
    const sortedResults = [...searchResults].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.Overall - b.Overall;
      } else {
        return b.Overall - a.Overall;
      }
    });

    setSearchResults(sortedResults);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="text-lg text-success">Players Available</div>
      <div className="flex flex-col sm:flex-row w-full justify-end items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search player..."
            className="border m-2 border-gray-300 text-black rounded-md py-2 px-4 w-full sm:w-64"
          />
          <div className="grid grid-cols-2 sm:grid-cols-5 items-center justify-center">
          <button
            onClick={handleSearch}
            className=" bg-blue-500 m-2 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Search
          </button>
          <button
            onClick={handleReset}
            className=" bg-gray-500 m-2 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Reset
          </button>
          <button
            onClick={handleSort}
            className="bg-yellow-500 m-2 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
          >
            {sortOrder === 'asc' ? 'Sort ↑' : 'Sort ↓'}
          </button>
          <div className="">
          <select
            value={positionFilter}
            onChange={e => setPositionFilter(e.target.value)}
            className="border m-2 border-gray-300 text-black rounded-md py-2 px-4"
          >
            <option value="">Filter</option>
            <option value="Goal Keeper">Goal Keeper</option>
            <option value="Defender">Defender</option>
            <option value="Mid-Field">Mid-Field</option>
            <option value="Forward">Forward</option>
          </select>
          {positionFilter && (
            <button
              onClick={() => setPositionFilter('')}
              className="absolute inset-y-0 right-0 mr-3 flex items-center justify-center text-gray-600 hover:text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.293 7.293a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
          <p className="text-center rounded-md m-2 px-4 py-2 bg-success text-white">Entries:{searchResults.length}</p>
          </div>

      </div>
      {/* <div className="divider h-3 divider-secondary divider-vertical"></div>
      <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-12 md:gap-y-12">
        {filterResults.length > 0 ? (
          filterResults.map((player, index) => (
            <Player key={player.Name} kishlay={player} index={index} />
          ))
        ) : (
          <></>
        )}
      </div> */}
      <div className="divider h-3 divider-secondary divider-vertical"></div>
      <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-12 md:gap-y-12">
        {searchResults.length > 0 ? (
          searchResults.map((player, index) => (
            <Player key={player.Name} playerData={player} index={index} />
          ))
        ) : (
          <></>
        )}
      </div>
      <div className="divider divider-secondary divider-vertical"></div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-12 md:gap-y-12">
        {fifaPlayers.map((player, index) =>(
          <Player 
            key={player.Name}
            playerData={player}
            index={index}
          />
        ))}
        <div className="m-2 bg-neutral rounded-tr-badge rounded-bl-badge shadow-md shadow-warning rounded-lg flex flex-col justify-center items-center border border-white w-36 h-max sm:h-64 sm:w-60 md:h-max md:w-72">
      <div className='h-full w-full '>
        <div className='flex w-36 sm:w-60 md:w-72 p-2 md:p-4 justify-between absolute'>
          <div className=' flex flex-col justify-between items-center text-sm sm:text-md md:text-lg lg:text-xl '>
            <div className='text-secondary'>{kishlay.Overall}</div>
            <div className="badge badge-secondary">{kishlay.Position}</div>
          </div>
          
        </div>
        <Image
          src={ks}
          alt='player'
          // layout="responsive"
          // height={100}
          // width={100}
          className=' h-80 w-full object-fill rounded-tr-badge rounded-tl-xl'

        />
      </div>
      <div className="font-bold text-sm lg:text-xl text-accent">{kishlay.Name}</div>
      <div className='flex flex-row w-full h-full justify-evenly items-center'>
        <div className='flex flex-col'>
          <div className='border-b-[1px] border-gray-500 text-secondary'>{kishlay.Pace} <span className='opacity-30'>PAC</span></div>
          <div className='border-b-[1px] border-gray-500 text-secondary'>{kishlay.Shooting} <span className='opacity-30'>SHO</span></div>
          <div className='border-b-[1px] border-gray-500 text-secondary'>{kishlay.Passing} <span className='opacity-30'>PAS</span></div>
        </div>
        {/* <div className="stats stats-vertical shadow">
  
        <div className="stat px-2 py-1">
          <div className="stat-title">PAC</div>
          <div className="stat-value">{kishlay.Pace} </div>
        </div>
        
        <div className="stat px-2 py-1">
          <div className="stat-title">SHO</div>
          <div className="stat-value">{kishlay.Shooting} </div>
        </div>
        
        <div className="stat px-2 py-1">
          <div className="stat-title">PAS</div>
          <div className="stat-value">{kishlay.Passing} </div>
        </div>
        
      </div> */}
        <div className="divider lg:divider-horizontal"></div> 
        <div className='flex flex-col'>
          <div className='border-b-[1px] border-gray-500 text-secondary'>{kishlay.Dribbling} <span className='opacity-30'>DRI</span></div>
          <div className='border-b-[1px] border-gray-500 text-secondary'>{kishlay.Defence} <span className='opacity-30'>DEF</span></div>
          <div className='border-b-[1px] border-gray-500 text-secondary'>{kishlay.Physical} <span className='opacity-30'>PHY</span></div>
        </div>
        {/* <div className="stats stats-vertical shadow">
  
        <div className="stat px-2 py-1">
          <div className="stat-title">DRI</div>
          <div className="stat-value">{kishlay.Dribbling} </div>
        </div>
        
        <div className="stat px-2 py-1">
          <div className="stat-title">DEF</div>
          <div className="stat-value">{kishlay.Defence} </div>
        </div>
        
        <div className="stat px-2 py-1">
          <div className="stat-title">PHY</div>
          <div className="stat-value">{kishlay.Physical} </div>
        </div>
        
        </div> */}
      </div>
      <div className='m-2 p-2 rounded-xl bg-success'>
        $ {Math.floor(kishlay.Price)}
      </div>
    </div>
      </div>
    </main>
  );
}
