"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import localFont from 'next/font/local'
import { cn } from "@/lib/utils";
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: [{
  path: './fonts/Hupaisa-Bold.otf',
  weight: '400',
  style: 'normal',
}] })

export const JoinUsSection = () => {
  const { theme } = useTheme();
  return (
    <section id="Franchising and Events" className={cn("container w-full px-16 relative", `bg-[${theme === 'light' ? '#FFF1F8' : '#000'}]`)}>
      {
        theme === "light"? <img src={theme === "light" ? "/bg_top_border.png" : "/bg_top_border.png"} alt="grid-item-bg1" className="absolute top-0 left-0 w-full h-4 z-[1] object-cover" />: null
      }
      
      <div className="flex xl:justify-between flex-col xl:flex-row lg:flex-row align-center items-center gap-8 mx-auto py-28 md:py-28">
        <div>
            <div className={cn("text-teal-600 text-4xl font-bold uppercase", myFont.className)}>
                <p>Open opportunities</p>
                <p>to join!</p>
            </div>
            <p className="mt-6 mb-8 text-lg">At Soul Smoothie, we're always on the lookout for passionate individuals who share our commitment to health and wellness. Join our team and be part of a vibrant community dedicated to making every bite and sip a soulful experience. Whether you're a smoothie aficionado or a culinary enthusiast, there’s a place for you here. Explore exciting opportunities to grow with us!</p>
            <div className="flex gap-8 mb-8">
                <div className="flex flex-col">
                    <h3 className={cn("text-primary text-2xl font-bold uppercase", myFont.className)}>Subheading one</h3>
                    <p className="text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className="flex flex-col">
                    <h3 className={cn("text-primary text-2xl font-bold uppercase", myFont.className)}>Subheading two</h3>
                    <p className="text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
            </div>
            <Button>Join Us</Button>
        </div>
        <Image
            width={616}
            height={640}
            className="w-full shrink-0 md:w-[616px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={
                theme === "light"
                ? "/grid-item-bg1.png"
                : "/grid-item-bg1.png"
            }
            alt="dashboard"
            />

        </div>
    </section>
  );
};
