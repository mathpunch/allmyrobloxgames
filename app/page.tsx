import { games } from "../games";

export default function Home() {
  return (
    <div className="app-bg min-h-screen py-8 px-2 flex flex-col items-center">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-white tracking-tight text-center drop-shadow-lg">
          My Roblox Games
        </h1>
        <p className="text-gray-400 text-center mt-2 max-w-xl mx-auto">
          Explore my collection of custom Roblox games! Click on a game to play or learn more.
        </p>
      </header>
      <main className="w-full max-w-2xl flex flex-col gap-8">
        {games.map((game) => (
          <a
            key={game.title}
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="game-card block rounded-xl bg-gradient-to-br from-gray-800/90 to-gray-700/80 hover:from-gray-700/90 hover:to-gray-800/80 border border-gray-700 shadow-lg transition-all duration-200 hover:scale-[1.02]"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-2">{game.title}</h2>
              <p className="whitespace-pre-line text-gray-300 text-base">{game.bio}</p>
              <span className="inline-block mt-4 text-sm text-blue-400 hover:underline">
                Play on Roblox &rarr;
              </span>
            </div>
          </a>
        ))}
      </main>
      <footer className="mt-12 text-gray-500 text-center text-xs">
        &copy; {new Date().getFullYear()} My Roblox Games
      </footer>
    </div>
  );
}
