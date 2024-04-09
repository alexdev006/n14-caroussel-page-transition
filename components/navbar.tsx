import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" border-b-2 border-slate-950 p-4 font-bold tracking-tight">
      <div className="flex gap-3">
        <Link href="/">Home</Link>
        <Link href="about">About</Link>
        <Link href="contact">Contact</Link>
      </div>
    </nav>
  );
}
