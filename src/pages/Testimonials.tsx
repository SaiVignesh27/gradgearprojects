import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Star } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Testimonials = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    projectType: '',
    rating: 5,
    feedback: '',
    allowPublic: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const testimonials = [
    {
      name: "Faang Tech Code Lab",
      project: "LMS Portal for TECHLAB",
      rating: 5,
      feedback: "GRADGEAR built a complete LMS for our training institute. The project exceeded expectations in both design and usability. Students are actively engaging and tracking their learning."
    },
    {
      name: "Sai Vignesh",
      project: "Freelance Startup Platform",
      rating: 4,
      feedback: "The freelance job portal built by GRADGEAR helped us launch our startup vision. The team delivered a clean UI and smart matching logic. Super fast and helpful support!"
    },
    {
      name: "Uday Kiran",
      project: "Home Groceries Delivery App",
      rating: 5,
      feedback: "Our grocery delivery app was beautifully designed and highly functional. GRADGEAR understood our business needs and executed it brilliantly with Firebase realtime updates."
    },
    {
      name: "Varsha Vani",
      project: "Farmease Agri Leasing & Crop Recommendation",
      rating: 5,
      feedback: "An excellent final year project for agriculture innovation! The platform was intelligent, well-built, and impressively delivered on time."
    },
    {
      name: "Yaswanth",
      project: "MentorConnect Doubt Solving Platform",
      rating: 5,
      feedback: "GRADGEAR developed a unique and impactful educational platform. The mentor-student chat and AI assistant were key highlights!"
    },
    {
      name: "Divya Menon",
      project: "Custom E-commerce Platform",
      rating: 5,
      feedback: "Superb execution of our custom e-commerce needs. From UI design to payment integration, everything was flawless and optimized for conversions."
    }
  ];

  const MAX_FEEDBACK_LENGTH = 500;

  const initialErrors = {
    name: '',
    email: '',
    project: '',
    projectType: '',
    feedback: '',
  };

  const [errors, setErrors] = useState(initialErrors);
  const [showToast, setShowToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const validate = () => {
    const newErrors = { ...initialErrors };
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    if (!formData.project.trim()) newErrors.project = 'Project name is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Invalid email address.';
    if (!formData.projectType) newErrors.projectType = 'Project type is required.';
    if (!formData.feedback.trim()) newErrors.feedback = 'Feedback is required.';
    else if (formData.feedback.length > MAX_FEEDBACK_LENGTH) newErrors.feedback = `Feedback must be under ${MAX_FEEDBACK_LENGTH} characters.`;
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TESTIMONIALS_TEMPLATE_ID;
      emailjs.init(publicKey);
      const templateParams = {
        name: formData.name,
        email: formData.email,
        project: formData.project,
        projectType: formData.projectType,
        rating: formData.rating,
        feedback: formData.feedback,
        allowPublic: formData.allowPublic ? 'Yes' : 'No',
      };
      await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        project:'',
        projectType: '',
        rating: 5,
        feedback: '',
        allowPublic: false
      });
      setShowToast({ type: 'success', message: 'Thank you for your feedback! We appreciate your testimonial.' });
    } catch (error) {
      setSubmitStatus('error');
      setShowToast({ type: 'error', message: 'There was an error submitting your testimonial. Please try again.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowToast(null), 4000);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Client <span className="text-blue-600">Testimonials</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience working with GRADGEAR
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center gap-2 mb-3">
                {renderStars(t.rating)}
              </div>
              <p className="text-gray-700 text-base mb-4">"{t.feedback}"</p>
              <div className="flex items-center gap-4 border-t pt-4">
                {/* <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" /> */}
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg uppercase">
                  {t.name.split(' ').map(word => word.charAt(0)).join('').substring(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h2>
            <p className="text-xl text-gray-600">
              We'd love to hear about your project experience with GRADGEAR
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 relative">
            {showToast && (
              <div className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg text-white ${showToast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
                role="alert" aria-live="assertive">
                {showToast.type === 'success' ? <CheckCircle className="inline w-5 h-5 mr-2" /> : <AlertCircle className="inline w-5 h-5 mr-2" />}
                {showToast.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: 'name', label: 'Name', type: 'text' },
                { id: 'email', label: 'Email', type: 'email' },
                { id: 'project', label: 'Project Name', type: 'text' },
                { id: 'feedback', label: 'Feedback', type: 'textarea' }
              ].map(({ id, label, type }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label} *</label>
                  {type === 'textarea' ? (
                    <textarea
                      id={id}
                      name={id}
                      value={formData[id as keyof typeof formData] as string}
                      onChange={handleChange}
                      required
                      rows={5}
                      maxLength={MAX_FEEDBACK_LENGTH}
                      className={`w-full px-4 py-3 border ${errors[id as keyof typeof errors] ? 'border-red-400' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                    />
                  ) : (
                    <input
                      type={type}
                      id={id}
                      name={id}
                      value={formData[id as keyof typeof formData] as string}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border ${errors[id as keyof typeof errors] ? 'border-red-400' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                    />
                  )}
                  {id === 'feedback' && (
                    <div className="flex justify-between items-center mt-1">
                      {errors.feedback && <span className="text-red-500 text-xs">{errors.feedback}</span>}
                      <span className="text-xs text-gray-400 ml-auto">{formData.feedback.length}/{MAX_FEEDBACK_LENGTH}</span>
                    </div>
                  )}
                  {id !== 'feedback' && errors[id as keyof typeof errors] && <p className="text-red-500 text-xs mt-1">{errors[id as keyof typeof errors]}</p>}
                </div>
              ))}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border ${errors.projectType ? 'border-red-400' : 'border-gray-300'} rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                >
                  <option value="" disabled hidden>Select type</option>
                  <option value="Student Project">Student Project</option>
                  <option value="Business Website">Business Project</option>
                </select>
                {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating *</label>
                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <button
                      title={`Rate ${i + 1} star${i === 0 ? '' : 's'}`}
                      key={i}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, rating: i + 1 }))}
                      className="focus:outline-none"
                      aria-label={`Rate ${i + 1} star${i === 0 ? '' : 's'}`}
                    >
                      <Star
                        className={`w-8 h-8 ${i < formData.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {formData.rating} star{formData.rating !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="allowPublic"
                  name="allowPublic"
                  checked={formData.allowPublic}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="allowPublic" className="text-sm text-gray-700">
                  Allow display publicly on website
                </label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
