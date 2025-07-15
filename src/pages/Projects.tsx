// import React, { useState } from 'react';
// import { Code, Globe, ShoppingCart, Users, Database, Smartphone, Brain, Blocks } from 'lucide-react';

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState('All');

//   const projects = [
//     {
//       id: 1,
//       title: "E-commerce Fashion Store",
//       category: "E-commerce",
//       type: "Business Website",
//       tech: ["React", "Node.js", "MongoDB", "Stripe"],
//       image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Complete online fashion store with payment integration and inventory management"
//     },
//     {
//       id: 2,
//       title: "University Learning Portal",
//       category: "LMS",
//       type: "Educational Platform",
//       tech: ["React", "Express", "PostgreSQL", "Socket.io"],
//       image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Comprehensive LMS with course management, assignments, and real-time collaboration"
//     },
//     {
//       id: 3,
//       title: "AI-Powered Recommendation System",
//       category: "Student Projects",
//       type: "AI/ML Project",
//       tech: ["Python", "TensorFlow", "Flask", "scikit-learn"],
//       image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Machine learning system for personalized product recommendations"
//     },
//     {
//       id: 4,
//       title: "Real Estate Platform",
//       category: "Web Development",
//       type: "Business Website",
//       tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
//       image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Modern real estate platform with property listings and virtual tours"
//     },
//     {
//       id: 5,
//       title: "Blockchain Voting System",
//       category: "Student Projects",
//       type: "Blockchain Project",
//       tech: ["Solidity", "Web3.js", "React", "Ethereum"],
//       image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Decentralized voting system ensuring transparency and security"
//     },
//     {
//       id: 6,
//       title: "Restaurant Management System",
//       category: "Web Development",
//       type: "Business Website",
//       tech: ["Vue.js", "Laravel", "MySQL", "PayPal"],
//       image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Complete restaurant management with online ordering and reservations"
//     },
//     {
//       id: 7,
//       title: "Smart Home IoT Dashboard",
//       category: "Student Projects",
//       type: "IoT Project",
//       tech: ["Arduino", "React", "Node.js", "MQTT"],
//       image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "IoT dashboard for monitoring and controlling smart home devices"
//     },
//     {
//       id: 8,
//       title: "Healthcare Management Portal",
//       category: "Web Development",
//       type: "Healthcare Platform",
//       tech: ["Angular", "Spring Boot", "MySQL", "JWT"],
//       image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
//       description: "Comprehensive healthcare management system for hospitals and clinics"
//     }
//   ];

//   const filters = ['All', 'Web Development', 'Student Projects', 'E-commerce', 'LMS'];

//   const filteredProjects = activeFilter === 'All' 
//     ? projects 
//     : projects.filter(project => project.category === activeFilter);

//   const getIcon = (category: string) => {
//     switch (category) {
//       case 'Web Development':
//         return <Globe className="w-5 h-5" />;
//       case 'Student Projects':
//         return <Code className="w-5 h-5" />;
//       case 'E-commerce':
//         return <ShoppingCart className="w-5 h-5" />;
//       case 'LMS':
//         return <Users className="w-5 h-5" />;
//       default:
//         return <Database className="w-5 h-5" />;
//     }
//   };

//   return (
//     <div className="min-h-screen pt-24">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-8">
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
//               Our <span className="text-blue-600">Portfolio</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
//               Showcasing our latest projects and success stories
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Filter Section */}
//       <section className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {filters.map((filter) => (
//               <button
//                 key={filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//                   activeFilter === filter
//                     ? 'bg-blue-600 text-white shadow-lg'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="pb-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProjects.map((project) => (
//               <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
//                 <div className="relative group">
//                   <img 
//                     src={project.image} 
//                     alt={project.title}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                     <div className="text-white text-center">
//                       <p className="text-sm font-medium">View Project</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
//                     <div className="flex items-center gap-1 text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
//                       {getIcon(project.category)}
//                       <span className="text-xs font-medium">{project.category}</span>
//                     </div>
//                   </div>
                  
//                   <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech, index) => (
//                       <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-gray-500">{project.type}</span>
//                     <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
//                       Learn More →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-blue-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Ready to Start Your Project?
//           </h2>
//           <p className="text-xl text-blue-100 mb-8">
//             Let's discuss your requirements and create something amazing together
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/contact"
//               className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
//             >
//               Get a Quote
//             </a>
//             <a
//               href="/services"
//               className="bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-400"
//             >
//               View Services
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;

