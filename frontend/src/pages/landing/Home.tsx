import chartImage from "../../assets/react.svg";
// import openai from "../../assets/openai.webp";
// import adept from "../../assets/adept.webp";
// import meta from "../../assets/meta.webp";
// import cohere from "../../assets/cohere.png";
// import anthropic from "../../assets/anthropic.webp";
// import mapImg from "../../assets/donovan.webp"; 
import HomeLayout from "../../layouts/HomeLayout";

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
    <HomeLayout>
      <div className="min-h-screen bg-[#0F0F1B] ">
        {/* Hero Banner */}
        <section className="relative h-[85vh] grid place-items-end justify-center text-white text-center overflow-hidden pb-15 ">
          <div className="relative z-10 max-w-7xl mx-auto py-35 px-6 text-center">
  <div className="relative flex items-center justify-center w-full">
    <h1 className="relative z-10 text-[3.75rem] sm:text-[4rem] leading-[1.1] font-extralight">
      <span
        className="bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent 
         animate-gradient-x drop-shadow-[0_2px_32px_rgba(128,0,255,0.25)]"
      >
        Revolutionize Healthcare with
      </span>
      <br />
      AI-Driven Hospital Automation
    </h1>
  </div>

  <p className="text-lg mx-auto mt-6 mb-8 text-white font-medium max-w-4xl">
    HealthRx AI is an intelligent, secure, and fully integrated Hospital Management System (HMS) that empowers hospitals with AI diagnostics, smart nurse robots, predictive disease insights, blockchain-grade security,and real-time operational control.
  </p>

  {/* CTA Buttons */}
  <div className="flex justify-center items-center gap-4 flex-wrap mb-8">
    <a
      href="https://calendly.com/cfcsoftwares/30min"
      className="bg-white font-semibold text-black px-6 py-3 rounded-lg shadow hover:opacity-80 transition"
    >
      Request Live Demo
    </a>
    <a
      href="#contact-sales"
      className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
    >
      Talk to Sales
    </a>
    <a
      href="/brochure.pdf"
      className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Brochure
    </a>
  </div>

  {/* Highlights Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white mt-10">
    <div className="flex items-center justify-center gap-3">
      <span className="text-2xl">🏥</span>
      <span className="text-md font-medium">100+ Hospitals Transformed</span>
    </div>
    <div className="flex items-center justify-center gap-3">
      <span className="text-2xl">🔐</span>
      <span className="text-md font-medium">Blockchain-Grade Security</span>
    </div>
    <div className="flex items-center justify-center gap-3">
      <span className="text-2xl">🤖</span>
      <span className="text-md font-medium">AI Nurse Robot Integration</span>
    </div>
    <div className="flex items-center justify-center gap-3">
      <span className="text-2xl">☁️</span>
      <span className="text-md font-medium">Cloud & On-Premise Ready</span>
    </div>
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
              src="/1.png"
              alt="Cisco"
              className="h-8 object-contain"
            />
            <img
              src="/2.png"
              alt="TIME"
              className="h-8 object-contain"
            />
            <img
              src="/1.png"
              alt="DLA Piper"
              className="h-8 object-contain"
            />
            <img
              src="/2.png"
              alt="Global Atlantic"
              className="h-8 object-contain"
            />  
            <img
              src="/1.png"
              alt="Howard Hughes"
              className="h-8 object-contain"
            />
            <img
              src="/2.png"
              alt="Cengage"
              className="h-8 object-contain"
            />
          </div>
        </section>

      <section className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-semibold mb-6">
      <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-300">
        About HealthRx AI
      </span>
    </h2>
    <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
      HealthRx AI is an end-to-end healthcare automation platform designed to power the digital
      backbone of modern hospitals, clinics, and diagnostic labs.
    </p>
    <div className="text-left max-w-4xl mx-auto space-y-5 text-gray-400 text-md leading-relaxed">
      <p>
        Combining <span className="text-white font-medium">Artificial Intelligence</span>, 
        <span className="text-white font-medium"> Blockchain</span>, 
        <span className="text-white font-medium"> IoT</span>, and 
        <span className="text-white font-medium"> Cloud-native architecture</span>, 
        HealthRx AI modernizes patient care, simplifies workflows, and ensures clinical and operational excellence.
      </p>
      <p>
        Our platform replaces fragmented systems with a single intelligent solution — scalable across locations, secure by design, and future-ready.
      </p>
    </div>
  </div>
</section>
       <section>
  <div className="bg-black text-white py-24 px-4">
    <div className="container">
      <div className="flex flex-col md:flex-row items-start p-10 gap-10">
        {/* Left Side Text Content */}
        <div className="space-y-6 w-full md:w-1/2">
          {/* Header */}
          <div className="border-b border-neutral-800 pb-5">
            <h2 className="text-3xl font-semibold mb-2">
              Modules That Power Every Department
            </h2>
            <p className="text-gray-400">
              A unified platform covering operational, clinical, and financial functions.
            </p>
          </div>

          {/* Core Operational Modules */}
          <div className="border-b border-neutral-800 pb-5">
            <h3 className="text-2xl font-medium text-cyan-400 mb-2">
              Core Operational Modules
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>✔ Patient Registration & Scheduling</li>
              <li>✔ OPD/IPD Workflow</li>
              <li>✔ Billing & TPA Integration</li>
              <li>✔ Pharmacy, Laboratory & Radiology</li>
              <li>✔ Discharge Summary & Case History</li>
              <li>✔ Ward, Bed & OT Management</li>
              <li>✔ Inventory & Biomedical Equipment</li>
            </ul>
          </div>

          {/* Clinical Intelligence Modules */}
          <div className="border-b border-neutral-800 pb-5">
            <h3 className="text-2xl font-medium text-cyan-400 mb-2">
              Clinical Intelligence Modules
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>✔ EMR/EHR with AI-Powered Insights</li>
              <li>✔ Teleconsultation with e-Prescription</li>
              <li>✔ Diet Planning, Nursing Notes, and Vitals</li>
              <li>✔ Queue & Visitor Management</li>
              <li>✔ In-App & WhatsApp Alerts</li>
            </ul>
          </div>

          {/* Administrative & Financial Modules */}
          <div>
            <h3 className="text-2xl font-medium text-cyan-400 mb-2">
              Administrative & Financial Modules
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>✔ HR, Staff & Roster Management</li>
              <li>✔ Payroll, Leave & Appraisal</li>
              <li>✔ Asset & AMC Tracking</li>
              <li>✔ Financial Reporting & Audit Compliance</li>
            </ul>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={chartImage}
            alt="Department Modules Chart"
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</section>

        <section className="bg-black text-white py-16">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
      🤖 Introducing AI-Powered Nurse Robots
    </h2>
    <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
      The future of patient care is here. HealthRx AI seamlessly integrates with AI-powered nurse robots to enhance safety, optimize staff workload, and deliver 24/7 care automation.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
      <div className="bg-white/5 p-6 rounded-lg">
        <p>✔ In-ward patient movement</p>
      </div>
      <div className="bg-white/5 p-6 rounded-lg">
        <p>✔ Medicine delivery & dosage tracking</p>
      </div>
      <div className="bg-white/5 p-6 rounded-lg">
        <p>✔ Routine checks and ward rounds</p>
      </div>
      <div className="bg-white/5 p-6 rounded-lg">
        <p>✔ Collecting vitals & syncing with EMR</p>
      </div>
      <div className="bg-white/5 p-6 rounded-lg">
        <p>✔ Voice-controlled patient interaction</p>
      </div>
      <div className="bg-white/5 p-6 rounded-lg">
        <p>✔ Autonomous pharmacy dispatch within hospital</p>
      </div>
    </div>

    <p className="text-md text-gray-400 mt-10 max-w-3xl mx-auto">
      Empower your hospital with next-gen robotics, combining real-time intelligence and automation—only with HealthRx AI.
    </p>
  </div>
