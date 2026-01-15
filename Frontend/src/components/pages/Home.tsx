function Home() {
    return (
        <div className="w-full h-screen bg-[#191528]">
            <div className="flex flex-row justify-between px-20 py-10 mx-10 h-full">
                <div className="w-full h-full flex flex-col justify-center items-start text-[#f4f4f9]">
                    <h1 className="text-6xl font-extrabold mx-4 text-left mb-4">
                        Where Taste Has No Definition
                    </h1>
                    <p className="text-2xl mx-4 text-left">
                        A modern dining experience where bold flavors,
                        carefully crafted dishes, and a refined ambience
                        come together to create unforgettable moments.
                    </p>
                    <div className="flex items-center flex-row">
                        <button className="mt-6 px-6 py-3 bg-[#00253e]/90 rounded-full backdrop-blur-md text-lg font-semibold hover:bg-[#004060]/90 transition">
                        Explore Our Menu
                        </button>
                        <button className="mt-6 ml-4 px-6 py-3 border-2 border-[#f4f4f9] rounded-full text-lg font-semibold hover:bg-[#f4f4f9] hover:text-[#191528] transition">
                        Make a Reservation
                        </button>
                    </div>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <img
                        src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?t=st=1768403986~exp=1768407586~hmac=dd820226b695eceb01e1666594f6efe707ab311c7e1295c2fa5581a0f111c8ce"
                        alt="Restaurant Home"
                        className="w-4/5 h-4/5 object-cover rounded-xl shadow-2xl shadow-black/50 mt-20 mx-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
