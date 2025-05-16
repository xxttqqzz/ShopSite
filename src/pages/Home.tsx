import TopBar from '../components/topbar.tsx'
import Card from '../components/card.tsx'
import '../App.css';
import Banner from '../components/banner.tsx';

export default function Home() {
	return (
		<div className="gradient-background w-full min-h-screen pt-16 relative">
			<TopBar />
			<div className="relative w-full h-[70vh]">
                <Banner />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center z-10 px-4">
                    <p className="text-[#aa4b7a] font-bold text-6xl md:text-8xl lg:text-9xl">𝔄𝔢𝔱𝔥𝔢𝔯𝔦𝔬𝔫</p>
                    <p className="text-[#aa4b7a] font-bold text-base md:text-lg max-w-3xl">
                        Explore our exclusive range of products designed to elevate your everyday life.<br />
                        ---------------<br />
                        Whether you're upgrading your workspace or finding the perfect gift, our store brings you curated picks that combine quality, style, and value.
                    </p>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-4'>
                        <button className="bg-white w-48 md:w-60 h-12 text-[#aa4b7a] font-bold py-2 px-4 rounded-full shadow">Products</button>
                        <button className="bg-white w-48 md:w-60 h-12 text-[#aa4b7a] font-bold py-2 px-4 rounded-full shadow">Contact</button>
                    </div>
                </div>
            </div>


			<div className="flex flex-col items-center p-10 w-full min-h-screen mt-[50vh]">
                <div className="flex flex-col items-center mb-8 top-0">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#aa4b7a]">Products</h1>
                    <div className="w-40 h-1 bg-[#aa4b6b] mt-2 rounded-full shadow"></div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full flex-wrap">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

		</div>
	)
}
