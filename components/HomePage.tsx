
import React from 'react';

interface HomePageProps {
    setView: (view: 'home' | 'products' | 'quiz' | 'results') => void;
}

const HomePage: React.FC<HomePageProps> = ({ setView }) => {
    return (
        <div className="text-center py-16 md:py-24 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tight">
                Your Journey to <span className="text-pink-500">Wellness</span> Starts Here.
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600">
                Discover personalized health solutions tailored for you. Take our quick quiz to find your perfect match or browse our curated collection of top-rated products.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                    onClick={() => setView('quiz')}
                    className="px-8 py-4 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    Take the Free Health Quiz
                </button>
                <button
                    onClick={() => setView('products')}
                    className="px-8 py-4 bg-white text-pink-500 font-semibold rounded-full shadow-lg border border-pink-200 hover:bg-rose-100 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    Browse All Products
                </button>
            </div>
        </div>
    );
};

export default HomePage;
