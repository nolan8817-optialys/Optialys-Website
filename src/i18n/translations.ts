export type Lang = 'fr' | 'en';

type Dict = Record<string, string>;

/* ───────────────────────────────────────────────────────────────────────────
   Refonte 2026-09-07 — offre v3 « opérateur de marge ».
   Règles de copie :
   - Aucun prix, nulle part. La valeur se justifie au premier appel.
   - Le lecteur doit reconnaître SON atelier, pas comprendre notre produit.
     → vocabulaire natif : chantier, compagnon, avenant, faisceau, tôlerie,
       chrome, rectification, encours, situation, matching numbers.
   - On vend une fonction assurée, pas un objet livré.
   ─────────────────────────────────────────────────────────────────────────── */

const fr: Dict = {
  // ─── Nav ───────────────────────────────────────────────────────────────
  'nav.home': 'Accueil',
  'nav.methode': 'La méthode',
  'nav.about': 'À propos',
  'nav.contact': 'Contact',
  'nav.cta': 'Réserver un appel',

  // ─── Footer ────────────────────────────────────────────────────────────
  'footer.tagline': 'Le contrôle de gestion opérationnel des ateliers haut de gamme.',
  'footer.navigation': 'Navigation',
  'footer.resources': 'Ressources',
  'footer.legal': 'Légal',
  'footer.legalNotice': 'Mentions légales',
  'footer.privacy': 'Politique de confidentialité',
  'footer.sectors': 'Secteurs',
  'footer.blog': 'Écrits',
  'footer.copyright': 'Optialys — Le contrôle de gestion opérationnel des ateliers haut de gamme.',

  // ─── Home · Hero ───────────────────────────────────────────────────────
  'home.hero.eyebrow': 'Ateliers à l’affaire · Contrôle de gestion',
  'home.hero.title.line1': 'Je m’occupe de',
  'home.hero.title.line2': 'votre marge.',
  'home.hero.body':
    'Vous devisez 400 heures. Le chantier en prend 650. Personne ne s’en aperçoit avant la facture finale.',
  'home.hero.body.highlight': 'Mon travail, c’est de le voir à la 200ᵉ.',
  'home.hero.cta.primary': 'Réserver un appel',
  'home.hero.cta.secondary': 'Voir comment je travaille',
  'home.hero.cta.reassure': '15 minutes · en visio · sans engagement',
  'home.hero.pill.1': 'Diagnostic',
  'home.hero.pill.2': 'Installation',
  'home.hero.pill.3': 'Pilotage',

  // ─── Home · La vidéo de présentation ───────────────────────────────────
  'home.video.eyebrow': 'La présentation',
  'home.video.title': 'Deux minutes et demie. Vous saurez si c’est pour vous.',
  'home.video.caption': '2 min 36 · Nolan Prayagsing, fondateur d’Optialys',
  'home.video.fallback': 'Votre navigateur ne peut pas lire cette vidéo.',
  'home.video.download': 'La télécharger',

  // ─── Home · Le constat ─────────────────────────────────────────────────
  'home.problem.eyebrow': 'Le constat',
  'home.problem.title': 'Un carnet plein ne dit rien de votre marge.',
  'home.problem.intro':
    'Trois fuites reviennent dans presque tous les ateliers que je regarde. Aucune n’est une question de sérieux : ce sont des trous de mesure.',
  'home.problem.1.title': 'Les heures n’appartiennent à personne',
  'home.problem.1.desc':
    'Un compagnon passe l’après-midi sur une aile qui n’était pas au devis. Le soir, l’heure finit sur un tableau blanc, un carnet, ou nulle part. À la clôture, elle n’est imputée à aucune voiture — donc elle n’a coûté à personne.',
  'home.problem.2.title': 'Les avenants ne sont jamais chiffrés',
  'home.problem.2.desc':
    '« Tant qu’on y est, on refait le faisceau. » Le client dit oui, l’atelier le fait, et le devis complémentaire n’est jamais établi. Le travail est réel. La facture, non.',
  'home.problem.3.title': 'La sous-traitance part au coût',
  'home.problem.3.desc':
    'Le chrome, la rectification, la sellerie partent à l’extérieur et reviennent refacturés à l’euro près. Vous avez avancé la trésorerie, porté le délai et pris le risque — sans un point de marge.',
  'home.problem.close':
    'Cause commune : la voiture est unique, le devis est une estimation, et rien ne mesure l’écart pendant qu’il se creuse. La marge se découvre à la fin, quand il est trop tard pour la corriger.',

  // ─── Home · Déjà livré ─────────────────────────────────────────────────
  // Une société est nommée : Koosmik, accord de leur direction (Nolan, 07/09).
  // Les deux autres restent anonymes tant que l'accord n'est pas demandé.
  // L'Atelier des Coteaux est volontairement absent (accord non demandé).
  'home.proof.eyebrow': 'Déjà livré',
  'home.proof.title': 'Des systèmes en production, chez de vraies entreprises.',
  'home.proof.intro':
    'Avant les ateliers, j’ai construit et fait tourner des systèmes d’exploitation pour des sociétés qui avaient le même problème de fond : de la donnée éparpillée, et des décisions prises trop tard.',
  'home.proof.1.sector': 'Fiduciaire · Luxembourg',
  'home.proof.1.what': 'Un système de production de contenu',
  'home.proof.1.desc':
    'Quatre chaînes qui prennent une idée, la travaillent et la rendent prête à publier. En service depuis 2026, sous contrat de maintenance annuel.',
  'home.proof.2.sector': 'Koosmik',
  'home.proof.2.what': 'Un radar d’appels d’offres',
  'home.proof.2.desc':
    'Veille des opportunités, qualification automatique, notification de l’équipe et écriture directe dans le CRM. Livré, puis repris en interne par leurs équipes.',
  'home.proof.3.sector': 'Deux sociétés d’un même groupe',
  'home.proof.3.what': 'Le même moteur, dupliqué',
  'home.proof.3.desc':
    'Les chaînes de production adaptées à deux structures aux métiers différents, sans repartir de zéro. Révision régulière.',
  'home.proof.close':
    'Aucun de ces systèmes n’est un atelier : ils sont antérieurs. Le premier cockpit de marge d’atelier est en cours de déploiement — je vous en parle en appel.',

  // ─── Home · Le retournement ────────────────────────────────────────────
  'home.turn.eyebrow': 'Le retournement',
  'home.turn.title': 'Vous n’avez pas besoin d’un tableau de bord de plus.',
  'home.turn.quote':
    'Vous n’achetez pas un outil. Vous achetez que quelqu’un réponde de votre chiffre.',
  'home.turn.attribution': 'Nolan Prayagsing · Optialys',
  'home.turn.body':
    'La plupart des prestataires livrent un système et vous souhaitent bonne chance. À vous de l’apprendre, de le faire adopter par l’atelier, de l’alimenter tous les jours. C’est très exactement là que ces projets meurent.',
  'home.turn.body2':
    'Ici, vous vous servez du système tous les jours : votre chef d’atelier voit où en est chaque voiture, et vous êtes alerté quand un chantier commence à déraper — pas quand il a fini. Ce que vous n’avez jamais à faire, c’est le maintenir, le corriger et le faire évoluer. Ça, c’est mon travail, et c’est moi qui réponds de ce qu’il raconte.',

  // ─── Home · La méthode ─────────────────────────────────────────────────
  'home.offer.eyebrow': 'La méthode',
  'home.offer.title': 'Trois temps. Le troisième est le seul qui compte.',
  'home.offer.1.label': 'Le diagnostic',
  'home.offer.1.kicker': '2 à 3 semaines',
  'home.offer.1.body':
    'Je passe une demi-journée dans l’atelier et je regarde comment la donnée entre vraiment : qui note quoi, sur quel support, à quel moment. Puis je reconstitue le prévu et le réel sur trois à cinq chantiers déjà terminés, à partir de vos propres fichiers.',
  'home.offer.1.p1': 'Une demi-journée sur site, à observer le flux réel',
  'home.offer.1.p2': 'L’extraction de vos outils existants — je ne remplace rien, je lis',
  'home.offer.1.p3': 'L’écart devis / réel reconstitué sur des chantiers terminés',
  'home.offer.1.p4': 'Le chiffrage de ce que cet écart vous coûte sur un an',
  'home.offer.1.p5': 'Une restitution d’une heure, et un document que vous gardez',
  'home.offer.2.label': 'L’installation',
  'home.offer.2.kicker': '3 à 6 semaines',
  'home.offer.2.body':
    'L’infrastructure qui rend le pilotage possible. Vous vous en servez au quotidien — mais ce n’est pas un logiciel de plus à administrer : c’est moi qui le fais tourner. Votre logiciel métier reste en place.',
  'home.offer.2.p1': 'La base opérationnelle : chantiers, heures, avenants, sous-traitance, coûts',
  'home.offer.2.p2': 'La saisie terrain — le seul endroit où votre équipe intervient',
  'home.offer.2.p3': 'Les connexions à ce qui tourne déjà, sans rien remplacer',
  'home.offer.2.p4': 'Le moteur d’écart prévu / réel et les alertes de dérive',
  'home.offer.2.p5': 'Les vues de direction',
  'home.offer.3.label': 'Le pilotage',
  'home.offer.3.kicker': 'Le produit',
  'home.offer.3.body':
    'Chaque mois, une heure avec vous : les chantiers qui dérapent, le chiffre, trois décisions. Entre deux revues, vous êtes alerté quand un chantier sort de sa trajectoire — pas quand il a fini de la quitter.',
  'home.offer.3.p1': 'La revue de marge mensuelle — une heure, trois décisions',
  'home.offer.3.p2': 'Le rapport écrit, relu et commenté ligne à ligne',
  'home.offer.3.p3': 'Les alertes : dépassement, avenant non chiffré, sous-traitance sans marge',
  'home.offer.3.p4': 'Le système évolue en continu, sans facture supplémentaire',

  // ─── Home · L'ancrage ──────────────────────────────────────────────────
  'home.anchor.eyebrow': 'Ce que ça remplace',
  'home.anchor.title': 'Comparez-moi à une embauche, pas à un prestataire.',
  'home.anchor.body':
    'Un contrôleur de gestion à mi-temps, c’est trois à quatre mille euros par mois, chargés. Il ne connaît pas la restauration, il travaillera sur Excel, et un jour il partira.',
  'home.anchor.body2':
    'Moi, je connais vos chantiers. Et le système, lui, ne part pas.',

  // ─── Home · Pour qui ───────────────────────────────────────────────────
  'home.forwho.eyebrow': 'Pour qui',
  'home.forwho.title': 'Les ateliers qui vendent des heures sur des chantiers longs.',
  'home.forwho.body':
    'La restauration et la préparation de voitures de collection, d’abord. Plus largement : les ateliers haut de gamme qui travaillent à l’affaire, dont le devis est une estimation et dont la marge se joue sur l’écart. Dix à quarante personnes, des chantiers de douze à trente-six mois, une trésorerie qui se tend l’hiver.',
  'home.forwho.not.title': 'Ce n’est pas pour vous si',
  'home.forwho.not.1': 'Vous facturez le temps passé, sans devis engageant.',
  'home.forwho.not.2': 'Vos chantiers se comptent en jours.',
  'home.forwho.not.3': 'Vous cherchez un logiciel à acheter et à administrer vous-même.',

  // ─── Home · CTA final ──────────────────────────────────────────────────
  'home.final.eyebrow': 'La suite',
  'home.final.title': 'Prenons quinze minutes.',
  'home.final.body':
    'Vous me décrivez un chantier récent — celui qui vous a laissé un doute. Je vous dis où je regarderais en premier, et pourquoi. S’il n’y a rien à trouver, je vous le dis aussi.',
  'home.final.cta': 'Réserver un appel',

  // ─── Page méthode ──────────────────────────────────────────────────────
  // La démonstration, premier bloc de la page. Page statique
  // public/demo/index.html générée depuis le second brain
  // (assets/demo-atelier-temoin). Atelier fictif : aucune donnée client.
  'methode.demo.eyebrow': 'La démonstration',
  'methode.demo.intro':
    'Avant le détail, trois minutes dans un atelier de restauration fictif : ce que l’équipe saisit, ce que vous recevez. Les chiffres sont inventés. Le dispositif est celui que j’installe.',
  'methode.demo.caption': 'Atelier fictif · chiffres inventés · environ 3 minutes',
  'methode.demo.fullscreen': 'Plein écran',
  'methode.demo.frameTitle': 'Démonstration Optialys sur un atelier de restauration fictif',
  'methode.demo.mobile.body':
    'Elle se regarde mieux sur un écran d’ordinateur. Sur téléphone, elle s’ouvre en une page à faire défiler.',
  'methode.demo.mobile.cta': 'Ouvrir la démonstration',
  'methode.eyebrow': 'La méthode',
  'methode.title.line1': 'Comment on passe de',
  'methode.title.line2': '« je crois » à « je sais ».',
  'methode.intro':
    'Trois temps, dans cet ordre, sans raccourci possible. Le diagnostic établit le chiffre. L’installation rend le chiffre disponible en continu. Le pilotage, c’est quelqu’un qui s’en occupe à votre place — et c’est le seul des trois qui ne s’arrête jamais.',
  'methode.rule.eyebrow': 'La règle',
  'methode.rule.title': 'Je ne remplace jamais votre logiciel métier.',
  'methode.rule.body':
    'Votre EBP, votre Sage, vos tableurs, vos carnets : tout reste. Je lis ce qui existe et je comble ce qui manque — c’est-à-dire, presque toujours, l’imputation des heures au bon chantier. Un atelier qui doit changer d’outil ne change pas d’outil : il arrête le projet.',
  'methode.adoption.eyebrow': 'L’adoption',
  'methode.adoption.title': 'Votre équipe a une seule chose à faire.',
  'methode.adoption.body':
    'Pointer les heures sur la bonne voiture, tous les jours, en quelques secondes, avec les mains sales. C’est le seul geste demandé à l’atelier — et c’est celui sur lequel tout repose. Le reste du système est mon problème, pas le vôtre.',
  'methode.cta.title': 'On commence par regarder un chantier.',
  'methode.cta.body':
    'Un seul, terminé, que vous avez encore en tête. C’est suffisant pour savoir s’il y a quelque chose à aller chercher chez vous.',

  // ─── Page à propos ─────────────────────────────────────────────────────
  'about.eyebrow': 'À propos',
  'about.title.line1': 'Je m’appelle Nolan,',
  'about.title.line2': 'et je compte ce que personne ne compte.',
  'about.body1':
    'Les heures qui ne sont imputées à aucune voiture. Les avenants que personne ne chiffre. La sous-traitance qui repart au coût. Ce sont les trois endroits par où une marge d’atelier s’en va, et ce sont exactement les trois que personne ne mesure pendant que le chantier tourne.',
  'about.body2':
    'Le métier qui sait faire ça s’appelle le contrôle de gestion des entreprises à l’affaire : prix de revient, coût horaire chargé, marge sur coût direct, comptabilisation à l’avancement. Une discipline centenaire, normée, enseignée — et que presque personne de ma génération ne va apprendre. C’est précisément ce qui la rend libre.',
  'about.body3':
    'Des dizaines de milliers de gens savent construire une automatisation. Quelques milliers savent lire la rentabilité d’un chantier. À peu près personne ne sait faire les deux — je me suis installé à cette intersection et je n’ai pas l’intention d’en bouger. Concrètement : je construis le système qui mesure l’écart entre le devisé et le consommé, je le fais tourner moi-même, et chaque mois je viens vous dire ce qu’il raconte. Vous ne voyez jamais la machine. Vous voyez un chiffre, et trois décisions à prendre.',
  'about.why.eyebrow': 'Pourquoi les ateliers',
  'about.why.title': 'Parce que le problème y est net.',
  'about.why.body':
    'Une voiture de collection est unique. Le devis est une estimation faite avant d’avoir ouvert la caisse. Entre le devis et la livraison, il y a dix-huit mois, quatre corps de métier, des pièces qui n’arrivent pas et des travaux ajoutés en cours de route. La marge ne se perd pas d’un coup : elle s’érode, semaine après semaine, sans que rien ne l’affiche. C’est un problème mesurable, et c’est rare.',
  'about.principles.eyebrow': 'Comment je travaille',
  'about.principles.1.title': 'Je ne promets pas de chiffre avant de l’avoir vu',
  'about.principles.1.desc':
    'Aucune estimation de gain avant d’avoir lu vos données. Les pourcentages annoncés à l’avance ne valent rien, et vous le savez.',
  'about.principles.2.title': 'Ce que je construis vous appartient',
  'about.principles.2.desc':
    'Vos données restent les vôtres, le système est réversible, et vous partez avec si vous partez. Pas d’otage.',
  'about.principles.3.title': 'Je dis quand il n’y a rien à faire',
  'about.principles.3.desc':
    'Certains ateliers pilotent déjà correctement. Dans ce cas je le dis, et l’histoire s’arrête là.',

  // ─── Page contact ──────────────────────────────────────────────────────
  'contact.eyebrow': 'Contact',
  'contact.title.line1': 'Un appel de',
  'contact.title.line2': 'quinze minutes.',
  'contact.subtitle':
    'Pas une démonstration, pas de présentation. Vous décrivez un chantier récent, je vous dis où je regarderais en premier.',
  'contact.form.heading': 'Écrire',
  'contact.form.tagline': 'Réponse sous 24 heures ouvrées, par moi, pas par un formulaire.',
  'contact.form.firstName': 'Nom',
  'contact.form.profEmail': 'Email professionnel',
  'contact.form.company': 'Atelier',
  'contact.form.sector': 'Activité',
  'contact.form.selectSector': 'Choisir…',
  'contact.form.sector.classicCars': 'Restauration / préparation de voitures de collection',
  'contact.form.sector.bodywork': 'Carrosserie, tôlerie, peinture haut de gamme',
  'contact.form.sector.furniture': 'Mobilier d’art, agencement, artisanat haut de gamme',
  'contact.form.sector.otherWorkshop': 'Autre atelier travaillant à l’affaire',
  'contact.form.sector.other': 'Autre',
  'contact.form.project': 'Le chantier dont vous voulez parler',
  'contact.form.projectPlaceholder':
    'Ex : une resto complète devisée 400 h, livrée à 650, et je n’ai jamais su où était parti l’écart.',
  'contact.form.send': 'Envoyer',
  'contact.form.sending': 'Envoi…',
  'contact.form.sentTitle': 'Message reçu.',
  'contact.form.sentBody': 'Je réponds sous 24 heures ouvrées, à l’adresse que vous avez indiquée.',
  'contact.form.errorTitle': 'L’envoi a échoué.',
  'contact.form.errorBody': 'Écrivez-moi directement à nolan@optialys.com — je réponds aussi vite.',
  'contact.form.retry': 'Réessayer',
  'contact.form.mailtoTitle': 'Votre messagerie vient de s’ouvrir.',
  'contact.form.mailtoBody': 'Le message est pré-rempli — il ne reste qu’à l’envoyer. Si rien ne s’est ouvert, écrivez-moi à nolan@optialys.com.',
  'contact.or': 'ou',
  'contact.calendly.heading': 'Réserver directement',
  'contact.calendly.tagline': 'Choisissez un créneau. Quinze minutes, en visio, sans engagement.',
};

