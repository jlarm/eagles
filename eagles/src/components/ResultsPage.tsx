import React from "react";
import { Badge, Card } from "./ui/BaseComponents";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";

const results = [
  { 
    id: 1, date: "MAR 28", opponent: "Eagles", result: "W", score: "8-3", 
    box: { r: [8, 3], h: [12, 6], e: [1, 2] },
    summary: "Kings dominated from the first inning, with Miller striking out 10 batters over 7 innings."
  },
  { 
    id: 2, date: "MAR 24", opponent: "Panthers", result: "L", score: "2-4", 
    box: { r: [2, 4], h: [5, 9], e: [0, 0] },
    summary: "A tough defensive battle where the Panthers capitalized on late-game hits."
  },
  { 
    id: 3, date: "MAR 21", opponent: "Vipers", result: "W", score: "5-4", 
    box: { r: [5, 4], h: [8, 8], e: [2, 1] },
    summary: "Reed's walk-off home run in the 9th secured a thrilling victory for the Kings."
  },
  { 
    id: 4, date: "MAR 17", opponent: "Storm", result: "W", score: "12-2", 
    box: { r: [12, 2], h: [15, 4], e: [0, 3] },
    summary: "Offensive explosion led by Brooks and Chen, combining for 6 RBIs."
  },
];

export default function ResultsPage() {
  const [expandedRow, setExpandedRow] = React.useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter">PAST <span className="text-accent">RESULTS</span></h1>
        <p className="text-neutral-warm max-w-2xl mx-auto">Review the season's performance and key moments.</p>
      </div>

      <div className="space-y-4">
        {results.map((res, index) => (
          <motion.div
            key={res.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`overflow-hidden transition-all ${expandedRow === res.id ? 'ring-2 ring-accent' : ''}`}>
              <div 
                className="p-6 flex items-center justify-between cursor-pointer hover:bg-neutral-warm/5"
                onClick={() => setExpandedRow(expandedRow === res.id ? null : res.id)}
              >
                <div className="flex items-center gap-8">
                  <div className="text-center w-16">
                    <div className="font-display text-lg font-bold text-primary">{res.date}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant={res.result === "W" ? "win" : "loss"} className="w-8 h-8 flex items-center justify-center p-0 text-lg">
                      {res.result}
                    </Badge>
                    <div className="font-display text-2xl font-bold tracking-tight">
                      {res.score} <span className="text-neutral-warm text-lg ml-2 font-normal">vs {res.opponent}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-widest text-neutral-warm hidden md:inline">View Box Score</span>
                  {expandedRow === res.id ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </div>
              </div>

              <AnimatePresence>
                {expandedRow === res.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-neutral-warm/20 bg-neutral-warm/5"
                  >
                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <h4 className="font-display text-lg text-accent">Box Score</h4>
                        <table className="w-full text-center border-collapse">
                          <thead>
                            <tr className="text-[10px] uppercase tracking-widest text-neutral-warm border-b border-neutral-warm/20">
                              <th className="py-2 text-left">Team</th>
                              <th className="py-2">R</th>
                              <th className="py-2">H</th>
                              <th className="py-2">E</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-neutral-warm/20">
                              <td className="py-3 text-left font-bold">KINGS</td>
                              <td className="py-3">{res.box.r[0]}</td>
                              <td className="py-3">{res.box.h[0]}</td>
                              <td className="py-3">{res.box.e[0]}</td>
                            </tr>
                            <tr>
                              <td className="py-3 text-left font-bold uppercase">{res.opponent}</td>
                              <td className="py-3">{res.box.r[1]}</td>
                              <td className="py-3">{res.box.h[1]}</td>
                              <td className="py-3">{res.box.e[1]}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-display text-lg text-accent">Game Summary</h4>
                        <p className="text-sm text-primary leading-relaxed italic">
                          "{res.summary}"
                        </p>
                        <div className="pt-4">
                          <button className="text-xs uppercase tracking-widest font-bold border-b-2 border-primary hover:text-accent hover:border-accent transition-colors">
                            Full Recap & Highlights
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
