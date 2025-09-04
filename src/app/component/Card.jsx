"use client";

import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faUsers,
  faClock,
  faPlay,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Card = ({
  title = "Machine learning",
  description = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  icon = faBrain,
  players,
  duration,
  difficulty,
  status = "available",
  // onPlay,
  image,
  link,
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);

  const handlePlay = () => {
    if (link) {
      window.open(link, "_blank");
    } else {
      // onPlay();
    }
  };

  // Fonction pour obtenir les couleurs de difficulté
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

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px est le breakpoint md de Tailwind
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isMobile) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculer le centre de la carte
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculer la position relative de la souris par rapport au centre
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculer la rotation (inverser Y pour un effet naturel)
    const rotateY = (mouseX / (rect.width / 2)) * 10; // Max rotation de 10 degrés
    const rotateX = (-mouseY / (rect.height / 2)) * 10; // Max rotation de 10 degrés

    // Normaliser la position de la souris entre 0 et 1 pour l'effet de brillance
    const normalizedX = (e.clientX - rect.left) / rect.width;
    const normalizedY = (e.clientY - rect.top) / rect.height;

    setRotation({ x: rotateX, y: rotateY });
    setMousePosition({ x: normalizedX, y: normalizedY });
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsHovering(false);
    // Réinitialiser l'inclinaison en douceur
    setRotation({ x: 0, y: 0 });
  };

  // Style pour la transformation
  const cardStyle = {
    transform:
      isHovering && !isMobile
        ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)`
        : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: isHovering ? "transform 0.1s" : "transform 0.5s ease",
    position: "relative",
    overflow: "hidden",
  };

  // Style pour l'effet de brillance
  const glowStyle = {
    position: "absolute",
    width: "200%",
    height: "200%",
    top: `-50%`,
    left: `-50%`,
    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
      mousePosition.y * 100
    }%, #9c86be33 0%, transparent 60%)`,
    opacity: isHovering && !isMobile ? 1 : 0,
    transition: "opacity 0.3s ease",
    pointerEvents: "none",
    mixBlendMode: "soft-light",
  };

  return (
    <div
      ref={cardRef}
      className="bg-white border border-zinc-300 shadow-md rounded-bl-lg rounded-tr-lg p-8 max-w-sm text-center hover:shadow-lg"
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Effet de brillance dynamique */}
      <div style={glowStyle}></div>

      {/* Afficher soit l'image soit l'icône */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-bl-lg rounded-tr-lg mb-6"
        />
      ) : (
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-secondary/6 rounded-bl-lg rounded-tr-lg">
          <FontAwesomeIcon icon={icon} className="text-primary text-3xl" />
        </div>
      )}

      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-500 mb-4">{description}</p>

      {/* Informations du jeu si elles sont fournies */}
      {(players || duration || difficulty) && (
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            {players && (
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faUsers} className="w-4 h-4" />
                <span>{players}</span>
              </div>
            )}
            {duration && (
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
                <span>{duration}</span>
              </div>
            )}
          </div>
          {difficulty && (
            <div className="flex justify-center">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                  difficulty
                )}`}
              >
                {difficulty}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Bouton d'action toujours visible */}
      <div className="mt-6">
        {status === "available" ? (
          <Button variant="primary" onClick={handlePlay} borderPosition="left">
            <FontAwesomeIcon icon={faPlay} className="w-4 h-4" />
            Jouer Maintenant
          </Button>
        ) : (
          <Button variant="outline" disabled>
            <FontAwesomeIcon icon={faTrophy} className="w-4 h-4" />
            Bientôt Disponible
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
