import { useEffect, useState } from "react"

export default function TopBar() {
	const [showBar, setShowBar] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY > lastScrollY && currentScrollY > 50) {
				setShowBar(false)
			} else {
				setShowBar(true)
			}

			setLastScrollY(currentScrollY)
		}

		window.addEventListener("scroll", handleScroll)

		return () => window.removeEventListener("scroll", handleScroll)
	}, [lastScrollY])

	return (
		<div className="fixed top-0 w-full bg-[rgb(125,125,125)] p-4 h-16 flex items-center justify-between px-4 md:px-10 z-50" style={{ transform: showBar ? "translateY(0)" : "translateY(-100%)", transition: "transform 0.3s ease-in-out" }}>
			{/* Left: Logo */}
			<div className="flex-1">
				<p className="text-[#aa4b7a] font-bold text-2xl sm:text-3xl">𝔄𝔢𝔱𝔥𝔢𝔯𝔦𝔬𝔫</p>
			</div>

			{/* Center: Tabs / Nav */}
			<div className="hidden md:flex flex-1 justify-center gap-6 text-[#aa4b7a] text-sm">
				<a href="/home">Home</a>
				<a href="/features">Features</a>
				<a href="/pricing">Pricing</a>
			</div>

			{/* Right: Menu / Profile */}
			<div className="flex-1 flex justify-end gap-4 text-white text-sm">
				<a href="#" className="hidden md:block">Login</a>
				<button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white focus:outline-none">
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>

			{/* Mobile dropdown */}
			{menuOpen && (
				<div className="absolute top-16 left-0 w-full bg-[rgb(125,125,125)] flex flex-col items-center gap-4 py-4 text-[#aa4b7a] text-sm md:hidden">
					<a href="/home">Home</a>
					<a href="/features">Features</a>
					<a href="/pricing">Pricing</a>
					<a href="#" className="text-white">Login</a>
				</div>
			)}
		</div>
	)
}
