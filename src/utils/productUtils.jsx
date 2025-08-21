///utils/productUtils.js
import { Star } from "lucide-react";

export const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
  }

  if (halfStar) {
    stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />);
  }

  return stars;
};

export const newArrivalsProducts = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    image: "https://picsum.photos/200/250?random=101",
    oldPrice: null,
    discount: null,
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    price: 240,
    rating: 3.5,
    image: "https://picsum.photos/200/250?random=102",
    oldPrice: 260,
    discount: "-20%",
  },
  {
    id: 3,
    title: "Oversized Hoodie",
    price: 180,
    rating: 4,
    image: "https://picsum.photos/200/250?random=103",
    oldPrice: null,
    discount: null,
  },
  {
    id: 4,
    title: "Leather Jacket",
    price: 350,
    rating: 4.8,
    image: "https://picsum.photos/200/250?random=104",
    oldPrice: 400,
    discount: "-12%",
  },
  {
    id: 5,
    title: "Casual Shorts",
    price: 90,
    rating: 4.2,
    image: "https://picsum.photos/200/250?random=105",
    oldPrice: null,
    discount: null,
  },
];

export const topSellingProducts = [
  {
    id: 6,
    title: "VERTICAL STRIPED SHIRT",
    price: 212,
    rating: 4.5,
    image: "https://picsum.photos/200/250?random=106",
    oldPrice: 232,
    discount: "-20%",
  },
  {
    id: 7,
    title: "COURAGE GRAPHIC T-SHIRT",
    price: 145,
    rating: 3.5,
    image: "https://picsum.photos/200/250?random=107",
    oldPrice: null,
    discount: null,
  },
  {
    id: 8,
    title: "LOOSE FIT BERMUDA SHORTS",
    price: 80,
    rating: 4,
    image: "https://picsum.photos/200/250?random=108",
    oldPrice: null,
    discount: null,
  },
  {
    id: 9,
    title: "FADED SKINNY JEANS",
    price: 210,
    rating: 3.0,
    image: "https://picsum.photos/200/250?random=109",
    oldPrice: 400,
    discount: "-12%",
  },
  {
    id: 10,
    title: "Casual Pants",
    price: 210,
    rating: 4.2,
    image: "https://picsum.photos/200/250?random=110",
    oldPrice: null,
    discount: null,
  },
];

export const youMightAlsoLikeProducts = [
  {
    id: 11,
    title: "VERTICAL STRIPED SHIRT",
    price: 212,
    rating: 4.5,
    image: "https://picsum.photos/200/250?random=111",
    oldPrice: 232,
    discount: "-20%",
  },
  {
    id: 12,
    title: "COURAGE GRAPHIC T-SHIRT",
    price: 145,
    rating: 3.5,
    image: "https://picsum.photos/200/250?random=112",
    oldPrice: null,
    discount: null,
  },
  {
    id: 13,
    title: "LOOSE FIT BERMUDA SHORTS",
    price: 80,
    rating: 4,
    image: "https://picsum.photos/200/250?random=113",
    oldPrice: null,
    discount: null,
  },
  {
    id: 14,
    title: "FADED SKINNY JEANS",
    price: 210,
    rating: 3.0,
    image: "https://picsum.photos/200/250?random=114",
    oldPrice: 400,
    discount: "-12%",
  },
  {
    id: 15,
    title: "Casual Pants",
    price: 210,
    rating: 4.2,
    image: "https://picsum.photos/200/250?random=115",
    oldPrice: null,
    discount: null,
  },
];
