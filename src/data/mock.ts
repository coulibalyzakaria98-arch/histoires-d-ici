import { Site, Story } from '../types';

export const sites: Site[] = [
  {
    id: 'rocher-amoureux',
    name: 'Le Rocher des Amoureux',
    location: 'San-Pedro, Côte d\'Ivoire',
    tagline: 'Légendes de granit & rivages sacrés',
    description: 'Situé sur la plage municipale de San-Pedro, ce site naturel remarquable se compose d\'impressionnants blocs de granit gris perle et ocre. Ces formations sculptées par le temps sont le théâtre de récits ancestraux liés au respect des interdits.',
    imageUrl: '/IMAGES/Le Rocher des Amoureux/hero-1.jpg',
    themeColor: '#F77F00',
    coordinates: { lat: 4.75, lng: -6.63 },
    stats: [
      { label: "Siècle", value: "XIXe" },
      { label: "Hauteur", value: "~15m" },
      { label: "Nature", value: "Granit" },
      { label: "Statut", value: "Sacré" }
    ],
    keyPoints: [
      { icon: "💔", text: "Symbole d'amour interdit" },
      { icon: "🗿", text: "Pétrification symbolique" },
      { icon: "🌊", text: "Gardien du rivage sacré" },
      { icon: "📜", text: "Mémoire collective" }
    ],
    timeline: [
      { year: "Avant 1800", title: "Un village prospère", description: "Un village côtier vit en harmonie avec la mer.", icon: "🏘️" },
      { year: "Transgression", title: "L'interdit brisé", description: "Un jeune homme brave l'interdit sacré.", icon: "⚡" },
      { year: "Métamorphose", title: "Apparition du Rocher", description: "Le rocher émerge des flots.", icon: "🗿" },
      { year: "Aujourd'hui", title: "Lieu de mémoire", description: "Le site rappelle le respect des traditions.", icon: "🙏" }
    ],
    culturalSignificance: [
      { icon: "🌍", title: "Signification culturelle", content: "Le Rocher incarne la mémoire vivante des interdits fondateurs." },
      { icon: "🎭", title: "Dans la tradition", content: "Les anciens racontent cette histoire lors des veillées." }
    ],
    galleryImages: [
      '/IMAGES/Le Rocher des Amoureux/hero-1.jpg',
      '/IMAGES/Le Rocher des Amoureux/gallery-1.jpg',
      '/IMAGES/Le Rocher des Amoureux/gallery-2.jpg',
      '/IMAGES/Le Rocher des Amoureux/gallery-3.jpg'
    ],
    quote: "Les pierres parlent à qui sait écouter le vent du large.",
    practicalInfo: [
      { icon: "⏰", label: "Moment idéal", value: "Coucher du soleil" },
      { icon: "🏖️", label: "Accès", value: "Plage municipale" },
      { icon: "🎟️", label: "Entrée", value: "Libre" }
    ]
  },
  {
    id: 'place-saint-pierre',
    name: 'Place Saint-Pierre',
    location: 'San-Pedro, Côte d\'Ivoire',
    tagline: 'Cœur battant & héritage maritime',
    description: 'Située au centre de San-Pedro, la Place Saint-Pierre est le point de ralliement des citoyens et le témoin de l\'essor du port.',
    imageUrl: '/IMAGES/Place Saint-Pierre San-Pedro/hero-1.jpg',
    themeColor: '#5C3A21',
    coordinates: { lat: 4.74, lng: -6.62 },
    stats: [
      { label: "Fondation", value: "1970" },
      { label: "Style", value: "Moderne" },
      { label: "Rôle", value: "Civique" },
      { label: "Port", value: "N°1 Cacao" }
    ],
    timeline: [
      { year: "1968", title: "Projet San-Pedro", description: "Lancement de la construction de la ville nouvelle.", icon: "🏗️" },
      { year: "1971", title: "Inauguration", description: "Le port devient opérationnel.", icon: "🚢" }
    ],
    culturalSignificance: [
      { icon: "☕", title: "Or Brun", content: "La place symbolise la puissance économique du cacao." }
    ],
    galleryImages: [
      '/IMAGES/Place Saint-Pierre San-Pedro/hero-1.jpg'
    ],
    quote: "San-Pedro, là où la forêt rencontre l'océan.",
    practicalInfo: [
      { icon: "⏰", label: "Horaires", value: "24h/24" },
      { icon: "🎟️", label: "Accès", value: "Libre" }
    ]
  },
  {
    id: 'cascade-man',
    name: 'La Cascade de Man',
    location: 'Man, Côte d\'Ivoire',
    tagline: 'Entre mythe et fraîcheur naturelle',
    description: 'Une chute d\'eau spectaculaire offrant un spectacle naturel apaisant, lieu de purification ancestrale.',
    imageUrl: '/IMAGES/La Cascade de Man/hero-1.jpg',
    themeColor: '#009B48',
    coordinates: { lat: 7.42, lng: -7.58 },
    stats: [
      { label: "Hauteur", value: "~100m" },
      { label: "Température", value: "22°C" },
      { label: "Chutes", value: "7" },
      { label: "Statut", value: "Sacrée" }
    ],
    timeline: [
      { year: "Ancien", title: "Génies des eaux", description: "Esprits bienveillants du Tonkpi.", icon: "💧" },
      { year: "Légende", title: "Princesse", description: "Une princesse chercha refuge dans ces eaux.", icon: "👸" }
    ],
    galleryImages: [
      '/IMAGES/La Cascade de Man/hero-1.jpg',
      '/IMAGES/La Cascade de Man/gallery-1.jpg'
    ],
    quote: "Là où l'eau danse, les esprits murmurent leurs secrets.",
    practicalInfo: [
      { icon: "⏰", label: "Période", value: "Novembre à Mars" },
      { icon: "🎟️", label: "Entrée", value: "1000 FCFA" }
    ]
  },
  {
    id: 'village-kong',
    name: 'Village Historique de Kong',
    location: 'Kong, Côte d\'Ivoire',
    tagline: 'Berceau de l\'architecture soudanaise',
    description: 'Ancien carrefour commercial et culturel, Kong abrite des mosquées de style soudanais séculaires.',
    imageUrl: '/IMAGES/Village Historique de Kong/hero-1.jpg',
    themeColor: '#FFB347',
    coordinates: { lat: 9.15, lng: -4.61 },
    stats: [
      { label: "Siècle", value: "XVe" },
      { label: "Mosquées", value: "7" },
      { label: "Remparts", value: "~500m" },
      { label: "UNESCO", value: "Candidat" }
    ],
    timeline: [
      { year: "XVe", title: "Fondation", description: "Kong devient un carrefour majeur.", icon: "🏛️" },
      { year: "XVIIe", title: "Âge d'or", description: "Contrôle des routes de l'or.", icon: "💰" }
    ],
    galleryImages: [
      '/IMAGES/Village Historique de Kong/hero-1.jpg',
      '/IMAGES/Village Historique de Kong/gallery-1.jpg'
    ],
    quote: "Kong, mémoire vivante de l'Afrique commerçante.",
    practicalInfo: [
      { icon: "⏰", label: "Horaires", value: "8h - 17h" },
      { icon: "🎟️", label: "Entrée", value: "1000 FCFA" }
    ]
  }
];

