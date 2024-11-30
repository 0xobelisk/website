import { BenchmarkNumberOfModules } from "./PackBenchmarks";
import { PackDropdown } from "./PackDropdown";

export function PackBenchmarksPicker(props: {
  setNumberOfModules: (num: BenchmarkNumberOfModules) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <a
        className="dark:text-[#888888]  hover:underline underline-offset-4 text-[#666666] text-sm"
        href="https://github.com/0xobelisk/obelisk-engine"
      >
        Components
      </a>
      <PackDropdown
        onOptionSelected={(value) => props.setNumberOfModules(value)}
      />
    </div>
  );
}
