import { PartnerCarousel } from "@/components/partners-carousel";
import { Testimonal } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { GraduationCap, Handshake } from "lucide-react";

export default function Home() {
  return (
    <div className="flex w-screen flex-col px-4">
      <h1 className="pt-8 font-mono text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
        The next-generation <br />Computer Science course.
      </h1>
      <h2 className="w-3/4 pt-3 font-mono text-gray-800 dark:text-neutral-300 lg:pt-0">
        Immersive Software Engineering is a radical leap forward; a highly-competitive program that is producing some of the best software engineers in the world.
      </h2>

      <div className="flex flex-col gap-2 pt-4 sm:flex-row">
        <Button size="xl"><Handshake size={32} className="min-h-5 min-w-5" /> Partner</Button>
        <Button size="xl"><GraduationCap size={32} className="min-h-5 min-w-5" /> Study</Button>
      </div>

      <PartnerCarousel />

      <Testimonal />
    </div>
  );
}
