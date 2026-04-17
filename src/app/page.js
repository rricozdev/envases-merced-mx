// Probando Tailwind CSS en Next.js 13 con la nueva estructura de carpetas

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-bgligth-main dark:bg-bgdark-main">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-cyan-500">ENVASES</span>{" "}
        <span className="text-emerald-500">LA MERCED</span>{" "}
        <span className="text-cyan-500">MÉXICO</span>
      </h1>
    </main>
  );
}