export const stories: Story[] = [
  {
    id: 'symbole-interdit',
    siteId: 'rocher-amoureux',
    title: 'Le Symbole de l\'Interdit',
    excerpt: 'Une leçon de respect de la nature où la pierre symbolise l\'acte d\'amour bravant les lois du village.',
    content: 'Autrefois, un village prospérait en ce lieu, vivant selon des interdits traditionnels stricts. Il était défendu d’avoir des relations intimes en bordure de mer. Un jour, un jeune homme brava cet interdit. Pour marquer ce geste, le Rocher apparut. Contrairement aux idées reçues, ces pierres ne sont pas des humains pétrifiés, mais des symboles de chair et de désir disposés pour l’éternité, rappelant à tous le caractère sacré du rivage.',
    duration: '3:45',
    author: 'Tradition Orale (San-Pedro)',
    audioUrl: '#'
  },
  {
    id: 'essor-san-pedro',
    siteId: 'place-saint-pierre',
    title: 'Une place chargée d\'histoire',
    excerpt: 'Le cœur historique de San-Pedro, où l\'architecture coloniale rencontre l\'effervescence maritime.',
    content: 'La Place Saint-Pierre est le cœur historique et culturel de San-Pedro. Depuis l\'époque coloniale, elle rassemble commerçants, pêcheurs et habitants autour de sa fontaine centrale. Son nom rend hommage à Saint-Pierre, le patron des pêcheurs, rappelant l\'importance de la mer pour cette ville portuaire. Les bâtiments blancs aux balcons en fer forgé témoignent de l\'architecture créole ouest-africaine. Aujourd\'hui, elle reste le lieu de rassemblement incontournable, où se mêlent traditions locales et modernité.',
    duration: '3:45',
    author: 'Mémoire vivante de San-Pedro',
    audioUrl: '#'
  },
  {
    id: 'le-gardien-eau',
    siteId: 'cascade-man',
    title: 'La Légende des Génies des Eaux',
    excerpt: 'Le murmure de la cascade cache la voix de son protecteur millénaire.',
    content: 'Au creux de la montagne, là où l\'eau chante depuis des siècles, vivent les génies protecteurs des cascades. On raconte qu\'une princesse venue d\'un royaume lointain chercha refuge dans ces eaux tumultueuses pour échapper à un mariage forcé. Les génies transformèrent ses larmes en une cascade éternelle.',
    duration: '5:18',
    author: 'Les Anciens de Man',
    audioUrl: '#'
  },
  {
    id: 'mosquee-kong',
    siteId: 'village-kong',
    title: 'La Capitale Oubliée',
    excerpt: 'Une plongée dans le temps au cœur de l\'architecture soudanaise et des secrets de l\'empire de Kong.',
    content: 'Kong fut autrefois la capitale d\'un puissant empire commerçant qui s\'étendait sur toute l\'Afrique de l\'Ouest. Ses mosquées en terre battue racontent l\'histoire d\'une ville savante, où se croisaient marchands et lettrés. Aujourd\'hui, les murs murmurent encore les secrets des caravanes disparues.',
    duration: '6:02',
    author: 'Gardiens de la Mémoire',
    audioUrl: '#'
  }
];