</section>

       <div className="bg-black text-white py-16 px-6">
  <div className="max-w-6xl mx-auto text-center space-y-4">
    <button className="px-4 py-1 bg-[#1a1a1a] text-sm tracking-widest text-indigo-400 rounded-full uppercase">
      Predictive AI
    </button>
    <h2 className="text-4xl md:text-5xl font-semibold">
      Early Disease Detection & Forecasting
    </h2>
    <p className="text-gray-300 max-w-3xl mx-auto text-lg">
      Our intelligent prediction engine continuously learns from clinical data, vitals, history, and lifestyle indicators to enable proactive, AI-powered healthcare.
    </p>
  </div>

  <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Card 1 */}
  <div className="bg-gradient-to-br from-[#0c0c0c] to-[#0c0c0c] rounded-2xl border border-[#212227] p-10">
    <h3 className="text-2xl font-medium mb-4">
      Blockchain-Powered Data Security
    </h3>
    <p className="text-gray-400 mb-4">
      Security and transparency are built into the DNA of HealthRx AI using advanced blockchain infrastructure.
    </p>
    <ul className="text-gray-400 list-disc list-inside space-y-1">
      <li>Blockchain encryption for tamper-proof medical records</li>
      <li>Complete audit trails for every action</li>
      <li>Role-Based Access Control (RBAC)</li>
    </ul>
  </div>

  {/* Card 2 */}
  <div className="bg-gradient-to-br from-[#0c0c0c] to-[#0c0c0c] rounded-2xl border border-[#212227] p-10">
    <h3 className="text-2xl font-medium mb-4">
      Immutable Compliance & Traceability
    </h3>
    <p className="text-gray-400 mb-4">
      Your data is not just protected — it’s immutable, traceable, and fully compliant.
    </p>
    <ul className="text-gray-400 list-disc list-inside space-y-1">
      <li>Immutable logs & timestamped transaction history</li>
      <li>Compliant with HIPAA, GDPR, NABH & HL7/FHIR standards</li>
    </ul>
  </div>
