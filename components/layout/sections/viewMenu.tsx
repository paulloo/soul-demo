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

export const ViewMenuSection = () => {
  const { theme } = useTheme();
  return (
    <section id="Home" className="container w-full">
      <div className="flex xl:justify-between flex-col xl:flex-row lg:flex-row align-center items-center gap-8 mx-auto py-14 md:py-16">

        <div>
            <div className={cn("text-teal-600 text-6xl font-bold uppercase", myFont.className)}>
                <p>Deliciously Healthy, </p>
                <p>Made with</p>
                <p>All-Natural Goodness</p>
            </div>
            <p className="mt-6 mb-8 text-lg">Nourishing your body and soul with pure, flavour-rich smoothies tailored for every lifestyle.</p>
            <Button>View Menu</Button>
        </div>
        <Image
            width={477}
            height={477}
            className="w-full md:w-[477px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
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
