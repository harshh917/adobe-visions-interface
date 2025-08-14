import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[hsl(var(--adobe-red))] to-[hsl(var(--adobe-orange))] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DM</span>
              </div>
              <div>
                <h3 className="font-bold">DocuMind AI</h3>
                <p className="text-xs text-muted-foreground">Smart Document Intelligence</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Revolutionary AI-powered solutions for document processing and intelligence.
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="font-semibold">Solutions</h4>
            <div className="space-y-2">
              <a href="#demo-1a" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                PDF Structure Extractor
              </a>
              <a href="#demo-1b" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Document Intelligence
              </a>
              <a href="#challenges" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                View All Challenges
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <div className="space-y-2">
              <a href="#docs" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="#demo" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Try Demo
              </a>
              <a 
                href="https://github.com/harshh917" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://github.com/harshh917/adobe-hackathon-challenge1a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://github.com/harshh917/adobe-hackathon-challenge1b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Open source and available for collaboration
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 DocuMind AI. Built with passion for intelligent document processing.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for smart document solutions
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;