import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Wrench, 
  Monitor, 
  Keyboard, 
  Battery, 
  HardDrive, 
  Cpu, 
  Fan, 
  Shield, 
  Clock, 
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  RefreshCw,
  Settings
} from 'lucide-react';

const Services: React.FC = () => {
  const mainServices = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'Screen Repair & Replacement',
      description: 'Professional LCD/LED screen replacement for all laptop brands',
      features: ['Cracked screen repair', 'Dead pixel fixes', 'Backlight issues', 'Touch screen repair'],
      price: 'Starting from ৳3,000',
      duration: '2-4 hours'
    },
    {
      icon: <Keyboard className="h-8 w-8" />,
      title: 'Keyboard Replacement',
      description: 'Complete keyboard replacement and individual key repairs',
      features: ['Sticky keys repair', 'Missing key replacement', 'Full keyboard swap', 'Backlight repair'],
      price: 'Starting from ৳1,500',
      duration: '1-2 hours'
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: 'Battery Replacement',
      description: 'Genuine battery replacement for extended laptop life',
      features: ['Battery health check', 'Genuine parts only', 'Calibration service', '6-month warranty'],
      price: 'Starting from ৳2,500',
      duration: '30 minutes'
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Motherboard Repair',
      description: 'Expert motherboard diagnosis and component-level repairs',
      features: ['Power issues', 'Charging problems', 'Component replacement', 'BIOS recovery'],
      price: 'Starting from ৳5,000',
      duration: '1-3 days'
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: 'Data Recovery',
      description: 'Professional data recovery from damaged hard drives',
      features: ['HDD/SSD recovery', 'Deleted file recovery', 'Corrupted data repair', 'Backup solutions'],
      price: 'Starting from ৳2,000',
      duration: '2-5 days'
    },
    {
      icon: <Fan className="h-8 w-8" />,
      title: 'Cooling System Cleaning',
      description: 'Complete cleaning and thermal paste replacement',
      features: ['Fan cleaning', 'Thermal paste renewal', 'Heat sink cleaning', 'Temperature optimization'],
      price: 'Starting from ৳1,000',
      duration: '1-2 hours'
    }
  ];

  const additionalServices = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Virus Removal',
      description: 'Complete malware and virus removal with system optimization'
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'OS Installation',
      description: 'Fresh Windows/Linux installation with driver setup'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Hardware Upgrades',
      description: 'RAM, SSD upgrades for better performance'
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: 'System Optimization',
      description: 'Performance tuning and system cleanup'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Fast Turnaround',
      description: 'Most repairs completed within 24-48 hours'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Quality Guarantee',
      description: 'All repairs come with warranty and satisfaction guarantee'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Expert Technicians',
      description: '8+ years of experience with all major brands'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Genuine Parts',
      description: 'We use only genuine or high-quality compatible parts'
    }
  ];

  const supportedBrands = [
    'Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'MSI', 'Apple MacBook', 'Toshiba', 'Sony', 'Samsung'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Laptop Repair Services - Professional Computer Repair in Dhaka | Laptop Workshop</title>
        <meta name="description" content="Professional laptop repair services in Sylhet, Bangladesh. Screen replacement, motherboard repair, data recovery, and more. Fast service with warranty guarantee." />
        <meta name="keywords" content="laptop repair services Sylhet, computer repair Bangladesh, screen replacement, motherboard repair, data recovery, laptop service center" />
        <meta property="og:title" content="Professional Laptop Repair Services in Sylhet" />
        <meta property="og:description" content="Expert laptop repair services with fast turnaround and quality guarantee." />
        <meta property="og:url" content="https://www.laptopws.com/services" />
        <link rel="canonical" href="https://www.laptopws.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Professional laptop repair services with expert technicians and quality guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Main Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive laptop repair solutions for all your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <div className="text-blue-600">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Features:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="mb-3">
                          <p className="text-sm font-medium text-gray-700">Price:</p>
                          <p className="text-lg font-semibold text-blue-600">{service.price}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Duration:</p>
                          <p className="text-sm text-gray-600">{service.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Complete laptop maintenance and support</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-3 rounded-lg inline-flex items-center justify-center mb-4">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Laptop Workshop?</h2>
            <p className="text-xl text-gray-600">Quality service you can trust</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <div className="text-blue-600">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Supported Brands</h2>
            <p className="text-xl text-gray-600">We repair all major laptop brands</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {supportedBrands.map((brand, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                <p className="font-semibold text-gray-900">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Service Process</h2>
            <p className="text-xl text-blue-100">Simple and transparent repair process</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4 w-16 h-16">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Diagnosis</h3>
              <p className="text-blue-100">Free diagnostic to identify the issue</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4 w-16 h-16">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Quote</h3>
              <p className="text-blue-100">Transparent pricing with no hidden costs</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4 w-16 h-16">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Repair</h3>
              <p className="text-blue-100">Expert repair with quality parts</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center mb-4 w-16 h-16">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Testing</h3>
              <p className="text-blue-100">Thorough testing before delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Your Laptop Repaired?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free diagnostic and quote today. Fast, reliable service with warranty guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+8801713413131"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Call Now: +8801713413131
            </a>
            <a
              href="mailto:abusaeeid@gmail.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center"
            >
              Email Us <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;