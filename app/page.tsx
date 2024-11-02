import { TextAnalyzer } from '@/components/text-analyzer';
import { Features } from '@/components/features';
import { PricingSection } from '@/components/pricing';
import  Reviews  from '@/components/Reviews';
import  Footer  from '@/components/Footer';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <section className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Advanced AI Text Detection
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Industry-leading content analysis powered by advanced machine learning.
          Detect AI-generated text with professional-grade accuracy.
        </p>
      </section>

      <TextAnalyzer />
      <Features />
      <PricingSection />
      <Reviews />
     
    </div>
  );
}