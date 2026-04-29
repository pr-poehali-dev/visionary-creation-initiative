import NavBar from "@/components/reelnat/NavBar";
import LandingSections from "@/components/reelnat/LandingSections";
import ContactForm from "@/components/reelnat/ContactForm";

export default function Index() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans overflow-x-hidden">
      <NavBar scrollTo={scrollTo} />
      <LandingSections scrollTo={scrollTo} />
      <ContactForm scrollTo={scrollTo} />
    </div>
  );
}
