import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <div className="h-[33rem] relative p-16 flex bg-gradient-to-b from-[#EC3339] to-[#BB1117] w-full">
      <motion.div
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
        <img src="/assets/quoteSection/quoteIcon.svg" />

        <div className="relative top-[-6rem] flex flex-col gap-3">
          <p className="font-[Montserrat] font-bold text-xl 2xl:text-5xl xl:text-3xl text-white">
            OUR MISSION IS TO ENLIGHTEN, ENTERTAIN
          </p>
          <p className="font-[Montserrat] font-bold text-xl 2xl:text-5xl xl:text-3xl text-white">
            AND EMPOWER CURRENT AND FUTURE
          </p>
          <p className="font-[Montserrat] font-bold text-xl 2xl:text-5xl xl:text-3xl text-white">
            LEADERS AROUND THE WORLD.
          </p>
        </div>
      </motion.div>

      <img
        className="relative bottom-[-2.05rem] sm:bottom-[31rem] w-[9rem] h-[18rem] sm:w-[27rem] sm:h-[40rem] ml-auto transform translate-y-1/2"
        src="/assets/quoteSection/randomPerson.png"
        alt="Person"
      />
    </div>
  );
};

export default QuoteSection;
