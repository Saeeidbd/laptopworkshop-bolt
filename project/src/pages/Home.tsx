import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wrench, Download, Shield, Star, ArrowRight, FileText, Cpu, CircuitBoard } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Expert Repairs',
      description: 'Professional laptop repair services with quick turnaround times'
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: 'Free Downloads',
      description: 'Access BIOS, schematics, and boardview files for various laptop models'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Quality Guarantee',
      description: 'All repairs come with warranty and satisfaction guarantee'
    }
  ];

  const latestDownloads = [
    {
      name: 'Dell XPS 13 BIOS',
      type: 'BIOS',
      size: '8.2 MB',
      downloads: 1247,
      icon: <Cpu className="h-6 w-6" />,
      fileUrl: 'https://drive.google.com/file/d/1ABC123DEF456GHI789JKL/view?usp=sharing'
    },
    {
      name: 'HP Pavilion Schematic',
      type: 'Schematic',
      size: '12.5 MB',
      downloads: 892,
      icon: <CircuitBoard className="h-6 w-6" />,
      fileUrl: 'https://drive.google.com/file/d/2XYZ789ABC123DEF456GHI/view?usp=sharing'
    },
    {
      name: 'Lenovo ThinkPad Boardview',
      type: 'Boardview',
      size: '5.8 MB',
      downloads: 674,
      icon: <FileText className="h-6 w-6" />,
      fileUrl: 'https://drive.google.com/file/d/3MNO456PQR789STU123VWX/view?usp=sharing'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Excellent service! Fixed my laptop screen in just 2 days. Very professional.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      text: 'Great resource for technical files. Found exactly what I needed for my repair project.',
      rating: 5
    },
    {
      name: 'Ahmed Rahman',
      text: 'Honest pricing and quality work. Highly recommend Laptop Workshop.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Laptop Workshop - Professional Laptop Repair Services | www.laptopws.com</title>
        <meta name="description" content="Expert laptop repair services in Dhaka, Bangladesh. Fast turnaround, quality repairs, and free downloads of BIOS files, schematics, and boardview files for technicians." />
        <meta name="keywords" content="laptop repair Dhaka, BIOS download, laptop service Bangladesh, computer repair, schematic diagrams, boardview files" />
        <meta property="og:title" content="Laptop Workshop - Professional Laptop Repair Services" />
        <meta property="og:description" content="Expert laptop repair services with free technical resources for repair professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.laptopws.com" />
        <link rel="canonical" href="https://www.laptopws.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Laptop Repair Services
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Expert technicians in Sylhet providing quality laptop repairs and comprehensive 
              technical resources for professionals and enthusiasts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('services')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
              >
                View Services <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => onNavigate('downloads')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
              >
                Browse Downloads <Download className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Laptop Workshop?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expert repair services with comprehensive technical resources
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-lg mb-6 group-hover:bg-blue-700 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate('services')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto"
            >
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Latest Downloads Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Latest Downloads</h3>
              <p className="text-xl text-gray-600">Recently uploaded technical files</p>
            </div>
            <button 
              onClick={() => onNavigate('downloads')}
              className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
            >
              View All <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestDownloads.map((file, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    {file.icon}
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {file.type}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{file.name}</h4>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>{file.size}</span>
                  <span>{file.downloads} downloads</span>
                </div>
                <a
                  href={file.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-decoration-none"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h3>
            <p className="text-xl text-gray-600">Trusted by thousands of satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your Laptop Fixed?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free diagnostic and repair quote
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;