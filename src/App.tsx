import React, { useState } from 'react';
import { Camera, Share, Search, BookOpen, Upload, LogIn, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const identifyFossil = () => {
    setShowResult(true);
    // In a real app, this would call an API
  };

  // Sample fossil journal entries
  const journalEntries = [
    {
      id: 1,
      name: 'Ammonite',
      age: '65-240 million years',
      location: 'Jurassic Coast, UK',
      date: '2023-04-15',
      image: 'https://images.unsplash.com/photo-1614513277211-206034b75de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1tb25pdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      description: 'Found this beauty while hiking!'
    },
    {
      id: 2,
      name: 'Trilobite',
      age: '252-541 million years',
      location: 'Utah, USA',
      date: '2023-03-22',
      image: 'https://images.unsplash.com/photo-1577451254495-67a352d6051e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJpbG9iaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description: 'My first trilobite find! So excited.'
    },
    {
      id: 3,
      name: 'Crinoid Stem',
      age: '65-485 million years',
      location: 'Colorado, USA',
      date: '2023-05-03',
      image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9zc2lsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description: 'Found several of these in a limestone bed.'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 font-sans">
      {/* Navigation */}
      <nav className="bg-stone-800 text-stone-100 py-4 px-6 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center mr-3">
              <BookOpen size={20} className="text-stone-100" />
            </div>
            <span className="text-xl font-bold">FossilFindr</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#how-it-works" className="hover:text-green-500 transition-colors">How It Works</a>
            <a href="#journal" className="hover:text-green-500 transition-colors">Fossil Journal</a>
            <a href="#identify" className="hover:text-green-500 transition-colors">Identify</a>
            <a href="#about" className="hover:text-green-500 transition-colors">About</a>
          </div>
          <button className="hidden md:flex items-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-full transition-colors">
            <LogIn size={18} className="mr-2" />
            Rock On In
          </button>
          <button onClick={toggleMenu} className="md:hidden text-stone-100">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-stone-700 mt-4 py-4 px-6 rounded-lg shadow-lg absolute left-0 right-0 mx-4">
            <div className="flex flex-col space-y-3">
              <a href="#how-it-works" className="hover:text-green-500 transition-colors" onClick={toggleMenu}>How It Works</a>
              <a href="#journal" className="hover:text-green-500 transition-colors" onClick={toggleMenu}>Fossil Journal</a>
              <a href="#identify" className="hover:text-green-500 transition-colors" onClick={toggleMenu}>Identify</a>
              <a href="#about" className="hover:text-green-500 transition-colors" onClick={toggleMenu}>About</a>
              <button className="flex items-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-full transition-colors self-start">
                <LogIn size={18} className="mr-2" />
                Rock On In
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-stone-800 text-stone-100 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1582432529936-94c301heights=680')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Snap a pic of a fossil, get instant identification, and learn ancient secrets.
            </h1>
            <p className="text-xl mb-8 text-stone-300">
              The pocket paleontologist you've always wanted. No lab coat required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#identify" className="bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center">
                <Camera size={20} className="mr-2" />
                Let's Rock
              </a>
              <a href="#how-it-works" className="bg-transparent border-2 border-stone-300 hover:border-white text-white py-3 px-8 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center">
                <Search size={20} className="mr-2" />
                Uncover the Past
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works <span className="text-green-700">(It's No-Stone-Simple)</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-stone-100 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Snap a photo of your rock</h3>
              <p className="text-stone-600">
                Use your phone camera to take a clear picture of the fossil you've found. The clearer the better!
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-stone-100 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">FossilFindr uses AI to ID the fossil</h3>
              <p className="text-stone-600">
                Our advanced AI compares your fossil to millions of examples to identify species, age, and rarity.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-stone-100 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Share size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Save it to your Fossil Journal and share it</h3>
              <p className="text-stone-600">
                Build your personal collection and share your discoveries with friends and the FossilFindr community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fossil Journal Dashboard */}
      <section id="journal" className="py-16 bg-stone-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Your Fossil Journal</h2>
          <p className="text-xl text-stone-600 mb-12 text-center">Track your prehistoric discoveries in one place</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journalEntries.map(entry => (
              <div key={entry.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={entry.image} alt={entry.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{entry.name}</h3>
                    <span className="bg-stone-100 text-stone-700 text-xs px-2 py-1 rounded-full">{entry.date}</span>
                  </div>
                  <p className="text-sm text-stone-500 mb-2">{entry.age}</p>
                  <p className="text-sm text-stone-500 mb-4">{entry.location}</p>
                  <p className="text-stone-700">{entry.description}</p>
                  <div className="mt-4 flex justify-between">
                    <button className="text-green-700 hover:text-green-800 transition-colors flex items-center">
                      <Share size={16} className="mr-1" />
                      Share Find
                    </button>
                    <button className="text-stone-600 hover:text-stone-800 transition-colors">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <button className="bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center">
              <BookOpen size={20} className="mr-2" />
              View All Fossils
            </button>
          </div>
        </div>
      </section>

      {/* Upload ID Interface */}
      <section id="identify" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Identify Your Fossil</h2>
          <p className="text-xl text-stone-600 mb-12 text-center">Let's see what you've unearthed!</p>
          
          <div className="max-w-xl mx-auto">
            <div className="bg-stone-100 rounded-xl p-8 shadow-md">
              {!uploadedImage ? (
                <div className="border-2 border-dashed border-stone-300 rounded-lg p-8 text-center">
                  <Upload size={48} className="mx-auto mb-4 text-stone-400" />
                  <p className="text-stone-600 mb-6">
                    Upload a clear photo of your fossil for identification
                  </p>
                  <label className="bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center cursor-pointer">
                    <Camera size={20} className="mr-2" />
                    Upload Fossil Photo
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded fossil" 
                      className="w-full h-64 object-contain rounded-lg" 
                    />
                  </div>
                  
                  {!showResult ? (
                    <button 
                      onClick={identifyFossil}
                      className="w-full bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center"
                    >
                      <Search size={20} className="mr-2" />
                      Identify This Fossil
                    </button>
                  ) : (
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold">Ammonite</h3>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Common</span>
                      </div>
                      <p className="text-sm text-stone-600 mb-1">Age: 65-240 million years (Jurassic Period)</p>
                      <p className="text-stone-700 mb-4">An extinct group of marine mollusks with tight spiral shells.</p>
                      <div className="bg-stone-100 p-4 rounded-lg mb-4">
                        <p className="italic text-stone-700">
                          "Fun Fact: Ammonites were named after the Egyptian god Ammon, who was often depicted with ram's horns similar to ammonite shells."
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button className="flex-1 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-full font-bold transition-colors inline-flex items-center justify-center">
                          <BookOpen size={18} className="mr-2" />
                          Save That Fossil!
                        </button>
                        <button className="flex-1 bg-stone-600 hover:bg-stone-700 text-white py-2 px-4 rounded-full font-bold transition-colors inline-flex items-center justify-center">
                          <Upload size={18} className="mr-2" />
                          Try Another
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-stone-800 text-stone-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About FossilFindr</h2>
            <p className="text-xl mb-6">
              We make ancient history accessible, one rock at a time. No lab coat required.
            </p>
            <p className="mb-8">
              FossilFindr was created by a team of paleontology nerds and tech enthusiasts who believe everyone should be able to connect with Earth's ancient past. Whether you're a weekend beachcomber or a serious collector, our app helps you identify, learn about, and preserve your fossil finds.
            </p>
            <p className="text-lg font-semibold mb-6">
              Because every rock has a story to tell.
            </p>
            <button className="bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center mx-auto">
              Join Our Excavation Team
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-stone-700 to-green-800 rounded-xl p-8 md:p-12 shadow-xl text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to unearth some history?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Download FossilFindr today and start your journey into the prehistoric past. 
              Your next big discovery is just a snapshot away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-800 hover:bg-stone-200 py-3 px-8 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center">
                Download App
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white py-3 px-8 rounded-full font-bold text-lg transition-colors inline-flex items-center justify-center">
                <LogIn size={20} className="mr-2" />
                Sign Up Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center mr-3">
                  <BookOpen size={20} className="text-stone-100" />
                </div>
                <span className="text-xl font-bold text-white">FossilFindr</span>
              </div>
              <p className="max-w-xs">
                Making paleontology accessible to everyone, one fossil at a time.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-bold mb-4">App</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Premium</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} FossilFindr. All rights reserved. Built with a passion for the prehistoric.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;