import delivery from "../assets/delivery.png";
import bg from "../assets/heroBg.png";

import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid w-full grid-cols-1 gap-2 md:grid-cols-2" id="home">
      <div className="flex flex-col items-start justify-center flex-1 gap-6 py-2 ">
        <div className="flex items-center justify-start gap-2 px-4 py-1 bg-orange-100 rounded-full shadow-2xl">
          <p className="text-base font-semibold text-orange-500">
            Bike Delivery
          </p>
          <div className="w-8 h-8 overflow-hidden bg-white rounded-full drop-shadow-xl">
            <img
              src={delivery}
              alt="delivery"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <p className="text-[3rem] lg:text-[3.8rem] font-bold text-headingColor">
          The Fastest Deliverry in
          <span className="text-orange-600 text-[3.5rem] lg:text-[4rem]  ">
            Your City
          </span>
        </p>
        <p className="text-base tracking-tight md:tracking-wide md:w-[80%]  text-textColor md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vero
          odit optio laudantium saepe commodi sed repellat consequuntur, ex
          sequi repellendus, quo corporis laborum nemo adipisci incidunt debitis
          at obcaecati?
        </p>
        <button
          type="button"
          className="w-full px-4 py-2 text-white transition-all duration-100 ease-in-out rounded-lg md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 hover:shadow-lg"
        >
          Order Now
        </button>
      </div>

      <div className="relative flex items-center flex-1">
        <img
          src={bg}
          alt="background-img"
          className="w-full ml-auto lg:w-auto lg:h-530"
        />

        <div className="absolute top-0 left-0 grid w-full h-full grid-cols-2 gap-10 px-2 sm:gap-12 py-14 sm:grid-cols-2 sm:px-28">
          {heroData &&
            heroData.map((item, index) => (
              <div
                key={index}
                className="sm:min-w-[190px] mb-10 sm:mb-8 min-w-[120px] flex flex-col items-center justify-center sm:p-4 rounded-xl sm:w-190 bg-cardOverlay shadow-lg backdrop-blur-md"
              >
                <img src={item.imageSrc} className="w-40 -mt-20" alt="images" />
                <p className="text-base font-semibold text-textColor">
                  {item.name}
                </p>
                <p className="hidden text-sm font-semibold sm:inline text-lightTextGray">
                  {item.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  $ <span className="text-xs text-red-600 ">{item.price}</span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
