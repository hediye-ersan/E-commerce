import Button from "../components/ui/Button";
import useMediaQuery from "../hooks/useMediaQuery"; // Yeni hook eklendi
import { youMightAlsoLikeProducts, renderStars } from "../utils/productUtils"; // Ürünler ve renderStars taşındı

export default function YouMight() {
  const isMobile = useMediaQuery('(max-width: 1023px)'); // lg breakpoint

  const visibleProducts = isMobile ? youMightAlsoLikeProducts.slice(0, 2) : youMightAlsoLikeProducts;

  return (
    <div className="w-full flex justify-center">
    <div className="px-4 md:px-24 text-center max-w-[1500px] mx-auto">
      <h2 className="font-black text-4xl md:text-6xl py-4 md:py-8 uppercase">You might also like</h2>

       <div className="grid grid-cols-2 lg:grid-cols-5 justify-items-center gap-2">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow p-4 text-left"
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
    </div>
    </div>
  )
}
