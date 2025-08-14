import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Zap, Download, Play, Code } from "lucide-react";

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState("1a");

  const demoData = {
    "1a": {
      title: "PDF Structure Extractor",
      description: "Upload a PDF and watch as our AI extracts the document structure in seconds",
      inputPlaceholder: "Drop your PDF file here or click to upload",
      sampleOutput: {
        title: "Adobe Creative Suite Documentation",
        outline: [
          {
            level: 1,
            text: "Introduction to Adobe Creative Suite",
            page: 1
          },
          {
            level: 2,
            text: "System Requirements",
            page: 2
          },
          {
            level: 2,
            text: "Installation Guide", 
            page: 4
          },
          {
            level: 1,
            text: "Adobe Photoshop Features",
            page: 8
          },
          {
            level: 2,
            text: "Layer Management",
            page: 10
          }
        ]
      }
    },
    "1b": {
      title: "Persona-Driven Document Intelligence",
      description: "Analyze multiple documents with AI-powered persona-specific insights",
      inputPlaceholder: "Select document collection and enter your query",
      sampleOutput: {
        query: "vegetarian recipes for beginners",
        results: [
          {
            title: "Simple Vegetable Stir-Fry Guide",
            content: "A beginner-friendly recipe featuring fresh vegetables...",
            relevance_score: 0.92,
            source: "healthy_cooking.pdf"
          },
          {
            title: "Easy Pasta Primavera Recipe",
            content: "Perfect for vegetarian newcomers to cooking...",
            relevance_score: 0.87,
            source: "italian_vegetarian.pdf"
          }
        ]
      }
    }
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Interactive Demo
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Experience the Power
          </h2>
          <p className="text-xl text-muted-foreground">
            Try our AI solutions with real examples and see the results instantly.
          </p>
        </div>

        {/* Demo Interface */}
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="1a" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Challenge 1A
              </TabsTrigger>
              <TabsTrigger value="1b" className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Challenge 1B
              </TabsTrigger>
            </TabsList>

            {Object.entries(demoData).map(([key, demo]) => (
              <TabsContent key={key} value={key} className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{demo.title}</h3>
                  <p className="text-muted-foreground">{demo.description}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Input Section */}
                  <Card className="animate-slide-up">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Upload className="w-5 h-5 text-primary" />
                        Input
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Upload Area */}
                      <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                        <div className="space-y-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--adobe-red))] to-[hsl(var(--adobe-orange))] rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                            <Upload className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <p className="font-medium mb-1">{demo.inputPlaceholder}</p>
                            <p className="text-sm text-muted-foreground">
                              Supports PDF files up to 50MB
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Sample Files */}
                      <div className="space-y-3">
                        <p className="text-sm font-medium">Try with sample files:</p>
                        <div className="space-y-2">
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <FileText className="w-4 h-4 mr-2" />
                            sample_document.pdf
                          </Button>
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <FileText className="w-4 h-4 mr-2" />
                            technical_manual.pdf
                          </Button>
                        </div>
                      </div>

                      {/* Process Button */}
                      <Button variant="adobe" className="w-full" size="lg">
                        <Play className="w-4 h-4 mr-2" />
                        Process Document
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Output Section */}
                  <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Code className="w-5 h-5 text-primary" />
                          Output
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Export
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-auto max-h-96">
                        <pre className="text-foreground">
                          {JSON.stringify(demo.sampleOutput, null, 2)}
                        </pre>
                      </div>
                      
                      {/* Processing Stats */}
                      <div className="grid grid-cols-3 gap-4 mt-6 p-4 bg-gradient-to-r from-muted/30 to-muted/50 rounded-lg">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">2.3s</div>
                          <div className="text-xs text-muted-foreground">Processing Time</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">156MB</div>
                          <div className="text-xs text-muted-foreground">Memory Used</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">98%</div>
                          <div className="text-xs text-muted-foreground">Accuracy</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Features Highlight */}
                <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 animate-fade-in">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                        <h4 className="font-semibold">Lightning Fast</h4>
                        <p className="text-sm text-muted-foreground">Process documents in under 10 seconds</p>
                      </div>
                      <div>
                        <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                        <h4 className="font-semibold">High Accuracy</h4>
                        <p className="text-sm text-muted-foreground">AI-powered precision extraction</p>
                      </div>
                      <div>
                        <Download className="w-8 h-8 text-primary mx-auto mb-2" />
                        <h4 className="font-semibold">Multiple Formats</h4>
                        <p className="text-sm text-muted-foreground">Export to JSON, XML, or CSV</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;