function About() {
  return (
    <div className="w-full h-screen bg-[#191528]">
        <div className="flex flex-row justify-between px-20 py-10 mx-10 h-full">
            <div className="w-full h-full flex items-center flex-col pt-20">
      <h1 className="text-6xl font-extrabold text-[#f4f4f9] text-left mx-20 mt-10">
        Our Story
      </h1>
      <p className="text-xl text-[#f4f4f9] text-left mx-4 mt-6">
        UndefinedTaste was created with a simple belief — great food
        doesn’t need a definition. It needs passion, creativity, and
        an experience that stays with you.<br/>

        Every dish we serve is thoughtfully crafted using fresh
        ingredients, bold flavors, and techniques inspired by both
        tradition and innovation.<br/>

        We believe dining is more than a meal — it’s a moment.
        From the ambiance to the plating, every detail is designed
        to create a refined yet welcoming experience.<br/>

        <p className="font-bold text-xl text-[#f4f4f9] mt-6">At UndefinedTaste, every visit is an invitation to explore
        flavors beyond expectations. Join us and discover where taste
        has no definition.</p>
      </p>
      <h2 className="text-xl font-bold text-[#f4f4f9] text-left mx-2 mt-6">★ Fresh ingredients • Signature recipes • Premium dining</h2>
    </div>
    <div className="w-full h-full flex justify-center items-center">
                    <img
                        src="https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1.jpg"
                        alt="Restaurant Home"
                        className="w-4/5 h-4/5 object-cover rounded-xl shadow-2xl shadow-black/50 mt-20 mx-auto"
                    />
                </div>
        </div>
    </div>
  );
}

export default About;
