import DiscordIcon from "@/components/icons/discord-icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import localFont from 'next/font/local'
import { cn } from "@/lib/utils";
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: [{
  path: './fonts/Hupaisa-Bold.otf',
  weight: '400',
  style: 'normal',
}] })

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 bg-slate-600">
      {/* <hr className="border-secondary" /> */}
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background py-20 border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                {/* <DiscordIcon /> */}
                <div className={cn('text-teal-600', myFont.className)}>Real Fruit, Real Good</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Seeking catering options or a healthy snack for yourself? Reach out to us, and we’ll respond soon!
            </CardContent>

            <CardFooter>
              <Button asChild>
                <a href="#" target="_blank">
                  Enquire Now
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      {/* <hr className="border-secondary" /> */}
    </section>
  );
};
