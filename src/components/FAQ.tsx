import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, HelpCircle, Clock, DollarSign, Code, Users } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', label: 'All Questions', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'pricing', label: 'Pricing', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'process', label: 'Process', icon: <Clock className="w-4 h-4" /> },
    { id: 'technical', label: 'Technical', icon: <Code className="w-4 h-4" /> },
    { id: 'support', label: 'Support', icon: <Users className="w-4 h-4" /> }
  ];

  const faqData = [
    // Pricing Questions
    {
      id: 1,
      category: 'pricing',
      question: 'How do you determine project pricing?',
      answer: 'Our pricing is based on several factors: project complexity, required features, technology stack, timeline, and client type (student vs business). We provide transparent pricing ranges on our services page, and after understanding your specific requirements, we provide a detailed quote with no hidden costs.'
    },
    {
      id: 2,
      category: 'pricing',
      question: 'Do you offer discounts for students?',
      answer: 'Yes! We offer special pricing for academic projects. Student projects are generally priced lower than commercial projects, and we also provide additional discounts for bulk orders or referrals. Check our academic project pricing section for detailed information.'
    },
    {
      id: 3,
      category: 'pricing',
      question: 'What is your payment structure?',
      answer: 'We follow a 3-step milestone-based payment plan: 30% upon project finalization and requirement confirmation, 40% after frontend design and basic backend setup, and 30% upon final testing and delivery. This ensures transparency and reduces risk for both parties.'
    },
    {
      id: 4,
      category: 'pricing',
      question: 'Are there any hidden costs?',
      answer: 'No, we believe in complete transparency. Our quotes include all development costs. Additional costs may apply only for: domain registration, hosting services, third-party API subscriptions, or major scope changes requested after project approval.'
    },
    {
      id: 5,
      category: 'pricing',
      question: 'Do you provide free consultations?',
      answer: 'Yes, initial consultations are completely free. We discuss your requirements, provide technical guidance, suggest the best approach, and give you a detailed quote at no cost. You only pay when you decide to proceed with the project.'
    },

    // Process Questions
    {
      id: 6,
      category: 'process',
      question: 'What is your typical project timeline?',
      answer: 'Timeline varies by project complexity: Mini projects (3-7 days), Major web applications (1-3 weeks), AI/ML projects (2-4 weeks), E-commerce platforms (3-6 weeks), LMS systems (4-8 weeks). We provide accurate timelines after requirement analysis.'
    },
    {
      id: 7,
      category: 'process',
      question: 'How do you handle project communication?',
      answer: 'We maintain regular communication through email, WhatsApp, and scheduled calls. You\'ll receive progress updates at each milestone, and we\'re available for questions throughout the development process. We also provide a project dashboard for real-time progress tracking.'
    },
    {
      id: 8,
      category: 'process',
      question: 'Can I request changes during development?',
      answer: 'Minor changes and refinements are included in our service. Major scope changes may require timeline and cost adjustments, which we\'ll discuss transparently. We encourage feedback at each milestone to ensure the final product meets your expectations.'
    },
    {
      id: 9,
      category: 'process',
      question: 'What happens after project delivery?',
      answer: 'After delivery, you receive: complete source code, documentation, deployment guide, and 30 days of free support for bug fixes. We also offer ongoing maintenance services and are available for future enhancements or scaling needs.'
    },
    {
      id: 10,
      category: 'process',
      question: 'Do you provide project documentation?',
      answer: 'Yes, comprehensive documentation is included with every project: technical documentation, user manuals, API documentation (if applicable), deployment guides, and maintenance instructions. For academic projects, we also provide project reports and presentations.'
    },

    // Technical Questions
    {
      id: 11,
      category: 'technical',
      question: 'What technologies do you work with?',
      answer: 'We work with modern technologies including: Frontend (React, Vue.js, Angular, Next.js), Backend (Node.js, Python, Django, Flask), Databases (MongoDB, PostgreSQL, MySQL), Cloud (AWS, Firebase, Vercel), AI/ML (TensorFlow, PyTorch, scikit-learn), and Blockchain (Ethereum, Solidity, Web3).'
    },
    {
      id: 12,
      category: 'technical',
      question: 'Do you provide hosting and domain services?',
      answer: 'Yes, we provide complete hosting solutions including domain registration, SSL certificates, hosting setup, email configuration, and ongoing maintenance. We work with reliable providers and can recommend the best hosting solution based on your project needs and budget.'
    },
    {
      id: 13,
      category: 'technical',
      question: 'Can you work with existing codebases?',
      answer: 'Absolutely! We can work with existing projects for bug fixes, feature additions, performance optimization, technology upgrades, or complete redesigns. We first analyze the existing code and provide recommendations for improvements.'
    },
    {
      id: 14,
      category: 'technical',
      question: 'Do you ensure mobile responsiveness?',
      answer: 'Yes, all our web applications are fully responsive and optimized for mobile devices. We follow mobile-first design principles and test across different devices and screen sizes to ensure optimal user experience on all platforms.'
    },
    {
      id: 15,
      category: 'technical',
      question: 'How do you handle data security and privacy?',
      answer: 'Security is our priority. We implement: secure authentication systems, data encryption, HTTPS protocols, input validation, SQL injection prevention, XSS protection, and follow GDPR compliance guidelines. We also provide security audits and recommendations.'
    },

    // Support Questions
    {
      id: 16,
      category: 'support',
      question: 'What kind of support do you provide after delivery?',
      answer: '30 days of free support for bug fixes and minor issues. Extended support packages available for ongoing maintenance, updates, feature additions, and technical assistance. We also provide training sessions for content management and basic maintenance.'
    },
    {
      id: 17,
      category: 'support',
      question: 'How quickly do you respond to queries?',
      answer: 'We typically respond to queries within 24 hours on weekdays. For urgent issues during active projects, we provide same-day responses. Emergency support is available for critical issues affecting live websites or applications.'
    },
    {
      id: 18,
      category: 'support',
      question: 'Do you provide training for using the delivered system?',
      answer: 'Yes, we provide comprehensive training including: system walkthrough, user manual, video tutorials, admin panel training, and content management guidance. For complex systems, we offer live training sessions and ongoing support.'
    },
    {
      id: 19,
      category: 'support',
      question: 'Can you help with SEO and digital marketing?',
      answer: 'We provide basic SEO optimization including: meta tags, structured data, sitemap generation, page speed optimization, and mobile optimization. For advanced SEO and digital marketing, we can recommend trusted partners or provide consultation.'
    },
    {
      id: 20,
      category: 'support',
      question: 'What if I\'m not satisfied with the delivered project?',
      answer: 'Client satisfaction is our priority. If you\'re not satisfied, we offer: free revisions based on original requirements, detailed explanation of implementation decisions, and work together to resolve concerns. We stand behind our work and ensure you\'re happy with the final product.'
    }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600">
          Find answers to common questions about our services and process
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.icon}
            {category.label}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No questions found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filter</p>
          </div>
        ) : (
          filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(faq.id) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(faq.id) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="mailto:kadirivignesh2005@gmail.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors border border-blue-200"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;