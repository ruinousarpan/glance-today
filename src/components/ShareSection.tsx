import { Share2, Twitter, Facebook, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ShareSection = () => {
  const { toast } = useToast();

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Check out What is Today - Your daily portal for everything happening today!";

    let shareUrl = "";
    
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "The link has been copied to your clipboard.",
        });
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-4xl">
        <Card className="p-8 sm:p-12 bg-gradient-hero border-border/50 shadow-elegant text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Share2 className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Share Today's Portal
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Help others discover what's happening today. Share this portal with your friends and family!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() => handleShare("twitter")}
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-primary-foreground border border-white/20 backdrop-blur-sm"
            >
              <Twitter className="w-5 h-5 mr-2" />
              Share on Twitter
            </Button>

            <Button
              onClick={() => handleShare("facebook")}
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-primary-foreground border border-white/20 backdrop-blur-sm"
            >
              <Facebook className="w-5 h-5 mr-2" />
              Share on Facebook
            </Button>

            <Button
              onClick={() => handleShare("copy")}
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-primary-foreground border border-white/20 backdrop-blur-sm"
            >
              <LinkIcon className="w-5 h-5 mr-2" />
              Copy Link
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ShareSection;
