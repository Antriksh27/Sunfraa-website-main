import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  name?: string; // Added for Sunfraa context
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-4 border-white/10",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-white/10" />

      <LogoCard
        className="relative border-r border-b border-white/10 bg-zinc-900/40"
        logo={{
          src: "⚡",
          alt: "Tata Power",
          name: "Tata Power"
        }}
      >
        <PlusIcon
          className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-primary/40"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b border-r border-white/10"
        logo={{
          src: "🏢",
          alt: "Sterling & Wilson",
          name: "Sterling & Wilson"
        }}
      />

      <LogoCard
        className="relative border-r border-b border-white/10 md:bg-zinc-900/40"
        logo={{
          src: "🌱",
          alt: "Adani Green",
          name: "Adani Green"
        }}
      >
        <PlusIcon
          className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-primary/40"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12px] -left-[12px] absolute z-10 hidden size-6 md:block text-primary/40"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="relative border-b border-white/10 bg-zinc-900/40 md:bg-transparent"
        logo={{
          src: "🏛️",
          alt: "Reliance Solar",
          name: "Reliance Solar"
        }}
      />

      <LogoCard
        className="relative border-r border-b border-white/10 bg-zinc-900/40 md:border-b-0 md:bg-transparent"
        logo={{
          src: "🇮🇳",
          alt: "PM Surya Ghar",
          name: "PM Surya Ghar"
        }}
      >
        <PlusIcon
          className="-right-[12px] -bottom-[12px] md:-left-[12px] absolute z-10 size-6 md:hidden text-primary/40"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b border-white/10 bg-transparent md:border-r md:border-b-0 md:bg-zinc-900/40"
        logo={{
          src: "📜",
          alt: "ALMM Certified",
          name: "ALMM Certified"
        }}
      />

      <LogoCard
        className="border-r border-white/10"
        logo={{
          src: "🌐",
          alt: "GEDA Energy",
          name: "GEDA Energy"
        }}
      />

      <LogoCard
        className="bg-zinc-900/40"
        logo={{
          src: "🏨",
          alt: "Marriott Group",
          name: "Marriott Group"
        }}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-white/10" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-transparent px-4 py-4 md:p-6 transition-all duration-500 hover:bg-zinc-800/10 group h-full",
        className
      )}
      {...props}
    >
      <div className="text-3xl lg:text-4xl mb-2 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-100 group-hover:scale-110">
         {logo.src}
      </div>
      <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-primary transition-colors">
         {logo.name}
      </div>
      {children}
    </div>
  );
}
