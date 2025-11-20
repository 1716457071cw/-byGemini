import React, { useState } from 'react';
import { Quote, Category } from '../types';
import { Copy, Share2, Check } from 'lucide-react';

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`"${quote.text}" — 纳瓦尔·拉维坎特`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getCategoryColor = (cat: Category) => {
    switch (cat) {
      case Category.WEALTH: return 'bg-amber-100 text-amber-800 border-amber-200';
      case Category.HAPPINESS: return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case Category.PHILOSOPHY: return 'bg-slate-100 text-slate-800 border-slate-200';
      case Category.AI_GENERATED: return 'bg-violet-100 text-violet-800 border-violet-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="mb-4 flex justify-between items-center">
        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${getCategoryColor(quote.category)}`}>
          {quote.category}
        </span>
        {quote.source && <span className="text-xs text-gray-400 italic">{quote.source}</span>}
      </div>
      
      <blockquote className="flex-grow">
        <p className="text-xl md:text-2xl font-serif text-gray-800 leading-relaxed tracking-wide">
          “{quote.text}”
        </p>
      </blockquote>

      <div className="mt-6 pt-4 border-t border-gray-50 flex justify-between items-end">
        <div className="flex flex-wrap gap-2">
          {quote.tags?.map((tag, idx) => (
            <span key={idx} className="text-xs text-gray-500">#{tag}</span>
          ))}
        </div>
        
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button 
            onClick={handleCopy}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
            title="复制到剪贴板"
          >
            {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;