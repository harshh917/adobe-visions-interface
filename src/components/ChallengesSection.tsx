import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, Brain, Zap, Target, GitBranch, Database } from "lucide-react";
import challenge1aIcon from "@/assets/challenge1a-icon.jpg";
import challenge1bIcon from "@/assets/challenge1b-icon.jpg";

const ChallengesSection = () => {
  const challenges = [
    {
      id: "1a",
      title: "PDF Structure Extractor",
      subtitle: "High-Performance Document Analysis",
      description: "Lightning-fast PDF structure extraction using intelligent heuristics. Extracts titles and hierarchical outlines without heavy ML models.",
      icon: challenge1aIcon,
      features: [
        "< 10 second processing",
        "< 200MB memory usage",
        "Offline capable",
        "Docker containerized",
        "Smart font analysis",
        "JSON output format"
      ],
      tech: ["Python", "pdfplumber", "Docker", "Heuristic AI"],
      githubUrl: "https://github.com/harshh917/adobe-hackathon-challenge1a",
      demoUrl: "#demo-1a",
      color: "from-[hsl(var(--adobe-red))] to-[hsl(var(--adobe-orange))]"
    },
    {
      id: "1b",
      title: "Persona-Driven Intelligence",
      subtitle: "Advanced RAG Document Analysis",
      description: "Sophisticated Retrieval-Augmented Generation pipeline for persona-specific document insights with two-stage filtering and AI-powered title generation.",
      icon: challenge1bIcon,
      features: [
        "Two-stage retrieval",
        "Semantic ranking",
        "AI title generation",
        "Global content pooling",
        "Persona filtering",
        "Multi-collection support"
      ],
      tech: ["Python", "Transformers", "FLAN-T5", "Sentence-BERT"],
      githubUrl: "https://github.com/harshh917/adobe-hackathon-challenge1b",
      demoUrl: "#demo-1b",
      color: "from-[hsl(var(--adobe-purple))] to-[hsl(var(--adobe-blue))]"
    }
  ];

  return (
    <section id="challenges" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Challenge Solutions
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Two Powerful AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            Innovative approaches to document intelligence that push the boundaries of speed, accuracy, and user experience.
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <Card 
              key={challenge.id} 
              className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardHeader className="relative">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img 
                      src={challenge.icon} 
                      alt={`${challenge.title} Icon`}
                      className="w-16 h-16 rounded-xl object-cover shadow-lg"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-20 rounded-xl`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">Challenge {challenge.id.toUpperCase()}</Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold mb-2">{challenge.title}</CardTitle>
                    <p className="text-muted-foreground font-medium">{challenge.subtitle}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                <p className="text-foreground leading-relaxed">
                  {challenge.description}
                </p>

                {/* Features Grid */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {challenge.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-primary" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {challenge.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    variant="adobe" 
                    className="flex-1 group"
                    asChild
                  >
                    <a href={challenge.demoUrl} className="flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      Try Demo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    asChild
                  >
                    <a 
                      href={challenge.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Highlights */}
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--adobe-red))] to-[hsl(var(--adobe-orange))] rounded-xl flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg">Lightning Performance</h3>
              <p className="text-muted-foreground text-sm">Optimized for speed with &lt;10s processing times and minimal resource usage</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--adobe-purple))] to-[hsl(var(--adobe-blue))] rounded-xl flex items-center justify-center mx-auto">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg">AI-Powered Intelligence</h3>
              <p className="text-muted-foreground text-sm">Advanced algorithms for smart document understanding and content extraction</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--adobe-orange))] to-[hsl(var(--adobe-purple))] rounded-xl flex items-center justify-center mx-auto">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg">Enterprise Ready</h3>
              <p className="text-muted-foreground text-sm">Containerized, scalable, and production-ready solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;