import React from 'react'

function Contact() {
  return (
    <>
<body class="bg-white flex items-center justify-center min-h-screen p-4">
  <div class="text-center max-w-lg">
    <h1 class="text-6xl font-bold text-red-600">403</h1>
    <h2 class="text-2xl font-semibold mt-2 text-gray-800">Access Forbidden</h2>
    <p class="mt-4 text-gray-600">🚫 Sorry! You don’t have permission to view this contact page.</p>
    <p class="mt-2 text-sm text-gray-400">This might be due to admin restrictions or missing credentials.</p>

    <div class="mt-8">
      <a href="/" class="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        🔙 Go Back to Home
      </a>
    </div>

    <div class="mt-12 text-xs text-gray-400 italic">
      If you believe this is a mistake, please contact support@example.com
    </div>
  </div>
</body>
    </>
  )
}

export default Contact