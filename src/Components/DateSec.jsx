
export default function DateSec({bg}) {
  return (
    <div
      className="bg-cover bg-center min-h-[50vh]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto px-4  text-white pt-10">
        <p>Plan Your Dream Getaway:</p>
        <h2 className="text-2xl sm:3xl md:text-4xl my-6">Summer 2025 Dates Available</h2>
        <button className="bg-white hover:bg-[#E5CBAD] duration-300 rounded-full px-3 py-3 text-black ">Book now</button>
      </div>
    </div>
  );
}
