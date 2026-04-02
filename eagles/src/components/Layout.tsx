import React from "react";
import { Menu, X, Trophy, Users, Calendar, Home as HomeIcon, BarChart3 } from "lucide-react";
import { Button } from "./ui/BaseComponents";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: "Home", id: "home", icon: HomeIcon },
    { name: "Roster", id: "roster", icon: Users },
    { name: "Schedule", id: "schedule", icon: Calendar },
    { name: "Results", id: "results", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => onPageChange("home")}
              >
                <span className="font-display text-2xl font-bold tracking-tighter">
                  EAGLES<span className="text-accent">ELITE</span>
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`font-display text-lg uppercase tracking-widest transition-colors hover:text-accent ${
                    currentPage === item.id ? "text-accent border-b-2 border-accent" : "text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button variant="accent" size="sm">Tickets</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-accent"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 font-display text-lg uppercase tracking-widest ${
                    currentPage === item.id ? "text-accent" : "text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="h-6 w-6 text-accent" />
                <span className="font-display text-xl font-bold tracking-tighter">
                  KINGS<span className="text-accent">BASEBALL</span>
                </span>
              </div>
              <p className="text-neutral-warm text-sm leading-relaxed">
                The official home of the local Kings Baseball team. Dedicated to excellence on and off the diamond since 1998.
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg mb-6 text-accent">Quick Links</h4>
              <ul className="space-y-3 text-sm text-neutral-warm">
                <li><button onClick={() => onPageChange("schedule")} className="hover:text-white transition-colors">Upcoming Games</button></li>
                <li><button onClick={() => onPageChange("roster")} className="hover:text-white transition-colors">Team Roster</button></li>
                <li><button className="hover:text-white transition-colors">Fan Zone</button></li>
                <li><button className="hover:text-white transition-colors">Sponsorships</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg mb-6 text-accent">Contact Us</h4>
              <p className="text-neutral-warm text-sm">
                123 Stadium Way<br />
                Baseball City, ST 12345<br />
                info@kingsbaseball.com
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-neutral-warm uppercase tracking-widest">
            © 2026 Kings Baseball Team. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
