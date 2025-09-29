import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for curious minds
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {currentYear} What is Today. Stay informed, stay curious.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
