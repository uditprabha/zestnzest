
import React, { useState, useEffect } from 'react';
import { Product } from './types';
import { PRODUCTS, LOGO_URL } from './constants';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';

type View = 'home' | 'products' | 'quiz' | 'results';

const Header: React.FC<{ setView: (view: View) => void }> = ({ setView }) => (
    <header className="py-4 px-6 sm:px-12 flex justify-center items-center">
        <button onClick={() => setView('home')} className="transition-transform duration-300 hover:scale-105">
            <img src={LOGO_URL} alt="Zest & Zest Logo" className="h-20 w-auto" />
        </button>
    </header>
);

const Footer: React.FC = () => (
    <footer className="text-center py-6 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} zestnzest. All Rights Reserved.</p>
    </footer>
);

const App: React.FC = () => {
    const [view, setView] = useState<View>('home');
    const [recommendedProductId, setRecommendedProductId] = useState<string | null>(null);
    const [animationKey, setAnimationKey] = useState(0);

    const changeView = (newView: View) => {
        setAnimationKey(prev => prev + 1);
        setView(newView);
    };

    const handleQuizComplete = (productId: string) => {
        setRecommendedProductId(productId);
        changeView('results');
    };

    const resetQuiz = () => {
        setRecommendedProductId(null);
        changeView('quiz');
    };

    const renderView = () => {
        switch (view) {
            case 'products':
                return <ProductsPage setView={changeView} />;
            case 'quiz':
                return <QuizPage onQuizComplete={handleQuizComplete} />;
            case 'results':
                const product = PRODUCTS.find(p => p.id === recommendedProductId);
                if (product) {
                    return <ResultsPage product={product} setView={changeView} resetQuiz={resetQuiz} />;
                }
                // Fallback to home if product not found
                return <HomePage setView={changeView} />;
            case 'home':
            default:
                return <HomePage setView={changeView} />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header setView={changeView} />
            <main key={animationKey} className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
                {renderView()}
            </main>
            <Footer />
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default App;
