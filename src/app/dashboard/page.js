"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import fifaPlayers from "@/data/fifaPlayers";
import Player from "../../components/Player";
export default function Dashboard() {
  // console.log(fifaPlayers[0])
  const [searchTerm, setSearchTerm] = useState('');
  const [positionFilter, setPositionFilter] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filterResults, setfilterResults] = useState([]);
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
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="text-lg">Players Available</div>
      <div className="flex flex-col sm:flex-row justify-evenly items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search player..."
            className="border m-2 border-gray-300 text-black rounded-md py-2 px-4 w-full sm:w-64"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-center">
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
          <div className="">
          <select
            value={positionFilter}
            onChange={e => setPositionFilter(e.target.value)}
            className="border m-2 border-gray-300 text-black rounded-md py-2 px-4"
          >
            <option value="">Filter by Position</option>
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
          <p className="text-center">Entries:{searchResults.length}</p>
          </div>

      </div>
      {/* <div className="divider h-3 divider-secondary divider-vertical"></div>
      <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-12 md:gap-y-12">
        {filterResults.length > 0 ? (
          filterResults.map((player, index) => (
            <Player key={player.Name} playerData={player} index={index} />
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
      </div>
    </main>
  );
}
