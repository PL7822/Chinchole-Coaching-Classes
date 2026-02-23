import { useCountUp } from "@/hooks/use-count-up";
import { LucideIcon } from "lucide-react";

interface AnimatedStatProps {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

const AnimatedStat = ({ icon: Icon, value, suffix, label }: AnimatedStatProps) => {
  const { count, ref } = useCountUp(value);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-lg"
    >
      <Icon className="mb-2 text-secondary" size={28} />
      <span className="font-heading text-2xl font-bold text-primary">
        {count}
        {suffix}
      </span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
};

export default AnimatedStat;
