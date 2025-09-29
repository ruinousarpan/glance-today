import { Lightbulb, Smile, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const FunFactsSection = () => {
  const facts = [
    {
      icon: Lightbulb,
      fact: "Today, approximately 385,000 babies will be born around the world",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Smile,
      fact: "The average person will laugh 15 times today",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Zap,
      fact: "Earth will travel 2.5 million kilometers through space by the end of today",
      color: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Fun Facts About Today
          </h2>
          <p className="text-muted-foreground text-lg">
            Interesting things happening right now
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {facts.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-center text-card-foreground leading-relaxed">
                  {item.fact}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
