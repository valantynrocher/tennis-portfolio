import { ThemeNameType } from "../../themes";

export interface QuizQuestion {
  text: string;
  choices: string[];
  answer: string;
}

export interface QuizCity {
  [key: number]: QuizQuestion;
}

const ParisQuestions: { [key: number]: QuizQuestion } = {
  1: {
    text: "Sur quelle surface se joue le tournoi ?",
    choices: ["Gazon", "Parquet", "Terre battue", "Dur"],
    answer: "Terre battue",
  },
  2: {
    text: "L'une de mes 2 seules journées passés à Roland Garros était une finale Djokovic-Murray",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  3: {
    text: "Quel joueur détient le plus grand nombre de victoire ?",
    choices: ["Roger Federer", "Rafael Nadal", "Pete Sampras", "Moi-même"],
    answer: "Rafael Nadal",
  },
  4: {
    text: "A quelle période de l'année se déroule le tournoi ?",
    choices: [
      "En mai/Juin",
      "A noël",
      "Ça dépend des années",
      "A la toussaint",
    ],
    answer: "En mai/Juin",
  },
  5: {
    text: "Roland Garros était un aviateur",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  6: {
    text: "Quelle femme donne son nom au deuxième court central ?",
    choices: [
      "Steffi Graf",
      "Amélie Mauresmo",
      "Eva Longoria",
      "Suzanne Lenglen",
    ],
    answer: "Suzanne Lenglen",
  },
  7: {
    text: "Quelle sont les dernières joueuses françaises vainqueurs du tournoi de double ?",
    choices: [
      "Mary Pierce/Amélie Mauresmo",
      "Caroline Garcia/Kristina Mladenovic",
      "Gail Sheerriff/Françoise Dürr",
      "Laëtitia Milot/Marina Foïs",
    ],
    answer: "Caroline Garcia/Kristina Mladenovic",
  },
  8: {
    text: "Quel est le seul français à avoir gagné le tournoi ?",
    choices: [
      "Jo-Wilfried Tsonga",
      "Moi-même",
      "Yannick Noah",
      "Zinedine Zidane",
    ],
    answer: "Yannick Noah",
  },
  9: {
    text: "L'une de mes 2 seules journées passés à Roland Garros s'est déroulée sans aucune minute jouée à cause de la pluie",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  10: {
    text: "Quel est le tournoi du grand chelem qui précède Roland Garros dans le calendrier ?",
    choices: [
      "Wimbledon (Londres)",
      "L'US Open (New York)",
      "Le challenger de Bressuire",
      "L'Open d'Australie (Melbourne)",
    ],
    answer: "L'Open d'Australie (Melbourne)",
  },
};

const data: {
  [key in ThemeNameType]: QuizCity;
} = {
  Paris: ParisQuestions,
  London: ParisQuestions,
  Melbourne: ParisQuestions,
  NewYork: ParisQuestions,
};

export default data;
