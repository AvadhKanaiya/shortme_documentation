import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import nologin from "../assets/login.png";
import copy from "../assets/copy.png";
import brand_icons from "../assets/brand_icons.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "No Login Required",
    description:
      "This extension allows users to shorten URLs quickly and easily without the need to log in or create an account. Users can instantly shorten URLs with a single click, ensuring a seamless and efficient experience. It prioritizes user privacy and simplicity, making it perfect for anyone looking for a fast and hassle-free URL shortening solution.",
    image: nologin,
  },
  {
    title: "Auto copy into clipboard",
    description:
      "The auto-copy feature of this URL shortener extension automatically copies the shortened URL to the clipboard as soon as it's created. This eliminates the need for additional clicks or steps, allowing users to immediately paste and share the shortened link wherever they need it.This feature makes URL sharing faster and more seamless.",
    image: copy,
  },
  {
    title: "Share on Social Media",
    description:
      "This feature enables users to share shortened URLs directly via popular social media platforms such as WhatsApp, Twitter, and Gmail. With just a click, users can quickly share their shortened links, making it easy to distribute content across multiple channels. This functionality streamlines the sharing process.",
    image: brand_icons,
  },
];

const featureList: string[] = [
  "Short Current URL",
  "Automatic Copied on Clipboard",
  "Share On WhatsApp",
  "Share On Gmail",
  "Share On Twitter",
  "Open Source",
  "Minimalist",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Key{" "}
        <span className="bg-gradient-to-b from-primary/70 to-primary text-transparent bg-clip-text">
          Features of ShortMe
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
