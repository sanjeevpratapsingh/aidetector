"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Brain, AlertTriangle, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TextAnalyzer() {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    score: number;
    confidence: number;
    details: string[];
  } | null>(null);

  const analyzeText = async () => {
    if (!text.trim()) return;
    
    setIsAnalyzing(true);
    // Simulated analysis for demo
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setResult({
      score: Math.random() * 100,
      confidence: 85 + Math.random() * 10,
      details: [
        'Natural language patterns detected',
        'Consistent writing style',
        'Varied vocabulary usage',
      ],
    });
    setIsAnalyzing(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="p-6 space-y-4">
        <div className="flex items-center space-x-2 mb-4">
          <Brain className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Text Analysis</h2>
        </div>

        <Textarea
          placeholder="Paste your text here for analysis (minimum 100 characters)"
          className="min-h-[200px] text-base"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          className="w-full"
          size="lg"
          onClick={analyzeText}
          disabled={text.length < 100 || isAnalyzing}
        >
          {isAnalyzing ? 'Analyzing...' : 'Analyze Text'}
        </Button>
      </Card>

      {result && (
        <Card className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Analysis Results</h3>
              {result.score > 70 ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <AlertTriangle className="w-6 h-6 text-yellow-500" />
              )}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>AI Content Probability</span>
                <span className="font-semibold">{result.score.toFixed(1)}%</span>
              </div>
              <Progress
                value={result.score}
                className={cn(
                  "h-2",
                  result.score > 70 ? "bg-red-100" : "bg-green-100"
                )}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Analysis Confidence</span>
                <span className="font-semibold">{result.confidence.toFixed(1)}%</span>
              </div>
              <Progress value={result.confidence} className="h-2" />
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Analysis Details</h4>
              <ul className="space-y-2">
                {result.details.map((detail, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}