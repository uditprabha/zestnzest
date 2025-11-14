
import React from 'react';
import { Product } from '../types';
import Disclaimer from './Disclaimer';

interface ResultsPageProps {
    product: Product;
    setView: (view: 'home' | 'products' | 'quiz' | 'results') => void;
    resetQuiz: () => void;
}

const ArrowRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);


const ResultsPage: React.FC<ResultsPageProps> = ({ product, resetQuiz }) => {
    return (
        <div className="max-w-4xl mx-auto py-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 sm:p-10 text-center">
                <span className="text-pink-500 font-semibold">Your Personalized Recommendation</span>
                <h1 className="text-4xl font-bold mt-2 mb-8">We've Found Your Perfect Match!</h1>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/3 flex-shrink-0">
                        <div className="bg-rose-100/50 rounded-lg p-6">
                            <img src={product.img} alt={product.name} className="max-w-full h-auto mx-auto" />
                        </div>
                    </div>
                    <div className="md:w-2/3 text-left">
                        <h2 className="text-3xl font-bold">{product.name}</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            {product.personalizedDesc || product.desc}
                        </p>
                        <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center justify-center w-full md:w-auto px-10 py-4 bg-pink-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            Visit Official Website
                           <ArrowRightIcon/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-8">
                <button
                    onClick={resetQuiz}
                    className="text-gray-600 font-semibold hover:text-pink-500 transition-colors duration-300"
                >
                    Or, take the quiz again
                </button>
            </div>

            <Disclaimer />
        </div>
    );
};

export default ResultsPage;
