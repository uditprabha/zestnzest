
import React from 'react';

const Disclaimer: React.FC = () => {
    return (
        <div className="mt-12 p-4 bg-rose-100/50 border-l-4 border-pink-300 text-gray-600 text-sm rounded-r-lg">
            <h4 className="font-semibold text-gray-700">Disclaimer</h4>
            <p className="mt-1">
                This website contains affiliate links, which means we may earn a commission if you click a link and make a purchase, at no extra cost to you. The product recommendations are based on a quiz and are for informational purposes only. They are not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
        </div>
    );
};

export default Disclaimer;
