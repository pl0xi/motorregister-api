import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nummerplade API" },
    { name: "description", content: "Nummerplade API" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1 className="flex justify-center">Nummerplade API</h1>
    </div>
  );
}
