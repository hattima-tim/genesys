import { motion } from "framer-motion";

const ProductShowCase = () => {
  return (
    <div className="h-auto bg-[#F6F5F5] p-8 md:p-16">
      <motion.h3
        className="font-[Montserrat] font-semibold text-4xl md:text-7xl uppercase w-full md:w-[70%]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.2,
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      >
        Buy 1 get 1 Free on{" "}
        <span className="text-shadow-outline text-white">
          best selling products
        </span>
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.4,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-white p-3 rounded-xl transition-shadow duration-300 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]"
          >
            <img
              className="max-w-full rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src={`src/assets/productImages/product${index + 1}.jpeg`}
            />
            <p className="font-[Inter] font-semibold text-base text-[#060606]">
              Army Green Active Short Sleeve
            </p>
            <div className="flex gap-3">
              <span className="font-[Inter] font-medium text-xl text-[#060606]">
                $ 34.95
              </span>
              <span className="font-[Inter] font-medium text-xl text-[#9B9B9B] line-through">
                $ 34.95
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductShowCase;
