import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
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
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "/team/11.jpeg",
      firstName: "Leo",
      lastName: "Miranda",
      positions: ["Vue Fronted Developer", "Creator Of This Website"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      imageUrl: "/team/12.jpeg",
      firstName: "Elizabeth",
      lastName: "Moore",
      positions: ["UI/UX Designer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      imageUrl: "/team/13.jpeg",
      firstName: "David",
      lastName: "Diaz",
      positions: ["Machine Learning Engineer", "TensorFlow Tinkerer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
      ],
    },
    {
      imageUrl: "/team/14.jpeg",
      firstName: "Sarah",
      lastName: "Robinson",
      positions: ["Cloud Native Developer", " Kubernetes Orchestrator"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      imageUrl: "/team/21.jpeg",
      firstName: "Michael",
      lastName: "Holland",
      positions: ["DevOps Engineer", "CI/CD Pipeline Mastermind"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
      ],
    },
    {
      imageUrl: "/team/22.jpeg",
      firstName: "Zoe",
      lastName: "Garcia",
      positions: ["JavaScript Evangelist", "Deno Champion"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
      ],
    },
    {
      imageUrl: "/team/23.png",
      firstName: "Evan",
      lastName: "James",
      positions: ["Backend Developer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      imageUrl: "/team/24.jpeg",
      firstName: "Pam",
      lastName: "Taylor",
      positions: ["Fullstack Developer", "UX Researcher"],
      socialNetworks: [
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      imageUrl: "/team/31.jpeg",
      firstName: "Pam",
      lastName: "Taylor",
      positions: ["Fullstack Developer", "UX Researcher"],
      socialNetworks: [
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      imageUrl: "/team/32.jpeg",
      firstName: "Pam",
      lastName: "Taylor",
      positions: ["Fullstack Developer", "UX Researcher"],
      socialNetworks: [
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      imageUrl: "/team/33.jpeg",
      firstName: "Pam",
      lastName: "Taylor",
      positions: ["Fullstack Developer", "UX Researcher"],
      socialNetworks: [
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
    {
      imageUrl: "/team/34.jpeg",
      firstName: "Pam",
      lastName: "Taylor",
      positions: ["Fullstack Developer", "UX Researcher"],
      socialNetworks: [
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },

    {
      imageUrl: "/team/41.png",
      firstName: "Pam",
      lastName: "Taylor",
      positions: ["Fullstack Developer", "UX Researcher"],
      socialNetworks: [
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },

    {
      imageUrl: "/team/42.png",
      firstName: "Pam",
      lastName: "Taylor",
      positions: ["Fullstack Developer", "UX Researcher"],
      socialNetworks: [
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },

    {
      imageUrl: "/team/43.png",
      firstName: "Pam",
      lastName: "Taylor",
      positions: ["Fullstack Developer", "UX Researcher"],
      socialNetworks: [
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-24">
        {/* <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2> */}

        <h2 className={cn("text-5xl text-teal-600 md:text-5xl text-center font-bold", myFont.className)}>
          Image Gallery
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-4 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                {/* <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle> */}
              </CardHeader>
              {/* {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))} */}

              {/* <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter> */}
            </Card>
          )
        )}
      </div>

      <div className="rounded-xl overflow-hidden mt-8">
        <video className="w-full aspect-video" src="https://www.youtube.com/watch?v=rYrR_whYBmc" controls />
      </div>
    </section>
  );
};
