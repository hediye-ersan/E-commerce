import NavBar from "../components/Navbar";
import ProductDetailCard from "../components/ProductDetailCard";
import ReviewList from "../components/ReviewList";
import { useState } from "react";
import YouMight from "../components/YouMight";
import Footer from "../components/Footer";

function ProductDetailPage() {
    const [activeTab, setActiveTab] = useState("details");
  return (
    <>
    <NavBar/>
    <ProductDetailCard />
     <div className="mx-auto px-4 py-4 md:px-24">

        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "details"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Product Details
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "faqs"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("faqs")}
          >
            FAQs
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "reviews"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "details" && (
          <div>
            <p className="text-gray-700">
              This is a stylish black striped T-shirt made with 100% cotton.
              Comfortable, breathable, and perfect for summer.
            </p>
          </div>
        )}

        {activeTab === "faqs" && (
          <div>
            <h3 className="font-semibold mb-2">Frequently Asked Questions</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Is this shirt true to size? – Yes, it fits as expected.</li>
              <li>Can I wash it in a machine? – Yes, it is machine washable.</li>
            </ul>
          </div>
        )}

        {activeTab === "reviews" && <ReviewList />}
      </div>
      <YouMight />
      <Footer />
    </>
  );
};
export default ProductDetailPage;