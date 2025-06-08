import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const page = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900">
          Your Marketplace for High Quality{" "}
          <span className="text-rose-600">digital assets</span>.
        </h1>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
