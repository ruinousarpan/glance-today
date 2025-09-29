import { Cloud, Sun, Droplets, Wind } from "lucide-react";
import { Card } from "@/components/ui/card";

const WeatherSection = () => {
  // Mock weather data - in production, fetch from weather API
  const weather = {
    temp: 24,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    location: "Your Location",
  };

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Today's Weather
          </h2>
          <p className="text-muted-foreground text-lg">
            Current conditions in {weather.location}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-card border-border/50 shadow-elegant animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-hero flex items-center justify-center mb-4">
                  <Sun className="w-16 h-16 text-primary-foreground" />
                </div>
                <h3 className="text-5xl font-bold text-card-foreground mb-2">
                  {weather.temp}°C
                </h3>
                <p className="text-xl text-muted-foreground">{weather.condition}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-muted/50 border-border/30">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <Droplets className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="text-sm text-muted-foreground">Humidity</span>
                  </div>
                  <p className="text-2xl font-semibold text-card-foreground">{weather.humidity}%</p>
                </Card>

                <Card className="p-4 bg-muted/50 border-border/30">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <Wind className="w-5 h-5 text-cyan-500" />
                    </div>
                    <span className="text-sm text-muted-foreground">Wind</span>
                  </div>
                  <p className="text-2xl font-semibold text-card-foreground">{weather.windSpeed} km/h</p>
                </Card>

                <Card className="p-4 bg-muted/50 border-border/30 col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <Cloud className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="text-sm text-muted-foreground">Forecast</span>
                  </div>
                  <p className="text-card-foreground">Clear skies expected throughout the day</p>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;
