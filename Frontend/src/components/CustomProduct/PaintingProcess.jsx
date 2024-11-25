import React from 'react';

const PaintingProcess = () => {
  return (
    <div className="bg-white p-10 w-full mx-auto">
      <h3 className="text-xl font-semibold uppercase tracking-widest mb-6 text-center pb-3">Custom Painting Lifecycle</h3>
      <p className="text-xs text-gray-600 mb-8 text-center">
        Our custom painting process involves a series of steps to ensure that each piece meets your vision and expectations. Here’s what you can expect:
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
    title: "Consultation",
    description: "We begin with an in-depth discussion to understand your ideas, preferred styles, colors, and themes. You can share images or inspirations to guide us."
  },
  {
    title: "Concept Sketch",
    description: "Our artists create an initial concept sketch to visualize your ideas. After sharing it with you, we welcome your feedback to refine the design."
  },
  {
    title: "Approval & Deposit",
    description: "Once you're satisfied with the concept, we confirm details like dimensions and materials, and request a deposit to begin the painting."
  },
  {
    title: "Painting Creation",
    description: "Our artists start bringing your vision to life on canvas, layer by layer. We update you with progress images, especially for significant stages."
  },
  {
    title: "Final Review",
    description: "Upon completion, we share final images of the painting. Minor adjustments are possible to ensure your complete satisfaction."
  },
  {
    title: "Framing & Delivery",
    description: "If requested, we offer custom framing options. The painting is then securely packaged and shipped to your location."
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

export default PaintingProcess;
