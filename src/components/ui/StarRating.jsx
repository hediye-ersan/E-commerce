import React from "react";
import { Star } from "lucide-react";

const StarRating = ({ rating, size = 16, className = "" }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className={`flex text-yellow-500 ${className}`}>
            {[...Array(fullStars)].map((_, i) => (
                <Star key={`full-${i}`} size={size} fill="currentColor" />
            ))}
            {halfStar && <Star key="half" size={size} fill="currentColor" className="text-yellow-500 half-star" />}
            {[...Array(emptyStars)].map((_, i) => (
                <Star key={`empty-${i}`} size={size} stroke="currentColor" fill="none" />
            ))}
        </div>
    );
};

export default StarRating;
