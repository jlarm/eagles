import { Badge } from "./ui/BaseComponents";
import { motion } from "motion/react";
import { MapPin, Clock } from "lucide-react";

const games = [
  { id: 1, date: "APR 04", time: "7:00 PM", opponent: "Titans", location: "Home", type: "Regular Season", venue: "Kings Stadium" },
  { id: 2, date: "APR 07", time: "6:30 PM", opponent: "Warriors", location: "Away", type: "Regular Season", venue: "Central Park Field" },
  { id: 3, date: "APR 11", time: "1:00 PM", opponent: "Hawks", location: "Home", type: "Tournament", venue: "Kings Stadium" },
  { id: 4, date: "APR 12", time: "10:00 AM", opponent: "TBD", location: "Home", type: "Tournament", venue: "Kings Stadium" },
  { id: 5, date: "APR 15", time: "7:00 PM", opponent: "Bulls", location: "Away", type: "Regular Season", venue: "Westside Complex" },
  { id: 6, date: "APR 18", time: "4:00 PM", opponent: "Sharks", location: "Home", type: "Regular Season", venue: "Kings Stadium" },
];

export default function SchedulePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter">GAME <span className="text-accent">SCHEDULE</span></h1>
        <p className="text-neutral-warm max-w-2xl mx-auto">Mark your calendars. Don't miss a single moment of the action.</p>
      </div>

      <div className="bg-white border border-neutral-warm shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary text-white font-display uppercase tracking-widest text-sm">
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Opponent</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Venue</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game, index) => (
                <motion.tr
                  key={game.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-neutral-warm/20 hover:bg-neutral-warm/5 transition-colors group"
                >
                  <td className="px-6 py-6">
                    <div className="font-display text-xl font-bold text-primary">{game.date}</div>
                    <div className="flex items-center gap-1 text-xs text-neutral-warm mt-1">
                      <Clock className="h-3 w-3" /> {game.time}
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-neutral-warm/20 rounded-full flex items-center justify-center font-display text-xs">
                        {game.opponent[0]}
                      </div>
                      <span className="font-bold text-lg">{game.opponent}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <Badge variant={game.location === "Home" ? "accent" : "outline"}>
                      {game.location.toUpperCase()}
                    </Badge>
                  </td>
                  <td className="px-6 py-6">
                    <Badge variant={game.type === "Tournament" ? "default" : "outline"} className="bg-opacity-10 text-primary border-primary">
                      {game.type}
                    </Badge>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2 text-sm text-neutral-warm">
                      <MapPin className="h-4 w-4" /> {game.venue}
                    </div>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <button className="text-accent font-display text-sm uppercase tracking-widest hover:underline">
                      Details
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
