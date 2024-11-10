import Image from "next/image";
import Link from "next/link";

export default function Galaxy_A35_5G() {
  return (
    <div>
      <div className="flex justify-center mt-8 px-4 sm:px-8">
        <h1 className="text-blue-900 text-2xl sm:text-3xl text-center">
          Galaxy A35 5G Price in Pakistan, Images, Reviews & Specs
        </h1>
      </div>

      <div className="flex justify-center mt-4">
        <Image
          src="/images/galaxyA35 5G.webp"
          alt="Mobile Details"
          width={900}
          height={900}
          className="h-96 w-full max-w-[900px]"
        />
      </div>

      <div className="flex justify-start mt-10 px-4 sm:px-8">
        <h2 className="text-xl text-black font-bold">Galaxy A35 5G Overview</h2>
      </div>

      <div className="justify-center mx-4 sm:mx-8 mt-6 border border-gray-400 p-4 sm:p-6">
        <h2 className="font-semibold text-blue-800 text-xl"> Overview</h2>
        <p className="text-xs sm:text-sm leading-7 mt-2">
        
     

    The Samsung Galaxy A35 5G is a sleek blend of style and performance. Its stunning design, featuring Corning Gorilla Glass Victus+, and linear camera layout, sets it apart. Capture life’s moments with the 50 MP wide-angle camera, even in low light, thanks to enhanced sensors. Record steady videos with Super HDR, OIS, and VDIS. Protect your data with Samsung Knox Vault, while enjoying the vibrant 16.83 cm FHD+ Super AMOLED display. Experience seamless multitasking with the improved GPU and NPU, and store all your content with a large internal storage. Stay connected longer with the 5000mAh battery and IP67-rated protection against spills and dust. Enjoy up to 5 years of security updates and easy data transfer with Smart Switch and Quick Share. With One UI 6, personalise your experience effortlessly. The Samsung Galaxy A35 5G: where style meets substance in a compact package.

    Display: The Galaxy A35 boasts a large 6.6″ Super AMOLED display with a smooth 120Hz refresh rate. Whether you’re gaming, streaming, or simply scrolling through content, this screen adapts to your surroundings both indoors and outdoors.
    Performance: Powered by an octa-core processor and 5G connectivity, multitasking is a breeze. Plus, there’s a microSD slot that supports up to 1TB of expandable storage, so you can save your photos without worry.
    Camera: The pro-grade camera system includes a 50MP wide-angle camera with optical image stabilization. It captures high-resolution photos and videos in impressive detail, even in low-light conditions. The improved Nightography feature ensures clear night shots as well.
    Design: The Galaxy A35 features a sleek design with flat sides and a glass back. You can choose from two awesome hues: Awesome Navy or Awesome Lilac. It’s also durable, with an IP67 rating for water, dirt, and dust resistance.
    Battery Life: The long-lasting battery keeps you connected throughout the day, and Super Fast Charging ensures you spend less time plugged into an outlet.
    Security: Multilayered Knox Security keeps your data safe, and the phone comes with up to 4 generations of OS updates and 5 years of security maintenance.
        </p>
      </div>

      <div className="flex justify-center mt-8 px-4 sm:px-8">
        <Link href="/order-form">
          <button className="rounded-lg py-3 px-8 bg-blue-500 text-white w-full sm:w-auto">
            Fill the Form
          </button>
        </Link>
      </div>
    </div>
  );
}
