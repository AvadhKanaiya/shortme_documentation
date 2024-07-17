import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LoadUnpackIcon, RightArrow, CloneIcon,NavigateIcon } from "./Icons";

interface ServiceProps {
  title: string;
  description: JSX.Element;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Step 1",
    description: (
      <>
        <p>Clone or Download the ZIP file of the Extension from the GitHub <span className="font-bold">Repository: </span></p>
        <a href="https://github.com/AvadhKanaiya/shortme" target="_blank" rel="noopener noreferrer" className="font-bold underline">
          https://github.com/AvadhKanaiya/shortme
        </a>
        <p>Extract the ZIP file into your desired destination name of the extracted folder should be: <span className='font-bold'>shortme</span></p>
      </>
    ),
    icon: < CloneIcon />,
  },
  {
    title: "Step 2",
    description: (
      <>
        <p>Open <span className='font-bold'>"Extensions <RightArrow /> Manage Extensions"</span> tab from the side panel of your browser</p>
        <p>Make sure your <span className='font-bold'>"Developer Mode is On"</span> at the top <span className='underline'>Right Corner</span> if not than Turn On the Developer Mode by <span className="font-bold">toggle it.</span></p>
      </>
    ),
    icon: <NavigateIcon />,
  },
  {
    title: "Step 3",
    description: (
      <>
        <p>Click on <span className="font-bold"> Load unpacked </span> button on the <span className="underline">Left Corner</span> and select the extension folder that you have Cloned or Downloaded (shortme).</p>
      </>
    ),
    icon: <LoadUnpackIcon />,
  },
];


export const Services = () => {
  return (
    <section className="container py-24 sm:py-32" id="existing-extension">
      <div className="mx-5">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Use existing{" "}
            </span>
            Extension
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            You can use extension directly with our database.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