const en: Dict = {
  // ─── Nav ───────────────────────────────────────────────────────────────
  'nav.home': 'Home',
  'nav.methode': 'The method',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.cta': 'Book a call',

  // ─── Footer ────────────────────────────────────────────────────────────
  'footer.tagline': 'Operational management accounting for high-end workshops.',
  'footer.navigation': 'Navigation',
  'footer.resources': 'Resources',
  'footer.legal': 'Legal',
  'footer.legalNotice': 'Legal notice',
  'footer.privacy': 'Privacy policy',
  'footer.sectors': 'Sectors',
  'footer.blog': 'Writing',
  'footer.copyright': 'Optialys — Operational management accounting for high-end workshops.',

  // ─── Home · Hero ───────────────────────────────────────────────────────
  'home.hero.eyebrow': 'Project-based workshops · Management accounting',
  'home.hero.title.line1': 'I take care of',
  'home.hero.title.line2': 'your margin.',
  'home.hero.body':
    'You quote 400 hours. The job takes 650. Nobody notices before the final invoice.',
  'home.hero.body.highlight': 'My job is to see it at hour 200.',
  'home.hero.cta.primary': 'Book a call',
  'home.hero.cta.secondary': 'See how I work',
  'home.hero.cta.reassure': '15 minutes · video call · no commitment',
  'home.hero.pill.1': 'Diagnostic',
  'home.hero.pill.2': 'Installation',
  'home.hero.pill.3': 'Steering',

  // ─── Home · The introduction video ─────────────────────────────────────
  'home.video.eyebrow': 'The introduction',
  'home.video.title': 'Two and a half minutes. You will know if this is for you.',
  'home.video.caption': '2 min 36 · Nolan Prayagsing, founder of Optialys',
  'home.video.fallback': 'Your browser cannot play this video.',
  'home.video.download': 'Download it',

  // ─── Home · The observation ────────────────────────────────────────────
  'home.problem.eyebrow': 'The observation',
  'home.problem.title': 'A full order book tells you nothing about your margin.',
  'home.problem.intro':
    'Three leaks show up in almost every workshop I look at. None of them is about carelessness — they are measurement gaps.',
  'home.problem.1.title': 'Hours belong to nobody',
  'home.problem.1.desc':
    'A craftsman spends the afternoon on a wing that was never quoted. That evening the hour ends up on a whiteboard, in a notebook, or nowhere. At closing it is charged to no car — so it cost no one anything.',
  'home.problem.2.title': 'Change orders are never priced',
  'home.problem.2.desc':
    '“While we are at it, let us redo the loom.” The client says yes, the workshop does it, and the supplementary quote is never issued. The work is real. The invoice is not.',
  'home.problem.3.title': 'Subcontracting goes out at cost',
  'home.problem.3.desc':
    'Chrome, machining and upholstery go out and come back re-invoiced to the cent. You fronted the cash, carried the delay and took the risk — without a single point of margin.',
  'home.problem.close':
    'One shared cause: every car is unique, the quote is an estimate, and nothing measures the gap while it widens. Margin is discovered at the end, too late to correct it.',

  // ─── Home · Already delivered ──────────────────────────────────────────
  'home.proof.eyebrow': 'Already delivered',
  'home.proof.title': 'Systems in production, at real companies.',
  'home.proof.intro':
    'Before workshops, I built and ran operating systems for companies with the same underlying problem: scattered data, and decisions taken too late.',
  'home.proof.1.sector': 'Trust company · Luxembourg',
  'home.proof.1.what': 'A content production system',
  'home.proof.1.desc':
    'Four chains that take an idea, work it, and hand it back ready to publish. Live since 2026, under an annual maintenance contract.',
  'home.proof.2.sector': 'Koosmik',
  'home.proof.2.what': 'A tender radar',
  'home.proof.2.desc':
    'Opportunity monitoring, automatic qualification, team notification and direct writing into the CRM. Delivered, then taken in-house by their team.',
  'home.proof.3.sector': 'Two companies in one group',
  'home.proof.3.what': 'The same engine, duplicated',
  'home.proof.3.desc':
    'The production chains adapted to two structures in different trades, without starting over. Under regular review.',
  'home.proof.close':
    'None of these is a workshop: they predate it. The first workshop margin cockpit is being deployed now — I will tell you about it on the call.',

  // ─── Home · The reversal ───────────────────────────────────────────────
  'home.turn.eyebrow': 'The reversal',
  'home.turn.title': 'You do not need one more dashboard.',
  'home.turn.quote':
    'You are not buying a tool. You are buying someone who answers for your numbers.',
  'home.turn.attribution': 'Nolan Prayagsing · Optialys',
  'home.turn.body':
    'Most providers deliver a system and wish you luck. You have to learn it, get the workshop to adopt it, and feed it every day. That is precisely where these projects die.',
  'home.turn.body2':
    'Here, you use the system every day: your shop manager sees where every car stands, and you are alerted when a job starts to drift — not once it has finished drifting. What you never have to do is maintain it, fix it and keep it evolving. That is my job, and I am the one who answers for what it says.',

  // ─── Home · The method ─────────────────────────────────────────────────
  'home.offer.eyebrow': 'The method',
  'home.offer.title': 'Three stages. Only the third one matters.',
  'home.offer.1.label': 'The diagnostic',
  'home.offer.1.kicker': '2 to 3 weeks',
  'home.offer.1.body':
    'I spend half a day in the workshop watching how data actually enters: who writes what, on which support, at what moment. Then I reconstruct planned versus actual on three to five completed jobs, from your own files.',
  'home.offer.1.p1': 'Half a day on site, observing the real flow',
  'home.offer.1.p2': 'Extraction from your existing tools — I replace nothing, I read',
  'home.offer.1.p3': 'Quoted versus actual, reconstructed on completed jobs',
  'home.offer.1.p4': 'What that gap costs you over a year, in figures',
  'home.offer.1.p5': 'A one-hour debrief, and a document you keep',
  'home.offer.2.label': 'The installation',
  'home.offer.2.kicker': '3 to 6 weeks',
  'home.offer.2.body':
    'The infrastructure that makes steering possible. You use it daily — but it is not one more piece of software to administer: I am the one who runs it. Your trade software stays exactly where it is.',
  'home.offer.2.p1': 'The operational base: jobs, hours, change orders, subcontracting, costs',
  'home.offer.2.p2': 'Shop-floor entry — the only place your team is involved',
  'home.offer.2.p3': 'Connections to what already runs, replacing nothing',
  'home.offer.2.p4': 'The planned-versus-actual engine and drift alerts',
  'home.offer.2.p5': 'Management views',
  'home.offer.3.label': 'The steering',
  'home.offer.3.kicker': 'The product',
  'home.offer.3.body':
    'Every month, one hour with you: the jobs that are drifting, the number, three decisions. Between reviews you are alerted when a job leaves its trajectory — not once it has finished leaving it.',
  'home.offer.3.p1': 'The monthly margin review — one hour, three decisions',
  'home.offer.3.p2': 'The written report, read and annotated line by line',
  'home.offer.3.p3': 'Alerts: overrun, unpriced change order, subcontracting without margin',
  'home.offer.3.p4': 'The system keeps evolving, at no extra invoice',

  // ─── Home · The anchor ─────────────────────────────────────────────────
  'home.anchor.eyebrow': 'What it replaces',
  'home.anchor.title': 'Compare me to a hire, not to a provider.',
  'home.anchor.body':
    'A part-time management accountant costs three to four thousand euros a month, fully loaded. They will not know restoration, they will work in Excel, and one day they will leave.',
  'home.anchor.body2': 'I know your jobs. And the system does not leave.',

  // ─── Home · Who for ────────────────────────────────────────────────────
  'home.forwho.eyebrow': 'Who it is for',
  'home.forwho.title': 'Workshops that sell hours on long jobs.',
  'home.forwho.body':
    'Classic car restoration and preparation, first of all. More broadly: high-end workshops working project by project, where the quote is an estimate and the margin is decided by the gap. Ten to forty people, jobs running twelve to thirty-six months, cash that tightens in winter.',
  'home.forwho.not.title': 'It is not for you if',
  'home.forwho.not.1': 'You bill time spent, with no binding quote.',
  'home.forwho.not.2': 'Your jobs are measured in days.',
  'home.forwho.not.3': 'You are looking for software to buy and administer yourself.',

  // ─── Home · Final CTA ──────────────────────────────────────────────────
  'home.final.eyebrow': 'Next',
  'home.final.title': 'Let us take fifteen minutes.',
  'home.final.body':
    'Describe a recent job — the one that left you with a doubt. I will tell you where I would look first, and why. If there is nothing to find, I will tell you that too.',
  'home.final.cta': 'Book a call',

  // ─── Method page ───────────────────────────────────────────────────────
  'methode.demo.eyebrow': 'The demo',
  'methode.demo.intro':
    'Before the detail, three minutes inside a fictional restoration workshop: what the team logs, what you receive. The figures are made up. The setup is the one I install. The demo itself is in French.',
  'methode.demo.caption': 'Fictional workshop · made-up figures · about 3 minutes · in French',
  'methode.demo.fullscreen': 'Full screen',
  'methode.demo.frameTitle': 'Optialys demo on a fictional restoration workshop',
  'methode.demo.mobile.body':
    'It is best viewed on a computer screen. On a phone, it opens as a single scrolling page.',
  'methode.demo.mobile.cta': 'Open the demo',
  'methode.eyebrow': 'The method',
  'methode.title.line1': 'How you get from',
  'methode.title.line2': '“I think” to “I know”.',
  'methode.intro':
    'Three stages, in this order, with no shortcut. The diagnostic establishes the number. The installation makes that number available continuously. The steering is someone taking care of it for you — and it is the only one of the three that never ends.',
  'methode.rule.eyebrow': 'The rule',
  'methode.rule.title': 'I never replace your trade software.',
  'methode.rule.body':
    'Your accounting package, your spreadsheets, your notebooks: everything stays. I read what exists and fill what is missing — which, almost always, means charging hours to the right job. A workshop asked to change tools does not change tools: it stops the project.',
  'methode.adoption.eyebrow': 'Adoption',
  'methode.adoption.title': 'Your team has exactly one thing to do.',
  'methode.adoption.body':
    'Log hours against the right car, every day, in a few seconds, with dirty hands. That is the only gesture asked of the workshop — and everything rests on it. The rest of the system is my problem, not yours.',
  'methode.cta.title': 'We start by looking at one job.',
  'methode.cta.body':
    'A single completed one you still remember. That is enough to know whether there is anything worth going after.',

  // ─── About page ────────────────────────────────────────────────────────
  'about.eyebrow': 'About',
  'about.title.line1': 'My name is Nolan,',
  'about.title.line2': 'and I count what nobody counts.',
  'about.body1':
    'The hours charged to no car. The change orders nobody prices. The subcontracting that goes back out at cost. Those are the three places a workshop margin leaves through, and they are exactly the three nobody measures while the job is still running.',
  'about.body2':
    'The trade that can do this is called management accounting for project-based businesses: cost price, loaded hourly rate, margin on direct cost, percentage-of-completion accounting. A century-old discipline, standardised, taught — and one almost nobody of my generation is going to learn. That is exactly what makes it open.',
  'about.body3':
    'Tens of thousands of people can build an automation. A few thousand can read the profitability of a job. Almost nobody does both — I set up at that intersection and I do not intend to move. In practice: I build the system that measures the gap between quoted and consumed, I run it myself, and each month I come and tell you what it says. You never see the machine. You see a number, and three decisions to make.',
  'about.why.eyebrow': 'Why workshops',
  'about.why.title': 'Because the problem is clean there.',
  'about.why.body':
    'A collector car is unique. The quote is an estimate made before the shell was opened. Between quote and delivery there are eighteen months, four trades, parts that do not arrive and work added along the way. Margin is not lost in one go: it erodes, week after week, with nothing displaying it. That is a measurable problem, and measurable problems are rare.',
  'about.principles.eyebrow': 'How I work',
  'about.principles.1.title': 'I promise no number before seeing it',
  'about.principles.1.desc':
    'No estimate of gains before I have read your data. Percentages announced in advance are worth nothing, and you know it.',
  'about.principles.2.title': 'What I build belongs to you',
  'about.principles.2.desc':
    'Your data stays yours, the system is reversible, and you leave with it if you leave. No hostages.',
  'about.principles.3.title': 'I say when there is nothing to do',
  'about.principles.3.desc':
    'Some workshops already steer properly. In that case I say so, and the story ends there.',

  // ─── Contact page ──────────────────────────────────────────────────────
  'contact.eyebrow': 'Contact',
  'contact.title.line1': 'A fifteen-minute',
  'contact.title.line2': 'conversation.',
  'contact.subtitle':
    'No demo, no deck. You describe a recent job, I tell you where I would look first.',
  'contact.form.heading': 'Write',
  'contact.form.tagline': 'Answered within one working day, by me, not by a form.',
  'contact.form.firstName': 'Name',
  'contact.form.profEmail': 'Work email',
  'contact.form.company': 'Workshop',
  'contact.form.sector': 'Activity',
  'contact.form.selectSector': 'Choose…',
  'contact.form.sector.classicCars': 'Classic car restoration / preparation',
  'contact.form.sector.bodywork': 'High-end bodywork, panel beating, paint',
  'contact.form.sector.furniture': 'Fine furniture, fit-out, high-end craft',
  'contact.form.sector.otherWorkshop': 'Another project-based workshop',
  'contact.form.sector.other': 'Other',
  'contact.form.project': 'The job you want to talk about',
  'contact.form.projectPlaceholder':
    'e.g. a full restoration quoted at 400 h, delivered at 650, and I never found out where the gap went.',
  'contact.form.send': 'Send',
  'contact.form.sending': 'Sending…',
  'contact.form.sentTitle': 'Message received.',
  'contact.form.sentBody': 'I reply within one working day, to the address you gave.',
  'contact.form.errorTitle': 'Sending failed.',
  'contact.form.errorBody': 'Write to me directly at nolan@optialys.com — I answer just as fast.',
  'contact.form.retry': 'Try again',
  'contact.form.mailtoTitle': 'Your mail app just opened.',
  'contact.form.mailtoBody': 'The message is pre-filled — all that is left is to send it. If nothing opened, write to me at nolan@optialys.com.',
  'contact.or': 'or',
  'contact.calendly.heading': 'Book directly',
  'contact.calendly.tagline': 'Pick a slot. Fifteen minutes, video call, no commitment.',
};

export const translations: Record<Lang, Dict> = { fr, en };
