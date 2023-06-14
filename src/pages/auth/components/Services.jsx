import { Link } from "react-router-dom";
import { services } from "../../../data/services";

export default function Services() {
  return (
    <div className="min-h-screen  bg-slate-200">
      <h2 className=" mb-9 text-center  p-10 font-bold leading-none  xl:text-4xl">
        Services
      </h2>
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-4 pb-10 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4">
        {services.map((services) => (
          <Link
            to=""
            key={services.id}
            className="cell group w-full duration-200 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="content flex flex-col items-center justify-around rounded-sm border border-bgGreen pl-7 pt-7 pr-7 pb-7 text-sm duration-200 group-hover:bg-bgGreen sm:h-full">
              <img
                // src={`/assets/services/${services.icon}.jpg`}
                className="h-10 w-10 duration-200 group-hover:hidden xsm:h-20 xsm:w-20 sm:h-14 sm:w-14 md:h-16 md:w-16"
              />
              <p className="mt-4 text-lg font-bold text-bgGreen duration-200 group-hover:text-[#adc6af] xsm:text-2xl">
                {services.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
