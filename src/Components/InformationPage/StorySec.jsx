import { assets } from "../../../public/images/assets";

export default function StorySec() {
  return (
    <div className="container mx-auto my-20 px-4 ">
      <div className="flex flex-col md:flex-row">
        <h1 className="w-1/2 text-2xl md:text-4xl mb-5">My Story</h1>
        <div className="flex flex-col  max-w-[500px] text-xl ">
          <p className="mb-10 leading-10">
            Shore Guesthouse is a dream come true, a labor of love inspired by
            the childhood summers I spent here with my grandparents. Their
            stories of Oia, the warmth of the island life, and the magic of this
            place have always stayed with me.Restoring this home has been a way
            to honor their memory and share the spirit of Oia with others
          </p>
          <img src={assets.family} className=" md:w-[500px] md:h-[400px]" />
        </div>
      </div>
      <hr className="my-20" />

      <div className="flex flex-col md:flex-row">
        <h1 className="w-1/2 text-2xl md:text-4xl mb-5">
          History of the Neighborhood
        </h1>
        <div className="flex flex-col  max-w-[500px] text-xl mb-10">
          <img
            src={assets.nighberhood}
            className=" md:w-[500px] md:h-[400px] mb-10 p-20 bg-[#E5CBAD]"
          />
          <p className=" leading-10">
            Oia is a living, breathing village. Wander the streets and you'll
            find hidden courtyards and locals chatting over coffee. Skip the
            fancy restaurants and enjoy today's catch at a family-run taverna.
            Catch the sunset for a moment of peace. And, if you can, strike up a
            conversation with a local – they'll tell you stories of Oia that no
            guidebook can.
          </p>
        </div>
      </div>
      <div>
        <img src={assets.seaView4} className="w-full h-screen" />
      </div>

      <div className="px-5 mt-14">
        <h2 className="text-2xl md:text-4xl my-5">Visit</h2>
        <hr />
        <div className="flex flex-col md:flex-row justify-between my-5">
          <h3 className="md:w-1/2">
            Option 1 <br /> Private Transfer
          </h3>
          <p className="md:w-1/2">
            For a stress-free arrival, we can arrange a private transfer for
            you. A driver will be waiting at the port with a sign and will bring
            you directly to Shore Guesthouse in about 35-40 minutes.
            <br /> Price: <br />
            €40-€60 (varies by season)
            <br /> How to Book:
            <br /> Just send us your ferry details, and we'll take care of it
          </p>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row justify-between my-5">
          <h3 className="md:w-1/2">
            Option 2 <br /> Taxi
          </h3>
          <p className="md:w-1/2">
            Taxis are available at the port but can be scarce during peak times.
            <br />
            Price:
            <br /> €40-€60 (varies by season) <br />
            About: <br />
            Drivers may drop you at a central spot in Oia (due to
            pedestrian-only areas), but we'll guide you from there.
          </p>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row justify-between my-5">
          <h3 className="md:w-1/2">
            Option 3 <br /> Taxi
          </h3>
          <p className="md:w-1/2">
            Take a bus from Athinios Port to Fira (€2.50, ~30-40 min). <br/>Price:<br/> €5
          </p>
        </div>
      </div>
    </div>
  );
}
