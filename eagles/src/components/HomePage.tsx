import { Card, CardContent, CardHeader, CardTitle, Badge, Button } from "./ui/BaseComponents";
import { Calendar, MapPin, Clock, ArrowRight, Trophy } from "lucide-react";
import { motion } from "motion/react";

export default function HomePage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=2070&auto=format&fit=crop"
            alt="Baseball Stadium"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 stadium-overlay" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="accent" className="mb-4 px-4 py-1 text-sm tracking-[0.2em] uppercase">
              Est. 2024
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
              Eagles ELITE <span className="text-accent">BASEBALL</span>
            </h1>
            <p className="text-xl text-neutral-warm max-w-2xl mx-auto mb-8 font-light tracking-wide">
              Building champions on and off the field through quality instruction, teamwork, and character development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent">View Schedule</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">Meet the Team</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Widgets Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Next Up Widget */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full border-l-4 border-l-accent">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    NEXT UP
                  </CardTitle>
                  <Badge variant="accent">HOME</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between py-4">
                  <div className="text-center flex-1">
                    <div className="font-display text-xl">KINGS</div>
                    <div className="text-xs text-neutral-warm">HOME</div>
                  </div>
                  <div className="font-display text-2xl text-neutral-warm">VS</div>
                  <div className="text-center flex-1">
                    <div className="font-display text-xl">TITANS</div>
                    <div className="text-xs text-neutral-warm">AWAY</div>
                  </div>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-neutral-warm/30">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>Saturday, April 4th @ 7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>Kings Memorial Stadium, Field 1</span>
                  </div>
                </div>
                
                <Button className="w-full mt-4" variant="primary">
                  Get Tickets <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Latest Result Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-primary flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  LATEST RESULT
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-primary/5 p-4 text-center">
                  <Badge variant="win" className="mb-2">FINAL - WIN</Badge>
                  <div className="flex items-center justify-center gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-display font-bold">8</div>
                      <div className="text-xs uppercase tracking-widest">Kings</div>
                    </div>
                    <div className="text-2xl font-display text-neutral-warm">-</div>
                    <div className="text-center">
                      <div className="text-4xl font-display font-bold">3</div>
                      <div className="text-xs uppercase tracking-widest">Eagles</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center text-xs uppercase tracking-tighter">
                  <div className="p-2 border border-neutral-warm/30">
                    <div className="text-neutral-warm mb-1">Runs</div>
                    <div className="font-bold">8</div>
                  </div>
                  <div className="p-2 border border-neutral-warm/30">
                    <div className="text-neutral-warm mb-1">Hits</div>
                    <div className="font-bold">12</div>
                  </div>
                  <div className="p-2 border border-neutral-warm/30">
                    <div className="text-neutral-warm mb-1">Errors</div>
                    <div className="font-bold">1</div>
                  </div>
                </div>
                
                <Button className="w-full" variant="outline">
                  Full Box Score
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* News/Announcement Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full bg-accent text-white border-none">
              <CardHeader>
                <CardTitle className="text-white">TEAM NEWS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-widest opacity-80">March 30, 2026</div>
                  <h4 className="font-display text-lg leading-tight">Kings Announce New Youth Summer Camp Dates</h4>
                </div>
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-widest opacity-80">March 28, 2026</div>
                  <h4 className="font-display text-lg leading-tight">Ace Pitcher Miller Signs Extension Through 2028</h4>
                </div>
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-widest opacity-80">March 25, 2026</div>
                  <h4 className="font-display text-lg leading-tight">New Stadium Concessions Menu Revealed</h4>
                </div>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-accent mt-4">
                  Read All News
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              BEYOND THE <span className="text-accent">DIAMOND</span>
            </h2>
            <p className="text-lg text-neutral-warm leading-relaxed">
              At Kings Baseball, we believe in building more than just athletes. Our program focuses on leadership, community service, and academic excellence. We're proud to represent our city and inspire the next generation of ballplayers.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="text-3xl font-display font-bold text-accent">15+</div>
                <div className="text-sm uppercase tracking-widest">Championships</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-display font-bold text-accent">250+</div>
                <div className="text-sm uppercase tracking-widest">Alumni</div>
              </div>
            </div>
            <Button variant="primary" size="lg">Our Mission</Button>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-video bg-neutral-warm relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" 
                alt="Team Practice"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
