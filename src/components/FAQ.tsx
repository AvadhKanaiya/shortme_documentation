import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is ShortMe?",
    answer: "ShortMe is a powerful URL shortening extension designed to make your links easy to share and manage. It provides a seamless experience for shortening long URLs into compact, easy-to-share links.",
    value: "item-1",
  },
  {
    question: "How do I use the ShortMe extension?",
    answer:
      "You can use ShortMe with our database or you can integrate your database and create your own ShortMe - URL shorten extension for more details Read the docs carefully.",
    value: "item-2",
  },
  {
    question: "Is ShortMe an open source ?",
    answer:
      "Yes. ShortMe is an open source URL shortener Extension it is free to use",
    value: "item-3",
  },
  {
    question: "Can I track the performance of my shortened URLs?",
    answer: "Currently, ShortMe does not offer tracking features. We are working on integrating analytics to allow users to track clicks and performance of their shortened URLs in future updates.",
    value: "item-4",
  },
  {
    question:
      "Is there a limit to the number of URLs I can shorten?",
    answer:
      "No, there is no limit to the number of URLs you can shorten using ShortMe. You can shorten as many URLs as you need.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="mailto:avadhkanaiya@gmail.com"
          className="text-orange-500 transition-all border-primary hover:border-b-2"
        >
          Mail Me:
        </a>
      </h3>
    </section>
  );
};
