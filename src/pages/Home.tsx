import TopBar from '../components/topbar.tsx'
import Card from '../components/card.tsx'
import '../App.css';
import Banner from '../components/banner.tsx';

export default function Home() {
  return (
    <div className="gradient-background w-screen min-h-screen pt-16">
      <TopBar />
      <Banner />
      <div className='flex justify-center items-center w-screen h-[60%] absolute flex-col gap-25 top-16'>
            <p className="text-[#aa4b7a] font-bold text-9xl">𝔄𝔢𝔱𝔥𝔢𝔯𝔦𝔬𝔫</p>
            <p className="text-[#aa4b7a] text-center font-bold text-s">Explore our exclusive range of products designed to <br></br>elevate your everyday life. <br></br>---------------<br></br>Whether you're upgrading your workspace or finding the perfect gift, <br></br>our store brings you curated picks <br></br>that combine quality, style, and value.</p>
        </div>
        <div className='flex justify-center items-center w-screen h-[30%] absolute top-[50%] gap-10'>
            <button className="bg-white w-60 h-12 text-[#aa4b7a] font-bold py-2 px-4 rounded-full shadow">Products</button>
            <button className="bg-white w-60 h-12 text-[#aa4b7a] font-bold py-2 px-4 rounded-full shadow">Contact</button>
        </div>
        <div className="flex justify-center p-10 w-screen h-screen items-center flex-col">
            <div className="flex h-20 w-full items-center flex-col">
                <h1 className="text-4xl font-bold text-[#aa4b7a]">Products</h1>
                <div className="w-80 h-1 bg-[#aa4b6b] mt-2 rounded-full shadow"></div>
            </div>
            <div className="flex justify-center gap-20 w-screen h-[50vh] items-center flex-row">
                <div className="flex h-100 justify-center">
                    <Card />
                </div>
                <div className="flex h-100 justify-center">
                    <Card />
                </div>
                <div className="flex h-100 justify-center">
                    <Card />
                </div>
            </div>
        </div>
      </div>
  )
}
