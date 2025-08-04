"use client";

import Link from "next/link";
import { useState } from "react";

export default function Members() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation - in a real app, this would connect to a backend
    if (memberId === "POSTECH2024" && password === "freediving") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid member ID or password. Please try again.");
    }
  };

  if (!isLoggedIn) {
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
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  About
                </Link>
                <Link href="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Courses
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
                <Link href="/members" className="text-blue-600 font-semibold">
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

        {/* Login Section */}
        <section className="py-24">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Members
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Portal
                </span>
              </h1>
              <p className="text-lg text-gray-600">
                Access exclusive content and member-only features
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Member Login</h2>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="memberId" className="block text-sm font-medium text-gray-700 mb-2">
                    Member ID
                  </label>
                  <input
                    type="text"
                    id="memberId"
                    value={memberId}
                    onChange={(e) => setMemberId(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your member ID"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Login
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Demo credentials: Member ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded">POSTECH2024</span>, 
                  Password: <span className="font-mono bg-gray-100 px-2 py-1 rounded">freediving</span>
                </p>
              </div>
            </div>
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

  // Member Dashboard
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
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">
                Courses
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Link href="/members" className="text-blue-600 font-semibold">
                Members
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Member!</span>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-sm text-red-600 hover:text-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Member Dashboard */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Member
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Welcome to the exclusive members area. Access training schedules, equipment bookings, and member-only content.
            </p>
          </div>
        </div>
      </section>

      {/* Member Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Training Schedule */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Schedule</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-semibold text-blue-600">Today - Advanced Training</div>
                  <div className="text-gray-600">6:00 PM - 8:00 PM</div>
                  <div className="text-sm text-gray-500">Pool Session</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="font-semibold text-green-600">Saturday - Open Water</div>
                  <div className="text-gray-600">9:00 AM - 2:00 PM</div>
                  <div className="text-sm text-gray-500">East Sea Trip</div>
                </div>
              </div>
            </div>

            {/* Equipment Booking */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipment Booking</h3>
              <div className="space-y-4">
                <div className="p-4 bg-cyan-50 rounded-lg">
                  <div className="font-semibold text-cyan-600">Fins - Available</div>
                  <div className="text-gray-600">Size: M/L</div>
                  <button className="mt-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-cyan-700 transition-colors">
                    Book Now
                  </button>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="font-semibold text-purple-600">Wetsuit - Available</div>
                  <div className="text-gray-600">Size: L</div>
                  <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Member Directory */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Member Directory</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">KJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Kim Jisoo</div>
                    <div className="text-sm text-gray-600">Advanced Level</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">LM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Lee Minho</div>
                    <div className="text-sm text-gray-600">Intermediate Level</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">PY</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Park Yuna</div>
                    <div className="text-sm text-gray-600">Beginner Level</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Member Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exclusive content and resources for our members
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Training Manuals</h3>
              <p className="text-gray-600 mb-4">Comprehensive guides and techniques</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Download
              </button>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Library</h3>
              <p className="text-gray-600 mb-4">Training videos and tutorials</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                Watch
              </button>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600 mb-4">Monitor your diving progress</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                View
              </button>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Member Forum</h3>
              <p className="text-gray-600 mb-4">Connect with fellow divers</p>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition-colors">
                Join
              </button>
            </div>
          </div>
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