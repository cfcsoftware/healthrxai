import LayoutWrapper from "../../components/layout/LayoutWrapper";
import chartImage from "../../assets/react.svg";
import openai from "../../assets/openai.webp";
import adept from "../../assets/adept.webp";
import meta from "../../assets/meta.webp";
import cohere from "../../assets/cohere.png";
import anthropic from "../../assets/anthropic.webp";
import mapImg from "../../assets/donovan.webp"; 

const modules = [
  {
    name: "HMS",
    description:
      "Comprehensive Hospital Management System for seamless operations.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4 text-blue-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    name: "AI",
    description: "Cutting-edge AI diagnostics and predictive analytics.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4 text-purple-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    name: "Robot",
    description: "Robotic process automation for healthcare efficiency.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4 text-green-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <circle cx="12" cy="12" r="1" />
        <path d="M8 7V5M16 7V5M8 17v2M16 17v2" />
      </svg>
    ),
  },
  {
    name: "Blockchain",
    description: "Secure, transparent medical records powered by blockchain.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4 text-yellow-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="7" width="18" height="10" rx="2" />
        <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "HealthRxAI transformed our hospital's efficiency and patient care.",
    name: "Dr. A. Sharma",
    title: "Chief Medical Officer, Apollo Hospitals",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "The AI diagnostics are incredibly accurate and easy to use.",
    name: "Dr. S. Mehta",
    title: "Radiologist, Fortis Healthcare",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "Seamless integration and outstanding support from the team.",
    name: "Mr. R. Singh",
    title: "IT Head, Medanta",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const stats = [
  { value: "10K+", label: "Beds Served", icon: "🛏️" },
  { value: "1M+", label: "Reports Processed", icon: "📄" },
  { value: "500+", label: "Hospitals Using", icon: "🏥" },
];

const Home = () => {
  return (
    <LayoutWrapper>
      <div className="min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-[100vh] grid place-items-end justify-center text-white text-center overflow-hidden pb-15 bg-black/95">
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="relative flex items-center justify-center w-full">
              <h1 className="relative z-10 text-[3.75rem] sm:text-[6rem] leading-[1.1] font-extralight">
                <span
                  className="bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent 
                 animate-gradient-x drop-shadow-[0_2px_32px_rgba(128,0,255,0.25)]"
                >
                  Empowering
                </span>
                <br />
                Healthcare With AI
              </h1>
            </div>
            <p className="text-lg mx-auto mt-6 mb-8 text-white font-medium">
              Scale delivers proven data, evaluations, and outcomes to AI labs,
              <br />
              governments, and the Fortune 500.
            </p>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <a
                href="https://calendly.com/cfcsoftwares/30min"
                className="bg-white font-medium text-black px-4 py-2 rounded-lg shadow-md hover:opacity-50 transition-colors transition-all duration-200"
              >
                Book a Demo →
              </a>
              <a
                href="https://calendly.com/cfcsoftwares/30min"
                className="text-blue-50 bg-transparent text-md font-medium flex justify-center px-2 xl:px-4 border-0 relative font-inter z-10 hover:text-opacity-70"
              >
                Build with AI →
              </a>
            </div>
          </div>

          {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" /> */}
        </section>

        <section className="bg-black pt-10 pb-40">
          <p className="text-center text-white/70 text-sm mb-8 px-4">
            Scale works with Generative AI Companies, U.S. Government Agencies &
            <span className="font-semibold underline underline-offset-2">
              Enterprises
            </span>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center px-4 max-w-6xl mx-auto">
            <img
              src="https://healthsrx.com/static/images/main_logo2.png"
              alt="Cisco"
              className="h-8 object-contain"
            />
            <img
              src="https://healthsrx.com/static/images/main_logo2.png"
              alt="TIME"
              className="h-8 object-contain"
            />
            <img
              src="https://healthsrx.com/static/images/main_logo2.png"
              alt="DLA Piper"
              className="h-8 object-contain"
            />
            <img
              src="https://healthsrx.com/static/images/main_logo2.png"
              alt="Global Atlantic"
              className="h-8 object-contain"
            />  
            <img
              src="https://healthsrx.com/static/images/main_logo2.png"
              alt="Howard Hughes"
              className="h-8 object-contain"
            />
            <img
              src="https://healthsrx.com/static/images/main_logo2.png"
              alt="Cengage"
              className="h-8 object-contain"
            />
          </div>
        </section>

        <section className="bg-black text-white text-center py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 mb-6 rounded-full text-sm tracking-widest font-light bg-purple-900/20 text-purple-300">
              AI FOR THE ENTERPRISE
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Full-Stack AI Solutions
            </h2>

            <p className="text-lg md:text-xl text-white/80 mb-8">
              Outcomes delivered with world-class data, models, agents, and
              deployment.
            </p>

            <a
              href="https://calendly.com/cfcsoftwares/30min"
              className="bg-purple-500 hover:bg-purple-700 font-normal text-sm text-white px-4 py-3 rounded-lg shadow-md transition-colors transition-all duration-200"
            >
              Book a Demo →
            </a>
          </div>
        </section>
        <section>
          <div className="bg-black text-white py-24 px-4">
            <div className="container">
              <div className="flex flex-col md:flex-row items-start bg-black text-white p-10 gap-10">
                {/* Left Side Text Content */}
                <div className="space-y-5 w-full md:w-1/2">
                  <div className="border-b border-b-neutral-900 pb-5">
                    <h2 className="text-2xl font-normal mb-2">
                      Fine-Tuning and RLHF
                    </h2>
                    <p className="font-normal">
                      Adapt best-in-class foundation models to your business and
                      your specific data to build sustainable, successful AI
                      programs and data from your enterprise.
                    </p>
                  </div>

                  <div className="border-b border-b-neutral-900 pb-5">
                    <h2 className="text-2xl font-normal mb-2">
                      Foundation Models
                    </h2>
                    <p className="font-normal">
                      Scale partners or integrates with all of the leading AI
                      models, from open-source to closed-source, including
                      OpenAI, Google, Meta, Cohere, and more.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-normal mb-2">
                      Enterprise Data
                    </h2>
                    <p className="font-normal">
                      Scale's Data Engine enables you to integrate your
                      enterprise data into the fold of these models, providing
                      the base for long-term strategic differentiation.
                    </p>
                  </div>
                </div>

                {/* Right Side Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <img
                    src={chartImage}
                    alt="3D AI Chart"
                    className="w-full max-w-[500px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black text-white py-16">
          <div className="container mx-auto text-center">
            <p className="text-sm tracking-widest text-white uppercase mb-10">
              Generative AI Providers We Partner With:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center px-4">
              <div className="rounded-xl border border-white/10 py-10 px-4 flex items-center justify-center">
                <img src={openai} alt="" />
              </div>
              <div className="rounded-xl border border-white/10 py-10 px-4 flex items-center justify-center">
                <img src={adept} alt="" />
              </div>
              <div className="rounded-xl border border-white/10 py-10 px-4 flex items-center justify-center">
                <img src={meta} alt="" />
              </div>
              <div className="rounded-xl border border-white/10 py-10 px-4 flex items-center justify-center">
                <img src={cohere} alt="" />
              </div>
              <div className="rounded-xl border border-white/10 py-10 px-4 flex items-center justify-center">
                <img src={anthropic} alt="" />
              </div>
            </div>
          </div>
        </section>
         <div className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <button className="px-4 py-1 bg-[#1a1a1a] text-sm tracking-widest text-indigo-400 rounded-full uppercase">
          Apply AI
        </button>
        <h2 className="text-4xl md:text-5xl font-semibold">Agentic Solutions</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Transform your data and expertise into agentic solutions that continuously improve with human interaction.
        </p>
      </div>

      <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-gradient-to-br from-[#0c0c0c] to-[#0c0c0c] rounded-2xl border border-[#212227] p-10">
          <p className="text-xs tracking-widest uppercase mb-5">Public Sector</p>
          <h3 className="text-2xl font-medium mb-4">
            Agentic Solutions for Defense and Intelligence
          </h3>
          <p className="text-gray-400 mb-4">
            Orchestrate agent workflows for decision advantage.
          </p>
          <div className="overflow-hidden rounded-xl">
            <img src={mapImg} alt="Defense Intelligence" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-br from-[#0c0c0c] to-[#0c0c0c] rounded-2xl border border-[#212227]  p-10">
          <p className="text-xs tracking-widest uppercase mb-5">Enterprise</p>
          <h3 className="text-2xl font-medium mb-4">
            Agentic Solutions for Enterprise AI Transformation
          </h3>
          <p className="text-gray-400 mb-4">
            Deeply personalize products and automate knowledge work.
          </p>
          <div className="overflow-hidden rounded-xl">
            <img src={mapImg} alt="Enterprise AI" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>

        {/* Unified Section: Modules, Testimonials, Partners, Stats */}
        <section className="relative py-20 px-8 bg-black text-white overflow-hidden">
          {/* Glassy background effect extended to all content */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-black via-[#181826] to-[#2e1065] opacity-90" />
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[6px]" />
          </div>
          <div className="relative z-10">
            {/* Modules Snapshot */}
            <h2 className="text-4xl font-bold text-center mb-12 tracking-tight bg-gradient-to-r from-purple-300 via-blue-200 to-white bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(168,139,250,0.7)]">
              Our Core Modules
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto mb-24">
              {modules.map((mod, i) => (
                <div
                  key={i}
                  className="relative group bg-black/60 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10 hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(128,0,255,0.18)] transition-all duration-200"
                  style={{
                    boxShadow:
                      "0 4px 32px 0 rgba(128,0,255,0.10), 0 1.5px 0 0 rgba(59,130,246,0.10)",
                  }}
                >
                  {/* Glassy overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-blue-900/10 to-purple-900/10 pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-center">
                    {mod.icon}
                    <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(168,139,250,0.5)]">
                      {mod.name}
                    </h3>
                    <p className="text-gray-200 text-base">{mod.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Client Testimonials */}
            <h2 className="text-4xl font-bold text-center mb-14 text-white drop-shadow-[0_2px_16px_rgba(59,130,246,0.15)]">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className={`
                    relative group bg-white/20 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border-t-4 border-blue-600 
                    flex flex-col items-center overflow-hidden 
                    animate-fade-in-down
                    hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.18)] 
                    transition-all duration-300
                  `}
                  style={{
                    boxShadow:
                      "0 4px 32px 0 rgba(59,130,246,0.10), 0 1.5px 0 0 rgba(168,139,250,0.10)",
                  }}
                >
                  {/* Glassy animated gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-white/10 pointer-events-none z-0 animate-gradient-x group-hover:opacity-100 opacity-80 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col items-center">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 rounded-full mb-4 border-4 border-blue-100 shadow-lg group-hover:scale-110 group-hover:shadow-blue-300/40 transition-all duration-300"
                    />
                    <p className="text-gray-100 italic text-lg mb-4 drop-shadow-[0_2px_8px_rgba(59,130,246,0.10)] group-hover:text-blue-200 transition-colors duration-300">
                      "{t.quote}"
                    </p>
                    <div className="text-blue-300 font-bold group-hover:text-purple-300 transition-colors duration-300">
                      {t.name}
                    </div>
                    <div className="text-blue-100/80 text-sm group-hover:text-white transition-colors duration-300">
                      {t.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Partnered Hospitals */}
            <h2 className="text-4xl font-bold mb-10 text-white drop-shadow-[0_2px_16px_rgba(59,130,246,0.15)] text-center animate-fade-in-down">
              Our Trusted Partners
            </h2>
            {/* Continuous horizontal scroll effect for partner cards */}
            <div className="relative w-full overflow-x-hidden mb-24">
              <div
                className="flex gap-10 items-center animate-partner-scroll px-2"
                style={{
                  width: "max-content",
                  minWidth: "100%",
                  animation: "partner-scroll 32s linear infinite",
                }}
              >
                {[
                  {
                    name: "City General Hospital",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="8"
                          y="12"
                          width="32"
                          height="28"
                          rx="5"
                          fill="currentColor"
                          className="text-blue-200/60"
                        />
                        <rect
                          x="18"
                          y="24"
                          width="12"
                          height="16"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="22"
                          y="28"
                          width="4"
                          height="8"
                          rx="1"
                          fill="currentColor"
                          className="text-blue-400"
                        />
                        <rect
                          x="14"
                          y="16"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="16"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Sunrise Medical Center",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-yellow-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="12"
                          fill="currentColor"
                          className="text-yellow-200/70"
                        />
                        <rect
                          x="20"
                          y="16"
                          width="8"
                          height="16"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="16"
                          y="20"
                          width="16"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Green Valley Clinic",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="10"
                          y="18"
                          width="28"
                          height="18"
                          rx="4"
                          fill="currentColor"
                          className="text-green-200/60"
                        />
                        <rect
                          x="20"
                          y="26"
                          width="8"
                          height="10"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="14"
                          y="20"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="20"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Starlight Health",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <polygon
                          points="24,8 28,20 40,20 30,28 34,40 24,32 14,40 18,28 8,20 20,20"
                          fill="currentColor"
                          className="text-purple-200/60"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Blue River Hospital",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="8"
                          y="16"
                          width="32"
                          height="20"
                          rx="5"
                          fill="currentColor"
                          className="text-blue-200/60"
                        />
                        <rect
                          x="20"
                          y="24"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="14"
                          y="18"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="18"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <path
                          d="M8 36 Q24 44 40 36"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Hopewell Medical",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-pink-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <path
                          d="M24 8 Q32 8 32 16 Q32 24 24 32 Q16 24 16 16 Q16 8 24 8Z"
                          fill="currentColor"
                          className="text-pink-200/60"
                        />
                        <rect
                          x="20"
                          y="20"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Lakeside Care",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <ellipse
                          cx="24"
                          cy="28"
                          rx="16"
                          ry="8"
                          fill="currentColor"
                          className="text-cyan-200/60"
                        />
                        <rect
                          x="20"
                          y="16"
                          width="8"
                          height="12"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Unity Health Group",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="12"
                          fill="currentColor"
                          className="text-indigo-200/60"
                        />
                        <rect
                          x="22"
                          y="16"
                          width="4"
                          height="16"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="16"
                          y="22"
                          width="16"
                          height="4"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Pinecrest Hospital",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <polygon
                          points="24,8 32,40 24,32 16,40"
                          fill="currentColor"
                          className="text-emerald-200/60"
                        />
                        <rect
                          x="20"
                          y="28"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Wellness Partners",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-orange-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="12"
                          y="12"
                          width="24"
                          height="24"
                          rx="6"
                          fill="currentColor"
                          className="text-orange-200/60"
                        />
                        <rect
                          x="20"
                          y="20"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="16"
                          y="16"
                          width="4"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="16"
                          width="4"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                ].map((partner, idx) => (
                  <div
                    key={idx}
                    className="relative flex flex-col items-center min-w-[180px] max-w-[200px] mx-2 group"
                  >
                    {/* Glassy, glowing card effect */}
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-blue-400/20 via-purple-500/10 to-white/10 blur-lg opacity-70 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                    <div className="relative z-10 flex flex-col items-center bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg px-6 py-6">
                      {partner.icon}
                      <span className="text-lg text-blue-300 font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-white bg-clip-text text-transparent animate-gradient-x text-center">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                ))}
                {/* Duplicate the list for seamless infinite scroll */}
                {[
                  {
                    name: "City General Hospital",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="8"
                          y="12"
                          width="32"
                          height="28"
                          rx="5"
                          fill="currentColor"
                          className="text-blue-200/60"
                        />
                        <rect
                          x="18"
                          y="24"
                          width="12"
                          height="16"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="22"
                          y="28"
                          width="4"
                          height="8"
                          rx="1"
                          fill="currentColor"
                          className="text-blue-400"
                        />
                        <rect
                          x="14"
                          y="16"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="16"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Sunrise Medical Center",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-yellow-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="12"
                          fill="currentColor"
                          className="text-yellow-200/70"
                        />
                        <rect
                          x="20"
                          y="16"
                          width="8"
                          height="16"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="16"
                          y="20"
                          width="16"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Green Valley Clinic",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="10"
                          y="18"
                          width="28"
                          height="18"
                          rx="4"
                          fill="currentColor"
                          className="text-green-200/60"
                        />
                        <rect
                          x="20"
                          y="26"
                          width="8"
                          height="10"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="14"
                          y="20"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="20"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Starlight Health",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <polygon
                          points="24,8 28,20 40,20 30,28 34,40 24,32 14,40 18,28 8,20 20,20"
                          fill="currentColor"
                          className="text-purple-200/60"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Blue River Hospital",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="8"
                          y="16"
                          width="32"
                          height="20"
                          rx="5"
                          fill="currentColor"
                          className="text-blue-200/60"
                        />
                        <rect
                          x="20"
                          y="24"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="14"
                          y="18"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="18"
                          width="6"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <path
                          d="M8 36 Q24 44 40 36"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Hopewell Medical",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-pink-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <path
                          d="M24 8 Q32 8 32 16 Q32 24 24 32 Q16 24 16 16 Q16 8 24 8Z"
                          fill="currentColor"
                          className="text-pink-200/60"
                        />
                        <rect
                          x="20"
                          y="20"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Lakeside Care",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <ellipse
                          cx="24"
                          cy="28"
                          rx="16"
                          ry="8"
                          fill="currentColor"
                          className="text-cyan-200/60"
                        />
                        <rect
                          x="20"
                          y="16"
                          width="8"
                          height="12"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Unity Health Group",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="12"
                          fill="currentColor"
                          className="text-indigo-200/60"
                        />
                        <rect
                          x="22"
                          y="16"
                          width="4"
                          height="16"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="16"
                          y="22"
                          width="16"
                          height="4"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Pinecrest Hospital",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <polygon
                          points="24,8 32,40 24,32 16,40"
                          fill="currentColor"
                          className="text-emerald-200/60"
                        />
                        <rect
                          x="20"
                          y="28"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Wellness Partners",
                    icon: (
                      <svg
                        className="h-14 w-14 mb-3 text-orange-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          x="12"
                          y="12"
                          width="24"
                          height="24"
                          rx="6"
                          fill="currentColor"
                          className="text-orange-200/60"
                        />
                        <rect
                          x="20"
                          y="20"
                          width="8"
                          height="8"
                          rx="2"
                          fill="white"
                        />
                        <rect
                          x="16"
                          y="16"
                          width="4"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                        <rect
                          x="28"
                          y="16"
                          width="4"
                          height="4"
                          rx="1"
                          fill="white"
                        />
                      </svg>
                    ),
                  },
                ].map((partner, idx) => (
                  <div
                    key={`dup-${idx}`}
                    className="relative flex flex-col items-center min-w-[180px] max-w-[200px] mx-2 group"
                  >
                    {/* Glassy, glowing card effect */}
                    <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-blue-400/20 via-purple-500/10 to-white/10 blur-lg opacity-70 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                    <div className="relative z-10 flex flex-col items-center bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg px-6 py-6">
                      {partner.icon}
                      <span className="text-lg text-blue-300 font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-white bg-clip-text text-transparent animate-gradient-x text-center">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Animation keyframes for horizontal scroll */}
              <style>
                {`
                  @keyframes partner-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                `}
              </style>
            </div>

            {/* Quick Stats */}
            <h2 className="text-4xl font-bold mb-12 text-white drop-shadow-[0_2px_16px_rgba(59,130,246,0.15)] text-center animate-fade-in-down">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="relative bg-white/20 backdrop-blur-xl p-10 rounded-2xl shadow-2xl flex flex-col items-center border-t-4 border-blue-600 overflow-hidden group hover:scale-105 transition-transform duration-200"
                  style={{
                    boxShadow:
                      "0 8px 32px 0 rgba(59,130,246,0.10), 0 1.5px 0 0 rgba(168,139,250,0.10)",
                  }}
                >
                  {/* Glassy animated gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-white/10 pointer-events-none animate-gradient-x" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="text-5xl mb-4 drop-shadow-[0_2px_12px_rgba(59,130,246,0.18)] animate-fade-in">
                      {stat.icon}
                    </div>
                    <h3 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-700 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_2px_8px_rgba(59,130,246,0.18)]">
                      {stat.value}
                    </h3>
                    <p className="text-gray-100 text-lg font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>
            {`
              @keyframes animateGradientX {
                0% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
              }
              .animate-gradient-x {
                background-size: 200% 200%;
                animation: animateGradientX 4s linear infinite alternate;
              }
            `}
          </style>
        </section>
      </div>
      {/* Optional: Add a global style for the gradient animation */}
      <style>
        {`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 6s ease-in-out infinite;
          }
        `}
      </style>
    </LayoutWrapper>
  );
};

export default Home;
