"use client";
import * as React from "react";
import { TextBlock } from "./TextBlock";
import { Button } from "./Button";

export const OrbitHero: React.FC = () => {
  const handleContinue = React.useCallback(() => {
    console.log("Continue clicked");
  }, []);

  return (
    <div className="flex h-screen overflow-hidden flex-col justify-center items-center p-2.5 text-white">
      <TextBlock
        size="large"
        text="OrbitCycle"
        ariaLabel="OrbitCycle Company Name"
      />
      <TextBlock
        size="medium"
        text="New dimension of materials at your fingertips"
        className="mt-2.5"
        ariaLabel="Company Tagline"
      />
      <TextBlock
        size="small"
        text="Discover what possibilities await you on our orbit"
        className="mt-2.5"
        ariaLabel="Company Description"
      />
      <div className="pt-10">
        <Button
          text="Continue"
          onClick={handleContinue}
          ariaLabel="Continue to explore OrbitCycle"
        />
      </div>
    </div>
  );
};