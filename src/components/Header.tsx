import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[hsl(var(--adobe-red))] to-[hsl(var(--adobe-orange))] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">DocuMind AI</h1>
              <p className="text-xs text-muted-foreground">Smart Document Intelligence</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#challenges" className="text-foreground hover:text-primary transition-colors">
              Challenges
            </a>
            <a href="#demo" className="text-foreground hover:text-primary transition-colors">
              Demo
            </a>
            <a href="#docs" className="text-foreground hover:text-primary transition-colors">
              Docs
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://github.com/harshh917/adobe-hackathon-challenge1a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
            <Button variant="adobe" size="sm" asChild>
              <a 
                href="#demo" 
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Try Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;