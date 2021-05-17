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
    text: "Quel joueur détient le plus grand nombre de victoire (12) ?",
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

const LondonQuestions: { [key: number]: QuizQuestion } = {
  1: {
    text: "Sur quelle surface se joue le tournoi ?",
    choices: ["Parquet", "Gazon", "Dur", "Terre battue"],
    answer: "Gazon",
  },
  2: {
    text: "Quelle est la couleur de tenue majoritaire imposée au joueurs et aux joueuses ?",
    choices: ["Rose", "Noir", "Blanc", "Aucune"],
    answer: "Blanc",
  },
  3: {
    text: "Quel joueur détient le plus grand nombre de victoire (8) ?",
    choices: ["Moi-même", "Novak Djokovic", "Roger Federer", "Björn Borg"],
    answer: "Roger Federer",
  },
  4: {
    text: "A quelle période de l'année se déroule le tournoi ?",
    choices: [
      "Ça dépend des années",
      "En juin/juillet",
      "À la Saint-Glinglin",
      "À la toussaint",
    ],
    answer: "En juin/juillet",
  },
  5: {
    text: "Le match le plus long de l'histoire du tournoi a duré plus de 11h, sur 3 jours différents",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  6: {
    text: "Quel joueuse détient le plus grand nombre de victoire (9) ?",
    choices: [
      "Steffi Graf",
      "Florence Foresti",
      "Une autre",
      "Maria Navratilova",
    ],
    answer: "Maria Navratilova",
  },
  7: {
    text: "Wimbledon figure parmi les plus anciens tournois du circuit, il existe depuis",
    choices: [
      "50 ans",
      "Bientôt 150 ans",
      "Plus de 200 ans",
      "l'arrivée du COVID-19",
    ],
    answer: "Bientôt 150 ans",
  },
  8: {
    text: "Quelle est la dernière joueuse française à avoir gagné le tournoi ?",
    choices: [
      "Amélie Mauresmo",
      "Marion Bartoli",
      "Mimie Mathy",
      "Caroline Garcia",
    ],
    answer: "Marion Bartoli",
  },
  9: {
    text: "Les spectateurs consomment des fraises à la crème",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  10: {
    text: "Quel est le tournoi du grand chelem qui succède à Wimbledon dans le calendrier ?",
    choices: [
      "Roland Garros (Paris)",
      "Le tournoi interne de l'ESHG Tennis",
      "L'US Open (New York)",
      "L'Open d'Australie (Melbourne)",
    ],
    answer: "L'US Open (New York)",
  },
};

const MelbourneQuestions: { [key: number]: QuizQuestion } = {
  1: {
    text: "Sur quelle surface se joue le tournoi ?",
    choices: ["Gazon", "Dur", "Terre battue", "Carrelage"],
    answer: "Dur",
  },
  2: {
    text: "L'Open d'Australie est le premier tournoi du grand chelem de l'année",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  3: {
    text: "Quel joueur détient le plus grand nombre de victoire (9) ?",
    choices: ["Novak Djokovic", "Roger Federer", "Moi-même", "Björn Borg"],
    answer: "Novak Djokovic",
  },
  4: {
    text: "Le tournoi était joué initialement sur gazon",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  5: {
    text: "Quel joueur australien donne son nom au court central ?",
    choices: ["Nick Kyrgios", "Russel Crowe", "Rod Laver", "Lleyton Hewitt"],
    answer: "Rod Laver",
  },
  6: {
    text: "Combien de fois Fabrice Santoro a-t-il disputé le tournoi ?",
    choices: ["17", "0", "28", "12"],
    answer: "17",
  },
  7: {
    text: "Quel est le tournoi du grand chelem qui succède à l'Open d'Australie dans le calendrier ?",
    choices: [
      "Roland Garros (Paris)",
      "Le tournoi des maîtres",
      "L'US Open (New York)",
      "Wimbledon (Londres)",
    ],
    answer: "Roland Garros (Paris)",
  },
  8: {
    text: "Quelle est la couleur des courts sur le tournoi ?",
    choices: ["Rose", "Ocre", "Bleu", "Vert"],
    answer: "Bleu",
  },
  9: {
    text: "L'Open d'Australie est le plus jeune des tournois du grand chelem ?",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  10: {
    text: "Quelle joueuse détient le plus grand nombre de victoire (7) ?",
    choices: [
      "La Reine d'Angleterre",
      "Maria Navratilova",
      "Suzanne Lenglen",
      "Serena Williams",
    ],
    answer: "Serena Williams",
  },
};

const NewYorkQuestions: { [key: number]: QuizQuestion } = {
  1: {
    text: "L'US Open est le premier tournoi du Grand Chelem à avoir instauré la parité dans les récompenses ?",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  2: {
    text: "Quel joueur américain donne son nom au court central ?",
    choices: ["Pete Sampras", "Joe Exotic", "Artur Ashe", "John Isner"],
    answer: "Artur Ashe",
  },
  3: {
    text: "Quel joueur détient le plus grand nombre de victoire (5) ?",
    choices: [
      "Pete Sampras",
      "Roger Federer",
      "Jimmy Connors",
      "Ils sont à égalité",
    ],
    answer: "Ils sont à égalité",
  },
  4: {
    text: "Le court central Artur Ashe est le plus grand du monde, il accueille",
    choices: [
      "23 000 spectateurs",
      "54 367 spectateurs",
      "Ce court n'existe pas",
      "12 387 spectateurs",
    ],
    answer: "22 500 spectateurs",
  },
  5: {
    text: "À quelle période de l'année se joue le tournoi ?",
    choices: [
      "Pendant Thanksgiving",
      "Il se termine toujours à Halloween",
      "À la fin de l'été",
      "En mai",
    ],
    answer: "À la fin de l'été",
  },
  6: {
    text: "Dans quel quartier de New York se déroule l'US Open ?",
    choices: [
      "Central Park, à Manhattan",
      "Flushing Meadows, dans le Queens",
      "Prospect Park, à Brooklyn",
      "Van Cortlandt Park, dans le Bronx",
    ],
    answer: "Flushing Meadows, dans le Queens",
  },
  7: {
    text: "Sur quelle surface se joue le tournoi ?",
    choices: ["Gazon", "Terre battue", "Bitume", "Dur"],
    answer: "Dur",
  },
  8: {
    text: "L'US Open est le dernier tournoi du Grand Chelem de l'année",
    choices: ["Vrai", "Faux"],
    answer: "Vrai",
  },
  9: {
    text: "La France est le pays le plus titré sur le tournoi ?",
    choices: ["Vrai", "Faux"],
    answer: "Faux",
  },
  10: {
    text: "Roger Federer a gagné tous ses titres consécutivement, mais combien de fois en a-t-il remporté le tournoi ?",
    choices: ["3", "8", "5", "7"],
    answer: "5",
  },
};

const data: {
  [key in ThemeNameType]: QuizCity;
} = {
  Paris: ParisQuestions,
  London: LondonQuestions,
  Melbourne: MelbourneQuestions,
  NewYork: NewYorkQuestions,
};

export default data;
