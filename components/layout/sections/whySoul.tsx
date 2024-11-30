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

export const WhySoulSection = () => {
  const { theme } = useTheme();
  return (
    <section id="Menu" className="container w-full">
      <div className="flex xl:justify-between flex-col xl:flex-row lg:flex-row align-center items-center gap-8 mx-auto py-14 md:py-16">
        <Image
            width={626}
            height={640}
            className="w-full md:w-[626px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={
                theme === "light"
                ? "/grid-item-bg1.png"
                : "/grid-item-bg1.png"
            }
            alt="dashboard"
            />
        <div>
            <div className={cn("text-teal-600 text-5xl font-bold uppercase", myFont.className)}>
                <p>why soul smoothie bar</p>
            </div>
            <ul className="mt-16">

                <li className="mt-6">
                    <h3 className={cn("text-primary text-2xl font-bold uppercase", myFont.className)}>Naturally Healthier</h3>
                    <p className="mt-6 mb-8">Our smoothies are made without any added sweeteners, ensuring a pure and wholesome experience.</p>
                </li>
                <li className="mt-6">
                    <h3 className={cn("text-primary text-2xl font-bold uppercase", myFont.className)}>Diverse Flavours & Diet-Friendly</h3>
                    <p className="mt-6 mb-8">From savoury to sweet, we offer a wide range of smoothie options tailored to various dietary needs, including keto and vegan choices.</p>
                </li>
                <li className="mt-6">
                    <h3 className={cn("text-primary text-2xl font-bold uppercase", myFont.className)}>Convenient Choices</h3>
                    <p className="mt-6 mb-8">Whether you want to enjoy your smoothie in a cosy setting or grab one on the go, we’ve got you covered.</p>
                </li>
            </ul>
            
        </div>
        </div>
    </section>
  );
};
