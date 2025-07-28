import React, { useState } from "react"

const reviews = [
  {
    name: "Sarah M.",
    text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
  },
  {
    name: "John D.",
    text: `"Great shopping experience! Fast shipping and the clothes fit perfectly. Highly recommend Shop.co!"`,
  },
  {
    name: "Emily R.",
    text: `"Amazing styles and top-notch quality. I always get compliments when I wear Shop.co outfits!"`,
  },
  {
    name: "Alex T.",
    text: `"Customer service is fantastic and the selection is unbeatable. Will shop again!"`,
  },
  {
    name: "Linda K.",
    text: `"Every order arrives quickly and the packaging is beautiful. Love this store!"`,
  },
]

function StarIcons() {
  return (
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.26 15.82,19.02 10,15.27 4.18,19.02 6,12.26 0.49,7.64 7.41,7.36" />
        </svg>
      ))}
    </div>
  )
}

function VerifiedIcon() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 ml-2 align-middle">
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  )
}

function HappyCustomers(){
     const [index, setIndex] = useState(0)
      const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024
      const visibleCount = isDesktop ? 3 : 1
    
      // Responsive: useEffect ile resize'da tekrar render için state kullanılabilir
      const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)
      React.useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
      }, [])
      const isNowDesktop = windowWidth >= 1024
      const showCount = isNowDesktop ? 3 : 1
    
      const maxIndex = reviews.length - showCount
      const currentIndex = Math.min(index, maxIndex < 0 ? 0 : maxIndex)
      const visibleReviews = reviews.slice(currentIndex, currentIndex + showCount)
    
      const handlePrev = () => setIndex((i) => Math.max(i - 1, 0))
      const handleNext = () => setIndex((i) => Math.min(i + 1, maxIndex))
    
}
export default HappyCustomers;