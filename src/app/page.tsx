import Image from "next/image";
import Show from "./components/Show";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Show />
    </main>
  );
}
