"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import fifaPlayers from "@/data/fifaPlayers";
import Player from "../../components/Player";
export default function Dashboard() {
  // console.log(fifaPlayers[0])
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  let i = 0;
  let j = 1000;
  useEffect(() => {
    handleSearch();
  }, [searchTerm]);
  const handleSearch = () => {
    const results = fifaPlayers.filter(player =>
      player.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // setSearchResults([])
    setSearchResults(results);
    console.log(searchResults[0])
  };
  const handleReset = () => {
    setSearchTerm('');
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
            className="border m-2 border-gray-300 text-black rounded-md py-2 px-4 w-64"
          />
          <div className="flex flex-row items-center justify-center">
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
          <p className="m-2">Entries:{searchResults.length}</p>
          </div>

      </div>
      <div className="divider divider-secondary divider-vertical"></div>
      <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-12 md:gap-y-12">
        {searchResults.length > 0 ? (
          searchResults.map((player, index) => (
            <Player key={player.Name} playerData={player} index={index} />
          ))
        ) : (
          <p>No results found.</p>
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
