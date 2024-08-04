import {ContainerProps} from "@/types/container";
import {cn} from "@/lib/utils";

export default function Container({
                                    section,
                                    width,
                                    className,
                                    children,
                                    full,
                                    fullClassName
                                  }: ContainerProps) {
  if (section) {
    return (
      <section
        className={cn("px-5 mx-auto", width ? width : "max-w-6xl", className)}
      >
        {children}
      </section>
    );
  }

  if (full) {
    return (
      <section className={fullClassName}>
        <div className={cn("px-5 mx-auto", width ? width : "max-w-6xl", className)}>
          {children}
        </div>
      </section>
    )
  }

  return (
    <div className={cn("px-5 mx-auto", width ? width : "max-w-6xl", className)}>
      {children}
    </div>
  );
}
