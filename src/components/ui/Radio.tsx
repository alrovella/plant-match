import { Radio as RadioHeadless, type RadioProps } from "@headlessui/react";

const Radio = ({ children, ...props }: RadioProps) => {
  return (
    <RadioHeadless
      {...props}
      className="relative flex bg-white/5 data-[checked]:bg-white/10 shadow-md px-5 py-4 rounded-lg text-white transition cursor-pointer group focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white"
    >
      {children}
    </RadioHeadless>
  );
};

export default Radio;
