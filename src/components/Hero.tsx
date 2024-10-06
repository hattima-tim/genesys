import { useEffect, useRef } from "react";

const products = [
  {
    index: 0,
    imageUrl: "src/assets/heroImages/person1.png",
    description: "Army Green Active Short Sleeve",
    price: "34.95",
  },
  {
    index: 1,
    imageUrl: "src/assets/heroImages/person2.png",
    description: "Army Green Active Short Sleeve",
    price: "34.95",
  },
  {
    index: 2,
    imageUrl: "src/assets/heroImages/person3.png",
    description: "Army Green Active Short Sleeve",
    price: "34.95",
  },
  {
    index: 3,
    imageUrl: "src/assets/heroImages/person4.png",
    description: "Army Green Active Short Sleeve",
    price: "34.95",
  },
];

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;

      scrollContainer.style.setProperty("--scroll-width", `${scrollWidth}px`);
    }
  }, []);

  return (
    <div className="h-screen bg-[#EA2127]">
      <div className="flex justify-between items-start p-4 md:p-8">
        <div className="flex gap-2 items-center">
          <img src="src/assets/Valuetainment.svg" className="w-24 md:w-36" />
          <h1 className="font-[Montserrat] text-white text-4xl md:text-[80px] lg:text-[112px] leading-[1.2] font-extrabold">
            VTMERCH
          </h1>
        </div>

        <img src="src/assets/HamburgerIcon.svg" className="w-8 md:w-10" />
      </div>

      <div className="relative mt-8 md:mt-52">
        <span className="absolute top-32 p-4 md:p-16 md:top-[-9rem] lg:top-[-12rem] lg:text-[80px] font-act-of-rejection text-[#FFFFFF66] font-normal text-[35px] md:text-[72px] 2xl:text-[130px] leading-tight lg:leading-[168px]">
          future looks bright!
        </span>

        <div className="scroll-wrapper top-[11rem] md:top-[-1rem] lg:top-[-2rem]">
          <div ref={scrollRef} className="scroll-container animate-scroll">
            {[...Array(4)].map((_, parentIndex) => (
              <>
                {products.map(({ imageUrl, price, description }, index) => (
                  <div
                    key={parentIndex + index}
                    className="flex flex-col gap-4 min-w-[200px] md:min-w-[250px] lg:min-w-[357px]"
                  >
                    <img
                      className="w-full h-[200px] md:h-[300px] lg:h-[397px] object-cover rounded-xl"
                      src={imageUrl}
                    />
                    <p className="font-[Inter] font-medium text-sm md:text-base text-[#FFFFFFCC]">
                      {description}
                    </p>
                    <div className="flex gap-3">
                      <span className="font-[Inter] font-medium text-base md:text-xl text-[#FFFFFFCC]">
                        ${price}
                      </span>
                      <span className="line-through font-[Inter] font-medium text-base md:text-xl text-[#FFFFFFCC]">
                        ${price}
                      </span>
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
