 import React from 'react'
import { MapPinCheckInside } from 'lucide-react'
import { Rss } from 'lucide-react'
import { Blend } from 'lucide-react'
import { NotebookPen } from 'lucide-react'
 function About() {
  return (
    <section id="about" className="w-full bg-sky-50 py-24 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section Intro */}
        <div className="mb-20 max-w-3xl ">
          <p className="text-green-600 font-semibold tracking-wide uppercase mb-3">
            About Fixity
          </p>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            Building a Smarter Way to Report Local Issues
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Fixity is designed to simplify how citizens report everyday civic
            problems. Whether it’s uncollected garbage, a damaged road or flooded streets, reporting should be quick, transparent and
            actually effective.It also empowers municipal employees with intelligent tools to optimize, allocate,
monitor, and fix these issues effectively depending upon urgency.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side Content */}
          <div className="space-y-8 ">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Why We Built Fixity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Traditional complaint systems are often slow, unclear and
                difficult to track. Citizens submit reports but rarely receive
                updates. We wanted to change that.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                What Makes It Different
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fixity focuses on clarity and accountability. Every report is
                geo-tagged, documented with visual proof and trackable from
                submission to resolution.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Designed for Real Communities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe civic participation should be simple. Our platform
                empowers citizens to contribute toward cleaner, safer and more
                responsive neighborhoods.
              </p>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid gap-6 ">

            <div className="bg-sky-100 p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition duration-300">
              <h4 className="text-lg font-semibold text-gray-900 mb-2 flex">
               <NotebookPen />  Quick Reporting
              </h4>
              <p className="text-gray-600 text-sm">
                Capture an issue, add location and submit in seconds.
              </p>
            </div>

            <div className="bg-sky-100 p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition duration-300">
              <h4 className="text-lg font-semibold text-gray-900 mb-2 flex">
                <MapPinCheckInside /> Accurate Location Tagging
              </h4>
              <p className="text-gray-600 text-sm ">
                Pinpoint the exact location to reduce confusion and delays.
              </p>
            </div>

            <div className="bg-sky-100 p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition duration-300">
              <h4 className="text-lg font-semibold text-gray-900 mb-2 flex">
               <Rss />  Real-Time Updates
              </h4>
              <p className="text-gray-600 text-sm">
                Track status changes from submission to completion.
              </p>
            </div>

            <div className="bg-sky-100 p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition duration-300">
              <h4 className="text-lg font-semibold text-gray-900 mb-2 flex">
               <Blend /> Transparent System
              </h4>
              <p className="text-gray-600 text-sm">
                Clear communication between citizens and authorities.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
export default About