</div>


  <p className="text-gray-400 text-center mt-12 max-w-3xl mx-auto text-md">
    Doctors receive real-time alerts and AI-generated suggestions for early diagnosis, reducing readmissions and improving clinical outcomes.
  </p>
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
    
<section className="bg-[#0f0f0f] text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <div className="inline-block px-4 py-1 bg-[#1a1a1a] text-sm tracking-widest text-indigo-400 rounded-full uppercase mb-4">
       Modules
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
      Modules That Power Every Department
    </h2>
    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
      Streamline hospital operations, boost clinical intelligence, and ensure financial transparency with end-to-end modular solutions.
    </p>
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-sm sm:text-base">
    {/* Core Operational Modules */}
    <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 shadow-lg">
      <h3 className="text-lg font-semibold text-indigo-400 mb-4">Core Operational Modules</h3>
      <ul className="space-y-3 text-gray-300">
        <li>✔ Patient Registration & Scheduling</li>
        <li>✔ OPD/IPD Workflow</li>
        <li>✔ Billing & TPA Integration</li>
        <li>✔ Pharmacy, Laboratory & Radiology</li>
        <li>✔ Discharge Summary & Case History</li>
        <li>✔ Ward, Bed & OT Management</li>
        <li>✔ Inventory & Biomedical Equipment</li>
      </ul>
    </div>

    {/* Clinical Intelligence Modules */}
    <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 shadow-lg">
      <h3 className="text-lg font-semibold text-indigo-400 mb-4">Clinical Intelligence Modules</h3>
      <ul className="space-y-3 text-gray-300">
        <li>✔ EMR/EHR with AI-Powered Insights</li>
        <li>✔ Teleconsultation with e-Prescription</li>
        <li>✔ Diet Planning, Nursing Notes, and Vitals</li>
        <li>✔ Queue & Visitor Management</li>
        <li>✔ In-App & WhatsApp Alerts</li>
      </ul>
    </div>

    {/* Administrative & Financial Modules */}
    <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 shadow-lg">
      <h3 className="text-lg font-semibold text-indigo-400 mb-4">Administrative & Financial Modules</h3>
      <ul className="space-y-3 text-gray-300">
        <li>✔ HR, Staff & Roster Management</li>
        <li>✔ Payroll, Leave & Appraisal</li>
        <li>✔ Asset & AMC Tracking</li>
        <li>✔ Financial Reporting & Audit Compliance</li>
      </ul>
    </div>
  </div>
</section>

<section className="bg-[#0e0e0e] text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <div className="inline-block px-4 py-1 bg-[#1a1a1a] text-sm tracking-widest text-indigo-400 rounded-full uppercase mb-4">
      🤖 AI Nurse Robots
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
      Introducing AI-Powered Nurse Robots
    </h2>
    <p className="text-gray-400 max-w-3xl mx-auto text-lg">
      The future of patient care is here. HealthRx AI seamlessly integrates with intelligent nurse robots
      to automate critical in-ward functions and elevate 24/7 care delivery.
    </p>
  </div>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
    <ul className="space-y-4 text-gray-300 text-base">
      <li>✔ In-ward patient movement</li>
      <li>✔ Medicine delivery & dosage tracking</li>
      <li>✔ Routine checks and ward rounds</li>
    </ul>
    <ul className="space-y-4 text-gray-300 text-base">
      <li>✔ Collecting vitals & syncing with EMR</li>
      <li>✔ Voice-controlled patient interaction</li>
      <li>✔ Autonomous pharmacy dispatch within hospital</li>
    </ul>
  </div>

  <div className="text-center mt-12 max-w-3xl mx-auto text-gray-400 text-lg">
    Enhance safety, optimize staff workload, and deliver intelligent automation across wards —
    powered by HealthRx AI & Robotics.
  </div>
</section>

<section className="bg-gradient-to-br from-[#0e0e0e] to-[#121212] text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <div className="inline-block px-4 py-1 bg-[#0e0e0e] text-sm tracking-widest text-green-400 rounded-full uppercase mb-4">
      🧠 Predictive Intelligence
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
      Predictive AI for Early Disease Detection
    </h2>
    <p className="text-gray-400 max-w-3xl mx-auto text-lg">
      Our intelligent prediction engine analyzes vitals, history, lifestyle patterns, and clinical data to deliver real-time alerts and actionable insights — enabling doctors to act before symptoms worsen.
    </p>
  </div>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
    <ul className="space-y-4 text-gray-300 text-base">
      <li>✔ Predict chronic disease onset (e.g., diabetes, cardiac risks)</li>
      <li>✔ Detect potential outbreaks in ICU/wards</li>
    </ul>
    <ul className="space-y-4 text-gray-300 text-base">
      <li>✔ Suggest preventive diagnostics for high-risk patients</li>
      <li>✔ Forecast patient admission trends for capacity planning</li>
    </ul>
  </div>

  <div className="text-center mt-12 max-w-3xl mx-auto text-gray-400 text-lg">
    Reduce readmissions, empower early interventions, and improve outcomes with AI-powered foresight.
  </div>
</section>

<section className="bg-gradient-to-b from-black to-[#0f0f0f] text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <div className="inline-block px-4 py-1 bg-[#1a1a1a] text-sm tracking-widest text-cyan-400 rounded-full uppercase mb-4">
      🔐 Blockchain Security
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
      Unbreakable Security with Blockchain Technology
    </h2>
    <p className="text-gray-400 max-w-3xl mx-auto text-lg">
      Security and transparency are built into the DNA of HealthRx AI. Every transaction, access, and update is protected by decentralized integrity.
    </p>
  </div>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
    <ul className="space-y-4 text-gray-300 text-base">
      <li>✔ Blockchain Encryption for tamper-proof medical records</li>
      <li>✔ Complete Audit Trails for every action</li>
      <li>✔ Role-Based Access Control (RBAC)</li>
    </ul>
    <ul className="space-y-4 text-gray-300 text-base">
      <li>✔ Immutable Logs & Timestamped Transaction History</li>
      <li>✔ Fully Compliant with HIPAA, GDPR, NABH, and HL7/FHIR Standards</li>
    </ul>
  </div>

  <div className="text-center mt-12 text-sm text-gray-500">
    Built for trust. Built for compliance. Built for the future.
  </div>
</section>

<section className="bg-[#0d0d0d] text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <div className="inline-block px-4 py-1 bg-[#1f1f1f] text-sm tracking-widest text-cyan-400 rounded-full uppercase mb-4">
      📊 AI Dashboards
    </div>
    <h2 className="text-4xl md:text-5xl font-semibold mb-4">
      AI Dashboards & Custom Analytics
    </h2>
    <p className="text-gray-400 max-w-3xl mx-auto text-lg">
      Tailored dashboards for every stakeholder, powered by real-time data and AI-driven insights.
    </p>
  </div>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-gray-300 text-base">
    <ul className="space-y-4">
      <li>✔ Hospital Admins – Revenue, KPIs, Staff Productivity</li>
      <li>✔ Doctors – Patient Queue, Lab Reports, Prescriptions</li>
      <li>✔ Lab – Sample Tracking, Auto-Reports, AI Flags</li>
    </ul>
    <ul className="space-y-4">
      <li>✔ Finance – Claims, Billing Cycle, Cost Analysis</li>
      <li>✔ Inventory – Medicine Levels, Expiry Alerts</li>
    </ul>
  </div>

  <div className="text-center mt-12 text-sm text-gray-500">
    Visualize operations. Personalize decision-making. Act instantly.
  </div>

  {/* Testimonials Section */}
  <div className="mt-20 text-center">
    <h3 className="text-2xl font-semibold mb-6 text-white">💬 Trusted by Healthcare Leaders</h3>
    <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2 text-left">
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md">
        <p className="text-gray-300 italic mb-4">
          "From robotic assistance to predictive analytics, HealthRx AI made our hospital futuristic."
        </p>
        <span className="font-medium text-white">– Dr. Sanjeev Kulkarni, Chairman, AlphaCare Hospital</span>
      </div>
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md">
        <p className="text-gray-300 italic mb-4">
          "The disease prediction system helped reduce patient readmissions by 25%."
        </p>
        <span className="font-medium text-white">– Dr. Ayesha Mittal, CMO, MedEra Multi-Specialty</span>
      </div>
    </div>
  </div>
</section>



    </HomeLayout>
  );
};

export default Home;
