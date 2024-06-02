import { aboutYou } from "@/lib/data";

export default function Intro() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-2 p-4 h-fit static">
      {/* Title/Name */}
      <p className="text-2xl font-bold tracking-tight">
        {aboutYou.name}
      </p>
      {/* Description */}
      <p className="text-md text-muted-foreground tracking-tight">
        {aboutYou.description}
      </p>
    </div>
  );
}
