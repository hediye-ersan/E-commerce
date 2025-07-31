import React, { useState, useEffect } from "react"; // Added useEffect for window resize listener
import { Star, SlidersHorizontal, MoreHorizontal } from "lucide-react";

const initialReviews = [
    {
        name: "Samantha D.",
        date: "August 14, 2023",
        text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        rating: 4.5,
    },
    {
        name: "Alex M.",
        date: "August 15, 2023",
        text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        rating: 4,
    },
    {
        name: "Ethan R.",
        date: "August 16, 2023",
        text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        rating: 4.5,
    },
    {
        name: "Olivia P.",
        date: "August 17, 2023",
        text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        rating: 5,
    },
    {
        name: "Liam K.",
        date: "August 18, 2023",
        text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        rating: 4,
    },
    {
        name: "Ava H.",
        date: "August 19, 2023",
        text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        rating: 5,
    },
    {
        name: "Noah S.",
        date: "August 20, 2023",
        text: "Great quality and fit. I've received many compliments on this shirt!",
        rating: 4.5,
    },
    {
        name: "Sophia L.",
        date: "August 21, 2023",
        text: "Comfortable and stylish. Perfect for casual wear.",
        rating: 4,
    },
];

const VerifiedIcon = () => (
    <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500">
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </span>
);

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex text-yellow-500 mb-2">
            {[...Array(fullStars)].map((_, i) => (
                <Star key={`full-${i}`} size={16} fill="currentColor" />
            ))}
            {halfStar && <Star key="half" size={16} fill="currentColor" className="text-yellow-500 half-star" />}
            {[...Array(emptyStars)].map((_, i) => (
                <Star key={`empty-${i}`} size={16} stroke="currentColor" fill="none" />
            ))}
        </div>
    );
};

const ReviewList = () => {
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({ name: "", rating: "", text: "" });
    const [reviews, setReviews] = useState(initialReviews);
    const [showAllReviews, setShowAllReviews] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // State to track mobile view

    // Effect to update isMobile state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            name: form.name,
            rating: parseFloat(form.rating),
            text: form.text,
            date: new Date().toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' }),
        };
        setReviews([newReview, ...reviews]);
        setSubmissionMessage(`Thank you for your review, ${form.name}!`);
        setForm({ name: "", rating: "", text: "" });
        setShowForm(false);
        setTimeout(() => setSubmissionMessage(""), 3000);
    };

    // Determine which reviews to display based on screen size and showAllReviews state
    const getReviewsToDisplay = () => {
        if (showAllReviews) {
            return reviews;
        } else {
            if (isMobile) {
                return reviews.slice(0, 3); // Show first 3 reviews on mobile
            } else {
                return reviews.slice(0, 6); // Show first 6 reviews on desktop
            }
        }
    };

    const displayedReviews = getReviewsToDisplay();

    // Determine if the "Load More Reviews" button should be shown
    const shouldShowLoadMore = !showAllReviews && reviews.length > displayedReviews.length;

    return (
        <div className="container mx-auto px-4 py-8 font-inter">
            <div className="mb-6 flex justify-between items-center">
                <h2 className="text-lg md:text-xl font-bold">
                    All Reviews <span className="text-gray-500 font-normal">({reviews.length})</span>
                </h2>
                <div className="flex items-center gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
                        <SlidersHorizontal className="text-gray-600" />
                    </button>
                    <button
                        onClick={() => {
                            setShowForm(!showForm);
                            setSubmissionMessage("");
                        }}
                        className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
                    >
                        {showForm ? "Cancel" : "Write a Review"}
                    </button>
                </div>
            </div>

            {submissionMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md relative mb-4" role="alert">
                    <span className="block sm:inline">{submissionMessage}</span>
                </div>
            )}

            {showForm && (
                <form onSubmit={handleSubmit} className="border border-gray-300 rounded-2xl p-5 mb-6 space-y-4 shadow-sm">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">Rating (1-5)</label>
                        <input
                            id="rating"
                            type="number"
                            min="1"
                            max="5"
                            step="0.5"
                            value={form.rating}
                            onChange={(e) => setForm({ ...form, rating: e.target.value })}
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700 mb-1">Review</label>
                        <textarea
                            id="reviewText"
                            value={form.text}
                            onChange={(e) => setForm({ ...form, text: e.target.value })}
                            rows="4"
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-y"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
                    >
                        Submit Review
                    </button>
                </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-4 md:py-8">
                {displayedReviews.map((review, index) => (
                    <div key={index} className="rounded-2xl border border-gray-300 p-5 shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center">
                                <StarRating rating={review.rating} />
                                <MoreHorizontal size={20} className="text-gray-400" />
                            </div>
                            <div className="flex items-center mb-1">
                                <span className="font-semibold text-gray-900">{review.name}</span>
                                <VerifiedIcon />
                            </div>
                            <p className="text-gray-700 mb-2 text-sm leading-relaxed">{review.text}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Posted on {review.date}</p>
                    </div>
                ))}
            </div>

            {shouldShowLoadMore && (
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={() => setShowAllReviews(true)}
                        className="border px-6 py-2 rounded-full text-black border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                    >
                        Load More Reviews
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReviewList;
