
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { getAIResponse } from '../services/geminiService.ts';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: '안녕하세요! 내몸애맞게 멘토 AI입니다. 무엇을 도와드릴까요?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response || '' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-violet-700 text-white hover:bg-violet-800'
        }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-violet-700 p-6 text-white flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">내몸애 멘토 상담</h3>
              <p className="text-xs text-violet-100">PRONOIA 프로그램 가이드</p>
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl flex gap-3 ${
                  msg.role === 'user' 
                    ? 'bg-violet-600 text-white rounded-tr-none shadow-lg shadow-violet-100' 
                    : 'bg-white text-slate-800 shadow-sm rounded-tl-none'
                }`}>
                  <div className="shrink-0 mt-1">
                    {msg.role === 'user' ? <User className="w-4 h-4 opacity-50" /> : <Bot className="w-4 h-4 text-violet-600" />}
                  </div>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm rounded-tl-none flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-violet-600 animate-spin" />
                  <span className="text-sm text-slate-500 font-medium">멘토가 답변을 준비중입니다...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="궁금한 내용을 입력하세요..."
              className="flex-1 px-5 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-violet-200 transition-all text-sm font-medium"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-violet-700 text-white p-4 rounded-2xl hover:bg-violet-800 transition-colors disabled:opacity-50 shadow-md"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
