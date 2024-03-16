import Image from "next/image";
import fifaPlayers from "@/data/fifaPlayers";
import Player from "../../components/Player";
export default function Dashboard() {
  // console.log(fifaPlayers[0])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="text-lg">Players Available</div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-12 md:gap-y-12">
        {fifaPlayers.map((player, index) =>(
          <Player 
            key={index}
            playerData={player}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
