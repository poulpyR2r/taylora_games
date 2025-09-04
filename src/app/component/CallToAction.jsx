import React, { useState } from "react";
import Button from "./Button";

export const CallToAction = ({ websiteUrl }) => {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-light text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Vous avez un projet similaire ?
          </h2>
          <p
            className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Nous sommes prêts à vous accompagner dans la réalisation de votre
            projet. Discutons ensemble de vos idées et objectifs pour créer une
            solution sur mesure.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              borderPosition="left"
              onClick={() => (window.location.href = "mailto:contact@taylora.fr")}
            >
              Discutons de votre projet
            </Button>

            {websiteUrl && (
              <Button
                to={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                borderPosition={"left"}
                variant="outline"
              >
                Visiter le site
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
