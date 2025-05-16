import { useEffect, useState } from "react"

export default function TopBar() {
	const [showBar, setShowBar] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY > lastScrollY && currentScrollY > 50) {
				// scrolling down
				setShowBar(false)
			} else {
				// scrolling up
				setShowBar(true)
			}

			setLastScrollY(currentScrollY)
		}

		window.addEventListener("scroll", handleScroll)

		return () => window.removeEventListener("scroll", handleScroll)
	}, [lastScrollY])

	return (
		<div className="fixed top-0 w-screen bg-[rgb(125, 125, 125)] p-4 h-16 flex items-center justify-between pl-10" style={{transform: showBar ? "translateY(0)" : "translateY(-100%)", transition: "transform 0.3s ease-in-out"}}>
            {/* Left: Logo */}
            <div className="flex-1">
                <p className="text-[#aa4b7a] font-bold text-3xl">𝔄𝔢𝔱𝔥𝔢𝔯𝔦𝔬𝔫</p>
            </div>

            {/* Center: Tabs / Nav */}
            <div className="flex-1 flex justify-center gap-6 text-[#aa4b7a] text-sm">
                <a href="/home">Home</a>
                <a href="/features">Features</a>
                <a href="/pricing">Pricing</a>
            </div>

            {/* Right: Menu / Profile */}
            <div className="flex-1 flex justify-end gap-4 text-white text-sm pr-10">
                <a href="#">Login</a>
                <a href="#">Menu</a>
            </div>
        </div>
	)
}

