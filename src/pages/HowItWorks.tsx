import React from 'react';
import { MessageSquare, Lightbulb, Code, TestTube, CheckCircle, Users, Calendar, CreditCard } from 'lucide-react';

const HowItWorks = () => {
  const paymentSteps = [
    {
      step: 1,
      title: "Idea Discussion & Project Finalization",
      percentage: "30%",
      description: "We discuss your requirements, finalize the project scope, and create a detailed roadmap.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "blue"
    },
    {
      step: 2,
      title: "Frontend Design + Basic Backend Setup",
      percentage: "40%",
      description: "Design and develop the user interface, set up the backend architecture and core functionality.",
      icon: <Code className="w-8 h-8" />,
      color: "green"
    },
    {
      step: 3,
      title: "Final Testing & Delivery",
      percentage: "30%",
      description: "Complete testing, bug fixes, deployment, and final delivery with documentation.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "purple"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "You Fill the Form",
      description: "Submit your project requirements through our detailed contact form with all necessary information.",
      icon: <Users className="w-12 h-12" />
    },
    {
      step: 2,
      title: "We Schedule a Call/Demo",
      description: "We arrange a consultation call to discuss your project in detail and understand your vision.",
      icon: <Calendar className="w-12 h-12" />
    },
    {
      step: 3,
      title: "We Share Final Scope + Quote",
      description: "Receive a detailed project proposal with scope, timeline, and transparent pricing.",
      icon: <Lightbulb className="w-12 h-12" />
    },
    {
      step: 4,
      title: "Milestone-Based Development",
      description: "Development proceeds in phases with payments handled according to our 3-step plan.",
      icon: <CreditCard className="w-12 h-12" />
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              How It <span className="text-blue-600">Works</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Our transparent, milestone-based approach ensures quality delivery and your peace of mind
            </p>
          </div>
        </div>
      </section>

      {/* Payment Plan Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              💡 3-Step Payment Plan
            </h2>
            <p className="text-xl text-gray-600">
              Structured payments aligned with project milestones
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {paymentSteps.map((step, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border-2 hover:shadow-lg transition-all duration-300 ${
                step.color === 'blue' ? 'border-blue-200 bg-blue-50' :
                step.color === 'green' ? 'border-green-200 bg-green-50' :
                'border-purple-200 bg-purple-50'
              }`}>
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    step.color === 'blue' ? 'bg-blue-600' :
                    step.color === 'green' ? 'bg-green-600' :
                    'bg-purple-600'
                  }`}>
                    <div className="text-white">{step.icon}</div>
                  </div>
                  
                  <div className={`text-4xl font-bold mb-2 ${
                    step.color === 'blue' ? 'text-blue-600' :
                    step.color === 'green' ? 'text-green-600' :
                    'text-purple-600'
                  }`}>
                    {step.percentage}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Step {step.step}: {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                🔗 Transparent. Reliable. Milestone-Based.
              </h3>
              <p className="text-lg text-blue-100">
                Our payment structure ensures you only pay for completed work and maintains transparency throughout the project lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              From initial consultation to final delivery - here's how we work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Typical project phases and estimated timeframes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Initial Consultation (1-2 days)</h3>
                    <p className="text-gray-600">Project discussion, requirement analysis, and proposal creation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Design & Planning (3-5 days)</h3>
                    <p className="text-gray-600">UI/UX design, architecture planning, and development setup</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Development Phase (7-21 days)</h3>
                    <p className="text-gray-600">Core development, feature implementation, and regular updates</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Testing & Delivery (2-3 days)</h3>
                    <p className="text-gray-600">Quality assurance, bug fixes, deployment, and final handover</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your requirements and create a customized solution for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="/services"
              className="bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-400"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;