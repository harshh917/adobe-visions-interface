import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Zap, Target } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-section opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/15 rounded-full blur-2xl floating-animation" style={{ animationDelay: "4s" }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm">
                <Zap className="w-4 h-4" />
                DocuMind AI Platform
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                AI-Powered
                <br />
                <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                  Document Intelligence
                </span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-2xl">
                Revolutionary solutions for PDF structure extraction and persona-driven document analysis. 
                Built with cutting-edge AI and optimized for enterprise performance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                <span>Explore Solutions</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                <FileText className="w-5 h-5" />
                View Documentation
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">&lt;10s</div>
                <div className="text-white/70 text-sm">Processing Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">&lt;200MB</div>
                <div className="text-white/70 text-sm">Memory Usage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white/70 text-sm">Offline Capable</div>
              </div>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <img 
                src={heroIllustration} 
                alt="AI Document Processing Illustration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 glass-card rounded-xl p-4 floating-animation">
              <Target className="w-6 h-6 text-white mb-2" />
              <div className="text-white text-sm font-medium">Smart Extraction</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 glass-card rounded-xl p-4 floating-animation" style={{ animationDelay: "1s" }}>
              <Zap className="w-6 h-6 text-white mb-2" />
              <div className="text-white text-sm font-medium">Lightning Fast</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;