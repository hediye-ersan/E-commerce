import React from "react"

const styles = [
  { label: "Casual", image: "/image 11.svg" },
  { label: "Formal", image: "/image 12.svg" },
  { label: "Party", image: "/image 13.svg" },
  { label: "Gym", image: "/image 14.svg" },
]

export default function BrowseBy() {
  return (
    <div className="flex items-center justify-center min-h-content px-2 md:px-10 py-10 md:px-24">
      <div className="bg-stone-300 rounded-3xl p-4 md:p-10 w-full max-w-full">
        <h2 className="font-black text-4xl md:text-6xl text-center py-6 uppercase leading-tight">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-6">
          {styles.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl overflow-hidden mb-2 relative h-40 md:h-64"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-center object-cover rounded-2xl absolute top-0 left-0"
                style={{ minHeight: "100%", minWidth: "100%" }}
              />
              <span className="absolute left-6 top-6 font-semibold text-xl md:text-2xl text-black drop-shadow-lg z-10">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}