import React, { useState } from 'react';
import { Briefcase, GraduationCap, Database } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  type: string;
  tech: string[];
  image: string;
  description: string;
  howItWorks: string;
  results: string;
  features: string[];
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const projects = [
    {
      id: 1,
      title: "LMS Portal for TECHLAB",
      category: "College Projects",
      type: "Learning Platform",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Students can take recorded classes, tests, submit assignments, and track their progress. Separate logins for admins/trainers and students.",
      howItWorks: "Trainers upload course content and create assignments/tests. Students can view materials, complete tests, and get leaderboard rankings. Admins monitor everything.",
      results: "Enabled structured progress tracking and enhanced digital learning experience for TECHLAB students.",
      features: [
        "Role-based logins (student/trainer/admin)",
        "Auto-evaluation for MCQs and quizzes",
        "Coding & subjective test support",
        "Leaderboard and report analytics",
        "Assignment upload & feedback"
      ]
    },
    {
      id: 2,
      title: "Freelance Startup Platform",
      category: "College Projects",
      type: "Freelancing Portal",
      tech: ["React", "Firebase", "Node.js"],
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Recruiters post jobs, students apply. Includes skill/location-based matching and payment tracking.",
      howItWorks: "Startups post jobs; student freelancers apply. The system auto-matches jobs to freelancers using skillset and location filters.",
      results: "Created a real-world experience for students while helping startups hire quickly at low cost.",
      features: [
        "Freelancer and recruiter dashboards",
        "Job application tracking",
        "Skill-based job recommendations",
        "Admin overview and analytics",
        "Payment status and feedback system"
      ]
    },
    {
      id: 3,
      title: "Home Groceries Delivery App",
      category: "Client Projects",
      type: "Retail App",
      tech: ["React", "Firebase", "Realtime DB"],
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Full grocery delivery solution with roles for shop owners, customers, and delivery agents.",
      howItWorks: "Shop owners update stock via dashboard. Customers place orders. Delivery agents manage order statuses from pickup to delivery.",
      results: "Streamlined operations and increased digital reach for a local grocery store.",
      features: [
        "Live stock and order management",
        "Multi-role system (customer/shop/agent)",
        "Realtime database updates",
        "Order tracking at each delivery stage",
        "Mobile-optimized interface"
      ]
    },
    {
      id: 4,
      title: "Farmease Agri Leasing & Crop Recommendation",
      category: "College Projects",
      type: "AgriTech Platform",
      tech: ["React", "Node.js", "ML Model API"],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Smart land & equipment leasing with crop recommendation using soil data (PH, Nitrogen, etc.)",
      howItWorks: "Farmers input their land data. The system recommends ideal crops and allows them to lease tools and machines.",
      results: "Reduced cost and risk for small farmers while maximizing yield potential through intelligent suggestions.",
      features: [
        "Soil analysis-based crop suggestions",
        "Agricultural machine leasing dashboard",
        "Farmer login and asset tracking",
        "AI-powered crop API integration"
      ]
    },
    {
      id: 5,
      title: "MentorConnect Doubt Solving Platform",
      category: "College Projects",
      type: "Educational App",
      tech: ["React", "Firebase", "OpenAI API"],
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Students post doubts, mentors respond via chat. AI assistant handles general academic queries.",
      howItWorks: "Students post doubts. Mentors are notified and can pick them up. AI assistant handles repeated/general doubts using OpenAI.",
      results: "Created an on-demand support platform that improves academic clarity and reduces dependency on offline tuition.",
      features: [
        "Student–mentor live chat",
        "OpenAI-based chatbot integration",
        "Instant doubt resolution alerts",
        "Category tagging for academic subjects",
        "Dashboard analytics for mentors"
      ]
    },
    {
      id: 6,
      title: "Custom E-commerce Platform",
      category: "Client Projects",
      type: "E-commerce Website",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Custom online store with product management, inventory, payments and order tracking.",
      howItWorks: "Admins manage inventory and orders. Customers browse, add to cart, and pay using Stripe. Orders are updated through each status stage.",
      results: "Built a full-fledged ecommerce presence for a local seller, increasing sales and operational automation.",
      features: [
        "Admin product and stock management",
        "Stripe payment integration",
        "Order lifecycle tracking (placed → shipped → delivered)",
        "Customer login & invoice generation",
        "Responsive product grid and filtering"
      ]
    }
  ];
  

  const filters = ['All', 'Client Projects', 'College Projects'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Client Projects':
        return <Briefcase className="w-5 h-5" />;
      case 'College Projects':
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <Database className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Our <span className="text-blue-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our work across client and college projects
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition-all">
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center gap-1 text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {getIcon(project.category)}
                    <span className="text-xs font-medium">{project.category}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => openModal(project)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Dialog Box */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-xl p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-700 mb-2">{selectedProject.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{selectedProject.type} • {selectedProject.category}</p>

            <section className="mb-4">
              <h3 className="text-md font-semibold text-gray-800 mb-1">Overview:</h3>
              <p className="text-gray-700">{selectedProject.description}</p>
            </section>

            <section className="mb-4">
              <h3 className="text-md font-semibold text-gray-800 mb-1">How It Works:</h3>
              <p className="text-gray-700">{selectedProject.howItWorks}</p>
            </section>

            <section className="mb-4">
              <h3 className="text-md font-semibold text-gray-800 mb-1">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {selectedProject.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-md font-semibold text-gray-800 mb-1">Results:</h3>
              <p className="text-gray-700">{selectedProject.results}</p>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
