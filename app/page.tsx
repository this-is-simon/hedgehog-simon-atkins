import Image from "next/image";
import { Content } from "./main";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Content />
    </main>
  );
}
