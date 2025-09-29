import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const HistorySection = () => {
  const events = [
    {
      year: 2008,
      event: "Google Chrome was first released, revolutionizing web browsing",
    },
    {
      year: 1962,
      event: "James Meredith became the first African American student at the University of Mississippi",
    },
    {
      year: 1955,
      event: "Actor James Dean died in a car accident at age 24",
    },
    {
      year: 1846,
      event: "Ether was first used as an anesthetic in dental surgery",
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Today in History
            </h2>
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <p className="text-muted-foreground text-lg">
            Important events that happened on this day
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {events.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-card-shadow transition-all duration-300 hover:-translate-x-2 bg-card border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-gradient-hero flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-card-foreground text-lg leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
