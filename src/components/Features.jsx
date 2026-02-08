const features = [
  {
    title: "Powerful Memory",
    description: "Remembers conversations and context over time. No more repeating yourself.",
    bgColor: "bg-gradient-to-br from-violet-100 to-purple-50",
    mockup: (
      <div className="bg-white rounded-lg p-3 w-64 mx-auto">
        <div className="text-sm font-bold text-gray-900 mb-1">Chat Memories</div>
        <div className="text-[8px] text-gray-400 mb-3">What each assistant remembers about you</div>
        <div className="space-y-2">
          {[
            { name: 'Sales Assistant', memory: 'Prefers email over calls' },
            { name: 'HR Helper', memory: 'Works in Engineering dept' },
            { name: 'Support Bot', memory: 'Premium tier customer' },
            { name: 'Onboarding', memory: 'Started January 2026' },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-2 border border-gray-100 rounded-lg p-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zM9 14a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] font-medium text-gray-900">{item.name}</div>
                <div className="text-[8px] text-gray-400 truncate">{item.memory}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Power Tools",
    description: "Generate charts, export reports, search the web, run calculations.",
    bgColor: "bg-gradient-to-br from-amber-100 to-yellow-50",
    mockup: (
      <div className="bg-white rounded-lg p-3 w-64 mx-auto">
        <div className="text-xs font-semibold text-gray-900 mb-1">Add Tool - Select Template</div>
        <div className="text-[8px] text-gray-400 mb-3">Choose a pre-built tool template</div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: 'Chart Creator', desc: 'Create interactive charts' },
            { name: 'File Export', desc: 'Export to Excel, PDF, CSV' },
            { name: 'Web Search', desc: 'Search the web for info' },
            { name: 'API Caller', desc: 'Make HTTP requests' },
            { name: 'Code Execution', desc: 'Run Python code' },
            { name: 'Image Generator', desc: 'Generate AI images' },
          ].map((tool) => (
            <div key={tool.name} className="border border-gray-100 rounded-lg p-2">
              <div className="text-[9px] font-medium text-gray-900 mb-1">{tool.name}</div>
              <p className="text-[7px] text-gray-400 leading-tight">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Flexible LLMs",
    description: "Use GPT, Claude, Gemini, or local models. Mix and match per assistant.",
    bgColor: "bg-gradient-to-br from-blue-100 to-sky-50",
    mockup: (
      <div className="bg-white rounded-lg p-4 w-56 mx-auto">
        <div className="text-xs font-medium text-gray-700 mb-3">Select Models</div>
        <div className="space-y-2">
          {['gpt-4o', 'gpt-4o-mini', 'gemini-2.5-flash', 'gemini-2.5-pro', 'gpt-4-turbo', 'gemini-1.5-flash', 'o1-preview'].map((model) => (
            <label key={model} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-primary-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs text-gray-700 font-mono">{model}</span>
            </label>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Admin Dashboard",
    description: "User management, usage stats, and detailed reports on what people ask.",
    bgColor: "bg-gradient-to-br from-emerald-100 to-green-50",
    mockup: (
      <div className="bg-white rounded-lg p-3 w-64 mx-auto">
        {/* Tabs */}
        <div className="flex gap-3 mb-3 text-[8px] border-b border-gray-100 pb-2">
          <span className="text-primary-600 font-semibold border-b border-primary-600 pb-1">STATISTICS</span>
          <span className="text-gray-400">USERS</span>
          <span className="text-gray-400">SETTINGS</span>
        </div>
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-2">
          <div className="border border-gray-100 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-[8px] text-gray-400">Total Users</div>
                <div className="text-sm font-bold text-gray-900">24</div>
              </div>
            </div>
          </div>
          <div className="border border-gray-100 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <div className="text-[8px] text-gray-400">Conversations</div>
                <div className="text-sm font-bold text-gray-900">825</div>
              </div>
            </div>
          </div>
          <div className="border border-gray-100 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="text-[8px] text-gray-400">Tokens (Month)</div>
                <div className="text-sm font-bold text-gray-900">70,401</div>
              </div>
            </div>
          </div>
          <div className="border border-gray-100 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-[8px] text-gray-400">Assistants</div>
                <div className="text-sm font-bold text-gray-900">3</div>
              </div>
            </div>
          </div>
          <div className="border border-gray-100 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-[8px] text-gray-400">Active (7d)</div>
                <div className="text-sm font-bold text-gray-900">18</div>
              </div>
            </div>
          </div>
          <div className="border border-gray-100 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <div className="text-[8px] text-gray-400">Avg Msgs/Thread</div>
                <div className="text-sm font-bold text-gray-900">5.9</div>
              </div>
            </div>
          </div>
          <div className="border border-gray-100 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <div>
                <div className="text-[8px] text-gray-400">Storage Used</div>
                <div className="text-sm font-bold text-gray-900">847 MB</div>
              </div>
            </div>
          </div>
          <div className="border border-gray-100 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div>
                <div className="text-[8px] text-gray-400">Messages</div>
                <div className="text-sm font-bold text-gray-900">4,834</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Integrations",
    description: "Connect to any system via APIs or MCP servers. Your assistant takes action.",
    bgColor: "bg-gradient-to-br from-rose-100 to-pink-50",
    mockup: (
      <div className="bg-white rounded-lg p-3 w-64 mx-auto">
        <div className="text-xs font-semibold text-gray-900 mb-1">API Configuration</div>
        <div className="text-[8px] text-gray-400 mb-3">Connect your assistant to external services</div>
        <div className="space-y-2">
          <div className="border border-gray-100 rounded-lg p-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-medium text-gray-900">REST API</span>
              <span className="text-[7px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded">Connected</span>
            </div>
            <div className="text-[8px] text-gray-400 font-mono truncate">https://api.yourcrm.com/v1</div>
          </div>
          <div className="border border-gray-100 rounded-lg p-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-medium text-gray-900">MCP Server</span>
              <span className="text-[7px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded">Active</span>
            </div>
            <div className="text-[8px] text-gray-400 font-mono truncate">mcp://localhost:3000</div>
          </div>
          <div className="border border-gray-100 rounded-lg p-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-medium text-gray-900">Webhook</span>
              <span className="text-[7px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded">Ready</span>
            </div>
            <div className="text-[8px] text-gray-400 font-mono truncate">POST /api/webhook</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Website Embedding",
    description: "Add assistants to your site with one line of code. Customize with your own logo and colors.",
    bgColor: "bg-gradient-to-br from-slate-200 to-gray-100",
    mockup: (
      <div className="bg-white rounded-lg p-3 w-64 mx-auto">
        {/* Embed Code Section */}
        <div className="flex items-start gap-2 mb-2">
          <span className="text-purple-600 text-sm font-mono">&lt;/&gt;</span>
          <div>
            <div className="text-[9px] font-semibold text-gray-900">Embed Code</div>
            <div className="text-[7px] text-gray-400">Copy this code to embed the chat widget</div>
          </div>
        </div>
        {/* Code block */}
        <div className="bg-gray-50 rounded border border-gray-100 p-2 mb-2 font-mono text-[6px] text-gray-600 leading-relaxed">
          <div className="text-gray-400">&lt;!-- Insight Embedded Chat --&gt;</div>
          <div>&lt;iframe</div>
          <div className="pl-2">src="https://insight.nnaico.com/...</div>
          <div className="pl-2">width="400"</div>
          <div className="pl-2">height="600"</div>
          <div>&gt;&lt;/iframe&gt;</div>
        </div>
        <button className="w-full bg-purple-500 text-white text-[8px] font-medium py-1.5 rounded mb-3">
          COPY EMBED CODE
        </button>
        {/* Logo upload */}
        <div className="text-[9px] font-semibold text-gray-900 mb-1">Embedded Chat Header Logo</div>
        <div className="text-[7px] text-gray-400 mb-2">Upload a logo for the chat widget header</div>
        <button className="w-full bg-primary-500 text-white text-[8px] font-medium py-1.5 rounded flex items-center justify-center gap-1">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          UPLOAD HEADER LOGO
        </button>
      </div>
    )
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 bg-[#ECF4FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Everything You Need to Put AI to Work
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A complete toolkit for building intelligent assistants that actually help.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover: transition-shadow border border-gray-100"
            >
              {/* Mockup area */}
              <div className={`${feature.bgColor} p-6 pt-8 flex items-start justify-center h-[220px] overflow-hidden`}>
                {feature.mockup}
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
