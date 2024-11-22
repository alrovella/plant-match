import clsx from "clsx";
import { Input, Label } from "@headlessui/react";
export default function InputWithLabel({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: string;
  onChange: (value: string) => void;
}) {
  return (
    <>
      <Label className="font-medium text-sm/6 text-white">{label}</Label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={clsx(
          "block bg-white/5 mt-3 px-3 py-1.5 border-none rounded-lg w-full text-sm/6 text-white",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        )}
      />
    </>
  );
}
