
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PROJECTS, SKILLS, ACHIEVEMENTS, EXPERIENCES } from '../constants.ts';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm Vinith's Cosmic AI. Ask me anything about his skills, projects, or achievements!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Build the context for Gemini
  const systemInstruction = `
    You are the AI Assistant for Vinith M's portfolio. 
    Vinith is a Computer Science Engineering student (Batch of 2027) at M Kumarasamy College of Engineering.
    
    His skills include: ${SKILLS.map(s => s.name).join(', ')}.
    His major projects are: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join('; ')}.
    His achievements include: ${ACHIEVEMENTS.map(a => a.title).join(', ')}.
    Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company}`).join(', ')}.
    
    Be helpful, professional, and slightly futuristic/cosmic in tone. 
    Keep answers concise. If you don't know something specific, suggest they contact Vinith via the contact form.
  `;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: { systemInstruction },
      });

      // Prepare history for context
      // Note: In a real app we'd map our messages to the correct format, 
      // but for simple cases sendMessageStream handles the single prompt well.
      
      let fullResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      const streamResponse = await chat.sendMessageStream({ message: userMessage });
      
      for await (const chunk of streamResponse) {
        const textChunk = (chunk as GenerateContentResponse).text;
        if (textChunk) {
          fullResponse += textChunk;
          setMessages(prev => {
            const last = prev[prev.length - 1];
            const updated = [...prev];
            updated[updated.length - 1] = { ...last, text: fullResponse };
            return updated;
          });
        }
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to my cosmic core. Please try again later!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-[#0a0a0f]/95 border border-white/10 rounded-[32px] shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="p-5 border-b border-white/5 bg-gradient-to-r from-[#6366f1]/20 to-transparent flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#6366f1] flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-tight">Cosmic AI</h3>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono text-white/40 uppercase">Vinith's Twin</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-[#22d3ee]/20' : 'bg-[#6366f1]/20'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-[#22d3ee]" /> : <Bot size={14} className="text-[#6366f1]" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#22d3ee] text-white rounded-tr-none' : 'bg-white/5 border border-white/10 text-white/80 rounded-tl-none'}`}>
                    {msg.text || (isLoading && idx === messages.length - 1 ? "..." : "")}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && !messages[messages.length-1].text && (
              <div className="flex justify-start">
                 <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3">
                   <Loader2 className="w-4 h-4 animate-spin text-[#6366f1]" />
                 </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-5 border-t border-white/5 bg-black/40">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="relative"
            >
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Vinith..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-[#6366f1] transition-all text-sm placeholder:text-white/20"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#6366f1] hover:bg-[#8b5cf6] text-white rounded-lg transition-all disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#6366f1] to-[#22d3ee] flex items-center justify-center text-white shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all hover:scale-110 active:scale-95 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
           <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#00f3ff] rounded-full flex items-center justify-center text-[10px] font-black animate-bounce border-2 border-[#0a0a0f]">
             1
           </span>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
