import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 px-4 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-glow/20 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center animate-fade-in">
          <p className="text-primary-foreground/80 text-lg sm:text-xl mb-4 font-medium">
            {getGreeting()}! 👋
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Today is
            <br />
            <span className="bg-gradient-to-r from-white to-primary-foreground/90 bg-clip-text text-transparent">
              {formatDate(currentTime)}
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
              <Calendar className="w-6 h-6 text-primary-foreground" />
              <span className="text-2xl font-semibold text-primary-foreground">
                {currentTime.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
              <Clock className="w-6 h-6 text-primary-foreground" />
              <span className="text-2xl font-semibold text-primary-foreground font-mono">
                {formatTime(currentTime)}
              </span>
            </div>
          </div>

          <p className="mt-8 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Your daily portal for everything happening today - holidays, history, and trending topics
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
