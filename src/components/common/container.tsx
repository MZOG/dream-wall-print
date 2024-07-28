import { ContainerProps } from "@/types/container";
import { cn } from "@/lib/utils";

export default function Container({
  section = true,
  width,
  className,
  children,
}: ContainerProps) {
  if (section) {
    return (
      <section
        className={cn("px-5 mx-auto", width ? width : "max-w-7xl", className)}
      >
        {children}
      </section>
    );
  }
}
