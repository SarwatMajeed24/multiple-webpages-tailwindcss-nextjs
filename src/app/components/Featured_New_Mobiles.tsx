// import Image from "next/image";
// import Link from "next/link";

// export default function Featured_New_Mobiles() {
//     return (
//         <div className="bg-orange-200 p-4 h-screen">
//             <div className="text-center mt-8">
//                 <h1 className="text-2xl font-semibold">Featured New Mobiles</h1>
//                 <div className="mt-4 text-blue-600 cursor-pointer">View All New Mobiles</div>
//             </div>
            
//             <div className="flex flex-wrap justify-center gap-4 mt-6 text-lg">
//                 <ul className="flex gap-4">
                    
//                     <li className="cursor-pointer hover:underline"><Link href="">Popular</Link></li>
//                     <li className="cursor-pointer hover:underline"><Link href="">Upcoming</Link></li>
//                     <li className="cursor-pointer hover:underline"><Link href="">Newly Launched</Link></li>
//                 </ul>
//             </div>

//             <div className="flex flex-wrap justify-center mt-8 gap-6">
//                 <Link href="/galaxy-s24-ultra">
//                     <div className="bg-white w-full sm:w-80 h-96 mb-4 text-center p-2 shadow-lg">
//                         <Image
//                             src="/images/Galaxy S24 Ultra.avif"
//                             alt="Galaxy S24 Ultra"
//                             width={900}
//                             height={900}
//                             className="h-64 w-full object-cover"
//                         />
//                         <div className="mt-2">Galaxy S24 Ultra</div>
//                         <div>PKR 541,999.00</div>
//                         <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold text-base py-2 px-6 rounded">
//                         Quick Look
//                         </button>
//                     </div>
//                 </Link>

//                 <Link href="/galaxy-a35-5g">
//                     <div className="bg-white w-full sm:w-80 h-96 mb-4 text-center p-2 shadow-lg">
//                         <Image
//                             src="/images/galaxyA35 5G.webp"
//                             alt="Galaxy A35 5G"
//                             width={900}
//                             height={900}
//                             className="h-64 w-full object-cover"
//                         />
//                         <div className="mt-2">Galaxy A35 5G</div>
//                         <div>PKR 119,999.00</div>
//                         <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold text-base py-2 px-6 rounded">
//                         Quick Look
//                         </button>
//                     </div>
//                 </Link>

//                 <Link href="/galaxy-z-flip6">
//                     <div className="bg-white w-full sm:w-80 h-96 mb-4 text-center p-2 shadow-lg">
//                         <Image
//                             src="/images/Galaxy Z flip6.jpg"
//                             alt="Galaxy Z flip6"
//                             width={900}
//                             height={900}
//                             className="h-64 w-full object-cover"
//                         />
//                         <div className="mt-2">Galaxy Z flip6</div>
//                         <div>PKR 364,999.00</div>
//                         <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold text-base py-2 px-6 rounded">
//                         Quick Look
//                         </button>
//                     </div>
//                 </Link>

//                 <Link href="/galaxy-z-fold6">
//                     <div className="bg-white w-full sm:w-80 h-96 mb-4 text-center p-2 shadow-lg">
//                         <Image
//                             src="/images/galaxy Z Fold6.jpg"
//                             alt="Galaxy Z Fold6"
//                             width={900}
//                             height={900}
//                             className="h-64 w-full object-cover"
//                         />
//                         <div className="mt-2">Galaxy Z Fold6</div>
//                         <div>PKR 604,999.00</div>
//                         <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold text-base py-2 px-6 rounded">
//                         Quick Look
//                         </button>
//                     </div>
                    
//                 </Link>
//             </div>
//         </div>
//     );
// }



import Image from "next/image";
import Link from "next/link";

export default function Featured_New_Mobiles() {
    return (
        <div className="bg-orange-200 p-4 min-h-screen">
            <div className="text-center mt-8">
                <h1 className="text-2xl font-semibold">Featured New Mobiles</h1>
                <div className="mt-4 text-blue-600 cursor-pointer">View All New Mobiles</div>
            </div>
            
            <div className="flex justify-center gap-4 mt-6 text-lg">
                <ul className="flex gap-4 flex-wrap">
                    <li className="cursor-pointer hover:underline"><Link href="">Popular</Link></li>
                    <li className="cursor-pointer hover:underline"><Link href="">Upcoming</Link></li>
                    <li className="cursor-pointer hover:underline"><Link href="">Newly Launched</Link></li>
                </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                <Link href="/galaxy-s24-ultra">
                    <div className="bg-white w-full h-96 mb-4 text-center p-2 shadow-lg">
                        <Image
                            src="/images/Galaxy S24 Ultra.avif"
                            alt="Galaxy S24 Ultra"
                            width={900}
                            height={900}
                            className="h-64 w-full object-cover"
                        />
                        <div className="mt-2">Galaxy S24 Ultra</div>
                        <div>PKR 541,999.00</div>
                        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold text-base py-2 px-6 rounded">
                            Quick Look
                        </button>
                    </div>
                </Link>

                <Link href="/galaxy-a35-5g">
                    <div className="bg-white w-full h-96 mb-4 text-center p-2 shadow-lg">
                        <Image
                            src="/images/galaxyA35 5G.webp"
                            alt="Galaxy A35 5G"
                            width={900}
                            height={900}
                            className="h-64 w-full object-cover"
                        />
                        <div className="mt-2">Galaxy A35 5G</div>
                        <div>PKR 119,999.00</div>
                        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold text-base py-2 px-6 rounded">
                            Quick Look
                        </button>
                    </div>
                </Link>

                <Link href="/galaxy-z-flip6">
                    <div className="bg-white w-full h-96 mb-4 text-center p-2 shadow-lg">
                        <Image
                            src="/images/Galaxy Z flip6.jpg"
                            alt="Galaxy Z flip6"
                            width={900}
                            height={900}
                            className="h-64 w-full object-cover"
                        />
                        <div className="mt-2">Galaxy Z flip6</div>
                        <div>PKR 364,999.00</div>
                        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold text-base py-2 px-6 rounded">
                            Quick Look
                        </button>
                    </div>
                </Link>

                <Link href="/galaxy-z-fold6">
                    <div className="bg-white w-full h-96 mb-4 text-center p-2 shadow-lg">
                        <Image
                            src="/images/galaxy Z Fold6.jpg"
                            alt="Galaxy Z Fold6"
                            width={900}
                            height={900}
                            className="h-64 w-full object-cover"
                        />
                        <div className="mt-2">Galaxy Z Fold6</div>
                        <div>PKR 604,999.00</div>
                        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold text-base py-2 px-6 rounded">
                            Quick Look
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}
