import React from "react"

const styles = [
  { label: "Casual", image: "/image 11.svg" },
  { label: "Formal", image: "/image 12.svg" },
  { label: "Party", image: "/image 13.svg" },
  { label: "Gym", image: "/image 14.svg" },
]

export default function BrowseBy() {
  return (
    <div className="flex items-center justify-center min-h-content px-4">
      <div className="bg-stone-300 rounded-3xl p-4">
        <h2 className="font-black text-4xl md:text-6xl text-center py-6 uppercase leading-tight">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="flex flex-col gap-4">
          {styles.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-0 overflow-hidden flex flex-col mb-2 relative h-40"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover rounded-2xl"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-xl text-black drop-shadow-lg">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}