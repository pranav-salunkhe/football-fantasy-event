import Image from "next/image";
import fifaPlayers from "@/data/fifaPlayers";
import Player from "../../components/Player";
export default function Dashboard() {
  // console.log(fifaPlayers[0])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div>Players Available</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-12 lg:gap-y-12">
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
