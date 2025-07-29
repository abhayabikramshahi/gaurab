import React, { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState({ label: "", color: "" });

  const checkStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    switch (score) {
      case 0:
      case 1:
        return { label: "Weak", color: "red" };
      case 2:
        return { label: "Medium", color: "orange" };
      case 3:
        return { label: "Strong", color: "blue" };
      case 4:
        return { label: "Very Strong", color: "green" };
      default:
        return { label: "", color: "" };
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    setStrength(checkStrength(val));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center justify-center font-sans">
      <h1 className="text-3xl font-bold mb-6">🔐 Password Strength Checker</h1>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
        className="w-full max-w-md border border-gray-300 rounded px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {password && (
        <div className="mt-4 w-full max-w-md">
          <div className="h-2 rounded bg-gray-200">
            <div
              className="h-full rounded transition-all duration-300"
              style={{
                width:
                  strength.label === "Weak"
                    ? "25%"
                    : strength.label === "Medium"
                    ? "50%"
                    : strength.label === "Strong"
                    ? "75%"
                    : "100%",
                backgroundColor: strength.color,
              }}
            ></div>
          </div>
          <p className="mt-2 text-lg font-semibold" style={{ color: strength.color }}>
            {strength.label}
          </p>
        </div>
      )}

      <div className="mt-6 text-gray-600 max-w-md text-sm">
        <p>💡 Tips for a strong password:</p>
        <ul className="list-disc list-inside">
          <li>At least 8 characters</li>
          <li>Use uppercase & lowercase letters</li>
          <li>Include numbers and symbols</li>
          <li>Avoid common words</li>
        </ul>
      </div>
    </div>
  );
};

export default Password;
