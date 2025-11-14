
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ArrowRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="p-6 bg-rose-100/50 flex justify-center items-center h-56">
                <img src={product.img} alt={product.name} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                <p className="mt-2 text-gray-600 flex-grow">{product.desc}</p>
                <div className="mt-6">
                     <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition-all duration-300"
                    >
                        Learn More
                        <ArrowRightIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
