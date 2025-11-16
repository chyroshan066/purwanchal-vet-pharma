import { About } from "@/components/About/About";
import { Offer } from "@/components/Offer";
import { Team } from "@/components/Team/Team";

export default function AboutPage() {
    return (
        <>
            <About className="mt-5" />
            <Offer />
            <Team />
        </>
    );
}