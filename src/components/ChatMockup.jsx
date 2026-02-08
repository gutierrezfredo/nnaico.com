// Default sidebar configuration
const defaultSidebar = {
  assistants: [
    { name: 'Support', icon: '💬', bgColor: 'bg-blue-100', active: true },
    { name: 'Sales', icon: '⚡', bgColor: 'bg-green-100', active: false }
  ],
  history: [
    { label: 'Current chat', time: 'Just now', active: true },
    { label: 'Previous chat', time: '1 hour ago', active: false }
  ]
}

export default function ChatMockup({ conversation, className = '', minimal = false, sidebar = defaultSidebar }) {
  const sidebarConfig = { ...defaultSidebar, ...sidebar }

  if (minimal) {
    // Minimal style matching the actual app
    return (
      <div className={`relative h-full ${className}`}>
        {/* Chat container */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden flex h-full">
          {/* Sidebar - simplified */}
          <div className="hidden lg:flex flex-col w-48 border-r border-gray-200 bg-gray-100">
            {/* Sidebar header */}
            <div className="p-3 border-b border-gray-200">
              <button className="flex items-center gap-2 text-xs text-gray-600 w-full px-2 py-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                New Chat
              </button>
            </div>

            {/* Assistants section */}
            <div className="p-3">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Assistants</span>
              <div className="mt-2 space-y-1">
                {sidebarConfig.assistants.map((ast) => (
                  <div
                    key={ast.name}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded text-xs ${
                      ast.active ? 'bg-gray-200/80' : ''
                    }`}
                  >
                    <span className={`w-4 h-4 rounded ${ast.bgColor} flex items-center justify-center text-[10px]`}>
                      {ast.icon}
                    </span>
                    <span className={ast.active ? 'text-gray-900 font-medium truncate' : 'text-gray-600 truncate'}>
                      {ast.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* History section */}
            <div className="p-3 flex-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">History</span>
              <div className="mt-2 space-y-0.5 text-xs">
                {sidebarConfig.history.map((item) => (
                  <div
                    key={item.label}
                    className={`px-2 py-1.5 rounded ${item.active ? 'bg-gray-200/80' : ''}`}
                  >
                    <p className={item.active ? 'text-gray-900 font-medium truncate' : 'text-gray-600 truncate'}>
                      {item.label}
                    </p>
                    <p className="text-gray-400 text-[10px]">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* User section */}
            <div className="p-3 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white text-[10px] font-medium">A</div>
                <span className="text-xs text-gray-700">Admin</span>
              </div>
            </div>
          </div>

          {/* Chat content */}
          <div className="flex-1 flex flex-col p-4">
            <div className="flex-1 space-y-4">
              {conversation.map((msg, index) => (
                <div
                  key={index}
                  className={msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
                >
                  {msg.role === 'user' ? (
                    <div className="max-w-[80%] bg-gray-100 rounded-lg px-4 py-2.5">
                      <p className="text-sm text-gray-900">{msg.text}</p>
                    </div>
                  ) : (
                    <div className="max-w-[90%]">
                      <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{msg.text}</p>
                      {msg.hasChart && (
                        <div className="mt-4 bg-gray-50 rounded-lg p-4">
                          <div className="flex items-end justify-center gap-2 h-24">
                            <div className="w-8 bg-primary-500 rounded-t" style={{height: '60%'}} />
                            <div className="w-8 bg-primary-500 rounded-t" style={{height: '80%'}} />
                            <div className="w-8 bg-primary-400 rounded-t" style={{height: '45%'}} />
                            <div className="w-8 bg-primary-500 rounded-t" style={{height: '90%'}} />
                            <div className="w-8 bg-primary-500 rounded-t" style={{height: '70%'}} />
                          </div>
                          <div className="flex justify-center gap-2 mt-2 text-[10px] text-gray-500">
                            <span>West</span>
                            <span>East</span>
                            <span>South</span>
                            <span>North</span>
                            <span>Central</span>
                          </div>
                        </div>
                      )}
                      {msg.hasDownload && (
                        <button className="mt-3 inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-3 py-1.5 rounded-lg text-xs font-medium">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download Excel
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input field */}
            <div className="mt-4 flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-200 shadow-sm">
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <span className="text-sm text-gray-400 flex-1">Ask anything...</span>
              <button className="hidden md:block text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-orange-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Full style with window chrome (fallback, not currently used)
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden ${className}`}>
      {/* Chat messages */}
      <div className="p-4 space-y-4">
        {conversation.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'user' ? (
              <div className="max-w-[80%] bg-gray-100 rounded-lg px-4 py-2.5">
                <p className="text-sm text-gray-900">{msg.text}</p>
              </div>
            ) : (
              <div className="max-w-[90%]">
                <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{msg.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input field */}
      <div className="p-4 pt-0">
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-gray-200">
          <button className="text-gray-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <span className="text-xs text-gray-400 flex-1">Type your message...</span>
          <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-orange-400">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
