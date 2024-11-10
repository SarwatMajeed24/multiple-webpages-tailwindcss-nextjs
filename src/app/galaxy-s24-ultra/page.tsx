import Image from "next/image"
import Link from "next/link"

export default function Galaxy_S24_Ultra(){
    return(
        <div>
            {/* Heading Section */}
            <div className="flex justify-center mt-8 px-4">
                <h1 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl text-center">
                    Galaxy S24 Ultra Price in Pakistan, Images, Reviews & Specs
                </h1>
            </div>

            {/* Image Section */}
            <div className="flex justify-center mt-4">
                <Image
                    src="/images/Galaxy S24 Ultra.avif"
                    alt="Car Details"
                    width={900}
                    height={900}
                    className="h-64 w-full sm:h-80 sm:w-[600px] lg:h-96 lg:w-[900px]"
                />
            </div>

            {/* Overview Section */}
            <div className="flex justify-start mx-4 sm:mx-12 mt-10">
                <h2 className="text-xl sm:text-2xl text-black font-bold">Galaxy S24 Ultra Overview</h2>
            </div>

            {/* Content Section */}
            <div className="mx-4 sm:mx-12 md:mx-24 border border-gray-400 p-6">
                <br />
                <h2 className="font-semibold text-blue-800 text-xl sm:text-2xl">Specs</h2>
                <br />
                <p className="text-xs sm:text-sm leading-7">              
                      Specs
                      Display
                      Size: 	6.8 inches
                       Resolution: 	3088 x 1440 pixels, 19.5:9 ratio, 501 PPI
                      Technology: 	Dynamic AMOLED
                      Refresh rate: 	120Hz
                      Screen-to-body: 	89.12 %
                      Peak brightness: 	2600 cd/m2 (nit)
                      Features: 	HDR support, Scratch-resistant glass (Corning Gorilla Glass Armor), Ambient light sensor, Proximity sensor
                      Hardware
                      System chip: 	Qualcomm Snapdragon 8 Gen 3 SM8650-AB (4 nm)
                      Processor: 	Octa-core, 1x 3.39GHz Cortex-X4 + 5x 3.1GHz Cortex-A720 + 2x 2.2GHz Cortex-A520, 64-bit
                      GPU: 	Adreno 750
                       RAM: 	12GB
I                      nternal storage: 	256GB (UFS 4.0), not expandable
O                       S: 	Android (14)
                        Device type: 	Smartphone        </p>
                <br />

                </div>
            {/* Payment Button */}
            <div className="flex justify-center mt-8 px-4">
                <Link href="/order-form">
                    <button className="rounded-lg py-3 px-8 bg-blue-500 text-white text-sm sm:text-base">
                       Fill the Form
                    </button>
                </Link>
            </div>
        </div>
    );
}
