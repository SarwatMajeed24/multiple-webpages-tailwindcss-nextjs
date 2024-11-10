import Image from "next/image"
import Link from "next/link"

export default function Galaxy_Z_Fold6(){
    return(
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
            <div className="flex justify-center mt-8">
                <h1 className="text-blue-900 text-3xl text-center">Galaxy Z Fold 6 in Pakistan, Images, Specs & Features</h1>
            </div>
            
            <div className="flex justify-center mt-4">
                <Image
                    src="/images/galaxy Z Fold6.jpg"
                    alt="Mobile Details"
                    width={900}
                    height={900}
                    className="h-96 w-full max-w-2xl object-contain"
                />
            </div>

            <div className="mt-10">
                <h2 className="text-xl text-black font-bold">Galaxy Z Fold 6 Overview</h2>
            </div>

            <div className="border border-grey-400 p-6 mt-4">
                <h2 className="font-semibold text-blue-800 text-xl">Features</h2>
                <p className="text-xs leading-7">
                General

Android v14Good
Thickness: 5.6mmUltra Slim
239gHeavy
Side Fingerprint Sensor

Display

7.6inch, LTPO AMOLED ScreenLarge
1856x2160pixelsAverage
374 ppiPoor
Foldable, Dual Display with 2600nits Brightness
Gorilla Glass Victus 2
120Hz Refresh Rate
Punch Hole Display

Camera

50MP + 12MP + 10MP Triple Rear Camera with OISAverage
8K@30fps UHD Video Recording
10MP + 4MP Dual Front CameraAverage

Technical

Qualcomm Snapdragon 8 Gen 3 Chipset
3.39GHz, Octa Core ProcessorFast
12GB RAMAverage
256GB Inbuilt MemoryAverage
Memory Card Not Supported

Connectivity

4G, 5G, VoLTE, Vo5G
Bluetooth v5.3, WiFi, NFC
USB-C v3.2

Battery

4400mAh BatterySmall
25W Fast Charging
15W Wireless Charging
4.5W Reverse Charging
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
    )
}
