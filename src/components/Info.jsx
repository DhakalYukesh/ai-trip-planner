import { FaBus, FaHotel, FaRoute } from "react-icons/fa";

const Info = () => {
  return (
    <div className="bg-slate-800 text-white relative">
      <div className="container mx-auto flex flex-col gap-16 justify-center items-center py-24 text-center">
        <div className="flex flex-col justify-center items-center gap-1">
          <h3 className="text-red-400 uppercase text-sm tracking-widest">
            Plan with efficiency
          </h3>
          <h2 className="text-5xl font-bold max-w-xl">
            The only tool ⚙️ you need for your next Trip.
          </h2>
          <p className="pt-8 text-lg max-w-xl text-gray-300">
            Say goodbye to the stress of planning and hello to personalized
            recommendations, efficient itineraries, and seamless travel
            experiences.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="border border-gray-600 p-10 rounded-xl flex flex-col max-w-md gap-4">
            <div className="flex justify-center items-center">
              <FaRoute size={50} />
              <h3 className="text-2xl font-bold max-w-56">
                Optimal Route Planning
              </h3>
            </div>
            <p className="max-w-sm text-gray-300 text-md">
              Utilize advanced algorithms to design the most efficient routes,
              saving you time and reducing travel hassle.
            </p>
          </div>
          <div className="border border-gray-600 p-10 rounded-xl flex flex-col max-w-md gap-4">
            <div className="flex justify-center items-center">
              <FaBus size={50} />
              <h3 className="text-2xl font-bold max-w-56">
                Transportation Options
              </h3>
            </div>
            <p className="max-w-sm text-gray-300 text-md">
              Get access to the best transportation options tailored to your
              itinerary, ensuring smooth and comfortable journeys.
            </p>
          </div>
          <div className="border border-gray-600 p-10 rounded-xl flex flex-col max-w-md gap-4">
            <div className="flex justify-center items-center">
              <FaHotel size={50} />
              <h3 className="text-2xl font-bold max-w-56">
                Accommodation Selections
              </h3>
            </div>
            <p className="max-w-sm text-gray-300 text-md">
              Discover top-rated hotels and lodging options that fit your
              preferences and budget for a restful stay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
