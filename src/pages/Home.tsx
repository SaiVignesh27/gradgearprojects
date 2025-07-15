import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, Code, Smartphone, Brain, Globe } from 'lucide-react';

const Home = () => {
  const portfolioPreview = [
    {
      title: "LMS Portal for TECHLAB",
      type: "Learning Platform",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Freelance Startup Platform",
      type: "Freelancing Portal",
      tech: ["React", "Firebase", "Node.js"],
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Home Groceries Delivery App",
      type: "Retail App",
      tech: ["React", "Firebase", "Realtime DB"],
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
    }
  ];

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
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-blue-600">One Gear.</span> Many Solutions.
              <br />
              <span className="text-blue-600">GRADGEAR</span> for Projects & Web Apps
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Helping students and businesses go digital with powerful projects & websites
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/smart-contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                📩 Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-200 flex items-center gap-2"
              >
                🔍 See Our Work
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Who We Serve
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-600 rounded-full">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">💼 Businesses & Startups</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Scale your business with professional web solutions and digital presence.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Company Websites</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">E-commerce Platforms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Learning Management Systems</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-full">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">🎓 Final Year Students</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Complete your academic projects with cutting-edge technology and professional guidance.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Web Applications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">AI/ML Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Mobile Apps & IoT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Portfolio Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Our Latest Work
            </h2>
            <p className="text-xl text-gray-600">
              Delivering excellence across diverse projects
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {portfolioPreview.map((project, index) => (
              <div
                key={index}
                className="relative group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{project.title}</h3>
                    <span className="inline-block text-xs font-semibold text-blue-900 bg-blue-100 px-3 py-1 rounded-full mb-2 shadow">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-2 bg-white">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full border border-blue-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/projects"
                    className="mt-2 self-end text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 group-hover:underline transition-all">
                    View Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/projects"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300 inline-flex items-center gap-2"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials Preview */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by students and businesses alike
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-2xl font-bold text-white">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="mt-10 mb-4 flex items-center justify-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic relative">
                  <span className="absolute -left-5 -top-2 text-blue-300 text-3xl">“</span>
                  {testimonial.feedback}
                  <span className="absolute -right-5 -bottom-2 text-blue-300 text-3xl">”</span>
                </p>
                <div className="border-t pt-4 w-full">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/testimonials"
              className="bg-gradient-to-r from-gray-700 to-gray-500 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:from-gray-900 hover:to-gray-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Read All Testimonials
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400 opacity-30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your requirements and bring your ideas to life
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-blue-50 hover:text-blue-900 transition-all duration-300 inline-flex items-center gap-2 animate-bounce-slow"
            style={{ animation: 'bounce 2s infinite' }}
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;