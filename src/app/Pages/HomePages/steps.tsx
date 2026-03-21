import { getCopyObjectArray, getCopyText, type CopyPayload } from '@/lib/contentful/copy';

interface StepType {
  id: number;
  name: string;
  description: string;
}

const defaultSteps: StepType[] = [
  {
    id: 1,
    name: "Prep done properly",
    description:
      "Floors, carpets and surfaces protected before plastering begins. We work tidy.",
  },
  {
    id: 2,
    name: "Clean and accurate plastering",
    description:
      "Fresh plastering, re-skimming and patch repairs. Smooth finish ready to paint.",
  },
  {
    id: 3,
    name: "Respect for your home",
    description:
      "No mess, no shortcuts. We leave the space cleaner than we found it.",
  },
  {
    id: 4,
    name: "Honest pricing",
    description:
      "Send photos or book a visit. Clear pricing, no hiding extra charges.",
  },
];

interface StepsProps {
  copy?: CopyPayload;
}

function mapCmsSteps(copy?: CopyPayload): StepType[] {
  const steps = getCopyObjectArray(copy, 'steps.items')
    .map((step, index) => {
      const name = typeof step.name === 'string' ? step.name.trim() : '';
      const description = typeof step.description === 'string' ? step.description.trim() : '';
      if (!name || !description) {
        return null;
      }

      return {
        id: index + 1,
        name,
        description,
      } satisfies StepType;
    })
    .filter((step): step is StepType => step !== null);

  return steps.length ? steps : defaultSteps;
}

const Steps = ({ copy }: StepsProps) => {
  const steps = mapCmsSteps(copy);
  const headingLeading = getCopyText(copy, 'steps.headingLeading', 'Quality plastering you can');
  const headingAccent = getCopyText(copy, 'steps.headingAccent', 'trust');

  return (
    <section className="bg-[#1F2937] font-roboto">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Heading */}
          <div className="max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-5xl font-bold leading-[1.4] capitalize text-white">
              {headingLeading}{" "}
              <span className="text-[#D7BFA4]">{headingAccent}</span>
            </h2>
          </div>

          {/* Steps grid */}
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 sm:gap-y-16 lg:mt-0 lg:ml-16 lg:max-w-xl lg:grid-cols-2">
            {steps.map((step) => (
              <Step key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Step = ({ step }: { step: StepType }) => {
  return (
    <dl className="flex flex-col gap-y-3 border-l border-[#D7BFA4] pl-6 text-white">
      <dt className="text-sm leading-6 text-gray-300">{step.description}</dt>
      <dd className="order-first text-3xl text-[#D7BFA4] font-semibold tracking-tight">
        {step.name}
      </dd>
    </dl>
  );
};

export default Steps;
