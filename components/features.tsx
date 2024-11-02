import {
  Shield,
  Zap,
  BarChart3,
  History,
  Code2,
  Lock,
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Advanced Detection',
    description: 'State-of-the-art AI models for accurate content analysis',
  },
  {
    icon: Zap,
    title: 'Real-time Analysis',
    description: 'Get instant results with our high-performance engine',
  },
  {
    icon: BarChart3,
    title: 'Detailed Metrics',
    description: 'Comprehensive scoring and confidence ratings',
  },
  {
    icon: History,
    title: 'Analysis History',
    description: 'Track and review your previous analyses',
  },
  {
    icon: Code2,
    title: 'API Access',
    description: 'Integrate our detection system into your workflow',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and data protection',
  },
];

export function Features() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our platform combines advanced AI technology with user-friendly features
          to provide the most accurate content analysis available.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}