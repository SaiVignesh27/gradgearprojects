import React from 'react';
import { Target, Code, Users, Award, User } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              About <span className="text-blue-600">GRADGEAR</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in digital transformation and academic excellence
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  GRADGEAR aims to be the one-stop destination for academic projects and web development solutions by combining creativity, technology, and affordability.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that every student deserves access to cutting-edge technology solutions for their academic projects, and every business should have the opportunity to establish a strong digital presence without breaking the bank.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our commitment is to deliver high-quality, scalable solutions that not only meet your immediate needs but also provide a foundation for future growth and success.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">5+</div>
                    <div className="text-blue-100">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2+</div>
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for students and businesses
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Student Projects */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-full">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">🧑‍🎓 Student Projects</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Empowering students with cutting-edge technology solutions for their academic journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI/ML Projects</h4>
                    <p className="text-gray-600 text-sm">Machine learning models, neural networks, and intelligent systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Web Applications</h4>
                    <p className="text-gray-600 text-sm">Full-stack web development with modern frameworks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">IoT & Android</h4>
                    <p className="text-gray-600 text-sm">Internet of Things solutions and mobile applications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Blockchain</h4>
                    <p className="text-gray-600 text-sm">Decentralized applications and smart contracts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-600 rounded-full">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">🧑‍💻 Web Development</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Professional web solutions to establish and grow your digital presence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Company Websites</h4>
                    <p className="text-gray-600 text-sm">Professional business websites with modern design</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Learning Management Systems</h4>
                    <p className="text-gray-600 text-sm">Complete LMS platforms for educational institutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">E-commerce Platforms</h4>
                    <p className="text-gray-600 text-sm">Online stores with payment integration and inventory management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hosting & Maintenance</h4>
                    <p className="text-gray-600 text-sm">Domain setup, hosting, and ongoing technical support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Founder
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:p-12 rounded-2xl border border-blue-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-6xl font-bold text-white">KSV </span>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Sai Vignesh Kadiri
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Hello! I'm Sai Vignesh, the founder of GRADGEAR. As a passionate developer and tech enthusiast, 
                    I started this journey to bridge the gap between innovative technology and practical solutions. 
                    My experience in both academic projects and real-world applications has shaped GRADGEAR into 
                    a platform that truly understands the needs of students and businesses.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    With a strong foundation in full-stack development, AI/ML, and modern web technologies, 
                    I'm committed to delivering solutions that not only meet your requirements but exceed your expectations. 
                    Every project at GRADGEAR is handled with the same dedication and attention to detail that I would 
                    want for my own work.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Full-Stack Developer</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">AI/ML Developer</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Tech Consultant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:p-12 rounded-2xl border border-blue-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-white">GradGear</span>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  GRADGEAR – Ideas to Execution. Projects to Platforms.
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                  At GRADGEAR, we're more than just developers — we're a passionate team of innovators, designers, and tech consultants dedicated to bringing your ideas to life.
                  Our team brings a unique blend of expertise across full-stack development, AI/ML, UI/UX design, and business technology consulting. From academic projects to real-world platforms, we've built solutions that empower students, startups, and established businesses to thrive online.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                  We believe in collaboration, creativity, and client-centric solutions. Every project we work on is handled with attention to detail, transparency, and a drive for excellence.
                  Whether you're launching a portfolio, a business site, or a scalable platform — GRADGEAR is your trusted tech partner.
                  </p>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-6">🚀 What We Do Best:</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Web & App Development</li>
                    <li>AI/ML Integration</li>
                    <li>Custom LMS & E-commerce Platforms</li>
                    <li>Technical Consulting & Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GRADGEAR?
            </h2>
            <p className="text-xl text-gray-600">
              We're more than just a service provider - we're your technology partner
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Focus</h3>
              <p className="text-gray-600">Every project is crafted with attention to detail and industry best practices</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Technology</h3>
              <p className="text-gray-600">We use cutting-edge tools and frameworks to build future-ready solutions</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Touch</h3>
              <p className="text-gray-600">Direct communication with the founder ensures personalized service</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful projects and satisfied clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;