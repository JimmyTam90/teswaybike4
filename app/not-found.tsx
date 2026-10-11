import "./globals.css";
export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-display text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-slate-300">That page does not exist.</p>
      <a href="/tesway-bike" className="mt-6 inline-flex min-h-[48px] items-center rounded-lg bg-eco px-5 font-bold text-white">Go to the Tesway guide</a>
    </main>
  );
}
