
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Category } from '../types';
import ProductCard from './ProductCard';
import Disclaimer from './Disclaimer';

interface ProductsPageProps {
    setView: (view: 'home' | 'products' | 'quiz' | 'results') => void;
}

const ArrowLeftIcon: React.FC = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
);

const ProductsPage: React.FC<ProductsPageProps> = ({ setView }) => {
    const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
    const categories: ('All' | Category)[] = ['All', ...Object.values(Category)];

    const filteredProducts = activeCategory === 'All'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <div className="py-12">
             <button
                onClick={() => setView('home')}
                className="inline-flex items-center mb-8 text-pink-500 font-semibold hover:text-pink-700 transition-colors duration-300"
            >
               <ArrowLeftIcon />
                Back to Home
            </button>
            <h1 className="text-4xl font-bold text-center mb-4">Our Curated Collection</h1>
            <p className="text-center text-lg text-gray-600 mb-10">Find the perfect solution to support your wellness goals.</p>

            <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
                            activeCategory === category
                                ? 'bg-pink-500 text-white shadow-md'
                                : 'bg-white text-gray-700 hover:bg-rose-100'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <Disclaimer />
        </div>
    );
};

export default ProductsPage;
