import { Newspaper, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NewsSection = () => {
  const news = [
    {
      title: "Tech Giants Announce Breakthrough in Quantum Computing",
      source: "Tech News",
      category: "Technology",
      time: "2 hours ago",
      excerpt: "Major advancement promises to revolutionize computing power and cybersecurity in the coming decade.",
    },
    {
      title: "Global Climate Summit Reaches Historic Agreement",
      source: "World News",
      category: "Environment",
      time: "4 hours ago",
      excerpt: "Nations commit to ambitious carbon reduction targets with new enforcement mechanisms.",
    },
    {
      title: "Stock Markets Hit New Highs Amid Economic Recovery",
      source: "Business Daily",
      category: "Business",
      time: "5 hours ago",
      excerpt: "Markets respond positively to strong employment data and corporate earnings.",
    },
    {
      title: "Scientists Discover New Species in Deep Ocean Expedition",
      source: "Science Today",
      category: "Science",
      time: "7 hours ago",
      excerpt: "Researchers find previously unknown marine life in the Mariana Trench.",
    },
  ];

  const categoryColors: Record<string, string> = {
    Technology: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    Environment: "bg-green-500/10 text-green-700 dark:text-green-400",
    Business: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
    Science: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
  };

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-3">
            <Newspaper className="w-6 h-6 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Today's Headlines
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Stay updated with the latest news from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-card border-border/50 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <Badge className={categoryColors[item.category]}>
                  {item.category}
                </Badge>
                <span className="text-sm text-muted-foreground">{item.time}</span>
              </div>

              <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                {item.title}
              </h3>

              <p className="text-muted-foreground mb-4 line-clamp-2">
                {item.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground font-medium">
                  {item.source}
                </span>
                <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
