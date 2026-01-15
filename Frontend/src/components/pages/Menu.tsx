function Menu(){
    return(
        <div className="w-full h-full bg-[#191528] text-[#f4f4f9]">
            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-6xl font-extrabold my-10">Our Menu</h1>
                <p className="text-2xl text-center font-extrabold px-4">
                    Discover our carefully curated selection of dishes, each crafted with passion and the finest ingredients.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-8 p-8 my-auto">
                
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition duration-500 group">
                    <img 
                        src="https://img.freepik.com/free-photo/chicken-bbq_1203-8932.jpg?t=st=1768473282~exp=1768476882~hmac=71d9d989125a0e8fccd295316e98838dc7dd76b06352bc9c08dcf956a532f0e4" 
                        alt="Chicken BBQ"
                        className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 font-extrabold bg-black/50 group-hover:bg-black/20 transition duration-500">
                        <h1 className="text-6xl text-center mt-20">Starters</h1>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition duration-500 group">
                    <img 
                        src="https://img.freepik.com/free-photo/freshly-baked-naan-bread-rustic-wood-bowl-generated-by-ai_188544-11765.jpg?t=st=1768473986~exp=1768477586~hmac=dffb4c77ea10411b426e9b9eadcec75d25b418f97b5799484620d64b80974206" 
                        alt="Naan Bread"
                        className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 font-extrabold bg-black/50 group-hover:bg-black/20 transition duration-500">
                        <h1 className="text-6xl text-center mt-20">Main Course</h1>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition duration-500 group">
                    <img 
                        src="https://media.istockphoto.com/id/515853026/photo/traditional-rasmalai-or-ras-malai-indian-dessert-bengali-sweet.jpg?s=612x612&w=0&k=20&c=LYftdDAkIa8lVyfmwt8iK-OPSQr2KCcJcYpPhbFtFBk=" 
                        alt="Rasmalai"
                        className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 font-extrabold bg-black/50 group-hover:bg-black/20 transition duration-500">
                        <h1 className="text-6xl text-center mt-20">Desserts</h1>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition duration-500 group">
                    <img 
                        src="https://img.freepik.com/free-photo/high-angle-mix-alcoholic-drinks_23-2148673763.jpg?t=st=1768473881~exp=1768477481~hmac=35981edbb513c5cc3af0a4bbf572baf4a22b005b3417976752e7031a581e87e6" 
                        alt="Beverages"
                        className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 font-extrabold bg-black/50 group-hover:bg-black/20 transition duration-500">
                        <h1 className="text-6xl text-center mt-20">Beverages</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Menu;
