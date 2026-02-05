export default function ChatMockup({ conversation, className = '', minimal = false }) {
  if (minimal) {
    // Minimal style for ValueProps cards - floating messages with strong visual impact
    return (
      <div className={`relative ${className}`}>
        {/* Chat container with subtle frame */}
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          <div className="space-y-5">
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
              >
                {msg.role === 'user' ? (
                  <div className="max-w-[85%] bg-primary-600 rounded-2xl rounded-tr-sm px-5 py-3 shadow-[0_4px_20px_rgba(37,99,235,0.3)]">
                    <p className="text-sm text-white font-medium">{msg.text}</p>
                  </div>
                ) : (
                  <div className="max-w-[90%] flex gap-3">
                    {/* AI Avatar */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    {/* Message bubble */}
                    <div className="flex-1 bg-white rounded-2xl rounded-tl-sm p-5 shadow-[0_8px_40px_rgba(0,0,0,0.15)] border border-gray-100">
                      <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{msg.text}</p>
                      {msg.hasChart && (
                        <div className="mt-4 bg-gray-50 rounded-lg p-4">
                          <div className="flex items-end justify-center gap-3 h-28">
                            <div className="w-10 bg-primary-500 rounded-t" style={{height: '60%'}} />
                            <div className="w-10 bg-primary-500 rounded-t" style={{height: '80%'}} />
                            <div className="w-10 bg-primary-400 rounded-t" style={{height: '45%'}} />
                            <div className="w-10 bg-primary-500 rounded-t" style={{height: '90%'}} />
                            <div className="w-10 bg-primary-500 rounded-t" style={{height: '70%'}} />
                          </div>
                          <div className="flex justify-center gap-3 mt-2 text-xs text-gray-500">
                            <span>West</span>
                            <span>East</span>
                            <span>South</span>
                            <span>North</span>
                            <span>Central</span>
                          </div>
                        </div>
                      )}
                      {msg.hasDownload && (
                        <button className="mt-4 inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-100 transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download Excel
                        </button>
                      )}
                      {msg.source && (
                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-primary-50 flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <p className="text-xs text-gray-500 font-medium">{msg.source}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input field hint */}
          <div className="mt-5 flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-sm text-gray-400">Ask anything...</span>
          </div>
        </div>
      </div>
    )
  }

  // Full style with window chrome for Hero, UseCases, CapabilitiesShowcase
  return (
    <div className={`bg-mockup-bg rounded-2xl p-4 md:p-6 ${className}`}>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg">
        {/* Window chrome */}
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-2 text-xs text-gray-500">Nnaico Assistant</span>
          </div>
        </div>

        {/* Chat messages */}
        <div className="p-4 space-y-4">
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-lg px-4 py-3 ${
                  msg.role === 'user'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
