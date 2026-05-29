export interface BlogArticle {
  slug: string;
  category: { fr: string; en: string };
  categoryKey: 'pilotage' | 'infrastructure' | 'terrain';
  date: string;
  readTime: number;
  title: { fr: string; en: string };
  excerpt: { fr: string; en: string };
  content: { fr: string; en: string };
  seoTitle: { fr: string; en: string };
  seoDescription: { fr: string; en: string };
  keywords: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "chantiers-depassent-budget-sans-alerte",
    category: { fr: "Pilotage de marge", en: "Margin piloting" },
    categoryKey: "pilotage",
    date: "2026-05-12",
    readTime: 6,
    title: {
      fr: "Pourquoi vos chantiers dépassent leur budget sans que vous le voyiez venir",
      en: "Why your projects run over budget without you seeing it coming"
    },
    excerpt: {
      fr: "Dans un atelier haut de gamme, un dépassement se découvre à la facture finale — trop tard pour agir. Voici pourquoi, et comment piloter votre marge en temps réel.",
      en: "In a high-end workshop, an overrun surfaces on the final invoice — too late to act. Here's why, and how to pilot your margin in real time."
    },
    seoTitle: {
      fr: "Dépassement de budget en atelier : le détecter avant qu'il coûte | Optialys",
      en: "Budget overruns in workshops: catch them before they cost | Optialys"
    },
    seoDescription: {
      fr: "Suivi de marge en temps réel pour ateliers haut de gamme : pourquoi les dépassements se découvrent trop tard et comment une infrastructure connectée vous alerte avant.",
      en: "Real-time margin tracking for high-end workshops: why overruns surface too late and how a connected infrastructure alerts you in time."
    },
    keywords: [
      "dépassement budget atelier", "suivi marge temps réel", "pilotage rentabilité chantier",
      "alerte budget automatique", "marge par chantier", "infrastructure opérationnelle atelier"
    ],
    content: {
      fr: `<p>Dans un atelier de rénovation haut de gamme — yacht, voiture de collection, mobilier sur mesure — la marge ne se perd presque jamais d'un coup. Elle s'effrite. Quelques heures non prévues ici, un achat de pièce en urgence là, un imprévu technique qui ajoute deux jours. Pris isolément, rien d'alarmant. Cumulés sur un projet de plusieurs mois, ils transforment un chantier rentable en chantier à perte.</p>

<h2>Le vrai problème : vous le découvrez à la facture finale</h2>
<p>La plupart des dirigeants d'atelier ne manquent pas de rigueur. Ils manquent de visibilité <em>au bon moment</em>. Les heures sont notées sur des feuilles, les achats arrivent par email, les imprévus sont gérés sur le terrain. L'information existe — mais elle n'est consolidée qu'en fin de chantier, quand le comptable assemble les pièces.</p>
<p>À ce moment-là, il est trop tard. Le dépassement est consommé. Vous ne pouvez plus renégocier l'avenant, réaffecter une équipe ou ajuster le planning. Vous constatez les dégâts.</p>

<h2>Pourquoi le suivi sur Excel ne suffit pas</h2>
<p>Excel est un excellent outil de constat, un mauvais outil d'alerte. Il faut quelqu'un pour le remplir, quelqu'un pour le mettre à jour, et quelqu'un pour le regarder au bon moment. Dans un atelier où tout le monde est sur le terrain, ces trois conditions sont rarement réunies en même temps.</p>
<p>Résultat : le tableau est à jour le lundi, périmé le mercredi, et plus personne ne l'ouvre le vendredi.</p>

<h2>Ce qui change avec un suivi en temps réel</h2>
<p>L'idée n'est pas d'ajouter un outil de plus. C'est de connecter ceux que vous avez déjà pour que la donnée remonte automatiquement :</p>
<ul>
<li>Les <strong>heures terrain</strong> saisies une fois, rattachées au bon chantier et au bon poste</li>
<li>Les <strong>achats de pièces</strong> rattachés automatiquement au projet concerné</li>
<li>Un <strong>seuil de budget</strong> par chantier qui déclenche une alerte quand on s'en approche</li>
<li>Une <strong>vue marge</strong> consultable depuis le téléphone, à jour en permanence</li>
</ul>
<p>Vous ne pilotez plus à la facture finale. Vous pilotez pendant le chantier, quand vous pouvez encore agir.</p>

<h3>Concrètement, sur un refit de yacht</h3>
<p>Chaque heure passée par un technicien est rattachée au chantier en direct. Dès que les heures consommées dépassent 80% du budget prévu sur un poste, une alerte part. Vous décidez : avenant, réaffectation, ou simple vigilance. La décision se prend sur des chiffres du jour, pas sur un constat du mois suivant.</p>

<h2>FAQ</h2>
<h3>Faut-il changer notre logiciel de gestion ?</h3>
<p>Non. On connecte vos outils existants — logiciel de chantier, facturation, tableurs — sur un système central. Aucun remplacement, aucune migration douloureuse.</p>

<h3>Combien de temps pour mettre ça en place ?</h3>
<p>Une infrastructure connectée se déploie en 4 à 6 semaines. Tout commence par un Diagnostic Rentabilité de 2 heures qui chiffre précisément où part votre argent.</p>

<h3>Mes techniciens vont-ils devoir saisir plus de choses ?</h3>
<p>Au contraire. On supprime la double saisie : ils encodent une fois, sur mobile, et l'information remonte partout automatiquement. Fini le carnet ressaisi le lendemain.</p>`,
      en: `<p>In a high-end restoration workshop — yacht, classic car, bespoke furniture — margin is almost never lost all at once. It erodes. A few unplanned hours here, an urgent parts purchase there, a technical surprise that adds two days. Taken alone, nothing alarming. Added up over a project that runs for months, they turn a profitable job into a loss.</p>

<h2>The real problem: you discover it on the final invoice</h2>
<p>Most workshop owners don't lack rigor. They lack visibility <em>at the right moment</em>. Hours are noted on sheets, purchases arrive by email, surprises are handled on the floor. The information exists — but it's only consolidated at the end of the project, when the accountant assembles the pieces.</p>
<p>By then, it's too late. The overrun is spent. You can no longer renegotiate the change order, reassign a team or adjust the schedule. You're left counting the damage.</p>

<h2>Why tracking on Excel isn't enough</h2>
<p>Excel is a great tool for recording, a poor tool for alerting. Someone has to fill it in, someone has to update it, and someone has to look at it at the right time. In a workshop where everyone is on the floor, those three conditions rarely line up.</p>

<h2>What changes with real-time tracking</h2>
<p>The idea isn't to add yet another tool. It's to connect the ones you already have so the data flows up automatically:</p>
<ul>
<li><strong>Field hours</strong> entered once, tied to the right project and line item</li>
<li><strong>Parts purchases</strong> automatically tied to the relevant project</li>
<li>A <strong>budget threshold</strong> per project that triggers an alert as you approach it</li>
<li>A <strong>margin view</strong> available from your phone, always up to date</li>
</ul>
<p>You no longer pilot at the final invoice. You pilot during the project, while you can still act.</p>

<h2>FAQ</h2>
<h3>Do we have to change our management software?</h3>
<p>No. We connect your existing tools — project software, invoicing, spreadsheets — into a central system. No replacement, no painful migration.</p>

<h3>How long does it take to set up?</h3>
<p>A connected infrastructure is deployed in 4 to 6 weeks. It all starts with a 2-hour Profitability Diagnostic that pinpoints exactly where your money goes.</p>`
    }
  },

  {
    slug: "connecter-vos-outils-sans-les-remplacer",
    category: { fr: "Infrastructure", en: "Infrastructure" },
    categoryKey: "infrastructure",
    date: "2026-05-18",
    readTime: 7,
    title: {
      fr: "Connecter vos outils plutôt que les remplacer : la bonne approche pour un atelier",
      en: "Connect your tools instead of replacing them: the right approach for a workshop"
    },
    excerpt: {
      fr: "Vous n'avez pas besoin d'un nouveau logiciel. Vous avez besoin que ceux que vous utilisez déjà se parlent. Voici comment une infrastructure centrale fait circuler l'information.",
      en: "You don't need new software. You need the ones you already use to talk to each other. Here's how a central infrastructure makes information flow."
    },
    seoTitle: {
      fr: "Connecter ses outils sans tout remplacer | Infrastructure atelier | Optialys",
      en: "Connect your tools without replacing everything | Workshop infrastructure | Optialys"
    },
    seoDescription: {
      fr: "Automatisation des processus d'atelier : pourquoi connecter vos outils existants (CRM, chantier, facturation) vaut mieux qu'un nouveau logiciel, et comment Optialys le fait.",
      en: "Workshop process automation: why connecting your existing tools (CRM, project software, invoicing) beats new software, and how Optialys does it."
    },
    keywords: [
      "connecter outils atelier", "automatisation processus atelier rénovation", "système central PME",
      "intégration CRM facturation", "infrastructure opérationnelle sur mesure", "éviter migration logiciel"
    ],
    content: {
      fr: `<p>Quand un atelier décide enfin de « se digitaliser », le réflexe est souvent le mauvais : chercher LE logiciel qui fera tout. C'est une erreur coûteuse. Vous y passez des mois, vous formez l'équipe à un nouvel outil, et six mois plus tard la moitié des gens est revenue à ses anciennes habitudes — parce que le nouvel outil ne colle pas à la réalité du métier.</p>

<h2>Le problème n'est pas le manque d'outils</h2>
<p>La plupart des ateliers haut de gamme ont déjà tout ce qu'il faut : un CRM pour les clients, un logiciel de chantier, un outil de facturation, des tableurs, une messagerie d'équipe. Le problème, c'est qu'aucun de ces outils ne parle aux autres. L'information est là — mais elle reste prisonnière de chaque silo.</p>
<p>Un client signe dans le CRM, mais le chantier se crée à la main dans un autre outil. Les heures sont sur papier. La facture est ressaisie depuis zéro. Chaque transition entre deux outils est une perte de temps et une source d'erreur.</p>

<h2>La bonne approche : un système central qui orchestre</h2>
<p>Plutôt que de tout remplacer, on installe une couche de connexion au-dessus de l'existant. Chaque outil garde son rôle, mais l'information circule automatiquement entre eux :</p>
<ul>
<li>Un client validé dans le CRM crée automatiquement le chantier dans le bon outil</li>
<li>Les heures saisies sur le terrain remontent dans le suivi de marge sans ressaisie</li>
<li>Une fin de chantier déclenche la préparation de la facture, pré-remplie</li>
<li>Un tableau de bord central agrège tout : marge, avancement, alertes</li>
</ul>
<p>Personne ne change ses habitudes. On supprime juste les ponts manuels entre les outils.</p>

<h3>Pourquoi c'est plus rapide et moins risqué</h3>
<p>Remplacer un logiciel central, c'est un projet à haut risque : migration de données, formation lourde, résistance au changement. Connecter l'existant, c'est l'inverse : déploiement en 4 à 6 semaines, aucune donnée à migrer, et l'équipe continue de travailler avec les outils qu'elle maîtrise déjà.</p>

<h2>Ce que vous gagnez vraiment</h2>
<p>Au-delà du temps économisé sur la saisie, vous gagnez quelque chose de plus rare : une <strong>source unique de vérité</strong>. Quand toutes vos données convergent vers un même endroit, vous arrêtez de prendre des décisions sur des chiffres contradictoires. Vous savez, à tout moment, où vous en êtes.</p>

<h2>FAQ</h2>
<h3>Et si un de nos outils est vraiment trop ancien ?</h3>
<p>On l'évalue pendant le diagnostic. Dans la grande majorité des cas, même un outil ancien peut être connecté. Quand ce n'est vraiment pas possible, on vous le dit clairement et on propose l'alternative la plus légère.</p>

<h3>Qui est propriétaire du système à la fin ?</h3>
<p>Vous. Tout est documenté, votre équipe est formée, et le système vous appartient. Aucune dépendance forcée.</p>

<h3>Par où commence-t-on ?</h3>
<p>Par un Diagnostic Rentabilité de 2 heures. On cartographie vos outils et vos flux, on identifie les connexions qui rapportent le plus, et on vous remet un plan d'action chiffré.</p>`,
      en: `<p>When a workshop finally decides to "go digital," the instinct is often wrong: look for THE software that does everything. It's a costly mistake. You spend months on it, you train the team on a new tool, and six months later half the people are back to their old habits — because the new tool doesn't fit the reality of the trade.</p>

<h2>The problem isn't a lack of tools</h2>
<p>Most high-end workshops already have everything they need: a CRM for clients, project software, an invoicing tool, spreadsheets, a team messenger. The problem is that none of these tools talk to each other. The information is there — but it stays trapped in each silo.</p>

<h2>The right approach: a central system that orchestrates</h2>
<p>Rather than replacing everything, we install a connection layer on top of what exists. Each tool keeps its role, but information flows automatically between them:</p>
<ul>
<li>A client confirmed in the CRM automatically creates the project in the right tool</li>
<li>Hours entered on the floor flow into margin tracking with no re-entry</li>
<li>A project closing triggers a pre-filled invoice</li>
<li>A central dashboard aggregates everything: margin, progress, alerts</li>
</ul>
<p>No one changes their habits. We just remove the manual bridges between tools.</p>

<h3>Why it's faster and lower-risk</h3>
<p>Replacing a core piece of software is a high-risk project: data migration, heavy training, resistance to change. Connecting what exists is the opposite: deployment in 4 to 6 weeks, no data to migrate, and the team keeps working with the tools they already know.</p>

<h2>FAQ</h2>
<h3>What if one of our tools is really too old?</h3>
<p>We assess it during the diagnostic. In the vast majority of cases, even an old tool can be connected. When it truly can't, we tell you plainly and propose the lightest alternative.</p>

<h3>Who owns the system in the end?</h3>
<p>You do. Everything is documented, your team is trained, and the system is yours. No forced dependency.</p>`
    }
  },

  {
    slug: "fin-du-papier-donnees-terrain-temps-reel",
    category: { fr: "Terrain", en: "On the floor" },
    categoryKey: "terrain",
    date: "2026-05-24",
    readTime: 5,
    title: {
      fr: "La fin du carnet papier : faire remonter la donnée terrain en temps réel",
      en: "The end of the paper notebook: getting field data to flow up in real time"
    },
    excerpt: {
      fr: "Vos techniciens notent leurs heures sur papier, quelqu'un les encode le lendemain. Vous décidez sur des données d'hier. Voici comment supprimer ce décalage.",
      en: "Your technicians note their hours on paper, someone keys them in the next day. You decide on yesterday's data. Here's how to remove that lag."
    },
    seoTitle: {
      fr: "Saisie terrain en temps réel pour ateliers | Fin du papier | Optialys",
      en: "Real-time field entry for workshops | End of paper | Optialys"
    },
    seoDescription: {
      fr: "Comment digitaliser la saisie des heures et relevés terrain dans un atelier haut de gamme pour piloter sur des données du jour plutôt que des données de la veille.",
      en: "How to digitize hours and field readings in a high-end workshop so you pilot on today's data instead of yesterday's."
    },
    keywords: [
      "saisie terrain temps réel", "pointage heures atelier", "fin du papier atelier",
      "données chantier mobile", "double saisie automatisation", "suivi temps technicien"
    ],
    content: {
      fr: `<p>Voici une scène que tout dirigeant d'atelier connaît. Un technicien termine sa journée, note ses heures et ses relevés sur un carnet ou une feuille. Le lendemain, quelqu'un — souvent une personne précieuse dont ce n'est pas le métier — ressaisit tout dans le système. Entre les deux : un jour de décalage, et des erreurs de recopie.</p>

<h2>Le coût caché du décalage d'un jour</h2>
<p>Ce décalage paraît anodin. Il ne l'est pas. Quand vous regardez l'avancement d'un chantier, vous voyez l'état d'hier, pas celui de maintenant. Si une dérive a commencé ce matin, vous ne la verrez que demain — au mieux. Multiplié par dix chantiers, ce flou permanent vous empêche de piloter.</p>
<p>Et la double saisie a un deuxième coût : le temps de la personne qui ressaisit. C'est plusieurs heures par semaine consacrées à recopier des chiffres qui existaient déjà.</p>

<h2>Saisir une fois, partout</h2>
<p>La solution n'est pas de demander plus d'efforts aux techniciens. C'est de leur permettre de saisir <strong>une seule fois</strong>, simplement, depuis leur téléphone — et que cette saisie remonte automatiquement dans le suivi de marge, le planning et la facturation.</p>
<ul>
<li>Le technicien pointe ses heures sur mobile, en deux gestes, rattachées au bon chantier</li>
<li>Une photo d'une pièce ou d'un relevé est horodatée et classée automatiquement</li>
<li>L'information est disponible <em>immédiatement</em> dans le tableau de bord du dirigeant</li>
<li>Plus personne ne ressaisit quoi que ce soit le lendemain</li>
</ul>

<h3>Pourquoi ça marche vraiment</h3>
<p>Les outils de saisie terrain échouent quand ils sont plus lourds que le papier. Le carnet gagne toujours s'il est plus rapide. La clé est donc une saisie mobile pensée pour le terrain : minimale, robuste, utilisable avec des gants ou les mains sales, sans connexion permanente. Quand c'est plus simple que le papier, l'adoption se fait toute seule.</p>

<h2>Le résultat</h2>
<p>Vous passez d'un pilotage « à la semaine » à un pilotage « au jour ». Vos décisions reposent sur ce qui se passe maintenant. Et vous récupérez les heures que quelqu'un passait à recopier des carnets.</p>

<h2>FAQ</h2>
<h3>Nos techniciens ne sont pas à l'aise avec la technologie.</h3>
<p>C'est justement pour ça que la saisie est réduite au strict minimum : deux gestes, pas de formation longue. On conçoit l'outil autour du terrain, pas l'inverse.</p>

<h3>Et sans réseau dans l'atelier ou sur le port ?</h3>
<p>La saisie fonctionne hors connexion et se synchronise dès que le réseau revient. Aucune donnée perdue.</p>

<h3>Combien de temps pour déployer ?</h3>
<p>C'est inclus dans l'infrastructure sur mesure, déployée en 4 à 6 semaines. On commence par un Diagnostic Rentabilité pour cadrer précisément vos besoins.</p>`,
      en: `<p>Here's a scene every workshop owner knows. A technician finishes the day, notes hours and readings in a notebook or on a sheet. The next day, someone — often a valuable person whose job this isn't — re-keys everything into the system. In between: a day of lag, and copy errors.</p>

<h2>The hidden cost of a one-day lag</h2>
<p>That lag seems harmless. It isn't. When you look at a project's progress, you see yesterday's state, not now's. If a drift started this morning, you won't see it until tomorrow — at best. Multiplied across ten projects, this permanent blur stops you from piloting.</p>
<p>And double entry has a second cost: the time of the person re-keying. That's several hours a week spent re-copying numbers that already existed.</p>

<h2>Enter once, everywhere</h2>
<p>The solution isn't to ask more effort from technicians. It's to let them enter data <strong>once</strong>, simply, from their phone — and have that entry flow automatically into margin tracking, scheduling and invoicing.</p>
<ul>
<li>The technician logs hours on mobile, in two taps, tied to the right project</li>
<li>A photo of a part or a reading is timestamped and filed automatically</li>
<li>The information is available <em>immediately</em> on the owner's dashboard</li>
<li>No one re-keys anything the next day</li>
</ul>

<h3>Why it actually works</h3>
<p>Field-entry tools fail when they're heavier than paper. The notebook always wins if it's faster. So the key is mobile entry designed for the floor: minimal, robust, usable with gloves or dirty hands, no permanent connection. When it's simpler than paper, adoption takes care of itself.</p>

<h2>FAQ</h2>
<h3>Our technicians aren't comfortable with technology.</h3>
<p>That's exactly why entry is reduced to the bare minimum: two taps, no long training. We design the tool around the floor, not the other way around.</p>

<h3>What about no signal in the workshop or on the dock?</h3>
<p>Entry works offline and syncs as soon as the network is back. No data lost.</p>`
    }
  }
];

export const getCategoryColor = (key: BlogArticle['categoryKey']) => {
  const colors: Record<BlogArticle['categoryKey'], string> = {
    'pilotage': 'bg-accent-coral/10 text-accent-coral border-accent-coral/20',
    'infrastructure': 'bg-ink-navy/10 text-ink-navy border-ink-navy/20',
    'terrain': 'bg-accent-green/10 text-accent-green border-accent-green/20',
  };
  return colors[key];
};
