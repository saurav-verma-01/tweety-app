import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, CircleCheckBig, Sprout } from "lucide-react";

const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    desc: "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    icon: CircleCheckBig,
    desc: "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30 day refund guaranty",
  },
  {
    name: "For the Planet",
    icon: Sprout,
    desc: "We've pledged 1% of sales to the preservation and restoration of the natural enviornment.",
  },
];

const page = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900">
            Your Marketplace for High Quality{" "}
            <span className="text-rose-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to TweetyCrafts. Every asset on our platform is verified by
            our team to ensure our highest quality standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild>
              <Link href="/products" className="">
                Browse Trending
              </Link>
            </Button>
            <Button variant="link">Our Quality Promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: List Categories and PRoducts */}
      </MaxWidthWrapper>

      <section className=" bg-amber-50 border-t border-gray-200">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((p) => (
              <div
                key={p.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-rose-100 text-rose-900">
                    <p.icon className="w-1/3 h-1/3" />
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default page;
