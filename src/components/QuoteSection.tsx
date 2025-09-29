import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const QuoteSection = () => {
  const quote = {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  };

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-4xl">
        <Card className="relative overflow-hidden p-8 sm:p-12 bg-gradient-card border-border/50 shadow-elegant animate-fade-in">
          <div className="absolute top-4 left-4 opacity-10">
            <Quote className="w-24 h-24 text-primary" />
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              Quote of the Day
            </h3>
            
            <blockquote className="text-2xl sm:text-3xl font-medium text-card-foreground mb-6 leading-relaxed">
              "{quote.text}"
            </blockquote>
            
            <p className="text-muted-foreground text-lg">
              — {quote.author}
            </p>
          </div>

          <div className="absolute bottom-4 right-4 opacity-10 rotate-180">
            <Quote className="w-24 h-24 text-primary" />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default QuoteSection;
