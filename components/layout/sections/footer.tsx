import { Separator } from "@/components/ui/separator";
import { ChevronsDown, ChevronsDownIcon, Headset, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import localFont from 'next/font/local'
import { cn } from "@/lib/utils";
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: [{
  path: './fonts/Hupaisa-Bold.otf',
  weight: '400',
  style: 'normal',
}] })

export const FooterSection = () => {
  return (
    <footer id="Contact Us" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2  md:grid-cols-5 xl:grid-cols-5 gap-x-12 gap-y-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-2 xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
               <img src="/logo.png" alt="logo" className="w-[104px] h-[80px] mr-2" />
            </Link>
            <p className="text-lg">Pure Ingredients, Perfectly Blended</p>
          </div>

          <div className="flex-col grid md:grid-cols-3 col-span-3 gap-6">
            <div className="flex flex-col gap-3">
              <h3 className={cn("font-bold text-lg text-emerald-600", myFont.className)}>Get In Touch</h3>
              <div>
                <Link href="#" className="hover:opacity-100 flex items-start">
                <MapPin className="w-6 h-6 mr-2 text-teal-600 shrink-0" /> 
                SBF Center, 160 Robinson Road, #01-02, Singapore 068914
                </Link>
              </div>

              <div>
                <Link href="#" className="hover:opacity-100 flex items-start">
                <Mail className="w-6 h-6 mr-2 text-teal-600 shrink-0" /> 
                TBC
                </Link>
              </div>

              <div>
                <Link href="#" className="hover:opacity-100 flex items-start">
                <Phone className="w-6 h-6 mr-2 text-teal-600 shrink-0" /> 
                +65 8951 6971
                </Link>
              </div>

              <div>
                <Link href="#" className="hover:opacity-100 flex items-start">
                <Instagram className="w-6 h-6 mr-2 text-teal-600 shrink-0" /> 
                @soulsmoothiebar
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className={cn("font-bold text-lg text-emerald-600", myFont.className)}>Quicklinks</h3>
              <div>
                <Link href="#" className="hover:opacity-100">
                Home
                </Link>
              </div>

              <div>
                <Link href="#" className="hover:opacity-100">
                Menu
                </Link>
              </div>

              <div>
                <Link href="#" className="hover:opacity-100">
                Franchising and Events
                </Link>
              </div>

              <div>
                <Link href="#" className="hover:opacity-100">
                Contact Us
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className={cn("font-bold text-lg text-emerald-600", myFont.className)}>Opening Hours</h3>
              <div>
                <Link href="#" className="hover:opacity-100">
                Mon - Fri: 8am - 7pm
                </Link>
              </div>

              <div>
                <Link href="#" className="hover:opacity-100">
                Sat, Sun & PH: Closed
                </Link>
              </div>

            </div>

          </div>

        </div>

        {/* <Separator className="my-6" /> */}
        <section className="flex justify-between mt-8">
          <h3 className="">
            Copyright &copy; 2024 Soul Smoothie Bar
          </h3>

          <Link
              target="_blank"
              href="https://github.com/leoMirandaa"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              <Headset className="w-6 h-6 mr-2 text-teal-600 shrink-0" />
            </Link>
        </section>
      </div>
    </footer>
  );
};
