import React, { useState } from 'react';
import { Check, X, Star, Zap, Shield, Clock, Users, Code, Globe, Smartphone } from 'lucide-react';

const ComparisonTables = () => {
  const [activeTab, setActiveTab] = useState('services');

  const tabs = [
    { id: 'services', label: 'Service Tiers', icon: <Star className="w-4 h-4" /> },
    { id: 'technology', label: 'Technology Stack', icon: <Code className="w-4 h-4" /> },
    { id: 'competitors', label: 'Why Choose Us', icon: <Shield className="w-4 h-4" /> },
    { id: 'academic', label: 'Academic vs Commercial', icon: <Users className="w-4 h-4" /> }
  ];

  const serviceTiers = {
    basic: {
      name: 'Basic',
      price: '₹5,000 - ₹15,000',
      description: 'Perfect for simple projects and portfolios',
      features: [
        'Responsive Design',
        'Basic SEO Setup',
        'Contact Forms',
        '5 Pages Maximum',
        'Basic Analytics',
        '30 Days Support',
        'Source Code Included'
      ],
      notIncluded: [
        'Custom CMS',
        'E-commerce Features',
        'Advanced Integrations',
        'Database Management',
        'User Authentication'
      ],
      bestFor: 'Portfolio websites, small business sites, landing pages'
    },
    standard: {
      name: 'Standard',
      price: '₹15,000 - ₹35,000',
      description: 'Ideal for growing businesses and complex projects',
      features: [
        'Everything in Basic',
        'Custom CMS Integration',
        'User Authentication',
        'Database Integration',
        'API Development',
        'Advanced SEO',
        '60 Days Support',
        'Performance Optimization'
      ],
      notIncluded: [
        'E-commerce Features',
        'Payment Gateway',
        'Multi-language Support',
        'Advanced Analytics'
      ],
      bestFor: 'Business websites, blogs, content management systems'
    },
    premium: {
      name: 'Premium',
      price: '₹35,000 - ₹75,000',
      description: 'Complete solution for enterprises and e-commerce',
      features: [
        'Everything in Standard',
        'E-commerce Functionality',
        'Payment Gateway Integration',
        'Advanced User Roles',
        'Multi-language Support',
        'Advanced Analytics',
        '90 Days Support',
        'Priority Support',
        'Custom Integrations'
      ],
      notIncluded: [
        'Enterprise-level Scaling',
        'Dedicated Server Setup'
      ],
      bestFor: 'E-commerce stores, large businesses, complex web applications'
    }
  };

  const technologyComparison = [
    {
      category: 'Frontend Technologies',
      technologies: [
        { name: 'React', gradgear: true, description: 'Modern, component-based UI library', pros: 'Fast, scalable, large community' },
        { name: 'Vue.js', gradgear: true, description: 'Progressive JavaScript framework', pros: 'Easy to learn, flexible, performant' },
        { name: 'Angular', gradgear: true, description: 'Full-featured framework by Google', pros: 'Enterprise-ready, TypeScript support' },
        { name: 'Next.js', gradgear: true, description: 'React framework with SSR', pros: 'SEO-friendly, fast loading, modern' },
        { name: 'Vanilla JS', gradgear: false, description: 'Plain JavaScript without frameworks', pros: 'Lightweight but limited scalability' }
      ]
    },
    {
      category: 'Backend Technologies',
      technologies: [
        { name: 'Node.js', gradgear: true, description: 'JavaScript runtime for server-side', pros: 'Fast, scalable, JavaScript everywhere' },
        { name: 'Python/Django', gradgear: true, description: 'High-level Python web framework', pros: 'Rapid development, secure, scalable' },
        { name: 'Express.js', gradgear: true, description: 'Minimal Node.js web framework', pros: 'Lightweight, flexible, fast' },
        { name: 'Flask', gradgear: true, description: 'Micro web framework for Python', pros: 'Simple, flexible, great for APIs' },
        { name: 'PHP', gradgear: false, description: 'Traditional server-side language', pros: 'Widely supported but outdated practices' }
      ]
    },
    {
      category: 'Database Solutions',
      technologies: [
        { name: 'MongoDB', gradgear: true, description: 'NoSQL document database', pros: 'Flexible schema, scalable, JSON-like' },
        { name: 'PostgreSQL', gradgear: true, description: 'Advanced relational database', pros: 'ACID compliant, feature-rich, reliable' },
        { name: 'MySQL', gradgear: true, description: 'Popular relational database', pros: 'Fast, reliable, widely supported' },
        { name: 'Firebase', gradgear: true, description: 'Google\'s real-time database', pros: 'Real-time sync, easy setup, scalable' },
        { name: 'SQLite', gradgear: false, description: 'Lightweight file-based database', pros: 'Simple but limited for web apps' }
      ]
    }
  ];

  const competitorComparison = [
    {
      feature: 'Pricing Transparency',
      gradgear: 'Complete transparency with detailed breakdowns',
      others: 'Often hidden costs and unclear pricing',
      advantage: true
    },
    {
      feature: 'Payment Structure',
      gradgear: 'Milestone-based payments (30-40-30)',
      others: 'Full payment upfront or unclear terms',
      advantage: true
    },
    {
      feature: 'Technology Stack',
      gradgear: 'Modern technologies (React, Node.js, Python)',
      others: 'Often outdated technologies (PHP, jQuery)',
      advantage: true
    },
    {
      feature: 'Project Timeline',
      gradgear: 'Realistic timelines with regular updates',
      others: 'Unrealistic promises, frequent delays',
      advantage: true
    },
    {
      feature: 'Post-Delivery Support',
      gradgear: '30-90 days free support included',
      others: 'Limited or paid support only',
      advantage: true
    },
    {
      feature: 'Source Code',
      gradgear: 'Complete source code ownership',
      others: 'Often retain code ownership',
      advantage: true
    },
    {
      feature: 'Communication',
      gradgear: 'Direct communication with founder',
      others: 'Multiple intermediaries, poor communication',
      advantage: true
    },
    {
      feature: 'Specialization',
      gradgear: 'Focused on students and small businesses',
      others: 'Generic approach for all clients',
      advantage: true
    }
  ];

  const academicVsCommercial = [
    {
      aspect: 'Primary Goal',
      academic: 'Learning and academic evaluation',
      commercial: 'Business growth and revenue generation'
    },
    {
      aspect: 'Complexity Level',
      academic: 'Moderate complexity with educational focus',
      commercial: 'High complexity with business requirements'
    },
    {
      aspect: 'Timeline',
      academic: 'Aligned with academic deadlines',
      commercial: 'Market-driven timelines'
    },
    {
      aspect: 'Budget Range',
      academic: '₹1,000 - ₹15,000',
      commercial: '₹5,000 - ₹75,000+'
    },
    {
      aspect: 'Documentation',
      academic: 'Detailed reports, presentations, code comments',
      commercial: 'User manuals, technical docs, maintenance guides'
    },
    {
      aspect: 'Features Focus',
      academic: 'Innovative features, latest technologies',
      commercial: 'Practical features, proven technologies'
    },
    {
      aspect: 'Scalability',
      academic: 'Demonstration of concepts',
      commercial: 'Production-ready scalability'
    },
    {
      aspect: 'Support Duration',
      academic: '30 days for clarifications',
      commercial: '30-90 days with maintenance options'
    },
    {
      aspect: 'Deployment',
      academic: 'Demo deployment for presentation',
      commercial: 'Production deployment with monitoring'
    },
    {
      aspect: 'Testing',
      academic: 'Basic functionality testing',
      commercial: 'Comprehensive testing including security'
    }
  ];

  const renderServiceTiers = () => (
    <div className="grid lg:grid-cols-3 gap-8">
      {Object.entries(serviceTiers).map(([key, tier]) => (
        <div
          key={key}
          className={`relative p-8 rounded-2xl border-2 ${
            key === 'standard'
              ? 'border-blue-500 bg-blue-50 transform scale-105'
              : 'border-gray-200 bg-white'
          }`}
        >
          {key === 'standard' && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
          )}
          
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">{tier.price}</div>
            <p className="text-gray-600">{tier.description}</p>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Included Features:</h4>
              <ul className="space-y-2">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {tier.notIncluded.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Not Included:</h4>
                <ul className="space-y-2">
                  {tier.notIncluded.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Best for:</strong> {tier.bestFor}
            </p>
            <a
              href="/contact"
              className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                key === 'standard'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Get Quote
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTechnologyComparison = () => (
    <div className="space-y-8">
      {technologyComparison.map((category, categoryIndex) => (
        <div key={categoryIndex} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {category.technologies.map((tech, techIndex) => (
              <div key={techIndex} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{tech.name}</h4>
                      {tech.gradgear ? (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          We Use This
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                          We Don't Use
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-2">{tech.description}</p>
                    <p className="text-sm text-gray-500">{tech.pros}</p>
                  </div>
                  <div className="ml-4">
                    {tech.gradgear ? (
                      <Check className="w-6 h-6 text-green-500" />
                    ) : (
                      <X className="w-6 h-6 text-red-400" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderCompetitorComparison = () => (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
        <h3 className="text-xl font-bold text-white">GRADGEAR vs Others</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {competitorComparison.map((item, index) => (
          <div key={index} className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.feature}</h4>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">GRADGEAR</span>
                </div>
                <p className="text-sm text-green-700">{item.gradgear}</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <X className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-800">Others</span>
                </div>
                <p className="text-sm text-red-700">{item.others}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAcademicVsCommercial = () => (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
        <h3 className="text-xl font-bold text-white">Academic Projects vs Commercial Projects</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {academicVsCommercial.map((item, index) => (
          <div key={index} className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{item.aspect}</h4>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-purple-800">Academic Projects</span>
                </div>
                <p className="text-sm text-purple-700">{item.academic}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-800">Commercial Projects</span>
                </div>
                <p className="text-sm text-blue-700">{item.commercial}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Compare Our Services
        </h2>
        <p className="text-xl text-gray-600">
          Detailed comparisons to help you make the right choice
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 bg-gray-100 p-2 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {activeTab === 'services' && renderServiceTiers()}
        {activeTab === 'technology' && renderTechnologyComparison()}
        {activeTab === 'competitors' && renderCompetitorComparison()}
        {activeTab === 'academic' && renderAcademicVsCommercial()}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-blue-100 mb-6">
            Choose the perfect solution for your needs and get started today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Custom Quote
            </a>
            <a
              href="/how-it-works"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-400"
            >
              Learn Our Process
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTables;