import advantagesData from "../data/advantages.json";

const Advantages = () => {

  return (
    <div className="py-20">
      <h2 className="text-4xl text-center mb-8">Наші переваги</h2>
      <div className="grid grid-cols-3 gap-6">
        {advantagesData.map((data) => {

          return(
          <div
            key={data.id}
            className="bg-blue-400 rounded-lg flex flex-col items-center p-5"
          >
            <div className="w-48 flex justify-center items-center">
              <img src={data.icon} alt="" className="w-full h-full" />
            </div>
            <h3 className="text-3xl text-center font-semibold mb-3">{data.heading}</h3>
            <p className="text-xl">{data.description}</p>
          </div>
        )})}
      </div>
    </div>
  );
};

export default Advantages;
