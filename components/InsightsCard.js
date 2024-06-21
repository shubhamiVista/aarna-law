const InsightsCard = ({ cardDetails }) => {
  const { imageUrl, title, desc } = cardDetails
  return (
    <li className="w-[510px] bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <img src={imageUrl} className="w-full h-[280px]" alt="" />
      <div className="p-5 flex flex-col items-start flex-grow">
        <h5 className="text-2xl text-custom-blue font-semibold flex-grow mb-3">
          {title}
        </h5>
        <p className="mb-3 font-normal text-custom-gray flex-grow">
          {desc.split(" ").slice(0, 20).join(" ")}
        </p>
        <button className="border border-custom-red text-custom-red px-6 py-2 hover:bg-custom-red hover:text-white">
          View Article
        </button>
      </div>
    </li>
  )
}

export default InsightsCard
