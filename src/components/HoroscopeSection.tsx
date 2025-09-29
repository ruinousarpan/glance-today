import { Sparkles, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const HoroscopeSection = () => {
  const zodiacSigns = [
    { sign: "Aries", dates: "Mar 21 - Apr 19", emoji: "♈" },
    { sign: "Taurus", dates: "Apr 20 - May 20", emoji: "♉" },
    { sign: "Gemini", dates: "May 21 - Jun 20", emoji: "♊" },
    { sign: "Cancer", dates: "Jun 21 - Jul 22", emoji: "♋" },
    { sign: "Leo", dates: "Jul 23 - Aug 22", emoji: "♌" },
    { sign: "Virgo", dates: "Aug 23 - Sep 22", emoji: "♍" },
    { sign: "Libra", dates: "Sep 23 - Oct 22", emoji: "♎" },
    { sign: "Scorpio", dates: "Oct 23 - Nov 21", emoji: "♏" },
    { sign: "Sagittarius", dates: "Nov 22 - Dec 21", emoji: "♐" },
    { sign: "Capricorn", dates: "Dec 22 - Jan 19", emoji: "♑" },
    { sign: "Aquarius", dates: "Jan 20 - Feb 18", emoji: "♒" },
    { sign: "Pisces", dates: "Feb 19 - Mar 20", emoji: "♓" },
  ];

  const featuredHoroscope = {
    sign: "Libra",
    emoji: "♎",
    reading: "Today brings harmony and balance to your relationships. A creative project may take an unexpected turn for the better. Trust your intuition in financial matters.",
    luckyNumber: 7,
    luckyColor: "Purple",
  };

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-3">
            <Star className="w-6 h-6 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Daily Horoscope
            </h2>
            <Star className="w-6 h-6 text-primary" />
          </div>
          <p className="text-muted-foreground text-lg">
            What the stars have in store for you today
          </p>
        </div>

        {/* Featured Horoscope */}
        <Card className="max-w-3xl mx-auto mb-12 p-8 bg-gradient-card border-border/50 shadow-elegant animate-fade-in">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">{featuredHoroscope.emoji}</div>
            <h3 className="text-2xl font-bold text-card-foreground mb-2">
              {featuredHoroscope.sign}
            </h3>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4" />
              <span>Today's Featured Sign</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          <p className="text-lg text-card-foreground mb-6 leading-relaxed text-center">
            {featuredHoroscope.reading}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-muted rounded-lg">
              <span className="text-sm text-muted-foreground">Lucky Number: </span>
              <span className="font-semibold text-card-foreground">{featuredHoroscope.luckyNumber}</span>
            </div>
            <div className="px-4 py-2 bg-muted rounded-lg">
              <span className="text-sm text-muted-foreground">Lucky Color: </span>
              <span className="font-semibold text-card-foreground">{featuredHoroscope.luckyColor}</span>
            </div>
          </div>
        </Card>

        {/* All Zodiac Signs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {zodiacSigns.map((zodiac, index) => (
            <Card
              key={index}
              className="p-4 hover:shadow-card-shadow transition-all duration-300 hover:-translate-y-1 cursor-pointer text-center bg-card border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-2">{zodiac.emoji}</div>
              <h4 className="font-semibold text-card-foreground mb-1">{zodiac.sign}</h4>
              <p className="text-xs text-muted-foreground">{zodiac.dates}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoroscopeSection;
