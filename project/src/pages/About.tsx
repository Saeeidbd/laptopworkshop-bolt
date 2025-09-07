import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Users, Clock, Shield, Target, Heart, CheckCircle, Facebook } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Quality Service',
      description: 'We never compromise on the quality of our repairs and always use genuine parts when possible.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Fast Turnaround',
      description: 'Most repairs completed within 24-48 hours, because we know your time is valuable.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We work until you\'re completely happy with the service.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Expert Knowledge',
      description: 'Years of experience working with all major laptop brands and technical components.'
    }
  ];

  const achievements = [
    { number: '5000+', label: 'Laptops Repaired' },
    { number: '8+', label: 'Years Experience' },
    { number: '50000+', label: 'Downloads Served' },
    { number: '98%', label: 'Customer Satisfaction' }
  ];

  const services = [
    'Screen replacement and repair',
    'Keyboard replacement',
    'Battery replacement',
    'Motherboard repair',
    'Data recovery services',
    'Cooling system cleaning',
    'Software troubleshooting',
    'Hardware upgrades',
    'Virus removal',
    'Operating system installation'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>About Us - Professional Laptop Repair Since 2016 | Laptop Workshop</title>
        <meta name="description" content="Learn about Laptop Workshop - 8+ years of professional laptop repair experience in Sylhet, Bangladesh. Meet our founder Abu Saeed and our commitment to quality service." />
        <meta name="keywords" content="laptop repair company Sylhet, Abu Saeed laptop technician, professional computer repair Bangladesh, laptop workshop history" />
        <meta property="og:title" content="About Laptop Workshop - Professional Repair Services" />
        <meta property="og:description" content="Professional laptop repair services since 2016 with over 5000 laptops repaired." />
        <meta property="og:url" content="https://www.laptopws.com/about" />
        <link rel="canonical" href="https://www.laptopws.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Laptop Workshop</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner in Sylhet for professional laptop repairs and technical resources since 2016
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Laptop Workshop was founded in 2016 with a simple mission: to provide high-quality, 
                  affordable laptop repair services to our community. What started as a small repair 
                  shop has grown into a trusted resource for both individual customers and businesses.
                </p>
                <p>
                  Over the years, we've expanded our services to include not just repairs, but also 
                  providing free access to technical resources like BIOS files, schematic diagrams, 
                  and boardview files. We believe that knowledge should be accessible to everyone in 
                  the repair community.
                </p>
                <p>
                  Today, we're proud to serve thousands of customers and have helped repair over 5,000 
                  laptops. Our commitment to quality service, fair pricing, and customer satisfaction 
                  remains as strong as ever.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide exceptional laptop repair services while fostering a community of 
                knowledge sharing through free access to technical resources.
              </p>
              <div className="flex items-center space-x-2 text-blue-600">
                <Target className="h-5 w-5" />
                <span className="font-medium">Professional • Reliable • Accessible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl text-white">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Abu Saeed</h3>
                <h3 className="text-2xl font-bold mb-2">Abu Saeeid</h3>
                <p className="text-blue-100 mb-4">Founder & Lead Technician</p>
                <div className="text-left space-y-2">
                  <p className="text-sm">📧 abusaeeid@gmail.com</p>
                  <p className="text-sm">📱 +8801713413131</p>
                  <div className="pt-2">
                    <a
                      href="https://www.facebook.com/laptopworkshopbd.tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-sm text-blue-100 hover:text-white transition-colors"
                    >
                      <Facebook className="h-4 w-4" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Our Founder</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Abu Saeeid is a certified laptop repair technician with over 8 years of experience 
                  in the field. His passion for technology and dedication to helping others led him 
                  to establish Laptop Workshop.
                </p>
                <p>
                  With extensive knowledge of all major laptop brands and models, Abu Saeeid has 
                  personally handled thousands of repairs, from simple screen replacements to 
                  complex motherboard troubleshooting.
                </p>
                <p>
                  Beyond repairs, he's committed to education and knowledge sharing, which is why 
                  he started offering free technical resources to the repair community worldwide.
                </p>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Certified Laptop Repair Technician</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>8+ Years Professional Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Expert in All Major Brands</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-blue-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive laptop repair and maintenance services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-900">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;