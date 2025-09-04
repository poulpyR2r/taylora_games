"use client";

import Card from "./component/Card";
import Button from "./component/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faClock,
  faPlay,
  faTrophy,
  faPuzzlePiece,
  faRocket,
  faCrown,
  faBrain,
  faUserFriends,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import { CallToAction } from "./component/CallToAction";
import Footer from "./component/Footer";

export default function TayloraGamesLobby() {
  const games = [
    {
      id: 1,
      title: "WikiRace",
      description:
        "WikiRace est un jeu où l’on relie deux pages Wikipédia en un minimum de clics.",
      players: "1-10 joueurs",
      duration: "15-30 min",
      difficulty: "Facile",
      icon: faPuzzlePiece,
      status: "available",
      image: "/wikirace.png",
      link: "https://games.wikirace.taylora.fr/",
    },
    // {
    //   id: 2,
    //   title: "Speed Runner",
    //   description:
    //     "Course contre la montre dans des niveaux pleins d'obstacles",
    //   players: "1-2 joueurs",
    //   duration: "5-10 min",
    //   difficulty: "Facile",
    //   icon: faRocket,
    //   status: "available",
    //   image: "/speed-runner.jpg",
    // },
    // {
    //   id: 3,
    //   title: "Strategy Empire",
    //   description: "Construisez votre empire et dominez le monde",
    //   players: "2-6 joueurs",
    //   duration: "45-90 min",
    //   difficulty: "Difficile",
    //   icon: faCrown,
    //   status: "coming-soon",
    //   image: "/strategy-empire.jpg",
    // },
    // {
    //   id: 4,
    //   title: "Memory Challenge",
    //   description:
    //     "Testez votre mémoire avec des séquences de plus en plus complexes",
    //   players: "1 joueur",
    //   duration: "10-20 min",
    //   difficulty: "Facile",
    //   icon: faBrain,
    //   status: "available",
    //   image: "/memory-challenge.jpg",
    // },
    // {
    //   id: 5,
    //   title: "Team Quest",
    //   description:
    //     "Aventure coopérative où l'équipe doit résoudre des défis ensemble",
    //   players: "3-8 joueurs",
    //   duration: "30-60 min",
    //   difficulty: "Intermédiaire",
    //   icon: faUserFriends,
    //   status: "available",
    // },
    // {
    //   id: 6,
    //   title: "Logic Maze",
    //   description:
    //     "Naviguez dans des labyrinthes logiques de plus en plus complexes",
    //   players: "1 joueur",
    //   duration: "20-40 min",
    //   difficulty: "Difficile",
    //   icon: faRoute,
    //   status: "coming-soon",
    // },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Facile":
        return "text-green-600 bg-green-50";
      case "Intermédiaire":
        return "text-orange-600 bg-orange-50";
      case "Difficile":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="border-b border-gray-200/50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-xl font-semibold text-gray-900">
                Taylora Games
              </h1>
            </div>
            {/* <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Accueil
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Mes Parties
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Classements
              </a>
              <Button
                variant="primary"
                borderPosition="left"
              >
                Connexion
              </Button>
            </nav> */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 text-balance">
            Découvrez & Jouez
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Une collection de jeux modernes conçus pour stimuler votre esprit et
            créer des moments inoubliables entre amis.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Card
              key={game.id}
              title={game.title}
              description={game.description}
              icon={game.icon}
              players={game.players}
              duration={game.duration}
              difficulty={game.difficulty}
              status={game.status}
              image={game.image}
              link={game.link}
            />
          ))}
        </div>

        {/* Call to Action */}
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
