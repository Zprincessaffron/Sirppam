import React from 'react';

const SculptureProcess = () => {
  return (
    <div className="bg-white p-10  w-full mx-auto">
      <h3 className="text-xl font-semibold uppercase tracking-widest mb-6 text-center pb-3">Custom Sculpture Lifecycle</h3>
      <p className="text-xs text-gray-600 mb-8 text-center">
        The process of creating a custom sculpture unfolds through several interconnected stages, allowing you to be part of each step. Here’s how it works:
      </p>
      <div className="space-y-8">
        {stepsData.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            description={step.description}
            position={index + 1}
            isOdd={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

const stepsData = [
  {
    title: "Initial Consultation",
    description: "We start with a consultation to understand your vision, the intended space, preferred materials (e.g., metal, wood, clay), and style (e.g., abstract, realistic)."
  },
  {
    title: "Design & Concept Modeling",
    description: "Our sculptors develop a 3D sketch or digital model of the proposed sculpture, allowing you to visualize the final product and provide feedback."
  },
  {
    title: "Approval & Material Selection",
    description: "Once the concept is finalized, we confirm material choices and request a deposit to proceed with creation."
  },
  {
    title: "Sculpting Process",
    description: "The sculpture is crafted by hand, with regular updates provided so you can see the evolution of your custom piece."
  },
  {
    title: "Finishing Touches",
    description: "We apply finishes based on your preferences (e.g., paint, polish, texture). At this stage, minor adjustments can be made if required."
  },
  {
    title: "Delivery & Installation",
    description: "We arrange secure delivery and, if needed, offer installation support to ensure the sculpture fits perfectly in your space."
  }
];

const Step = ({ title, description, position, isOdd }) => {
  return (
    <div className={`flex items-start relative border p-4 ${isOdd ? 'flex-row' : 'flex-row-reverse'} space-x-4`}>
      <div className="flex-shrink-0">
        <div className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-800 bg-white text-gray-800 font-normal text-sm">
          {position}
        </div>
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default SculptureProcess;
