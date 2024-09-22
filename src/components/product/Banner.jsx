import { promotionalInfo } from "../../assets/data/data";
import { BodyOne, BodyTwo, Span, Title } from "../common/CustomComponents";

const Banner = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between pt-20">
        {promotionalInfo.map((info) => (
          <>
            <div className="box relative w-full" key={info.id}>
              <div className="w-full h-[45vh]">
                <img
                  src={info.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="absolute top-0 left-0 p-3 md:p-8 lg:w-2/3">
                <span className="bg-white px-6 py-2 text-sm ">
                  {info.title}
                </span>
                <Title level={3} className="my-4">
                  {info.title}
                </Title>
                <p className="text-sm font-normal text-primary-gray mb-4">{info.description}</p>
                <button className="secondary-btn">Shop now</button>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export default Banner;
