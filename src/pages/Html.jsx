import React, { useState } from "react";

const HtmlGenerator = () => {
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [image, setImage] = useState("");
  const [htmlCode, setHtmlCode] = useState("");

  const generateHTML = () => {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
</head>
<body>
  <h1>${heading}</h1>
  <p>${paragraph}</p>
  <img src="${image}" alt="Image" style="max-width:100%;" />
</body>
</html>`;
    setHtmlCode(html);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    alert("📋 Copied to clipboard!");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-24">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-gray-50 p-6 rounded-xl shadow-md border">
        <label className="block font-medium mb-2">Page Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter page title..."
        />

        <label className="block font-medium mb-2">Heading:</label>
        <input
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter heading..."
        />

        <label className="block font-medium mb-2">Paragraph:</label>
        <textarea
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
          rows="4"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter paragraph..."
        ></textarea>

        <label className="block font-medium mb-2">Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="https://..."
        />

        <button
          onClick={generateHTML}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-full"
        >
          🚀 Generate HTML
        </button>
      </div>

      {/* Output Section */}
      <div className="w-full lg:w-1/2 bg-white p-4 rounded-xl shadow-md border">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">HTML Code</h2>
          <button
            onClick={copyToClipboard}
            className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
          >
            📋 Copy
          </button>
        </div>

        <pre className="bg-gray-100 text-gray-800 p-4 rounded mb-6 max-h-64 overflow-auto whitespace-pre-wrap">
{htmlCode}
        </pre>

        <h2 className="text-lg font-semibold mb-2">Preview</h2>

        {/* Fake Mac-style browser window */}
        <div className="border rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-200 p-2 flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="ml-4 text-sm text-gray-600">{title || "Untitled Page"}</span>
          </div>
          <iframe
            className="w-full h-64 border-t"
            srcDoc={htmlCode}
            title="Live Preview"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HtmlGenerator;
