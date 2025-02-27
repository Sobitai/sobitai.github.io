import React from 'react';
import { 
  Shield, 
  Brain, 
  Link as ChainLink, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-indigo-600 font-bold text-2xl">Sobitai</span>
                <span className="text-gray-700 font-medium ml-1">Solutions</span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a href="#home" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </a>
                <a href="#services" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Services
                </a>
                <a href="#about" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  About
                </a>
                <a href="#contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <a href="#contact" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Get in Touch
              </a>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#home" className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                Home
              </a>
              <a href="#services" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                Services
              </a>
              <a href="#about" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                About
              </a>
              <a href="#contact" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                Contact
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <a href="#contact" className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-4 mb-4">
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-indigo-600 to-purple-600 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Secure. Intelligent.</span>
                <span className="block text-indigo-200">Future-Ready.</span>
              </h1>
              <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Sobitai Solutions LLP delivers cutting-edge technology solutions in Cybersecurity, Artificial Intelligence, and Blockchain to empower businesses and governments.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row">
                <div className="rounded-md shadow">
                  <a href="#services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10">
                    Our Services
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-0 md:w-1/2">
              <img 
                className="h-auto w-full object-cover rounded-lg shadow-xl" 
                src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Digital technology visualization" 
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Services</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Our Core Expertise
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              We deliver high-tech solutions that meet the demands of modern businesses while ensuring security and integrity.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Cybersecurity */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-md shadow-lg">
                  <Shield className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">Cybersecurity</h3>
                <p className="mt-3 text-base text-gray-500">
                  Comprehensive cybersecurity services designed to protect businesses from evolving threats. We offer training, risk assessments, security audits, and threat detection.
                </p>
                <div className="mt-6">
                  <a href="#contact" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Artificial Intelligence */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-md shadow-lg">
                  <Brain className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">Artificial Intelligence</h3>
                <p className="mt-3 text-base text-gray-500">
                  AI-driven solutions to automate processes, derive insights from data, and enhance decision-making with machine learning and predictive analytics.
                </p>
                <div className="mt-6">
                  <a href="#contact" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Blockchain */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-md shadow-lg">
                  <ChainLink className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">Blockchain</h3>
                <p className="mt-3 text-base text-gray-500">
                  Secure, transparent, and efficient blockchain systems for various applications, from smart contracts to decentralized applications.
                </p>
                <div className="mt-6">
                  <a href="#contact" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Advantage</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Why Choose Sobitai
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Expertise</h3>
              <p className="mt-2 text-base text-gray-500">
                Our team comprises skilled professionals with deep knowledge in cybersecurity, AI, and blockchain.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Customization</h3>
              <p className="mt-2 text-base text-gray-500">
                We understand that every business is unique. Our solutions are tailored to meet specific needs.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Innovation</h3>
              <p className="mt-2 text-base text-gray-500">
                We stay ahead of technology trends to provide our clients with cutting-edge solutions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Support</h3>
              <p className="mt-2 text-base text-gray-500">
                Our partnership extends beyond implementation; we offer ongoing support and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-200 tracking-wide uppercase">About Us</h2>
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight">
              Our Story & Mission
            </p>
          </div>

          <div className="mt-12 grid gap-16 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="mt-4 text-lg text-indigo-100">
                At Sobitai Solutions LLP, our mission is to deliver high-tech solutions that not only meet the demands of modern businesses but also ensure the security and integrity of their operations. We strive to harness advanced technologies to create lasting value for our clients.
              </p>
              <p className="mt-4 text-lg text-indigo-100">
                Based in Goa, India, we're dedicated to providing cutting-edge technology solutions that leverage the power of Cybersecurity, Artificial Intelligence, and Blockchain to empower businesses and governments with robust and secure technological frameworks.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">Our Founders</h3>
              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div className="flex flex-col items-center">
                  <img 
                    className="h-40 w-40 rounded-full object-cover" 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Nihar Barve" 
                  />
                  <h4 className="mt-4 text-xl font-medium text-white">Nihar Barve</h4>
                  <p className="mt-1 text-sm text-indigo-200">Co-Founder</p>
                  <p className="mt-2 text-sm text-center text-indigo-100">
                    A tech enthusiast with a strong background in business management and software development.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img 
                    className="h-40 w-40 rounded-full object-cover" 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Mandar Thosar" 
                  />
                  <h4 className="mt-4 text-xl font-medium text-white">Mandar Thosar</h4>
                  <p className="mt-1 text-sm text-indigo-200">Co-Founder</p>
                  <p className="mt-2 text-sm text-center text-indigo-100">
                    With a passion for AI and its applications, bringing wealth of experience in data science and analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Contact Us</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Get in Touch
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Have a project in mind? Let's discuss how Sobitai Solutions can help you achieve your goals.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="bg-gray-50 p-8 rounded-lg">
              <form>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>info@sobitai.com</p>
                    <p className="mt-1">support@sobitai.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+91 (123) 456-7890</p>
                    <p className="mt-1">+91 (987) 654-3210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>Sobitai Solutions LLP</p>
                    <p className="mt-1">Panjim, Goa 403001</p>
                    <p className="mt-1">India</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
                <div className="mt-4 flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center">
                <span className="text-indigo-400 font-bold text-2xl">Sobitai</span>
                <span className="text-gray-300 font-medium ml-1">Solutions</span>
              </div>
              <p className="mt-4 text-base text-gray-300">
                Delivering cutting-edge technology solutions in Cybersecurity, Artificial Intelligence, and Blockchain to empower businesses and governments.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    Cybersecurity
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    Artificial Intelligence
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    Blockchain
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#about" className="text-base text-gray-300 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-base text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2025 Sobitai Solutions LLP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;