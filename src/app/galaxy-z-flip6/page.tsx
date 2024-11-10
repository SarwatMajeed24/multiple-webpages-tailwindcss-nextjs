import Image from "next/image";
import Link from "next/link";

export default function Galaxy_Z_Flip6() {
  return (
    <div>
      <div className="flex justify-center mt-8 px-4 sm:px-6 lg:px-24">
        <h1 className="text-blue-900 text-3xl text-center">Galaxy Z Flip6 Price in Pakistan, Images, Reviews & Specs</h1>
      </div>
      
      <div className="flex justify-center mt-4">
        <Image
          src="/images/Galaxy Z flip6.jpg"
          alt="Mobile Details"
          width={900}
          height={900}
          className="h-96 w-full sm:w-[900px] object-contain"
        />
      </div>

      <div className="flex justify-start mx-6 sm:mx-24 lg:mx-96 mt-10">
        <h2 className="text-xl text-black font-bold">Galaxy Z Flip6 Overview</h2>
      </div>

      <div className="justify-center mx-6 sm:mx-24 lg:mx-96 border border-gray-400 p-6">

        <br />
        <p className="text-xs leading-7">
        Samsungs annual update to its foldable phone line over the summer delivered the Galaxy Z Flip 6, a new model that promises greater durability, a more powerful chipset and new AI features. But something else has changed from Samsungs previous foldable flip phone models  how much you will pay for this version.

        Its that latter point thats likely to draw the most attention from would-be shoppers who will have to pony up at least $1,099 if they want the Galaxy Z Flip 6, compared to the $999 starting price for the Galaxy Z Flip 5. But Samsung will point out that the new version of the Flip is more powerful than ever, thanks not only to the latest Qualcomm system-on-chip but to a new batch of Galaxy AI features as well.

        Our Samsung Galaxy Z Flip 6 review takes a closer look at whether those changes justify the higher price. Here, were going to look at everything we know about the Galaxy Z Flip 6 and how it fits into the best foldable phones landscape

        </p>
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/order-form">
          <button className="rounded-lg py-3 px-8 bg-blue-500 text-white">
            Fill the Form
          </button>
        </Link>
      </div>
    </div>
  );
}
