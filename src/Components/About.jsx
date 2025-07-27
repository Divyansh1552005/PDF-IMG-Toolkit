import React from 'react'

function About() {
  const pdfFeatures = [
    { name: "Merge PDFs", status: "✅", desc: "Combine multiple PDFs into one file", icon: "🔗" },
    { name: "Split PDFs", status: "✅", desc: "Split PDF by range or extract individual pages", icon: "✂️" },
    { name: "Compress PDFs", status: "✅", desc: "Reduce file size while preserving quality", icon: "🗜️" },
    { name: "PDF to Image", status: "✅", desc: "Convert PDF pages to PNG, JPG formats", icon: "🖼️" },
    { name: "Image to PDF", status: "✅", desc: "Convert images into a single PDF document", icon: "📄" },
    { name: "Add Password", status: "🔄", desc: "Encrypt PDFs with password protection", icon: "🔐" },
    { name: "Remove Password", status: "🔄", desc: "Decrypt password-protected PDFs", icon: "🔓" },
  ]

  const imageFeatures = [
    { name: "Image Compressor", status: "🔄", desc: "Reduce image size with quality control", icon: "📉" },
    { name: "Format Converter", status: "🔄", desc: "Convert between JPG, PNG, WebP, AVIF", icon: "🔄" },
    { name: "Resize Images", status: "🔄", desc: "Change dimensions with presets or manual input", icon: "📏" },
    { name: "Crop Tool", status: "🔄", desc: "Crop to specific ratios (1:1, 4:3, 16:9)", icon: "✂️" },
    { name: "Rotate & Flip", status: "🔄", desc: "90° rotation and horizontal/vertical flip", icon: "🔄" },
    { name: "Add Watermark", status: "🔄", desc: "Overlay text or image watermarks", icon: "🏷️" },
    { name: "Background Removal", status: "💡", desc: "AI-powered background removal (planned)", icon: "🎭" },
    { name: "Batch Processing", status: "🔄", desc: "Apply operations to multiple images", icon: "⚡" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Why I Created This Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 md:mb-8">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PDF IMG Toolkit</span>
          </h1>
          
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 lg:p-12 mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Why I Created This Tool</h2>
            <div className="text-left space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Have you ever been in a situation where you needed to quickly convert a PDF to images or merge multiple documents, but you had no internet connection? Or maybe you were hesitant to upload sensitive documents to an online converter due to privacy concerns?
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                <strong className="text-gray-800">That's exactly why I created PDF IMG Toolkit.</strong> As a developer, I frequently encountered situations where I needed reliable file processing tools but couldn't access the internet or didn't trust online services with my important documents.
              </p>
              <div className="bg-blue-50 rounded-lg md:rounded-xl p-4 md:p-6 border-l-4 border-blue-500">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">The Problem with Online Converters:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span className="text-sm md:text-base"><strong>Privacy Risks:</strong> Your sensitive documents are uploaded to unknown servers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span className="text-sm md:text-base"><strong>Internet Dependency:</strong> Useless when you're offline or have poor connectivity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span className="text-sm md:text-base"><strong>File Size Limits:</strong> Many services restrict large file uploads</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span className="text-sm md:text-base"><strong>Slow Processing:</strong> Network delays and server queues slow you down</span>
                  </li>
                </ul>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                PDF IMG Toolkit solves all these problems by bringing professional-grade file processing directly to your desktop. No uploads, no privacy concerns, no internet required - just fast, secure, local processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-3 md:mb-4">
            Complete Feature Set
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-8 md:mb-16 max-w-3xl mx-auto px-4">
            Everything you need for PDF and image processing in one powerful desktop application
          </p>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* PDF Features */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="text-3xl md:text-4xl mr-3 md:mr-4">📄</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">PDF Toolkit</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                {pdfFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-xl md:text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm md:text-base">{feature.name}</h4>
                      <p className="text-gray-600 text-xs md:text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Features */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="text-3xl md:text-4xl mr-3 md:mr-4">🖼️</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">Image Toolkit</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                {imageFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-xl md:text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm md:text-base">{feature.name}</h4>
                      <p className="text-gray-600 text-xs md:text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          {/* <div className="mt-8 md:mt-12 bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg">
            <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4 text-center">Feature Status Legend</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xl md:text-2xl">✅</span>
                <span className="text-gray-700 text-sm md:text-base">Implemented & Ready</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xl md:text-2xl">🔄</span>
                <span className="text-gray-700 text-sm md:text-base">In Development</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xl md:text-2xl">💡</span>
                <span className="text-gray-700 text-sm md:text-base">Planned Feature</span>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Support & Donation Section */}
      <section id="support-section" className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 lg:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Support the Project</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-purple-100 max-w-3xl mx-auto">
              If PDF IMG Toolkit has helped you save time and protect your privacy, consider supporting its development!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* UPI */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">🇮🇳</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">UPI Payment</h3>
                <p className="text-xs md:text-sm text-purple-100 mb-3 md:mb-4">For Indian users</p>
                <div className="bg-white/20 rounded-md md:rounded-lg p-2 md:p-3">
                  <p className="text-xs text-purple-200 mb-1">UPI ID:</p>
                  <code className="text-xs md:text-sm break-all">officialdslc1552005@oksbi</code>
                </div>
              </div>

              {/* Buy Me a Coffee */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">☕</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Buy Me a Coffee</h3>
                <p className="text-xs md:text-sm text-purple-100 mb-3 md:mb-4">Support with coffee</p>
                <a 
                  href="https://buymeacoffee.com/divyansh1552005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-black px-3 md:px-4 py-2 rounded-md md:rounded-lg font-medium hover:bg-yellow-400 transition-colors inline-block text-sm md:text-base"
                >
                  Buy Coffee
                </a>
              </div>

              {/* PayPal */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">💳</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">PayPal</h3>
                <p className="text-xs md:text-sm text-purple-100 mb-3 md:mb-4">International donations</p>
                <a 
                  href="https://paypal.me/divyanshsharma1552005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-3 md:px-4 py-2 rounded-md md:rounded-lg font-medium hover:bg-blue-400 transition-colors inline-block text-sm md:text-base"
                >
                  Donate PayPal
                </a>
              </div>
            </div>

            <div className="mt-6 md:mt-8 text-purple-100">
              <p className="text-base md:text-lg">
                🙏 Every contribution helps me maintain and improve this tool for everyone!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About