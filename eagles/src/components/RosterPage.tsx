import { Card, CardContent, Badge } from "./ui/BaseComponents";
import { motion } from "motion/react";

const players = [
  { id: 1, name: "Marcus 'Ace' Miller", number: "24", positions: ["P"], stats: { era: "2.45", so: "128" }, image: "https://images.unsplash.com/photo-1593789382576-54f489574d26?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "Jackson Brooks", number: "12", positions: ["SS", "2B"], stats: { avg: ".312", hr: "15" }, image: "https://images.unsplash.com/photo-1516731415730-0c607149933a?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, name: "David Chen", number: "05", positions: ["CF"], stats: { avg: ".298", sb: "22" }, image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "Tyler 'Tank' Reed", number: "44", positions: ["1B", "DH"], stats: { avg: ".285", hr: "32" }, image: "https://images.unsplash.com/photo-1562077772-3bd90403f7f0?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, name: "Luis Rodriguez", number: "08", positions: ["C"], stats: { avg: ".275", rbi: "65" }, image: "https://images.unsplash.com/photo-1530549387631-f01f9a46fccc?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, name: "Sam Wilson", number: "19", positions: ["LF", "RF"], stats: { avg: ".305", obp: ".390" }, image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop" },
];

export default function RosterPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter">TEAM <span className="text-accent">ROSTER</span></h1>
        <p className="text-neutral-warm max-w-2xl mx-auto">Meet the athletes representing Kings Baseball for the 2026 season.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {players.map((player, index) => (
          <motion.div
            key={player.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden border-neutral-warm/30 hover:border-accent transition-colors">
              <div className="aspect-[4/5] relative overflow-hidden bg-neutral-warm">
                <img 
                  src={player.image} 
                  alt={player.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-primary text-white w-12 h-12 flex items-center justify-center font-display text-2xl font-bold">
                  {player.number}
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {player.name}
                  </h3>
                  <div className="flex gap-2">
                    {player.positions.map(pos => (
                      <div key={pos}>
                        <Badge variant="accent">{pos}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-warm/20">
                  {Object.entries(player.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-warm">{key}</div>
                      <div className="text-xl font-display font-bold">{value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
