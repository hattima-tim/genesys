const getFooterSections = () => {
  const customerServices = [
    { title: "About Us", url: "" },
    { title: "Search", url: "" },
    { title: "Privacy Policy", url: "" },
    { title: "Contact Us", url: "" },
    { title: "Terms Of Service", url: "" },
    { title: "Refund Policy", url: "" },
    { title: "Track Order", url: "" },
  ];

  const products = [
    { title: "Featured Products", url: "" },
    { title: "Bestseller", url: "" },
    { title: "Latest Product", url: "" },
    { title: "All Collections", url: "" },
    { title: "All Products", url: "" },
  ];

  return [
    {
      header: "Customer Services",
      items: customerServices,
    },
    {
      header: "Products",
      items: products,
    },
  ];
};

const footerSections = getFooterSections();

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 md:p-16">
      <div className="flex flex-col md:flex-row gap-8 pb-3 border-b border-b-[#A6A5A380]">
        <img className="max-w-28" src="/assets/logoRed.svg" alt="Logo" />
        <h3 className="font-[Montserrat] font-extrabold text-4xl md:text-8xl">
          VTMERCH
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row mt-8 gap-8 lg:gap-20">
        <div className="flex flex-col">
          <p className="font-[Montserrat] mb-4 md:mb-12 font-normal text-lg md:text-2xl">
            Subscribe and be the first to receive notifications about our
            upcoming releases and the latest news.
          </p>

          <button className="rounded-xl border mb-4 border-[#FFFFFF80] font-[Inter] font-normal text-base p-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
            Enter Your Email
          </button>

          <button className="bg-white rounded-xl py-3 px-6 font-[Inter] text-[#222222] text-base font-medium transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:border-white hover:border">
            Subscribe
          </button>
        </div>

        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col gap-4 md:gap-6">
            <h4 className="font-[Inter] font-medium text-lg md:text-xl">
              {section.header}
            </h4>
            {section.items.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="font-[Inter] font-normal text-sm md:text-base text-[#FFFFFFCC]"
              >
                {item.title}
              </a>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-4 md:gap-6">
          <h4 className="font-[Inter] font-medium text-lg md:text-xl">
            Contact Us
          </h4>
          <p className="font-[Inter] font-normal text-sm md:text-base text-[#FFFFFFCC]">
            Available between 8AM to 8PM. Ready to answer your questions.
          </p>

          <div className="flex gap-3">
            <img src="/assets/footer/telephone.svg" />
            <p className="font-[Inter] font-normal text-sm md:text-base text-[#FFFFFFCC]">
              013456789
            </p>
          </div>

          <div className="flex gap-3">
            <img src="/assets/footer/email.svg" />
            <p className="font-[Inter] font-normal text-sm md:text-base text-[#FFFFFFCC]">
              store@valuetainment.com
            </p>
          </div>

          <div className="flex gap-3">
            <a href="#">
              <img src="/assets/footer/facebook.svg" />
            </a>

            <a href="#">
              <img src="/assets/footer/twitter.svg" />
            </a>

            <a href="#">
              <img src="/assets/footer/linkedin.svg" />
            </a>

            <a href="#">
              <img src="/assets/footer/instagram.svg" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap mt-8 md:mt-24">
        <p>© 2024 Valuetainment Store. All rights reserved.</p>

        <div className="flex gap-7 mt-4 md:mt-0 flex-wrap">
          <img src="/assets/footer/visa.svg" />
          <img src="/assets/footer/ipay.svg" />
          <img src="/assets/footer/dinnersClub.svg" />
          <img src="/assets/footer/amex.svg" />
          <img src="/assets/footer/paypal.svg" />
          <img src="/assets/footer/aExpress.svg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
