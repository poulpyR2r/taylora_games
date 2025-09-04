import React, { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Configuration pour le partage social media
  const shareConfig = {
    title: "Taylora - Games",
    description:
      "Taylora, votre agence web spécialisée dans la création de sites internet, e-commerce, applications mobiles et marketing digital.",
    url: "https://games.taylora.fr",
  };

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareConfig.url
    )}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareConfig.title
    )}&url=${encodeURIComponent(shareConfig.url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareConfig.url
    )}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      shareConfig.title + " " + shareConfig.url
    )}`,
    email: `mailto:?subject=${encodeURIComponent(
      shareConfig.title
    )}&body=${encodeURIComponent(
      shareConfig.description + " " + shareConfig.url
    )}`,
  };

  const handleShare = (platform) => {
    const shareUrl = shareUrls[platform];
    if (shareUrl) {
      window.open(
        shareUrl,
        "_blank",
        "width=600,height=400,scrollbars=yes,resizable=yes"
      );
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/taylora-studio/",
      icon: "linkedin",
    },
    {
      name: "Discord",
      url: "https://discord.gg/RWtrwtNz",
      icon: "discord",
    },
  ];

  return (
    <footer className=" border-t border-zinc-200 py-16 mt-auto">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Colonne logo et info */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-zinc-900 mb-1">
                Taylora
              </h3>
              <p className="text-zinc-500 text-sm">Développeur & Designer</p>
            </div>
            <p className="text-zinc-600 text-sm mb-6">
              Création de sites web sur mesure, alliant performance, design
              intuitif et identité visuelle distinctive.
            </p>
            <p className="text-zinc-500 text-sm">Basé à Paris, France</p>
          </div>

          {/* Colonne navigation */}
          <div className="md:col-span-1">
            <h4 className="text-zinc-900 font-medium mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  Accueil
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne contact */}
          <div className="md:col-span-1">
            <h4 className="text-zinc-900 font-medium mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 mb-6">
              <li className="text-zinc-600">
                <a
                  href="mailto:contact@taylora.fr"
                  className="hover:text-zinc-900 transition-colors"
                >
                  contact@taylora.fr
                </a>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="h-10 w-10 rounded-full bg-zinc-200 hover:bg-zinc-900 flex items-center justify-center text-zinc-600 hover:text-white transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>

            {/* Boutons de partage social media */}
            <div>
              <h5 className="text-zinc-900 font-medium mb-3 text-sm uppercase tracking-wider">
                Partager
              </h5>
              <div className="flex space-x-3">
                <ShareButton platform="facebook" onShare={handleShare} />
                <ShareButton platform="twitter" onShare={handleShare} />
                <ShareButton platform="linkedin" onShare={handleShare} />
                <ShareButton platform="whatsapp" onShare={handleShare} />
                <ShareButton platform="email" onShare={handleShare} />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="pt-8 mt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>&copy; {currentYear} Taylora . Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a
              href="https://taylora.fr/politique-confidentialite"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              Politique de confidentialité
            </a>
            <a
              href="https://taylora.fr/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              Cookies
            </a>
            <a
              href="https://taylora.fr/mentions-legales"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Composant pour les boutons de partage
const ShareButton = ({ platform, onShare }) => {
  const getIcon = () => {
    switch (platform) {
      case "facebook":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case "twitter":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case "whatsapp":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        );
      case "email":
        return (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button
      onClick={() => onShare(platform)}
      className="h-8 w-8 rounded-full bg-zinc-200 hover:bg-zinc-900 flex items-center justify-center text-zinc-600 hover:text-white transition-colors cursor-pointer"
      aria-label={`Partager sur ${platform}`}
    >
      {getIcon()}
    </button>
  );
};

// Composant pour les icônes sociales
const SocialIcon = ({ name }) => {
  switch (name) {
    case "linkedin":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );

    case "discord":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
        </svg>
      );

    default:
      return null;
  }
};

export default Footer;
