import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ onRatingChange }) => {
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="flex">
            {[1].map((index) => (
                <span
                    key={index}
                    onClick={() => onRatingChange(index)}
                    onMouseEnter={() => setHoverRating(index)}
                    onMouseLeave={() => setHoverRating(0)}
                >
                    <FaStar
                        className={
                            (index <= (hoverRating) ? 'text-yellow-500' : 'text-gray-300') +
                            ' cursor-pointer h-6 w-6'
                        }
                    />
                </span>
            ))}
        </div>
    );
};

export default Rating;
