import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Download, Filter, Cpu, CircuitBoard, FileText, Calendar, HardDrive } from 'lucide-react';

const Downloads: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Files', icon: <FileText className="h-4 w-4" /> },
    { id: 'bios', name: 'BIOS Files', icon: <Cpu className="h-4 w-4" /> },
    { id: 'schematic', name: 'Schematics', icon: <CircuitBoard className="h-4 w-4" /> },
    { id: 'boardview', name: 'Boardview', icon: <HardDrive className="h-4 w-4" /> },
  ];

  const downloadFiles = [
    {
      id: 1,
      name: 'Dell XPS 13 9310 BIOS',
      category: 'bios',
      brand: 'Dell',
      model: 'XPS 13 9310',
      size: '8.2 MB',
      format: 'BIN',
      downloads: 1247,
      uploadDate: '2024-01-15',
      description: 'Latest BIOS update for Dell XPS 13 9310 with security patches',
      fileUrl: 'https://drive.google.com/file/d/1ABC123DEF456GHI789JKL/view?usp=sharing'
    },
    {
      id: 2,
      name: 'HP Pavilion 15-cs3000 Schematic',
      category: 'schematic',
      brand: 'HP',
      model: 'Pavilion 15-cs3000',
      size: '12.5 MB',
      format: 'PDF',
      downloads: 892,
      uploadDate: '2024-01-12',
      description: 'Complete schematic diagram for HP Pavilion 15-cs3000 series',
      fileUrl: 'https://drive.google.com/file/d/2XYZ789ABC123DEF456GHI/view?usp=sharing'
    },
    {
      id: 3,
      name: 'Lenovo ThinkPad X1 Carbon Boardview',
      category: 'boardview',
      brand: 'Lenovo',
      model: 'ThinkPad X1 Carbon',
      size: '5.8 MB',
      format: 'BRD',
      downloads: 674,
      uploadDate: '2024-01-10',
      description: 'Detailed boardview file for ThinkPad X1 Carbon Gen 9',
      fileUrl: 'https://drive.google.com/file/d/3MNO456PQR789STU123VWX/view?usp=sharing'
    },
    {
      id: 4,
      name: 'ASUS ROG Strix G15 BIOS',
      category: 'bios',
      brand: 'ASUS',
      model: 'ROG Strix G15',
      size: '16.3 MB',
      format: 'ROM',
      downloads: 1156,
      uploadDate: '2024-01-08',
      description: 'Gaming laptop BIOS with performance optimizations',
      fileUrl: 'https://drive.google.com/file/d/4DEF789GHI123JKL456MNO/view?usp=sharing'
    },
    {
      id: 5,
      name: 'MacBook Pro 13" 2020 Schematic',
      category: 'schematic',
      brand: 'Apple',
      model: 'MacBook Pro 13" 2020',
      size: '18.7 MB',
      format: 'PDF',
      downloads: 1834,
      uploadDate: '2024-01-05',
      description: 'Detailed schematic for MacBook Pro 13" M1 model',
      fileUrl: 'https://drive.google.com/file/d/5PQR123STU456VWX789YZA/view?usp=sharing'
    },
    {
      id: 6,
      name: 'Acer Aspire 5 A515-56 Boardview',
      category: 'boardview',
      brand: 'Acer',
      model: 'Aspire 5 A515-56',
      size: '7.2 MB',
      format: 'BRD',
      downloads: 523,
      uploadDate: '2024-01-03',
      description: 'Complete boardview for Acer Aspire 5 A515-56 series',
      fileUrl: 'https://drive.google.com/file/d/6STU456VWX789YZA123BCD/view?usp=sharing'
    },
    {
      id: 7,
      name: 'MSI GF63 Thin 10SC BIOS',
      category: 'bios',
      brand: 'MSI',
      model: 'GF63 Thin 10SC',
      size: '14.2 MB',
      format: 'ROM',
      downloads: 0,
      uploadDate: '2024-01-20',
      description: 'Latest BIOS firmware for MSI GF63 Thin 10SC gaming laptop with improved stability',
      fileUrl: 'https://drive.google.com/file/d/7VWX789YZA123BCD456EFG/view?usp=sharing'
    },
    {
      id: 8,
      name: 'Dell Latitude 7400 BIOS',
      category: 'bios',
      brand: 'Dell',
      model: 'Latitude 7400',
      size: '10.5 MB',
      format: 'BIN',
      downloads: 0,
      uploadDate: '2024-01-25',
      description: 'Latest BIOS update for Dell Latitude 7400 with security enhancements and bug fixes',
      fileUrl: 'https://drive.google.com/file/d/8ABC123DEF456GHI789JKL/view?usp=sharing'
    }
  ];

  const filteredFiles = downloadFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || file.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'bios':
        return <Cpu className="h-5 w-5" />;
      case 'schematic':
        return <CircuitBoard className="h-5 w-5" />;
      case 'boardview':
        return <HardDrive className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>Free Downloads - BIOS, Schematics & Boardview Files | Laptop Workshop</title>
        <meta name="description" content="Download free BIOS files, schematic diagrams, and boardview files for laptop repair. Dell, HP, Lenovo, ASUS, Apple MacBook and more brands available." />
        <meta name="keywords" content="BIOS download free, laptop schematic PDF, boardview files, Dell BIOS, HP schematic, Lenovo boardview, laptop repair files" />
        <meta property="og:title" content="Free Technical Downloads - BIOS & Schematics" />
        <meta property="og:description" content="Free access to BIOS files, schematic diagrams, and boardview files for laptop repairs." />
        <meta property="og:url" content="https://www.laptopws.com/downloads" />
        <link rel="canonical" href="https://www.laptopws.com/downloads" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Downloads
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Free access to BIOS files, schematic diagrams, and boardview files for laptop repairs
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by laptop model, brand, or file name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="lg:w-80">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl text-center shadow-md">
            <p className="text-3xl font-bold text-blue-600">{filteredFiles.length}</p>
            <p className="text-gray-600">Available Files</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-md">
            <p className="text-3xl font-bold text-green-600">
              {downloadFiles.reduce((sum, file) => sum + file.downloads, 0)}
            </p>
            <p className="text-gray-600">Total Downloads</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-md">
            <p className="text-3xl font-bold text-purple-600">
              {downloadFiles.filter(f => f.category === 'bios').length}
            </p>
            <p className="text-gray-600">BIOS Files</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-md">
            <p className="text-3xl font-bold text-orange-600">
              {downloadFiles.filter(f => f.category === 'schematic').length}
            </p>
            <p className="text-gray-600">Schematics</p>
          </div>
        </div>

        {/* Files Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredFiles.map((file) => (
            <div key={file.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    {getCategoryIcon(file.category)}
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded capitalize">
                    {file.category}
                  </span>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(file.uploadDate).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{file.name}</h3>
              <p className="text-gray-600 mb-4">{file.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-500">Brand:</span>
                  <span className="ml-2 font-medium">{file.brand}</span>
                </div>
                <div>
                  <span className="text-gray-500">Model:</span>
                  <span className="ml-2 font-medium">{file.model}</span>
                </div>
                <div>
                  <span className="text-gray-500">Size:</span>
                  <span className="ml-2 font-medium">{file.size}</span>
                </div>
                <div>
                  <span className="text-gray-500">Format:</span>
                  <span className="ml-2 font-medium">{file.format}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="text-sm text-gray-500">
                  <span className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {file.downloads} downloads
                  </span>
                </div>
                <a
                  href={file.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center text-decoration-none"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFiles.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 p-6 rounded-lg max-w-md mx-auto">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No files found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters</p>
            </div>
          </div>
        )}

        {/* Download Instructions */}
        <div className="mt-12 bg-blue-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Download Instructions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Important Notes:</h4>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Files are provided for educational and repair purposes only</li>
                <li>• Always backup your original BIOS before flashing</li>
                <li>• Use appropriate tools for your specific hardware</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Need Help?</h4>
              <p className="text-blue-700 text-sm">
                Can't find what you're looking for? Contact our support team at{' '}
                <span className="font-medium">abusaeeid@gmail.com</span> or call{' '}
                <span className="font-medium">+8801713413131</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;