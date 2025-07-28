// import openai from "../../assets/openai.webp";
// import adept from "../../assets/adept.webp";
// import meta from "../../assets/meta.webp";
// import cohere from "../../assets/cohere.png";
// import anthropic from "../../assets/anthropic.webp";
// import mapImg from "../../assets/donovan.webp"; 
import HomeLayout from "../../layouts/HomeLayout";
import Hero from "./home/Hero";
import Partners from "./home/Partners";
import UseCases from "./home/UseCases";
import KeyFeaturesPage from "./home/KeyFeatures";
import FullModuleOverview from "./home/FullModuleOverview";
import AiAutomation from "./home/AiAutomation";
import SecurityCompliance from "./home/SecurityCompliance";
import DeviceCompatibility from "./home/DeviceCompatibility";
import AwardsCertificationsPage from "./home/AwardsIntegrations";
import TestimonialsPage from "./home/Testimonials";
import CallToAction from "./home/CallToAction";






const Home = () => {


  
  return (
    <HomeLayout>
      <div className="min-h-screen bg-[#0F0F1B] ">
      <Hero/>
      <Partners/>
      <UseCases/>
      <KeyFeaturesPage/>
      <FullModuleOverview/>
      <AiAutomation/>
      <SecurityCompliance/>
      <DeviceCompatibility/>
      <AwardsCertificationsPage/>
      <TestimonialsPage/>
      <CallToAction/>







      {/* <AboutHealthRx/> */}
      {/* <Modules/> */}
      {/* <NurseRobots/> */}
      {/* <Forecasting/> */}
      {/* <Blockchain/> */}
      {/* <CoreModules/> */}
      {/* <Testimonials/> */}
      {/* <AiNurse/> */}
      {/* <PredictiveIntelligence/> */}
      {/* <BlockchainSecurity/> */}
      {/* <AiDashboards/> */}
       

       

     
    

       

       <div className="bg-black text-white py-16 px-6">
  

  



</div>

        {/* Unified Section: Modules, Testimonials, Partners, Stats */}
        
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
    











    </HomeLayout>
  );
};

export default Home;
