import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Copy } from "lucide-react";

const About = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("gaurab.exe");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0c0c0c] text-black dark:text-white px-6 md:px-20 py-24 relative font-sans">

      {/* SEO + AEO Meta Tags */}
      <Helmet>
        {/* Basic SEO */}
        <title>Gaurab.exe | Nepali Hardware Hacker & Cybersecurity Expert</title>
        <meta
          name="description"
          content="Meet Gaurab Budha aka gaurab.exe — a hardware hacker, web developer, and ethical malware researcher from Nepal. Dive into his tech journey and skills."
        />
        <meta
          name="keywords"
          content="gaurab.exe, gaurab budha, nepali hacker, ethical hacking, hardware hacker, malware developer, full-stack developer, react developer, cybersecurity expert"
        />
        <meta name="author" content="Gaurab Budha" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="Gaurab.exe | Nepali Hardware Hacker & Malware Dev" />
        <meta property="og:description" content="Explore the mind of Gaurab Budha — an expert in hardware hacking, full-stack web dev, and ethical malware research." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <meta property="og:image" content="https://yourdomain.com/images/gaurab-exe-og.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gaurab.exe | Nepali Hardware Hacker & Malware Dev" />
        <meta name="twitter:description" content="Meet the full-stack dev and malware researcher shaking up tech from Nepal." />
        <meta name="twitter:image" content="https://yourdomain.com/images/gaurab-exe-og.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Gaurab Budha",
            "alternateName": "gaurab.exe",
            "url": "https://yourdomain.com/about",
            "image": "https://yourdomain.com/images/gaurab-exe-og.jpg",
            "sameAs": [
              "https://github.com/gaurabexe",
              "https://twitter.com/gaurabexe",
              "https://linkedin.com/in/gaurabexe"
            ],
            "jobTitle": "Hardware Hacker, Malware Developer, Full-Stack Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "alumniOf": "Badimalika Secondary School",
            "description": "Gaurab Budha aka gaurab.exe is a hardware hacker, full-stack developer, and ethical malware researcher from Nepal."
          }
          `}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
          Who is <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">Gaurab.exe</span>?
        </h1>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          I am <span className="font-bold">Gaurab Budha</span>, better known in the digital underground as <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded inline-flex items-center gap-2">
            gaurab.exe <Copy size={16} onClick={handleCopy} className="cursor-pointer hover:text-blue-600 transition" />
            {copied && <span className="text-sm text-green-500">Copied!</span>}
          </span>.
        </p>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          As a <strong className="text-blue-600 dark:text-pink-500">hardware hacker</strong>, I push the boundaries of technology by experimenting with electronics and embedded systems. My passion lies in understanding how hardware ticks — from microcontrollers to circuit boards — and hacking them to unlock new potentials.
        </p>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          On the software front, I am a <strong className="text-black dark:text-white">full-stack web developer</strong> who designs and builds sleek, efficient websites and applications. I focus on performance, clean code, and user experience to deliver products that scale and impress.
        </p>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          When it comes to cybersecurity, I dive deep as a <strong className="text-red-600 dark:text-red-400">malware developer</strong> and researcher. I explore vulnerabilities, develop custom payloads, and contribute to better defense techniques by understanding offensive tactics. For me, hacking isn’t just about breaking things — it’s about making systems stronger.
        </p>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          Outside code and circuits, I’m all about sharing knowledge, mentoring upcoming hackers, and contributing to open-source communities. I believe in ethical hacking, transparency, and using technology to uplift society.
        </p>

        <blockquote className="border-l-4 border-blue-600 dark:border-pink-500 pl-4 text-base md:text-lg italic text-gray-600 dark:text-gray-400 mb-10">
          "Code like a rebel. Hack like a thinker. Build like an artist."
        </blockquote>

        <h2 className="text-3xl font-semibold mb-6">Skills & Expertise</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
          <li>Hardware Hacking & Embedded Systems</li>
          <li>Full-Stack Web Development (React, Node.js, APIs)</li>
          <li>Malware Development & Reverse Engineering</li>
          <li>Cybersecurity Research & Ethical Hacking</li>
          <li>UI/UX Design & Performance Optimization</li>
          <li>Open Source Contributions & Mentorship</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Projects & Contributions</h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Over the years, I’ve worked on several exciting projects that merge hardware and software innovation. From building AI-powered tools to developing custom firmware and security tools, my work reflects a commitment to pushing limits and creating meaningful tech.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">FAQ</h2>
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <li>
            <strong>Who is Gaurab.exe?</strong><br />
            Gaurab Budha, known as gaurab.exe, is a Nepali hardware hacker, web developer, and malware researcher known for pushing the limits of tech.
          </li>
          <li>
            <strong>What does Gaurab specialize in?</strong><br />
            He specializes in embedded systems, full-stack development, and ethical malware engineering.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
