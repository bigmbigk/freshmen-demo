import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                POSTECH Freediving Club
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-blue-600 font-semibold">
                About
              </Link>
              <Link href="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">
                Courses
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Link href="/members" className="text-gray-700 hover:text-blue-600 transition-colors">
                Members
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                POSTECH Freediving Club
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a passionate community of freedivers dedicated to exploring the underwater world safely and responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, POSTECH Freediving Club emerged from a shared passion for the ocean and the art of freediving. 
                What started as a small group of students interested in underwater exploration has grown into a thriving community.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to promote freediving as a sport, recreational activity, and way of life while maintaining the highest 
                safety standards and environmental consciousness. We believe in the power of the ocean to inspire, challenge, and transform.
              </p>
              <p className="text-lg text-gray-600">
                Today, we offer comprehensive training programs, organize diving trips, and foster a supportive community where 
                both beginners and experienced divers can learn, grow, and share their passion for the underwater world.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Active Members</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">15+</div>
                  <div className="text-gray-600">Certified Instructors</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                  <div className="text-gray-600">Diving Sessions</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">We prioritize safety in all our activities and training programs.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Environmental Care</h3>
              <p className="text-gray-600">We promote ocean conservation and responsible diving practices.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Building a supportive and inclusive freediving community.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">Striving for excellence in training and diving techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our certified instructors and club leaders
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">KJ</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kim Jisoo</h3>
              <p className="text-blue-600 mb-4">Club President & Lead Instructor</p>
              <p className="text-gray-600">
                Certified freediving instructor with 8+ years of experience. Passionate about teaching and ocean conservation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">LM</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lee Minho</h3>
              <p className="text-cyan-600 mb-4">Safety Officer & Instructor</p>
              <p className="text-gray-600">
                Former competitive freediver with expertise in safety protocols and emergency response training.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">PY</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Park Yuna</h3>
              <p className="text-green-600 mb-4">Equipment Manager & Instructor</p>
              <p className="text-gray-600">
                Expert in freediving equipment and maintenance. Ensures all gear meets safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              State-of-the-art training facilities and equipment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Training Pool</h3>
              <p className="text-gray-600 text-center">
                Heated indoor pool with depth markers and safety equipment for year-round training.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Equipment Room</h3>
              <p className="text-gray-600 text-center">
                Fully stocked with high-quality freediving equipment for all skill levels.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Safety Equipment</h3>
              <p className="text-gray-600 text-center">
                Complete safety gear including first aid kits, emergency oxygen, and communication devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your freediving journey with our experienced instructors and supportive community.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                POSTECH Freediving Club
              </h3>
              <p className="text-gray-400">
                Exploring the depths, one breath at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Beginner Course</li>
                <li>Intermediate Course</li>
                <li>Advanced Course</li>
                <li>Private Lessons</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>freediving@postech.ac.kr</li>
                <li>+82-54-279-XXXX</li>
                <li>POSTECH Campus</li>
                <li>Pohang, South Korea</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 POSTECH Freediving Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 