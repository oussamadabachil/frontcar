import AllTestimonial from "../../../components/AllTestimonial";
import ProfilDriver from "../../../components/ProfilDriver";
import React from "react";
import "../../../styles/AllTestimonial.css";
import "../../../styles/WriteTestimonial.css";
import HeadingT from "../../../components/HeadingT";

const STATIC_TESTIMONIALS = [
  {
    _id: "1",
    username: "Sophie Martin",
    rating: 5,
    content: "Trajet parfait, chauffeur très ponctuel et professionnel. L'habitacle était impeccable. Je recommande vivement !",
    date: "2024-11-15T09:30:00.000Z",
  },
  {
    _id: "2",
    username: "Thomas Dupont",
    rating: 5,
    content: "Excellent service, Mourad est arrivé à l'heure pile. Voiture propre et confortable pour mon trajet Paris-CDG.",
    date: "2024-12-03T14:10:00.000Z",
  },
  {
    _id: "3",
    username: "Amina Benali",
    rating: 4,
    content: "Très bon chauffeur, à l'écoute et discret. Légèrement en retard mais a prévenu à l'avance. Bonne expérience globale.",
    date: "2025-01-08T08:00:00.000Z",
  },
  {
    _id: "4",
    username: "Jean-Pierre Leclerc",
    rating: 5,
    content: "Service irréprochable du début à la fin. Mourad connaît parfaitement les itinéraires pour éviter les embouteillages.",
    date: "2025-01-20T17:45:00.000Z",
  },
  {
    _id: "5",
    username: "Nadia Rousseau",
    rating: 5,
    content: "Deuxième fois que je fais appel à ce chauffeur. Toujours aussi professionnel, véhicule propre et climatisé. Parfait !",
    date: "2025-02-11T11:20:00.000Z",
  },
  {
    _id: "6",
    username: "Karim Ouali",
    rating: 4,
    content: "Bon chauffeur, conduite souple et sécurisée. Je me suis senti en confiance tout au long du trajet.",
    date: "2025-02-27T16:00:00.000Z",
  },
  {
    _id: "7",
    username: "Claire Fontaine",
    rating: 5,
    content: "Accueil chaleureux, bouteille d'eau à disposition, musique agréable. Un trajet très agréable, merci !",
    date: "2025-03-05T07:15:00.000Z",
  },
];

const STATIC_RATING = 4.7;

const STATIC_SERVICES = [
  { ponctualite: true, professionnalisme: true, proprete: true, confort: true },
  { ponctualite: true, professionnalisme: true, proprete: true, confort: false },
  { ponctualite: false, professionnalisme: true, proprete: true, confort: true },
  { ponctualite: true, professionnalisme: true, proprete: false, confort: true },
  { ponctualite: true, professionnalisme: true, proprete: true, confort: true },
  { ponctualite: true, professionnalisme: false, proprete: true, confort: true },
  { ponctualite: true, professionnalisme: true, proprete: true, confort: true },
];

export default function Page() {
  return (
    <>
      <section className="section-testimonial-page">
        <HeadingT />
        <ProfilDriver ratingss={STATIC_RATING} servicess={STATIC_SERVICES} />
        <AllTestimonial testimonialss={STATIC_TESTIMONIALS} />
      </section>
    </>
  );
}
