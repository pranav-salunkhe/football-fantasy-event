import Image from "next/image";
import fifaPlayers from "@/data/fifaPlayers";
import Player from "../../components/Player";
export default function Dashboard() {
  // console.log(fifaPlayers[0])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div>Players Available</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 md:gap-x-12 md:gap-y-12">
        {fifaPlayers.map((player, index) =>(
          <div key={index} className='flex justify-start items-start'>
          <div className="absolute h-12 w-12 bg-base-100 rounded-br-full border-b-[1px] border-secondary"></div>
          <Player 
            playerData={player}
            index={index}
          />
          <div className="relative h-12 w-12 right-10 bg-base-100 rounded-bl-full border-b-[1px] border-secondary"></div>
          </div>
        ))}
      </div>
    </main>
  );
}
