import { useState, useEffect } from "react";

//  function Heropart() {
//   return(
//     <div className="hero-section h-180 flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-20 px-4">
//       <div className="max-w-7xl mx-auto text-center">
//         <h1 className="text-5xl font-bold mb-4">Welcome to Fixity</h1>
//         <p className="text-xl mb-8">Your one-stop solution for reporting and fixing issues in public spaces.</p>
//         <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
//           Report an Issue
//         </button>
//       </div>
//     </div>
//   )
// }
// export default Heropart;
function Heropart() {
const slides = [
  {
    image:
      "https://t3.ftcdn.net/jpg/10/10/54/72/240_F_1010547242_uQocblrtQ2EUrhmjrA8xSHdDQOPZliiH.jpg",
    title: "Empowering Citizens",
    subtitle: "Smarter Cities Start With You",
    description:
      "Report local issues instantly and contribute to a more responsive and accountable city system.",
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/16/40/10/47/240_F_1640104740_SWZyPbYlBP5kyjZLOv4ae1utHSQmvr0i.jpg",
    title: "Modern Urban Transparency",
    subtitle: "Clear Communication. Faster Action.",
    description:
      "Fixity bridges the gap between communities and authorities through structured digital reporting.",
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/11/82/15/79/240_F_1182157900_Bnju0hq5mwXt5LWWbhb28zKY2EWOomud.jpg",
    title: "Cleaner & Safer Neighborhoods",
    subtitle: "Technology for Civic Responsibility",
    description:
      "From reporting potholes to tracking waste issues — Fixity makes civic engagement effortless.",
  },
];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden mt-20 ">

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-5 z-0"
          }`}
        >
          <img
            src={`${slide.image}?auto=format&fit=crop&w=1600&q=80`}
            alt="slide"
            className="w-full h-full object-cover blur-[3px] scale-105"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* LEFT SIDE TEXT */}
      <div className="relative z-20 flex items-center h-full">
        <div className="max-w-2xl pl-16 text-white">

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
            {slides[current].title}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-green-400">
            {slides[current].subtitle}
          </h2>

          <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed">
            {slides[current].description}
          </p>

          <button className="px-7 py-3 bg-green-500 hover:bg-green-600 transition-all duration-300 rounded-xl text-lg font-semibold shadow-xl hover:scale-105 active:scale-95">
            Report an Issue
          </button>

        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === current
                ? "bg-green-500 scale-125"
                : "bg-white/60 hover:bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Heropart