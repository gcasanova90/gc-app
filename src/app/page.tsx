import Image from "next/image";
import { SignIn } from "@/app/features/auth/signin-button";

export default function Home() {
    return (
        <main>
            <h1>Default</h1>
            <p>Welcome to your dashboard.</p>
            <SignIn></SignIn>
        </main>
    );
}
