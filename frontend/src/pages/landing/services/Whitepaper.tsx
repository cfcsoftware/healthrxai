import HomeLayout from "../../../layouts/HomeLayout";
import { FileText, Download } from "lucide-react";

const whitepapers = [
  {
    title: "Blockchain in Healthcare",
    description: "Explore how blockchain ensures data integrity, security, and transparency in modern healthcare systems.",
    link: "#", // Replace with actual download/view URL
  },
  {
    title: "Voice AI Use Cases",
    description: "Understand the practical applications of Voice AI for patient engagement, diagnostics, and record-keeping.",
    link: "#",
  },
  {
    title: "AI-driven Diagnostics",
    description: "How AI is revolutionizing early diagnosis, medical imaging, and clinical decision support.",
    link: "#",
  },
];

const WhitePaper = () => {
  return (
    <HomeLayout>
      <div className="min-h-screen bg-[#0b1120] text-white py-26 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Whitepapers & Ebooks</h1>
          <p className="text-gray-400 mb-12">
            Download in-depth research and insights on AI, Blockchain, and Healthcare Technology.
          </p>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            {whitepapers.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#111827] border border-gray-800 rounded-xl p-6 text-left hover:shadow-cyan-500/20 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="text-cyan-400 h-6 w-6" />
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                </div>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:underline text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default WhitePaper;
