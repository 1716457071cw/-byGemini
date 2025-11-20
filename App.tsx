import React, { useState, useEffect } from 'react';
import { Quote, Category } from './types';
import { INITIAL_QUOTES } from './constants';
import QuoteCard from './components/QuoteCard';
import CategoryFilter from './components/CategoryFilter';
import WisdomGenerator from './components/WisdomGenerator';
import { BookOpen } from 'lucide-react';

const App: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>(INITIAL_QUOTES);
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>(INITIAL_QUOTES);
  const [selectedCategory, setSelectedCategory] = useState<Category | '全部'>('全部');
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    // Simple check to see if env var is ostensibly present to show the generator
    setHasApiKey(!!process.env.API_KEY);
  }, []);

  useEffect(() => {
    if (selectedCategory === '全部') {
      setFilteredQuotes(quotes);
    } else {
      setFilteredQuotes(quotes.filter(q => q.category === selectedCategory));
    }
  }, [selectedCategory, quotes]);

  const handleNewQuote = (newQuote: Quote) => {
    // Add new AI generated quote to the top
    const updatedQuotes = [newQuote, ...quotes];
    setQuotes(updatedQuotes);
    setSelectedCategory(Category.AI_GENERATED);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f7] text-gray-900 font-sans pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f9f9f7]/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-black text-white p-2 rounded-lg">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">纳瓦尔宝典</h1>
              <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">纳瓦尔·拉维坎特语录集锦</p>
            </div>
          </div>
          <a 
            href="https://www.navalmanack.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:block text-sm font-medium text-gray-500 hover:text-black transition-colors"
          >
            阅读原书
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            财富、幸福与<br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900">理性。</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            精选关于积累财富和寻找内心平静的永恒智慧。
            <br/>探索这位当今最迷人的思想家的指导原则。
          </p>
        </div>

        {/* AI Generator Section (Only visible if API Key is presumably there or for demo) */}
        {hasApiKey && (
          <section className="mb-16 relative z-10">
             <WisdomGenerator onNewQuote={handleNewQuote} />
          </section>
        )}

        {/* Filter Tabs */}
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onSelect={setSelectedCategory} 
        />

        {/* Quote Grid */}
        {filteredQuotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuotes.map((quote) => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">该分类下暂无语录。</p>
            <button 
              onClick={() => setSelectedCategory('全部')}
              className="mt-4 text-blue-600 hover:underline"
            >
              查看所有语录
            </button>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-4 font-serif italic">
            "行动上要有紧迫感，结果上要有耐心。"
          </p>
          <p className="text-xs text-gray-400">
            基于 React, Tailwind & Gemini 构建。非纳瓦尔本人官方应用。
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;