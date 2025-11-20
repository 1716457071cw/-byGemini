import React, { useState } from 'react';
import { Search, Sparkles, Loader2 } from 'lucide-react';
import { generateNavalWisdom } from '../services/geminiService';
import { Quote } from '../types';

interface WisdomGeneratorProps {
  onNewQuote: (quote: Quote) => void;
}

const WisdomGenerator: React.FC<WisdomGeneratorProps> = ({ onNewQuote }) => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setError('');

    try {
      const quote = await generateNavalWisdom(topic);
      onNewQuote(quote);
      setTopic('');
    } catch (err) {
      setError('先知暂时保持沉默。请检查您的网络连接或 API 密钥。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-12 bg-white p-1 rounded-2xl shadow-lg border border-gray-100">
      <form onSubmit={handleGenerate} className="flex items-center w-full">
        <div className="pl-4 text-gray-400">
          <Sparkles size={20} />
        </div>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="向纳瓦尔提问... (例如：'杠杆', '焦虑', '阅读')"
          className="flex-grow p-4 outline-none text-gray-700 bg-transparent placeholder-gray-400"
        />
        <button
          type="submit"
          disabled={loading || !topic.trim()}
          className={`
            m-1 px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-all whitespace-nowrap
            ${loading || !topic.trim() 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-900 text-white hover:bg-gray-800 shadow-md'}
          `}
        >
          {loading ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
          <span>挖掘智慧</span>
        </button>
      </form>
      {error && (
        <div className="px-4 pb-3 text-red-500 text-sm text-center">
          {error}
        </div>
      )}
    </div>
  );
};

export default WisdomGenerator;