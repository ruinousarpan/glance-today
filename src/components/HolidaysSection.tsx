import { PartyPopper, Heart, Coffee, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const HolidaysSection = () => {
  const holidays = [
    {
      icon: PartyPopper,
      name: "International Coffee Day",
      type: "National Day",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Heart,
      name: "World Heart Day",
      type: "International Holiday",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Globe,
      name: "World Tourism Day",
      type: "Global Observance",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Coffee,
      name: "National Good Neighbor Day",
      type: "National Day",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Special Days Today
          </h2>
          <p className="text-muted-foreground text-lg">
            Celebrating what makes today unique
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {holidays.map((holiday, index) => {
            const Icon = holiday.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-card border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${holiday.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">
                  {holiday.name}
                </h3>
                <p className="text-sm text-muted-foreground">{holiday.type}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HolidaysSection;
