import { Twitter, Facebook, Instagram, Github } from 'lucide-react';
import { useState } from 'react';

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Sayfanın yenilenmesini engelle

        // Basit email doğrulama
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Lütfen geçerli bir email adresi girin.');
            return;
        }

        // Statik işlem: Email konsola yazdırılır
        console.log('Subscribed email:', email);
        alert(`Thank you for subscribing with ${email}!`);

        // Email inputunu temizle
        setEmail('');
    };

    return (
        <footer className="p-4 md:p-8">
            {/* Üst Banner */}
            <div className="bg-black rounded-2xl mb-8 md:flex md:items-center md:justify-between p-6 md:p-12">
                <h1 className="text-white font-bold text-4xl p-6">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 pt-0 md:p-0 md:w-2xl">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="📮 Enter your email address"
                        className="w-full px-6 py-2 text-center bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
                    >
                        Subscribe to Newsletter
                    </button>
                </form>
            </div>
            <div className='md:flex md:justify-between md:pb-6'>
                {/* Ana İçerik */}
                <div className="flex flex-col gap-6 ">
                    {/* Sol - Logo ve Açıklama */}
                    <div className="max-w-md">
                        <h2 className="text-black font-black text-2xl pt-6 pb-2">SHOP.CO</h2>
                        <p className="text-gray-600">
                            We have clothes that suits your style and which you’re proud to wear. From women to men.
                        </p>
                    </div>

                    {/* Orta - Sosyal Medya */}
                    <div className="flex gap-4 items-start">
                        <div className="bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-100 cursor-pointer">
                            <Twitter className="text-blue-500 w-6 h-6" />
                        </div>
                        <div className="bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-100 cursor-pointer">
                            <Facebook className="text-blue-700 w-6 h-6" />
                        </div>
                        <div className="bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-100 cursor-pointer">
                            <Instagram className="text-pink-600 w-6 h-6" />
                        </div>
                        <div className="bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-100 cursor-pointer">
                            <Github className="text-gray-800 w-6 h-6" />
                        </div>
                    </div>
                </div>

                {/* Alt - Link Grupları */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 py-6 md:gap-24 md:justify-around">
                    <div>
                        <h4 className="text-lg font-bold mb-2">COMPANY</h4>
                        <ul className="text-gray-500">
                            <li>About</li>
                            <li>Feature</li>
                            <li>Works</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">HELP</h4>
                        <ul className="text-gray-500 ">
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">FAQ</h4>
                        <ul className="text-gray-500 ">
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Payment</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">RESOURCES</h4>
                        <ul className="text-gray-500 ">
                            <li>Free eBook</li>
                            <li>Development Tutorial</li>
                            <li>How to - Blog</li>
                            <li>Youtube Playlist</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='md:flex md:justify-between md:items-center'>
                <p className='text-gray-500 text-center py-4 border-t-2 border-gray-500'>Shop.co © 2000-2023, All Rights Reserved</p>
                <img src="/payy.svg" alt="Payy Logo" className="w-full h-full px-12 md:w-1/4 md:px-4 md:py-4" />
            </div>
        </footer>

    )

}
export default Footer;