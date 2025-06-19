import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Award, Briefcase, Code, User, Home, FolderOpen, Star, Calendar, Building } from 'lucide-react';
import data from "../data.json"
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjusted for better accuracy
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Helper component for section headers
  const SectionHeader = ({ title, gradientText, subtitle }) => (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title} <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{gradientText}</span>
      </h2>
      <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );

  return (
    <div className="bg-slate-900 text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Rashi Lambat
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About', icon: User },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'projects', label: 'Projects', icon: FolderOpen },
                { id: 'certifications', label: 'Certifications', icon: Award },
                { id: 'contact', label: 'Contact', icon: Mail }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    activeSection === id ? 'text-blue-300 bg-slate-800' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`block h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
                <span className={`block h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-t border-slate-700">
              <div className="px-2 pt-2 pb-4 space-y-2">
                {[
                  { id: 'home', label: 'Home', icon: Home },
                  { id: 'about', label: 'About', icon: User },
                  { id: 'experience', label: 'Experience', icon: Briefcase },
                  { id: 'projects', label: 'Projects', icon: FolderOpen },
                  { id: 'certifications', label: 'Certifications', icon: Award },
                  { id: 'contact', label: 'Contact', icon: Mail }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="flex items-center space-x-3 w-full px-3 py-3 rounded-lg transition-all duration-300 hover:bg-slate-800 text-left text-lg"
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-20"> {/* Added main tag and padding top to offset fixed nav */}
      
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden -mt-20"> {/* Offset nav height */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <div className="mb-6">
              <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <Code size={56} className="text-blue-400" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Salesforce
              </span>
              <span className="block text-white mt-2">Developer</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Crafting powerful enterprise solutions with 7 certifications and a passion for complex Salesforce implementations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-slate-600 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 font-semibold text-lg"
              >
                Get In Touch
              </button>
            </div>
            
            <div className="flex justify-center space-x-6">
              
              <a href="https://www.linkedin.com/in/rashi-lambat-959129193/" aria-label="LinkedIn Profile" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="#" aria-label="Send Email" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-slate-500" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-28 bg-slate-900/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="About" gradientText="Me" subtitle="Passionate Salesforce developer with proven expertise in building scalable enterprise solutions." />
            
            <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">
              <div className="md:col-span-3 space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  With over 3 years of hands-on experience in the Salesforce ecosystem, I specialize in creating robust, scalable, and high-performance solutions for enterprise clients. My expertise spans custom Apex development, Lightning Web Components, complex integrations, and declarative automation.
                </p>
                <p>
                  I thrive on solving complex business challenges and have a track record of delivering projects for Fortune 500 companies, consistently improving operational efficiency and user experience through innovative and well-architected Salesforce implementations.
                </p>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Core Competencies</h3>
                <div className="space-y-4">
                  {[
                    { skill: 'Apex & LWC Development', level: 95 },
                    { skill: 'Salesforce APIs & Integration', level: 90 },
                    { skill: 'Automation (Flow & Process Builder)', level: 92 },
                    { skill: 'Data Architecture & Migration', level: 85 }
                  ].map(({ skill, level }) => (
                    <div key={skill}>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300 font-medium">{skill}</span>
                        <span className="text-blue-400 font-semibold">{level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                          style={{ width: `${level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Professional" gradientText="Experience" subtitle="My journey in Salesforce development across leading technology companies." />
            
            <div className="space-y-12 max-w-4xl mx-auto">
              {data.experience.map((exp, index) => (
                <div key={index} className="flex gap-6">
                  <div className="hidden sm:flex flex-col items-center">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 border-2 border-blue-500/50 flex items-center justify-center">
                          <Briefcase className="text-blue-400" size={24} />
                      </div>
                      {index < data.experience.length - 1 && <div className="w-px h-full bg-slate-700 mt-4"></div>}
                  </div>
                  <div className="bg-slate-800/40 rounded-xl p-6 md:p-8 border border-slate-700/50 transition-all duration-300 w-full">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-400 mb-4 text-sm">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-slate-300 mb-5 leading-relaxed">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Star size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                          <span className="text-slate-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-28 bg-slate-900/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Featured" gradientText="Projects" subtitle="A selection of enterprise solutions that drive business transformation." />
            
            <div className="grid md:grid-cols-1 gap-10">
              {data.projects.map((project, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 md:p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold mb-1 text-white">{project.title}</h3>
                      <p className="text-blue-400 font-semibold mb-3">{project.client}</p>
                      <p className="text-slate-300 mb-5 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-700 rounded-full text-sm font-medium text-slate-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-6 flex flex-col justify-center items-center text-center">
                      <div className="text-5xl mb-3">📈</div>
                      <h4 className="font-bold text-lg mb-1 text-white">Business Impact</h4>
                      <p className="text-green-400 font-semibold text-lg">{project.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Validated" gradientText="Certifications" subtitle="My professional credentials demonstrating expertise across the Salesforce ecosystem." />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data.certifications.map((cert, index) => (
                <div key={index} className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/50 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{cert.icon}</div>
                      <Award className="text-yellow-400 flex-shrink-0" size={24} />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 leading-tight text-white">{cert.name}</h3>
                    
                    <div className="space-y-2 text-sm mb-4">
                        <div className="flex justify-between"><span className="text-slate-400">Issuer:</span><span className="text-blue-400 font-semibold">{cert.issuer}</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Issued:</span><span className="text-white">{cert.date}</span></div>
                        {cert.credentialId && (<div className="flex justify-between items-center"><span className="text-slate-400">ID:</span><span className="text-slate-300 font-mono text-xs">{cert.credentialId}</span></div>)}
                    </div>
                  </div>
                  
                  {cert.hasCredential && (
                    <button className="w-full mt-4 px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-blue-300 text-sm font-medium hover:bg-slate-700 hover:border-blue-500/80 transition-all duration-300">
                      Show Credential
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-slate-900/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Let's" gradientText="Connect" subtitle="Ready to transform your Salesforce implementation? Reach out to discuss your project." />
            
            <div className="grid md:grid-cols-1 gap-10 md:gap-16 max-w-5xl mx-auto">
              <div className="space-y-6">
                  <div className="flex items-center space-x-5 p-5 bg-slate-800/50 rounded-lg">
                    <Mail className="text-blue-400 flex-shrink-0" size={28} />
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-slate-300">rashilambat22@gmail.com</p>
                    </div>
                  </div>
              </div>
              
              
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div className="flex space-x-6">
              
              <a href="https://www.linkedin.com/in/rashi-lambat-959129193/" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Send Email" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;