import { TrendingUp, Hash } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TrendingSection = () => {
  const trends = [
    { topic: "ClimateAction", category: "Environment", engagement: "2.3M" },
    { topic: "TechNews", category: "Technology", engagement: "1.8M" },
    { topic: "WorldCup2025", category: "Sports", engagement: "3.1M" },
    { topic: "AIRevolution", category: "Technology", engagement: "1.5M" },
    { topic: "SpaceExploration", category: "Science", engagement: "890K" },
    { topic: "GlobalEconomy", category: "Business", engagement: "1.2M" },
  ];

  const categoryColors: Record<string, string> = {
    Environment: "bg-green-500/10 text-green-700 dark:text-green-400",
    Technology: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    Sports: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
    Science: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    Business: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
  };

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-3">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Trending Topics
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            What the world is talking about today
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {trends.map((trend, index) => (
            <Card
              key={index}
              className="p-5 hover:shadow-card-shadow transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-card border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Hash className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg text-card-foreground">
                    {trend.topic}
                  </h3>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Badge className={categoryColors[trend.category]}>
                  {trend.category}
                </Badge>
                <span className="text-sm text-muted-foreground font-medium">
                  {trend.engagement} posts
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
