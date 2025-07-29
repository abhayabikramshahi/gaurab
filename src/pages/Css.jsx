import React, { useState } from "react";

const CSS = () => {
  // HTML State
  const [title, setTitle] = useState("Untitled Page");
  const [heading, setHeading] = useState("Hello, World!");
  const [paragraph, setParagraph] = useState("This is a paragraph.");
  const [image, setImage] = useState("");

  // CSS State
  const [color, setColor] = useState("#333");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState("16");
  const [padding, setPadding] = useState("10");
  const [borderRadius, setBorderRadius] = useState("8");

  const htmlCode = `
<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
  <style>
    .styled {
      color: ${color};
      background-color: ${bgColor};
      font-size: ${fontSize}px;
      padding: ${padding}px;
      border-radius: ${borderRadius}px;
    }
  </style>
</head>
<body>
  <div class="styled">
    <h1>${heading}</h1>
    <p>${paragraph}</p>
    ${image ? `<img src="${image}" alt="Preview Image" style="max-width: 100%;" />` : ""}
  </div>
</body>
</html>`.trim();

  const cssCode = `
.styled {
  color: ${color};
  background-color: ${bgColor};
  font-size: ${fontSize}px;
  padding: ${padding}px;
  border-radius: ${borderRadius}px;
}`.trim();

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    alert("📋 Copied!");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">🎨 HTML + CSS Generator</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* LEFT SIDE: Inputs */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-xl border shadow">
            <h2 className="text-lg font-semibold mb-2">HTML Inputs</h2>
            <label className="block mb-2">Title</label>
            <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label className="block mt-4 mb-2">Heading</label>
            <input className="input" value={heading} onChange={(e) => setHeading(e.target.value)} />

            <label className="block mt-4 mb-2">Paragraph</label>
            <textarea
              className="input"
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
              rows={3}
            ></textarea>

            <label className="block mt-4 mb-2">Image URL (optional)</label>
            <input className="input" value={image} onChange={(e) => setImage(e.target.value)} />
          </div>

          <div className="bg-gray-50 p-4 rounded-xl border shadow">
            <h2 className="text-lg font-semibold mb-2">CSS Styling</h2>
            <label className="block mb-2">Text Color</label>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />

            <label className="block mt-4 mb-2">Background Color</label>
            <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />

            <label className="block mt-4 mb-2">Font Size (px)</label>
            <input className="input" type="number" value={fontSize} onChange={(e) => setFontSize(e.target.value)} />

            <label className="block mt-4 mb-2">Padding (px)</label>
            <input className="input" type="number" value={padding} onChange={(e) => setPadding(e.target.value)} />

            <label className="block mt-4 mb-2">Border Radius (px)</label>
            <input className="input" type="number" value={borderRadius} onChange={(e) => setBorderRadius(e.target.value)} />
          </div>
        </div>

        {/* RIGHT SIDE: Output */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-xl border shadow">
            <div className="flex justify-between mb-2">
              <h2 className="font-semibold text-lg">🧠 HTML + CSS Output</h2>
              <button onClick={() => copy(htmlCode)} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">📋 Copy</button>
            </div>
            <pre className="bg-gray-100 text-sm p-4 rounded max-h-64 overflow-auto whitespace-pre-wrap">{htmlCode}</pre>
          </div>

          <div className="bg-white p-4 rounded-xl border shadow">
            <div className="flex justify-between mb-2">
              <h2 className="font-semibold text-lg">🎨 CSS Only</h2>
              <button onClick={() => copy(cssCode)} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">📋 Copy</button>
            </div>
            <pre className="bg-gray-100 text-sm p-4 rounded overflow-auto">{cssCode}</pre>
          </div>

          {/* Mac-style Preview */}
          <div className="rounded-xl border shadow overflow-hidden">
            <div className="bg-gray-200 p-2 flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="ml-4 text-sm text-gray-600">{title || "Untitled Page"}</span>
            </div>
            <iframe
              className="w-full h-72"
              title="Live Preview"
              srcDoc={htmlCode}
            ></iframe>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .input {
          width: 100%;
          padding: 8px 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
};

export default CSS;
