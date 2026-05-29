// Programmatic SEO — one differentiated page per métier (Personas playbook).
// Each entry must carry unique value: real pains, real examples, real FAQ.

export interface Solution {
  slug: string;
  icon: 'anchor' | 'car' | 'plane' | 'hammer' | 'sparkles';
  metier: { fr: string; en: string };
  seoTitle: { fr: string; en: string };
  seoDescription: { fr: string; en: string };
  h1: { fr: string; en: string };
  intro: { fr: string; en: string };
  pains: { fr: { title: string; desc: string }[]; en: { title: string; desc: string }[] };
  connect: { fr: string[]; en: string[] };
  example: {
    fr: { situation: string; solution: string; result: string };
    en: { situation: string; solution: string; result: string };
  };
  faq: { fr: { q: string; a: string }[]; en: { q: string; a: string }[] };
}

export const solutions: Solution[] = [
  {
    slug: "renovation-yachts",
    icon: "anchor",
    metier: { fr: "rénovation de yachts", en: "yacht refit" },
    seoTitle: {
      fr: "Suivi de chantier et pilotage de marge pour atelier de rénovation de yachts | Optialys",
      en: "Project tracking and margin piloting for yacht refit workshops | Optialys"
    },
    seoDescription: {
      fr: "Refits qui dépassent leur budget sans alerte, heures notées à la main, achats dispersés. Optialys connecte vos outils pour piloter la marge de chaque refit en temps réel.",
      en: "Refits that run over budget without warning, hours noted by hand, scattered purchases. Optialys connects your tools to pilot the margin of every refit in real time."
    },
    h1: {
      fr: "Infrastructure opérationnelle pour ateliers de rénovation de yachts",
      en: "Operational infrastructure for yacht refit workshops"
    },
    intro: {
      fr: "Un refit, c'est des centaines d'heures, des achats lourds et des imprévus sur plusieurs mois. La marge se joue sur le suivi — et elle reste invisible jusqu'à la livraison. On connecte vos outils pour que chaque heure et chaque euro remontent en temps réel, rattachés au bon bateau.",
      en: "A refit means hundreds of hours, heavy purchases and surprises spread over months. Margin is decided by tracking — and it stays invisible until delivery. We connect your tools so every hour and every euro flow up in real time, tied to the right vessel."
    },
    pains: {
      fr: [
        { title: "La marge d'un refit ne se voit qu'à la fin", desc: "Heures, sous-traitants, pièces : tout s'additionne sans alerte. Le dépassement se découvre à la facture, quand il est trop tard pour le facturer en avenant." },
        { title: "Les heures terrain partent en fumée", desc: "Notées sur des feuilles, parfois jamais ressaisies. Impossible de savoir précisément combien de temps a coûté tel poste sur tel bateau." },
        { title: "Les achats de pièces sont dispersés", desc: "Entre emails fournisseurs, factures papier et commandes urgentes, le budget pièces d'un refit est presque impossible à suivre en direct." }
      ],
      en: [
        { title: "A refit's margin only appears at the end", desc: "Hours, subcontractors, parts: it all adds up without warning. The overrun surfaces on the invoice, too late to bill as a change order." },
        { title: "Field hours go up in smoke", desc: "Noted on sheets, sometimes never re-keyed. Impossible to know exactly how much time a given task cost on a given vessel." },
        { title: "Parts purchases are scattered", desc: "Between supplier emails, paper invoices and urgent orders, a refit's parts budget is nearly impossible to track live." }
      ]
    },
    connect: {
      fr: [
        "Pointage des heures sur mobile, rattaché au bateau et au poste de budget",
        "Achats de pièces centralisés et liés au refit concerné",
        "Alerte automatique dès qu'un poste approche de son seuil de budget",
        "Tableau de bord marge par refit, consultable depuis le téléphone"
      ],
      en: [
        "Mobile hour logging, tied to the vessel and budget line",
        "Parts purchases centralized and linked to the relevant refit",
        "Automatic alert as soon as a line nears its budget threshold",
        "Margin-per-refit dashboard, viewable from your phone"
      ]
    },
    example: {
      fr: {
        situation: "Les heures passées sur chaque refit sont notées sur des feuilles, ressaisies en fin de semaine — quand elles le sont.",
        solution: "Chaque technicien pointe en deux gestes sur mobile. L'heure remonte en direct, rattachée au bon bateau et au bon poste. Les achats fournisseurs sont liés au refit automatiquement.",
        result: "Marge réelle visible en cours de chantier, alerte avant dépassement, plus aucune heure perdue."
      },
      en: {
        situation: "Hours spent on each refit are written on sheets, re-keyed at the end of the week — when they are at all.",
        solution: "Each technician logs in two taps on mobile. The hour flows up live, tied to the right vessel and line. Supplier purchases are linked to the refit automatically.",
        result: "Real margin visible during the project, alerts before overruns, no more lost hours."
      }
    },
    faq: {
      fr: [
        { q: "On a déjà un logiciel de gestion de chantier naval. Vous le remplacez ?", a: "Non. On le connecte. Vos données existantes remontent dans un système central qui les fait enfin parler avec votre facturation et vos achats." },
        { q: "Nos techniciens travaillent souvent sans réseau sur le port.", a: "Le pointage fonctionne hors connexion et se synchronise dès que le réseau revient. Aucune heure perdue." }
      ],
      en: [
        { q: "We already have marine project software. Do you replace it?", a: "No. We connect it. Your existing data flows into a central system that finally makes it talk to your invoicing and purchasing." },
        { q: "Our technicians often work with no signal on the dock.", a: "Logging works offline and syncs as soon as the network is back. No hours lost." }
      ]
    }
  },
  {
    slug: "voitures-collection",
    icon: "car",
    metier: { fr: "restauration de voitures de collection", en: "classic car restoration" },
    seoTitle: {
      fr: "Suivi de restauration et budget pièces pour atelier de voitures de collection | Optialys",
      en: "Restoration tracking and parts budget for classic car workshops | Optialys"
    },
    seoDescription: {
      fr: "Restaurations longues, pièces rares, devis qui s'étalent : suivez chaque heure et chaque achat par véhicule, et pilotez votre marge en temps réel avec Optialys.",
      en: "Long restorations, rare parts, quotes that stretch out: track every hour and purchase per vehicle, and pilot your margin in real time with Optialys."
    },
    h1: {
      fr: "Infrastructure opérationnelle pour ateliers de voitures de collection",
      en: "Operational infrastructure for classic car workshops"
    },
    intro: {
      fr: "Une restauration s'étale sur des mois, avec des pièces rares et des heures difficiles à estimer. Sans suivi rattaché au véhicule, la rentabilité d'un projet reste un mystère jusqu'au dernier jour. On connecte vos outils pour que tout — heures, achats, sous-traitance — soit lié à la bonne voiture.",
      en: "A restoration stretches over months, with rare parts and hours that are hard to estimate. Without tracking tied to the vehicle, a project's profitability stays a mystery until the last day. We connect your tools so everything — hours, purchases, subcontracting — is tied to the right car."
    },
    pains: {
      fr: [
        { title: "Le budget pièces est impossible à suivre", desc: "Pièces rares commandées à l'unité, chez plusieurs fournisseurs, sur des semaines. Sans centralisation, le coût réel par véhicule échappe complètement." },
        { title: "Les heures sont sous-estimées", desc: "Une restauration prend toujours plus de temps que prévu. Sans suivi précis des heures par poste, le devis initial dérape sans qu'on le voie." },
        { title: "Plusieurs véhicules en parallèle, zéro vue d'ensemble", desc: "Quand 4 ou 5 projets avancent en même temps, savoir lequel est rentable et lequel coule demande une demi-journée de compilation." }
      ],
      en: [
        { title: "The parts budget is impossible to track", desc: "Rare parts ordered one by one, from several suppliers, over weeks. Without centralization, the real cost per vehicle escapes you entirely." },
        { title: "Hours are underestimated", desc: "A restoration always takes longer than planned. Without precise per-task hour tracking, the initial quote drifts without you seeing it." },
        { title: "Several vehicles at once, no overview", desc: "When 4 or 5 projects run in parallel, knowing which is profitable and which is sinking takes half a day of compiling." }
      ]
    },
    connect: {
      fr: [
        "Chaque achat de pièce rattaché automatiquement au véhicule",
        "Heures pointées par poste de restauration, sur mobile",
        "Vue rentabilité par véhicule et par projet en parallèle",
        "Alerte quand le coût réel approche du devis validé"
      ],
      en: [
        "Every parts purchase automatically tied to the vehicle",
        "Hours logged by restoration task, on mobile",
        "Profitability view per vehicle and across parallel projects",
        "Alert when the real cost nears the approved quote"
      ]
    },
    example: {
      fr: {
        situation: "Les achats de pièces sont dispersés entre emails, factures et carnets. Le budget pièces d'une restauration est introuvable en temps réel.",
        solution: "Tous les achats remontent dans le système, rattachés au véhicule. Une alerte se déclenche dès qu'un budget approche du seuil validé au devis.",
        result: "Plus aucun dépassement découvert à la facture finale, marge par véhicule visible à tout moment."
      },
      en: {
        situation: "Parts purchases are scattered across emails, invoices and notebooks. A restoration's parts budget is impossible to find in real time.",
        solution: "All purchases flow into the system, tied to the vehicle. An alert fires as soon as a budget nears the threshold approved in the quote.",
        result: "No more overruns discovered on the final invoice, margin per vehicle visible at all times."
      }
    },
    faq: {
      fr: [
        { q: "Chaque restauration est unique. Un système standard peut-il suivre ça ?", a: "Justement, on ne déploie pas un système standard. On adapte la structure à votre façon de découper un chantier (carrosserie, mécanique, sellerie…) pendant le diagnostic." },
        { q: "On commande des pièces chez beaucoup de fournisseurs différents.", a: "C'est le cas le plus fréquent. On centralise toutes ces sources dans une seule vue, rattachée au bon véhicule, sans changer vos fournisseurs." }
      ],
      en: [
        { q: "Every restoration is unique. Can a standard system track that?", a: "That's exactly why we don't deploy a standard system. We adapt the structure to how you break down a job (bodywork, mechanics, trim…) during the diagnostic." },
        { q: "We order parts from many different suppliers.", a: "That's the most common case. We centralize all those sources into one view, tied to the right vehicle, without changing your suppliers." }
      ]
    }
  },
  {
    slug: "jets-aeronautique",
    icon: "plane",
    metier: { fr: "maintenance de jets et aéronautique", en: "jet & aerospace maintenance" },
    seoTitle: {
      fr: "Suivi d'intervention et traçabilité pour atelier aéronautique haut de gamme | Optialys",
      en: "Job tracking and traceability for high-end aerospace workshops | Optialys"
    },
    seoDescription: {
      fr: "Interventions techniques exigeantes, traçabilité critique, marges serrées. Optialys connecte vos outils pour que la donnée terrain remonte en temps réel, pas le lendemain.",
      en: "Demanding technical work, critical traceability, tight margins. Optialys connects your tools so field data flows up in real time, not the next day."
    },
    h1: {
      fr: "Infrastructure opérationnelle pour ateliers jets et aéronautique",
      en: "Operational infrastructure for jet & aerospace workshops"
    },
    intro: {
      fr: "Dans l'aéronautique, la traçabilité n'est pas négociable et les marges sont serrées. Quand la donnée terrain met un jour à remonter, le pilotage se fait toujours en retard. On connecte vos outils pour que chaque intervention, chaque heure et chaque pièce soient suivies en temps réel.",
      en: "In aerospace, traceability is non-negotiable and margins are tight. When field data takes a day to flow up, piloting always happens late. We connect your tools so every job, every hour and every part is tracked in real time."
    },
    pains: {
      fr: [
        { title: "La traçabilité repose sur du papier", desc: "Relevés, numéros de pièces, signatures : encore beaucoup de saisie manuelle, ressaisie ensuite. Une source d'erreur sur des process où l'erreur coûte cher." },
        { title: "Les marges fondent sur les imprévus", desc: "Une intervention qui s'allonge, une pièce en attente : sans suivi en direct, l'impact sur la rentabilité ne se voit qu'après coup." },
        { title: "Les données arrivent avec un jour de retard", desc: "Le terrain remonte le soir ou le lendemain. Les décisions se prennent toujours sur une photo périmée de l'atelier." }
      ],
      en: [
        { title: "Traceability relies on paper", desc: "Readings, part numbers, signatures: still a lot of manual entry, re-keyed afterward. A source of error on processes where errors are costly." },
        { title: "Margins melt on surprises", desc: "A job that runs long, a part on backorder: without live tracking, the impact on profitability only shows after the fact." },
        { title: "Data arrives a day late", desc: "The floor reports in the evening or the next day. Decisions are always made on a stale snapshot of the workshop." }
      ]
    },
    connect: {
      fr: [
        "Saisie terrain horodatée, rattachée à l'intervention",
        "Suivi des pièces et de leur statut en temps réel",
        "Heures et coûts par intervention, en direct",
        "Tableau de bord marge et avancement par dossier"
      ],
      en: [
        "Timestamped field entry, tied to the job",
        "Real-time tracking of parts and their status",
        "Hours and costs per job, live",
        "Margin and progress dashboard per case"
      ]
    },
    example: {
      fr: {
        situation: "Les relevés et les heures sont consignés sur papier pendant l'intervention, puis ressaisis le lendemain par quelqu'un d'autre.",
        solution: "La saisie se fait une fois, sur mobile, horodatée et rattachée à l'intervention. Photos et relevés sont classés automatiquement.",
        result: "Traçabilité fiable, données du jour disponibles immédiatement, fin de la double saisie."
      },
      en: {
        situation: "Readings and hours are recorded on paper during the job, then re-keyed the next day by someone else.",
        solution: "Entry happens once, on mobile, timestamped and tied to the job. Photos and readings are filed automatically.",
        result: "Reliable traceability, today's data available immediately, end of double entry."
      }
    },
    faq: {
      fr: [
        { q: "Nos process de traçabilité sont très encadrés. Vous vous adaptez ?", a: "Oui. On part de vos exigences existantes pendant le diagnostic et on construit la saisie autour d'elles — l'objectif est de fiabiliser, pas d'ajouter une couche." },
        { q: "Peut-on garder nos outils certifiés actuels ?", a: "Oui. On les connecte plutôt que de les remplacer, pour faire circuler la donnée sans toucher à ce qui est déjà validé." }
      ],
      en: [
        { q: "Our traceability processes are tightly regulated. Do you adapt?", a: "Yes. We start from your existing requirements during the diagnostic and build entry around them — the goal is to make it more reliable, not add a layer." },
        { q: "Can we keep our current certified tools?", a: "Yes. We connect them rather than replace them, to circulate data without touching what's already validated." }
      ]
    }
  },
  {
    slug: "mobilier-sur-mesure",
    icon: "hammer",
    metier: { fr: "fabrication de mobilier sur mesure", en: "bespoke furniture making" },
    seoTitle: {
      fr: "Suivi de commandes et rentabilité pour atelier de mobilier sur mesure | Optialys",
      en: "Order tracking and profitability for bespoke furniture workshops | Optialys"
    },
    seoDescription: {
      fr: "Ébénisterie et fabrication haut de gamme : suivez l'avancement, les délais et la marge par commande, et arrêtez de découvrir la rentabilité à la livraison.",
      en: "High-end joinery and fabrication: track progress, deadlines and margin per order, and stop discovering profitability at delivery."
    },
    h1: {
      fr: "Infrastructure opérationnelle pour ateliers de mobilier sur mesure",
      en: "Operational infrastructure for bespoke furniture workshops"
    },
    intro: {
      fr: "Chaque commande sur mesure est un mini-projet : matières, heures d'atelier, délais à tenir. Sans vue d'ensemble, le dirigeant pilote au feeling et découvre la marge à la livraison. On connecte vos outils pour suivre l'avancement et la rentabilité de chaque pièce, en direct.",
      en: "Every bespoke order is a mini-project: materials, workshop hours, deadlines to hold. Without an overview, the owner pilots on gut feeling and discovers the margin at delivery. We connect your tools to track progress and profitability of each piece, live."
    },
    pains: {
      fr: [
        { title: "Aucune visibilité sur l'avancement réel", desc: "Où en est telle commande ? Combien d'heures a-t-elle déjà consommées ? La réponse demande un tour de l'atelier et quelques coups de fil." },
        { title: "Les délais glissent en silence", desc: "Une pièce qui prend du retard se répercute sur les suivantes. Sans suivi, le retard se découvre quand le client appelle." },
        { title: "La marge par commande reste floue", desc: "Entre matières, heures et reprises, savoir si une commande a été rentable demande un calcul a posteriori — rarement fait." }
      ],
      en: [
        { title: "No visibility on real progress", desc: "Where is a given order? How many hours has it already used? Answering means walking the workshop and making a few calls." },
        { title: "Deadlines slip silently", desc: "A piece that falls behind cascades onto the next ones. Without tracking, the delay is discovered when the client calls." },
        { title: "Margin per order stays fuzzy", desc: "Between materials, hours and rework, knowing whether an order was profitable means an after-the-fact calculation — rarely done." }
      ]
    },
    connect: {
      fr: [
        "Avancement de chaque commande visible en temps réel",
        "Heures d'atelier pointées par pièce",
        "Matières et coûts rattachés à la commande",
        "Alerte sur les délais et la marge par commande"
      ],
      en: [
        "Progress of each order visible in real time",
        "Workshop hours logged per piece",
        "Materials and costs tied to the order",
        "Alerts on deadlines and margin per order"
      ]
    },
    example: {
      fr: {
        situation: "Le dirigeant n'a aucune visibilité sur l'avancement réel des commandes ni sur les heures déjà consommées.",
        solution: "Un tableau de bord temps réel agrège avancement, heures, matières et échéances par commande — consultable depuis le téléphone, sans tour de l'atelier.",
        result: "Décisions prises sur les chiffres du jour, délais tenus, marge connue avant la livraison."
      },
      en: {
        situation: "The owner has no visibility on the real progress of orders or the hours already used.",
        solution: "A real-time dashboard aggregates progress, hours, materials and deadlines per order — viewable from the phone, no workshop walk needed.",
        result: "Decisions made on today's numbers, deadlines held, margin known before delivery."
      }
    },
    faq: {
      fr: [
        { q: "On est un petit atelier, ce n'est pas trop lourd à mettre en place ?", a: "Non. On dimensionne l'infrastructure à votre taille. Le diagnostic sert justement à ne connecter que ce qui vous fait gagner du temps et de la marge." },
        { q: "Nos artisans n'aiment pas la paperasse numérique.", a: "La saisie est réduite à deux gestes sur mobile. L'idée est de supprimer de la paperasse, pas d'en ajouter." }
      ],
      en: [
        { q: "We're a small workshop, isn't this too heavy to set up?", a: "No. We size the infrastructure to your scale. The diagnostic exists precisely to connect only what saves you time and margin." },
        { q: "Our craftspeople don't like digital paperwork.", a: "Entry is reduced to two taps on mobile. The point is to remove paperwork, not add it." }
      ]
    }
  },
  {
    slug: "conciergerie-luxe",
    icon: "sparkles",
    metier: { fr: "conciergerie et services de luxe", en: "luxury concierge & services" },
    seoTitle: {
      fr: "Centralisation des demandes et pilotage pour conciergerie de luxe | Optialys",
      en: "Request centralization and piloting for luxury concierge services | Optialys"
    },
    seoDescription: {
      fr: "Demandes clients multicanal, équipes mobiles, prestations multiples : centralisez tout dans un système unique et gardez une vision temps réel de votre activité avec Optialys.",
      en: "Multichannel client requests, mobile teams, multiple services: centralize everything in one system and keep a real-time view of your operations with Optialys."
    },
    h1: {
      fr: "Infrastructure opérationnelle pour conciergeries et services de luxe",
      en: "Operational infrastructure for luxury concierge and services"
    },
    intro: {
      fr: "Une conciergerie de luxe vit au rythme des demandes qui arrivent par dix canaux, à toute heure. Quand rien n'est centralisé, des demandes se perdent et la charge devient impossible à lire. On connecte vos outils pour que chaque demande soit captée, assignée et suivie jusqu'à la clôture.",
      en: "A luxury concierge lives to the rhythm of requests arriving through ten channels, at all hours. When nothing is centralized, requests get lost and the workload becomes impossible to read. We connect your tools so every request is captured, assigned and tracked to closure."
    },
    pains: {
      fr: [
        { title: "Les demandes arrivent par dix canaux", desc: "WhatsApp, email, appels, messages : sans point de centralisation, une demande sur deux risque de passer entre les mailles." },
        { title: "Aucune vue sur la charge réelle", desc: "Combien de demandes en cours, par membre d'équipe, par client ? Sans système, la réponse change selon à qui on demande." },
        { title: "Le suivi client repose sur la mémoire", desc: "Les préférences et l'historique d'un client haut de gamme vivent dans la tête des équipes. Un départ, et la relation repart de zéro." }
      ],
      en: [
        { title: "Requests arrive through ten channels", desc: "WhatsApp, email, calls, messages: without a point of centralization, one request in two risks slipping through the cracks." },
        { title: "No view of the real workload", desc: "How many requests in progress, per team member, per client? Without a system, the answer changes depending on who you ask." },
        { title: "Client tracking relies on memory", desc: "A high-end client's preferences and history live in the team's heads. One departure, and the relationship starts from scratch." }
      ]
    },
    connect: {
      fr: [
        "Toutes les demandes centralisées dans un système unique",
        "Assignation automatique et suivi jusqu'à la clôture",
        "Vue temps réel de la charge par équipe et par client",
        "Historique et préférences clients conservés, pas dans les têtes"
      ],
      en: [
        "All requests centralized in one system",
        "Automatic assignment and tracking to closure",
        "Real-time view of workload per team and per client",
        "Client history and preferences preserved, not in people's heads"
      ]
    },
    example: {
      fr: {
        situation: "Les demandes clients arrivent par dix canaux différents et se perdent ; personne n'a de vue claire sur ce qui est en cours.",
        solution: "Toutes les demandes sont captées et centralisées, assignées automatiquement et suivies jusqu'à la clôture, avec l'historique client rattaché.",
        result: "Zéro demande oubliée, vision temps réel de la charge, relation client qui ne dépend plus d'une seule personne."
      },
      en: {
        situation: "Client requests come in through ten different channels and get lost; no one has a clear view of what's in progress.",
        solution: "All requests are captured and centralized, automatically assigned and tracked to closure, with client history attached.",
        result: "Zero forgotten request, real-time view of the workload, a client relationship no longer dependent on one person."
      }
    },
    faq: {
      fr: [
        { q: "Nos clients nous écrivent surtout sur WhatsApp. Ça reste possible ?", a: "Oui. On ne change rien pour le client : il continue d'écrire où il veut. C'est en interne que tout se centralise automatiquement." },
        { q: "La discrétion est essentielle pour nos clients.", a: "Le système vous appartient, vos données restent chez vous, et on conçoit les accès pour respecter votre niveau de confidentialité." }
      ],
      en: [
        { q: "Our clients mostly write on WhatsApp. Is that still possible?", a: "Yes. Nothing changes for the client: they keep writing wherever they want. It's internally that everything centralizes automatically." },
        { q: "Discretion is essential for our clients.", a: "The system is yours, your data stays with you, and we design access to respect your level of confidentiality." }
      ]
    }
  }
];

export const getSolution = (slug?: string) => solutions.find(s => s.slug === slug);
