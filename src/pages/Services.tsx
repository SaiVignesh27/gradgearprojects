import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Globe, ShoppingCart, Users, Database, Wrench, Brain, Smartphone, Blocks, FileText } from 'lucide-react';

const Services = () => {
  const webServices = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Portfolio Website",
      price: "₹5,000 - ₹15,000",
      description: "Professional portfolio websites to showcase your work and skills",
      features: ["Responsive Design", "Contact Forms", "Gallery Integration", "SEO Optimized"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Learning Management System",
      price: "₹25,000 - ₹60,000",
      description: "Complete LMS platforms for educational institutions and online courses",
      features: ["User Management", "Course Creation", "Progress Tracking", "Payment Integration"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Business Website",
      price: "₹10,000 - ₹25,000",
      description: "Professional business websites to establish your online presence",
      features: ["Modern Design", "Mobile Responsive", "CMS Integration", "Analytics Setup"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Hosting & Domain Setup",
      price: "₹2,000 - ₹5,000",
      description: "Complete hosting solution with domain configuration and SSL",
      features: ["Domain Registration", "SSL Certificate", "Email Setup", "Backup Solutions"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Platform",
      price: "₹20,000 - ₹50,000",
      description: "Full-featured online stores with payment and inventory management",
      features: ["Product Management", "Payment Gateway", "Order Tracking", "Admin Dashboard"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Website Maintenance",
      price: "₹1,000 - ₹5,000/month",
      description: "Ongoing maintenance and support for your website",
      features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "Technical Support"]
    }
  ];

  const academicServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Mini Project",
      price: "₹1,000 - ₹3,000",
      description: "Small-scale projects perfect for coursework and semester assignments",
      features: ["Source Code", "Documentation", "Video Demo", "Technical Support"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Major Web Application",
      price: "₹3,000 - ₹8,000",
      description: "Full-stack web applications for final year projects",
      features: ["Complete Web App", "Database Integration", "User Authentication", "Deployment"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Projects",
      price: "₹5,000 - ₹12,000",
      description: "Machine learning and artificial intelligence projects with modern frameworks",
      features: ["ML Models", "Data Analysis", "Jupyter Notebooks", "Research Paper"]
    },
    {
      icon: <Blocks className="w-8 h-8" />,
      title: "Blockchain Projects",
      price: "₹6,000 - ₹15,000",
      description: "Decentralized applications and smart contract development",
      features: ["Smart Contracts", "DApp Development", "Cryptocurrency Integration", "Blockchain Analysis"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile & IoT Projects",
      price: "₹4,000 - ₹10,000",
      description: "Android applications and Internet of Things solutions",
      features: ["Mobile Apps", "IoT Integration", "Sensor Data", "Real-time Monitoring"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Reports & Presentations",
      price: "₹500 - ₹1,500",
      description: "Professional project reports and presentation materials",
      features: ["Technical Documentation", "PowerPoint Slides", "Research Citations", "Professional Formatting"]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Services & <span className="text-blue-600">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for students and businesses with transparent pricing
            </p>
          </div>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web Development Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional web solutions for businesses and organizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-600 rounded-full text-white">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-lg font-semibold text-blue-600">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors w-full block text-center"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic Project Services
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for students and academic institutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-600 rounded-full text-white">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-lg font-semibold text-gray-600">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="bg-gray-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors w-full block text-center"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your project requirements and get a personalized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              to="/how-it-works"
              className="bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-400"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;