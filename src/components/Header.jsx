import Button2 from "./ui/Button2";

function Header() {

    return (
        <>
            <div className='p-4 md:p-24 md:flex md:justify-between '>
                <div>
                    <div>
                        <h1 className='font-black text-4xl md:text-6xl py-4 md:py-8'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className='pb-4 md:pb-8 md:text-xl'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <Button2>Shop Now</Button2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 py-4 md:py-8">
                        {/* 1. Öğe */}
                        <div>
                            <h3 className="font-bold text-2xl md:text-4xl">200+</h3>
                            <p className="text-gray-600">International Brands</p>
                        </div>

                        {/* 2. Öğe */}
                        <div>
                            <h3 className="font-bold text-2xl md:text-4xl">2,000+</h3>
                            <p className="text-gray-600">High-Quality Products</p>
                        </div>

                        {/* 3. Öğe: Mobilde tam genişlikte, desktop'ta normal */}
                        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
                            <h3 className="font-bold text-2xl md:text-4xl">30,000+</h3>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/Rectangle 2.svg" alt="Rectangle" className="w-full h-full md:min-w-3xl" />
                </div>
            </div>
            <div className="bg-black py-8">

                {/* Desktop görünüm */}
                <div className="flex flex-wrap justify-center items-center gap-8 py-4 md:px-24 md:justify-between">
                    <img src="/versace-logo.svg" alt="Logo 1" />
                    <img src="/zara-logo.svg" alt="Logo 2" />
                    <img src="/gucci-logo.svg" alt="Logo 3" />
                    <img src="/prada-logo.svg" alt="Logo 4" />
                    <img src="/calvin-logo.svg" alt="Logo 5" />
                </div>
            </div>
        </>
    )

}
export default Header;