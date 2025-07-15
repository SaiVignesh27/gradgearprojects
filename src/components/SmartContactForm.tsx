import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Upload, X, Check, Calculator, Zap } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  // Step 1: Basic Info
  fullName: string;
  email: string;
  phone: string;
  clientType: 'student' | 'business' | '';
  
  // Step 2: Project Details
  serviceType: string;
  projectTitle: string;
  description: string;
  features: string[];
  
  // Step 3: Requirements
  budget: number;
  timeline: string;
  techPreferences: string[];
  
  // Step 4: Additional Info
  startDate: string;
  additionalNotes: string;
  // files: File[]; // removed
}

const SmartContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    clientType: '',
    serviceType: '',
    projectTitle: '',
    description: '',
    features: [],
    budget: 5000,
    timeline: '',
    techPreferences: [],
    startDate: '',
    additionalNotes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [estimatedQuote, setEstimatedQuote] = useState({ min: 0, max: 0 });
  // Remove dragActive, handleDrag, handleDrop, handleFileInput, removeFile

  // Auto-save functionality
  useEffect(() => {
    const savedData = localStorage.getItem('gradgear-form-draft');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(parsed);
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gradgear-form-draft', JSON.stringify(formData));
  }, [formData]);

  // Calculate instant quote
  useEffect(() => {
    calculateQuote();
  }, [formData.serviceType, formData.features, formData.budget, formData.clientType]);

  // 1. Add price tables for client and student projects
  const clientWebsitePrices = [
    { value: 'portfolio-website', label: 'Portfolio Website', min: 5000, max: 15000 },
    { value: 'business-website', label: 'Business / Company Website', min: 10000, max: 20000 },
    { value: 'ngo-website', label: 'NGO Website', min: 8000, max: 15000 },
    { value: 'lms-platform', label: 'LMS Platform (basic)', min: 20000, max: 40000 },
    { value: 'ecommerce-website', label: 'E-Commerce Website', min: 20000, max: 50000 },
    { value: 'blog-website', label: 'Blog Website', min: 8000, max: 15000 },
    { value: 'event-website', label: 'Event/Registration Website', min: 10000, max: 20000 },
    { value: 'hosting-domain', label: 'Hosting + Domain Setup (add on)', min: 2000, max: 5000 },
    { value: 'maintenance', label: 'Maintenance Package (monthly)', min: 1000, max: 5000 },
  ];
  const studentProjectPrices = [
    { value: 'final-year-web', label: 'Web-based Final Year Projects', min: 4000, max: 8000 },
    { value: 'mini-project', label: 'Mini Projects (1–2 modules)', min: 1000, max: 4000 },
    { value: 'ml-ai', label: 'ML/AI Based Projects (with models)', min: 5000, max: 12000 },
    { value: 'blockchain', label: 'Blockchain Projects (basic)', min: 6000, max: 15000 },
    { value: 'data-science', label: 'Data Science Projects', min: 3000, max: 7000 },
    { value: 'report-ppt', label: 'Report + PPT Add-on', min: 1500, max: 2500 },
  ];
  // 2. Update price calculation logic to use these tables
  const serviceOptions = {
    student: studentProjectPrices,
    business: clientWebsitePrices,
  };

  const featureOptions = {
    student: [
      'User Authentication', 'Database Integration', 'API Development', 'Real-time Features',
      'Machine Learning Models', 'Data Visualization', 'Mobile Responsive', 'Admin Dashboard',
      'Payment Integration', 'Third-party APIs', 'Cloud Deployment', 'Documentation'
    ],
    business: [
      'Responsive Design', 'CMS Integration', 'SEO Optimization', 'Contact Forms',
      'E-commerce Features', 'Payment Gateway', 'User Management', 'Analytics Integration',
      'Social Media Integration', 'Blog System', 'Multi-language Support', 'Security Features'
    ]
  };

  const techOptions = [
    'React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'MySQL',
    'Express.js', 'Next.js', 'Vue.js', 'Angular', 'Django', 'Flask',
    'TensorFlow', 'PyTorch', 'Blockchain', 'Web3', 'AWS', 'Firebase'
  ];

  const calculateQuote = () => {
    if (!formData.serviceType || !formData.clientType) {
      setEstimatedQuote({ min: 0, max: 0 });
      return;
    }

    const services = serviceOptions[formData.clientType as keyof typeof serviceOptions];
    const selectedService = services.find(s => s.value === formData.serviceType);
    
    if (!selectedService) {
      setEstimatedQuote({ min: 0, max: 0 });
      return;
    }

    let baseMin = selectedService.min;
    let baseMax = selectedService.max;
    
    // Feature multiplier
    const featureMultiplier = 1 + (formData.features.length * 0.1);
    
    // Budget adjustment
    const budgetFactor = formData.budget > baseMax ? 1.2 : 1;
    
    const min = Math.round(baseMin * featureMultiplier * budgetFactor);
    const max = Math.round(baseMax * featureMultiplier * budgetFactor);
    
    setEstimatedQuote({ min, max });
  };

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleTechToggle = (tech: string) => {
    setFormData(prev => ({
      ...prev,
      techPreferences: prev.techPreferences.includes(tech)
        ? prev.techPreferences.filter(t => t !== tech)
        : [...prev.techPreferences, tech]
    }));
  };

  // Remove dragActive, handleDrag, handleDrop, handleFileInput, removeFile

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        client_type: formData.clientType,
        service_type: formData.serviceType,
        project_title: formData.projectTitle,
        description: formData.description,
        features: formData.features.join(', '),
        budget: formData.budget,
        timeline: formData.timeline,
        tech_preferences: formData.techPreferences.join(', '),
        start_date: formData.startDate,
        additional_notes: formData.additionalNotes,
        estimated_quote: `₹${estimatedQuote.min.toLocaleString()} - ₹${estimatedQuote.max.toLocaleString()}`,
        to_email: formData.email
      };

      // EmailJS config from Vite env
      const publicKey = import.meta.env.VITE_EMAILJS_SUPERQUOTE_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SUPERQUOTE_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_SUPERQUOTE_TEMPLATE_ID;

      // Initialize EmailJS with Vite env key
      emailjs.init(publicKey);
      await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      setSubmitStatus('success');
      localStorage.removeItem('gradgear-form-draft');
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.email && formData.phone && formData.clientType;
      case 2:
        return formData.serviceType && formData.projectTitle && formData.description;
      case 3:
        return formData.timeline;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Let's Get Started</h3>
              <p className="text-gray-600">Tell us about yourself and your project type</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                I am a... *
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleInputChange('clientType', 'student')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    formData.clientType === 'student'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-4xl mb-2">🎓</div>
                  <div className="font-semibold">Student</div>
                  <div className="text-sm text-gray-600">Academic projects & assignments</div>
                </button>
                
                <button
                  type="button"
                  onClick={() => handleInputChange('clientType', 'business')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    formData.clientType === 'business'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-4xl mb-2">💼</div>
                  <div className="font-semibold">Business Owner</div>
                  <div className="text-sm text-gray-600">Commercial websites & solutions</div>
                </button>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Project Details</h3>
              <p className="text-gray-600">What kind of project do you need?</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Service Type *
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {formData.clientType && serviceOptions[formData.clientType as keyof typeof serviceOptions].map((service) => (
                  <button
                    key={service.value}
                    type="button"
                    onClick={() => handleInputChange('serviceType', service.value)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      formData.serviceType === service.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">{service.label}</div>
                    <div className="text-sm text-gray-600">
                      ₹{service.min.toLocaleString()} - ₹{service.max.toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Title *
              </label>
              <input
                type="text"
                value={formData.projectTitle}
                onChange={(e) => handleInputChange('projectTitle', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Give your project a title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe your project requirements, goals, and any specific features you need..."
              />
            </div>

            {formData.clientType && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Required Features (Select all that apply)
                </label>
                <div className="grid md:grid-cols-3 gap-3">
                  {featureOptions[formData.clientType as keyof typeof featureOptions].map((feature) => (
                    <button
                      key={feature}
                      type="button"
                      onClick={() => handleFeatureToggle(feature)}
                      className={`p-3 rounded-lg border text-sm transition-all ${
                        formData.features.includes(feature)
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Budget & Timeline</h3>
              <p className="text-gray-600">Help us understand your requirements better</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Budget Range: ₹{formData.budget.toLocaleString()}
              </label>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                title="Budget Range"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>₹1,000</span>
                <span>₹1,00,000+</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Timeline *
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                title="Project Timeline"
              >
                <option value="">Select timeline</option>
                <option value="urgent">Urgent (1-7 days)</option>
                <option value="standard">Standard (1-2 weeks)</option>
                <option value="flexible">Flexible (2-4 weeks)</option>
                <option value="extended">Extended (1+ months)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Technology Preferences (Optional)
              </label>
              <div className="grid md:grid-cols-4 gap-3">
                {techOptions.map((tech) => (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => handleTechToggle(tech)}
                    className={`p-2 rounded-lg border text-sm transition-all ${
                      formData.techPreferences.includes(tech)
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {estimatedQuote.min > 0 && (
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <Calculator className="w-6 h-6 text-blue-600" />
                  <h4 className="text-lg font-semibold text-blue-900">Estimated Quote</h4>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  ₹{estimatedQuote.min.toLocaleString()} - ₹{estimatedQuote.max.toLocaleString()}
                </div>
                <p className="text-sm text-blue-700">
                  This is a preliminary estimate based on your selections. Final quote will be provided after consultation.
                </p>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Final Details</h3>
              <p className="text-gray-600">Almost done! Just a few more details</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Start Date
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                title="Preferred Start Date"
                placeholder="Select start date"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any additional requirements, questions, or special instructions..."
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="max-w-2xl mx-auto text-center py-12 mt-24">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Thank You for Your Submission!
        </h3>
        <p className="text-gray-600 mb-6">
          We've received your project details and will get back to you within 24 hours with a detailed proposal.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">What's Next?</h4>
          <div className="text-sm text-blue-700 space-y-1">
            <p>✓ We'll review your requirements</p>
            <p>✓ Schedule a consultation call</p>
            <p>✓ Provide detailed proposal with timeline</p>
            <p>✓ Start your project upon approval</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pt-24 mb-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                step <= currentStep
                  ? 'border-blue-500 bg-blue-500 text-white'
                  : 'border-gray-300 text-gray-400'
              }`}
            >
              {step < currentStep ? <Check className="w-5 h-5" /> : step}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
        {renderStep()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={!isStepValid()}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  Submit Report
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Auto-save indicator */}
      {/* <div className="text-center mt-4 mb-4">
        <p className="text-sm text-gray-500">
          💾 Your progress is automatically saved
        </p>
      </div> */}
    </div>
  );
};

export default SmartContactForm;