import Image from "next/image"

const OurLegacy = () => {
  return (
    <div className="flex flex-col-reverse mb-14 md:flex-row">
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <div className="flex flex-col justify-start items-start h-full">
          <h1 className="text-custom-blue text-xl md:text-2xl font-semibold mb-4">
            Our Legacy
          </h1>
          <h2 className="text-custom-red text-3xl md:text-4xl font-semibold mb-4">
            Founded on over nine decades of commitment and service
          </h2>
          <p className="text-custom-gray mb-4">
            Across varied domains, industries and international borders, our
            legal services and solutions are tailor-made to represent our
            clients’ best interest without compromising on our principles of
            natural law, justice and compassion.
          </p>
          <button className="border border-custom-blue px-4 py-2 text-custom-blue hover:bg-custom-blue hover:text-white">
            Our Firm
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="/home-page/our-legacy@2x.png"
          width={683}
          height={456}
          className="w-full"
          alt=""
        />
      </div>
    </div>
  )
}

export default OurLegacy
