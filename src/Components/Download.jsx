import React from 'react'

function Download() {
  const handleDownload = (platform, type) => {
    // This would typically trigger actual download
    console.log(`Downloading ${platform} ${type} version`)
    // You can replace this with actual download links
    alert(`Download for ${platform} (${type}) will start soon!`)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 md:mb-8">
            Download <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PDF IMG Toolkit</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto">
            Get the latest version of our desktop application for your operating system. Fast, secure, and completely free.
          </p>
          
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 mb-8 md:mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">Upcoming Version: v2.1.0</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">To be released: December 2025</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">100% Free & Safe</span>
              </div>
            </div>
            
            {/* Quick Download Buttons */}
            <div className="mt-6 md:mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-center mb-4">Quick Access:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('windows-section')}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 justify-center cursor-pointer"
                >
                  <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                    <div className="bg-white rounded-tl-sm"></div>
                    <div className="bg-white rounded-tr-sm"></div>
                    <div className="bg-white rounded-bl-sm"></div>
                    <div className="bg-white rounded-br-sm"></div>
                  </div>
                  <span>Download for Windows</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollToSection('linux-section')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 justify-center cursor-pointer"
                >
                  <span className="text-lg">🐧</span>
                  <span>Download for Linux</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Windows Section */}
      <section id="windows-section" className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden mb-6 md:mb-8">
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-6 md:p-8 text-white relative overflow-hidden">
              {/* Windows 10/11 style background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-8 h-8 grid grid-cols-2 gap-1">
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                </div>
                <div className="absolute top-8 right-12 w-6 h-6 grid grid-cols-2 gap-0.5">
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                </div>
                <div className="absolute bottom-6 left-16 w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 grid grid-cols-2 gap-1">
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Windows</h2>
                  <p className="text-blue-100">For Windows 10, 11 and later versions</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Installation Instructions</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">1</span>
                      <span className="text-gray-600">Download the Windows installer (.exe file)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">2</span>
                      <span className="text-gray-600">Run the installer as administrator</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">3</span>
                      <span className="text-gray-600">Follow the setup wizard instructions</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">4</span>
                      <span className="text-gray-600">Launch from Start Menu or Desktop shortcut</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">System Requirements</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">OS:</span>
                      <span className="font-medium text-gray-800">Windows 10/11 (64-bit)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">RAM:</span>
                      <span className="font-medium text-gray-800">4 GB minimum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Storage:</span>
                      <span className="font-medium text-gray-800">100 MB free space</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">File Size:</span>
                      <span className="font-medium text-gray-800">~45 MB</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-8 text-center">
                <button
                  onClick={() => handleDownload('Windows', 'EXE')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto cursor-pointer"
                >
                  <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                  </div>
                  <span>Download for Windows (.exe)</span>
                  <span className="text-blue-200">~45 MB</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linux Section */}
      <section id="linux-section" className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 md:p-8 text-white">
              <div className="flex items-center space-x-4">
                <div className="text-4xl md:text-5xl">🐧</div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Linux</h2>
                  <p className="text-orange-100">Available for major Linux distributions</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                
                {/* Fedora/RPM Section */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-3xl">🎩</div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">Fedora / RPM</h3>
                      <p className="text-gray-600">For Fedora, RHEL, CentOS, openSUSE</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-gray-800">Installation Methods:</h4>
                    
                    {/* RPM Package */}
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h5 className="font-medium text-gray-800 mb-2">Option 1: RPM Package</h5>
                      <div className="text-sm text-gray-600 mb-3">Download and install manually</div>
                      <button
                        onClick={() => handleDownload('Linux', 'RPM')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 w-full justify-center cursor-pointer"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Download RPM</span>
                        <span className="text-blue-200">~42 MB</span>
                      </button>
                    </div>
                    
                    {/* Command Line Installation */}
                    <div className="bg-gray-900 rounded-lg p-4">
                      <h5 className="font-medium text-white mb-3">Option 2: Command Line</h5>
                      <div className="space-y-2">
                        <div className="text-sm text-gray-300 mb-2">After downloading:</div>
                        <code className="block bg-black rounded p-2 text-green-400 text-sm overflow-x-auto">
                          sudo rpm -i pdf-img-toolkit-2.1.0.rpm
                        </code>
                        <div className="text-sm text-gray-300 mt-2">Or with dnf:</div>
                        <code className="block bg-black rounded p-2 text-green-400 text-sm overflow-x-auto">
                          sudo dnf install pdf-img-toolkit-2.1.0.rpm
                        </code>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <strong>Supported:</strong> Fedora 36+, RHEL 8+, CentOS 8+, openSUSE Leap 15+
                  </div>
                </div>

                {/* Debian/DEB Section */}
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 md:p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-3xl">🌀</div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">Debian / DEB</h3>
                      <p className="text-gray-600">For Debian, Ubuntu, Linux Mint</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-gray-800">Installation Methods:</h4>
                    
                    {/* DEB Package */}
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <h5 className="font-medium text-gray-800 mb-2">Option 1: DEB Package</h5>
                      <div className="text-sm text-gray-600 mb-3">Download and install manually</div>
                      <button
                        onClick={() => handleDownload('Linux', 'DEB')}
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 w-full justify-center cursor-pointer"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Download DEB</span>
                        <span className="text-red-200">~40 MB</span>
                      </button>
                    </div>
                    
                    {/* Command Line Installation */}
                    <div className="bg-gray-900 rounded-lg p-4">
                      <h5 className="font-medium text-white mb-3">Option 2: Command Line</h5>
                      <div className="space-y-2">
                        <div className="text-sm text-gray-300 mb-2">After downloading:</div>
                        <code className="block bg-black rounded p-2 text-green-400 text-sm overflow-x-auto">
                          sudo dpkg -i pdf-img-toolkit-2.1.0.deb
                        </code>
                        <div className="text-sm text-gray-300 mt-2">Or with apt:</div>
                        <code className="block bg-black rounded p-2 text-green-400 text-sm overflow-x-auto">
                          sudo apt install ./pdf-img-toolkit-2.1.0.deb
                        </code>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <strong>Supported:</strong> Debian 11+, Ubuntu 20.04+, Linux Mint 20+, Pop!_OS 21+
                  </div>
                </div>
              </div>
              
              {/* Linux Common Instructions */}
              <div className="mt-8 md:mt-12 bg-gray-50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Common Linux Instructions</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">After Installation:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        <span>Launch from Applications menu</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        <span>Or run <code className="bg-gray-200 px-1 rounded text-sm">pdf-img-toolkit</code> in terminal</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        <span>Create desktop shortcut if needed</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">System Requirements:</h4>
                    <div className="space-y-1 text-gray-600">
                      <div className="flex justify-between">
                        <span>Architecture:</span>
                        <span>x86_64 (64-bit)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>RAM:</span>
                        <span>4 GB minimum</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Storage:</span>
                        <span>100 MB free space</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Having trouble with installation or need technical support? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:officialdslc1552005@gmail.com"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors duration-200 flex items-center space-x-2 justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Support</span>
              </a>
              <a 
                href="https://github.com/Divyansh1552005/PDF-IMG-Toolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors duration-200 flex items-center space-x-2 justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub Issues</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Download