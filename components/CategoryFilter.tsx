import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  selectedCategory: Category | '全部';
  onSelect: (cat: Category | '全部') => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelect }) => {
  const categories = ['全部', ...Object.values(Category)];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat as Category | '全部')}
          className={`
            px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${selectedCategory === cat 
              ? 'bg-gray-900 text-white shadow-lg scale-105' 
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;