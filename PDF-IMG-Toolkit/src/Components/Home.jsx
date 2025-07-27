import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  const navigate = useNavigate()

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const scrollToFeatures = () => {
    // Navigate to About page and scroll to features section
    navigate('/about')
    setTimeout(() => {
      const featuresSection = document.getElementById('features-section')
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const faqs = [
    {
      question: "What PDF and image processing features are available?",
      answer: "PDF tools: merge, split, compress, PDF to image, image to PDF, password protection. Image tools: compress, resize, crop, rotate, format conversion, watermarks, and batch processing."
    },
    {
      question: "Is my data secure when using this toolkit?",
      answer: "Absolutely! As a desktop application, all processing happens locally on your device. Your files never leave your computer, ensuring complete privacy and security."
    },
    {
      question: "What operating systems are supported?",
      answer: "PDF IMG Toolkit is available for Windows, Debian (DEB package), and Fedora (RPM package). Download the appropriate version for your operating system from our downloads page."
    },
    {
      question: "How do I install PDF IMG Toolkit?",
      answer: "Simply download the installer for your OS: .exe for Windows, .deb for Debian/Ubuntu, or .rpm for Fedora/RHEL. Run the installer and follow the setup wizard to get started."
    },
    {
      question: "Can I process multiple files at once?",
      answer: "Yes! You can batch process multiple files simultaneously. Select multiple PDFs to merge, or multiple images to convert - saving you time with large collections."
    },
    {
      question: "Is PDF IMG Toolkit free to use?",
      answer: "Yes, our desktop application is completely free with no hidden charges. All features are included with no limitations, watermarks, or premium restrictions."
    }
  ]

  const features = [
    {
      icon: "�",
      title: "PDF Processing",
      description: "Merge, split, compress PDFs. Convert PDF to images and images to PDF with advanced tools."
    },
    {
      icon: "🖼️",
      title: "Image Editing",
      description: "Compress, resize, crop, rotate images. Convert between formats and add watermarks effortlessly."
    },
    {
      icon: "🔒",
      title: "100% Secure",
      description: "Desktop application ensures all processing happens locally. Your files never leave your computer."
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Native desktop performance with optimized processing algorithms for maximum speed."
    },
    {
      icon: "💻",
      title: "Multi Platform",
      description: "Available for Windows, Debian (DEB), and Fedora (RPM). Choose your preferred OS."
    },
    {
      icon: "📱",
      title: "Offline Processing",
      description: "Works completely offline once installed. No internet connection required for processing files."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PDF IMG
            </span>
            <br />
            <span className="text-gray-700">Toolkit</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your all-in-one desktop solution for PDF and image processing. Convert, compress, merge, and edit your documents and images with ease.
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Fast, secure, and completely free desktop application. Available for Windows, Debian, and Fedora.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/download"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-center cursor-pointer"
            >
              Download Now
            </Link>
            <button 
              onClick={scrollToFeatures}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            >
              View All Features
            </button>
          </div>
        </div>
      </section>

      {/* Why Use Section */}
      <section id="features-section" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Why Choose Our Desktop App?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Experience the fastest, most secure way to process your PDF and image files with our native desktop application.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Desktop Application Benefits
                </h3>
                <p className="text-gray-600 mb-6">
                  Unlike web-based tools, our desktop application provides superior performance, reliability, and security. Download once and use forever without depending on internet connectivity or server availability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">Native desktop performance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">Works completely offline</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">No file size limitations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">Available for multiple OS</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">�</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Desktop Power</h4>
                <p className="text-gray-600">Native application performance with maximum security and reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Get answers to common questions about PDF IMG Toolkit
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <span 
                    className={`text-2xl text-blue-600 transform transition-transform duration-200 ${
                      openFaq === index ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a 
              href="mailto:officialdslc1552005@gmail.com" 
              target='_blank' 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium cursor-pointer inline-block"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home