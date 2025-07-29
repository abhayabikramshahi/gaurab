import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

function GaurabAI() {
  const cards = [
    {
      title: 'Password Strength Checker',
      emoji: '🔒',
      description:
        'Evaluate your password’s security instantly with detailed feedback and improvement suggestions.',
      link: '/password-checker',
    },
    {
      title: 'CSS Generator',
      emoji: '🎨',
      description:
        'Create custom, clean CSS snippets for your designs with intuitive controls and live preview.',
      link: '/css-generator',
    },
    {
      title: 'HTML Generator',
      emoji: '📄',
      description:
        'Quickly produce semantic HTML code snippets to speed up your web development workflow.',
      link: '/html-generator',
    },
  ];

  return (
    <main className="min-h-screen bg-white py-16 px-6 md:px-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-14 tracking-tight">
        Gaurab AI Tools
      </h1>

      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ title, emoji, description, link }) => (
          <Link
            to={link}
            key={title}
            className="group block bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">{emoji}</div>
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                {title}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
            <button
              type="button"
              className="text-indigo-600 font-semibold group-hover:underline"
            >
              Explore →
            </button>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default GaurabAI;
