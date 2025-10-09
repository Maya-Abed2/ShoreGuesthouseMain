import { assets } from "../../../public/images/assets";
export default function ExteriorViews() {
  return (
    <div className="container mx-auto px-4 my-15">
      <div className="text-center my-10">
        <h1>Exterior Views</h1>
        <p className="text-4xl">Welcome to Shore Guesthouse.</p>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 grid-rows-2 gap-12 p-8">
        <div>
            <img src={assets.bedroom} loading="lazy" />
            <p>A haven lies behind the blue door.</p>
        </div>
        <div>
            <img src={assets.landscape}  loading="lazy" className="h-full"/>
            <p>The Lounge Room</p>
        </div>
        <div className="col-span-2 row-start-2">
            <img src={assets.seaView3}  loading="lazy"/>
            <p>The Outer Deck</p>
        </div>
      </div>
    </div>
  );
}
