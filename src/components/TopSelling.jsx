import { Star } from "lucide-react"
import { useEffect, useState } from "react"
import Button from "../components/ui/Button"

const products = [
  {
    id: 1,
    title: "VERTICAL STRIPED SHIRT",
    price: 212,
    rating: 4.5,
    image: "https://picsum.photos/200/250",
    oldPrice: 232,
    discount: "-20%",
  },
  {
    id: 2,
    title: "COURAGE GRAPHIC T-SHIRT",
    price: 145,
    rating: 3.5,
    image: "https://picsum.photos/200/250",
    oldPrice: null,
    discount: null,
  },
  {
    id: 3,
    title: "LOOSE FIT BERMUDA SHORTS",
    price: 80,
    rating: 4,
    image: "https://picsum.photos/200/250",
    oldPrice: null,
    discount: null,
  },
  {
    id: 4,
    title: "FADED SKINNY JEANS",
    price:210,
    rating: 3.0,
    image: "https://picsum.photos/200/250",
    oldPrice: 400,
    discount: "-12%",
  },
  {
    id: 5,
    title: "Casual Pants",
    price: 210,
    rating: 4.2,
    image: "https://picsum.photos/200/250",
    oldPrice: null,
    discount: null,
  },
]

const renderStars = (rating) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  const stars = []

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)
  }

  if (halfStar) {
    stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />)
  }

  return stars
}

export default function NewArrivals() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const visibleProducts = isMobile ? products.slice(0, 2) : products

  return (
    <div className="px-4 md:px-24 text-center">
      <h2 className="font-black text-4xl md:text-6xl py-4 md:py-8">TOP SELLING</h2>

      <div className="grid grid-cols-2 lg:grid-cols-5 justify-items-center">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow p-4 w-[150px]  md:w-[250px] text-left"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-xl mb-4 object-cover"
              width={250}
              height={300}
            />
            <h3 className="font-semibold text-sm sm:text-base uppercase">{product.title}</h3>
            <div className="flex items-center mt-1 gap-1">
              {renderStars(product.rating)}
              <span className="text-sm text-gray-500 ml-1">{product.rating}/5</span>
            </div>
            <div className="mt-2">
              <span className="text-lg font-bold">${product.price}</span>
              {product.oldPrice && (
                <>
                  <span className="text-gray-400 line-through ml-2">${product.oldPrice}</span>
                  <span className="text-red-500 text-sm ml-2">{product.discount}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="py-6 md:py-10">
        <Button className="w-full md:w-xl md:py-4">View All</Button>
      </div>
    </div>
  )
}
