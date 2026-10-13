import { redirect } from "next/navigation";

// Spoke root -> the landing page. (The Hub's own "/" is unaffected; the Hub only proxies /tesway-bike.)
export default function RootPage() {
  redirect("/tesway-bike");
}
