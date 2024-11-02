"use client";

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for occasional use',
    features: [
      '3 checks per day',
      'Basic analysis results',
      'Standard support',
      'Web interface access',
    ],
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    description: 'For professional content creators',
    features: [
      'Unlimited checks',
      'Advanced detection features',
      'Priority support',
      'Detailed analysis breakdown',
      'Export results',
      'Team collaboration',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For organizations and high-volume needs',
    features: [
      'Everything in Pro',
      'API access',
      'Bulk analysis',
      'Custom integration support',
      'Dedicated account manager',
      'SLA guarantee',
      'Advanced analytics',
    ],
  },
];

export function PricingSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that best fits your needs. All plans include our core
          detection technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`p-8 flex flex-col ${
              plan.popular
                ? 'border-primary shadow-lg scale-105'
                : 'border-border'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <span className="bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">{plan.period}</span>
                )}
              </div>
              <p className="text-muted-foreground mt-2">{plan.description}</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full"
              variant={plan.popular ? 'default' : 'outline'}
            >
              Get Started
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}