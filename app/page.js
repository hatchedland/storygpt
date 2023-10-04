import Auth from "./(auth)/layout.js";
import Login from "./(auth)/layout.js";
import Dashboard from "./dashboard/layout.js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-brown-primary1">
      <Dashboard />
    </main>
  )
}
