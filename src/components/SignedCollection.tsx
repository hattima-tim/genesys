import { motion } from "framer-motion";

const SignedCollection = () => {
  return (
    <div className="flex flex-wrap bg-[#111111] p-12 md:p-24 h-auto">
      <motion.div
        className="flex flex-col gap-8 md:gap-12 w-full md:w-1/2 mb-8 md:mb-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.2,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        <p className="font-[Montserrat] font-medium text-3xl xl:text-5xl text-white">
          Patrick Bet-David's
        </p>

        <div className="flex flex-col">
          <span className="font-[Montserrat] font-bold text-4xl sm:text-4xl xl:text-7xl bg-gradient-to-b from-[#EF5256] to-[#DE2A2F] bg-clip-text text-transparent">
            SIGNED
          </span>

          <span className="mt-2 font-[Montserrat] font-bold text-4xl sm:text-4xl xl:text-7xl bg-gradient-to-b from-[#EF5256] to-[#DE2A2F] bg-clip-text text-transparent">
            COLLECTION
          </span>
        </div>

        <button className="flex gap-3 items-center bg-white w-fit h-12 rounded-xl px-6 md:px-8 py-4 font-[Inter] text-base font-medium hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          Shop Now
          <img src="src/assets/signedCollection/arrowRight.svg" alt="arrow" />
        </button>

        <img
          className="w-full max-w-3xl"
          src="src/assets/signedCollection/pat-signature-white.png"
          alt="Signature"
        />
      </motion.div>

      <motion.div
        className="flex justify-start gap-4 items-center w-full lg:w-2/5 xl:w-1/2"
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
        <img
          className="w-2/3 md:w-[56%] xl:w-1/2"
          src="src/assets/signedCollection/red-book.png"
          alt="Red Book"
        />

        <img
          className="w-2/5 md:w-[35%] xl:w-1/3 max-h-[300px] md:max-h-[454px]"
          src="src/assets/signedCollection/white-book.png"
          alt="White Book"
        />
      </motion.div>
    </div>
  );
};

export default SignedCollection;
