import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Copy } from "lucide-react";
import Hero from "../assets/hero.jpg";

const About = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("gaurab.Budha");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black  text-black  px-6 md:px-20 py-24 relative font-sans">
      {/* SEO + AEO Meta Tags */}
      <Helmet>
        <title>Gaurab.Budha | Nepali Hardware Hacker & Cybersecurity Enthusiast</title>
        <meta
          name="description"
          content="Gaurab Budha aka gaurab.Budha — a Nepali hardware hacker, computer science student, and ethical malware researcher. Explore his work and skills."
        />
        <meta
          name="keywords"
          content="gaurab.Budha, gaurab budha, nepali hacker, nepali cs student, ethical hacking, hardware hacker, full-stack developer, cybersecurity expert"
        />
        <meta name="author" content="Gaurab Budha" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gaurabudha.netlify.app/" />

        {/* Open Graph */}
        <meta property="og:title" content="Gaurab.Budha | Nepali Hardware Hacker & Malware Dev" />
        <meta
          property="og:description"
          content="Explore the mind of Gaurab Budha — a Grade 11 Bio student, hardware hacker, CS major, and ethical malware researcher."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://gaurabudha.netlify.app/" />
        <meta property="og:image" content="https://gaurabudha.netlify.app/assets/hero-og.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gaurab.Budha | Nepali Hardware Hacker & Malware Dev" />
        <meta name="twitter:description" content="Meet the Grade 11 student exploring the world of hardware, malware, and full-stack dev from Nepal." />
        <meta name="twitter:image" content="https://gaurabudha.netlify.app/assets/hero-og.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Gaurab Budha",
            "alternateName": "gaurab.Budha",
            "url": "https://gaurabudha.netlify.app/",
            "image": "https://gaurabudha.netlify.app/assets/gaurab-oh.jpg",
            "sameAs": [
              "https://github.com/gaurabBudha",
              "https://twitter.com/gaurabBudha",
              "https://linkedin.com/in/gaurabBudha"
            ],
            "jobTitle": "Hardware Hacker, CS Student, Full-Stack Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "alumniOf": "Badimalika Secondary School",
            "description": "Gaurab Budha aka gaurab.Budha is a Nepali hardware hacker, full-stack developer, and malware researcher currently studying Biology in Grade 11."
          }
          `}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
          Who is <span className=" text-white text-transparent">Gaurab Budha</span>?
        </h1>

        <img
          src= {Hero}
          alt="Gaurab Budha"
          className="w-40 h-40 rounded-full mb-8 object-cover border-4 border-blue-500 dark:border-pink-500"
        />

        <p className="text-lg md:text-xl text-white mb-6 leading-relaxed">
          I’m <strong>Gaurab Budha</strong>, better known as{" "}
          <span className="bg-black border  border-[#ccc]  px-2 py-1 rounded inline-flex items-center gap-2">
            gaurab.Budha <Copy size={16} onClick={handleCopy} className="cursor-pointer hover:text-blue-600 transition" />
            {copied && <span className="text-sm text-green-500">Copied!</span>}
          </span>.
        </p>

        <p className="text-lg md:text-xl text-white mb-6 leading-relaxed">
          I'm a Grade 11 student majoring in <strong>Biology</strong> at Badimalika Secondary School — but my passion lies in <span className="text-blue-600 dark:text-pink-400 font-bold">Computer Science</span> and hardware. Yup, I’m that rare hybrid who lives in the world of circuits, code, and curiosity.
        </p>

        <p className="text-lg md:text-xl text-white mb-6 leading-relaxed">
          As a <strong className="text-blue-600 dark:text-pink-500">hardware hacker</strong>, I explore microcontrollers, reverse engineer gadgets, and experiment with embedded systems. I love pushing hardware to its limits and understanding how tech truly works from the inside out.
        </p>

        <p className="text-lg md:text-xl text-white mb-6 leading-relaxed">
          On the software side, I’m a self-taught <strong className="text-black dark:text-white">full-stack developer</strong>. I build websites and apps using React, Node.js, and APIs — always with performance, design, and security in mind.
        </p>

        <p className="text-lg md:text-xl text-white mb-6 leading-relaxed">
          I'm also into ethical cybersecurity. As a <strong className="text-red-600 dark:text-red-400">malware developer & researcher</strong>, I study attack vectors and write PoCs (proof of concept) to better understand system vulnerabilities — not to harm, but to build defense through knowledge.
        </p>

        <p className="text-lg md:text-xl text-white mb-10 leading-relaxed">
          Outside of that, I share knowledge, help other learners, and actively contribute to open-source tech. I believe in transparency, freedom, and tech as a tool for growth.
        </p>

        <blockquote className="border-l-4 border-blue-600  pl-4 text-base md:text-lg italic text-white mb-10">
          "Code like a rebel. Hack like a thinker. Build like an artist."
        </blockquote>

        <h2 className="text-3xl font-semibold mb-6">Skills & Expertise</h2>
        <ul className="list-disc list-inside space-y-2 text-white text-lg">
          <li>Hardware Hacking & Embedded Systems</li>
          <li>Full-Stack Web Development (React, Node.js, APIs)</li>
          <li>Malware Development & Reverse Engineering</li>
          <li>Cybersecurity Research & Ethical Hacking</li>
          <li>UI/UX Design & Performance Optimization</li>
          <li>Open Source Contributions & Mentorship</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Projects & Contributions</h2>
        <p className="text-lg md:text-xl text-white leading-relaxed">
          I’ve worked on projects ranging from AI tools to microcontroller automation to browser-based hacking utilities. Every project reflects my curiosity and love for merging code with creativity.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">FAQ</h2>
        <ul className="space-y-4 text-lg text-white">
          <li>
            <strong>Who is Gaurab Budha?</strong><br />
            Gaurab Budha, also known as gaurab.Budha, is a Nepali hardware hacker, full-stack dev, and malware researcher currently studying Bio in Grade 11.
          </li>
          <li>
            <strong>What does Gaurab specialize in?</strong><br />
            Embedded systems, ethical hacking, malware analysis, and full-stack development.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
