import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Haulv React Router App" },
    { name: "description", content: "Welcome Haulv to learn React !" },
  ];
}

export default function Home() {
  return <Welcome />;
}
