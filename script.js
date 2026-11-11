/* ====== À MODIFIER : vos réalisations graphiques ======
   1) Déposez vos images dans le dossier assets/realisations/
   2) Ajoutez une ligne par image ci-dessous (copiez le modèle).
   categorie : au choix, ex. "Réseaux sociaux", "Flyers & affiches", "Logos & identités", "Autres"
   Les filtres se créent automatiquement. Liste vide = la section est masquée.
   Astuce : ajoutez ?apercu à l'adresse du site pour voir la mise en page avec des exemples. */
const REALISATIONS = [
  { src: "post-eforp-rentree.jpg", titre: "La rentrée arrive…", categorie: "Post", projet: "EFORP Bénin" },
  { src: "post-eforp-metier.jpg", titre: "Quel métier t’intéresse ?", categorie: "Post", projet: "EFORP Bénin" },
  { src: "post-eforp-bientot.jpg", titre: "Quelque chose se prépare…", categorie: "Post", projet: "EFORP Bénin" },
  { src: "post-djanta-septembre.jpg", titre: "Fructueux mois de Septembre", categorie: "Post", projet: "Djanta Shop" },
  { src: "post-djanta-weekend.jpg", titre: "Outfit parfait pour le Weekend", categorie: "Post", projet: "Djanta Shop" },
  { src: "post-bange-corporate.jpg", titre: "Bange Bank vous accompagne dans vos projets", categorie: "Post", projet: "Bange Bank Bénin" },
  { src: "post-helpmeprof-contact.jpg", titre: "Help Me Prof · Contactez-nous", categorie: "Post", projet: "Help Me Prof" },
  { src: "post-bange-ebanking.jpg", titre: "Effectuez vos virements en ligne", categorie: "Post", projet: "Bange Bank Bénin" },
  { src: "post-bange-jeu.jpg", titre: "On connaît tous quelqu’un qui…", categorie: "Post", projet: "Bange Bank Bénin" },
  { src: "post-bange-momo.jpg", titre: "Simplifiez-vous la vie avec MoMo Express", categorie: "Post", projet: "Bange Bank Bénin" },
  { src: "post-bange-solutions-digitales.jpg", titre: "Vos opérations bancaires en toute autonomie", categorie: "Post", projet: "Bange Bank Bénin" },
  { src: "post-bange-weekend.jpg", titre: "C’est le Weekend", categorie: "Post", projet: "Bange Bank Bénin" },
  { src: "post-helpmeprof-datascience.jpg", titre: "Boostez votre carrière en Data Science", categorie: "Post", projet: "Help Me Prof" },
  { src: "post-helpmeprof-data-scientist.jpg", titre: "Devenez Data Scientist", categorie: "Post", projet: "Help Me Prof" },
  { src: "post-helpmeprof-disponibilite.jpg", titre: "Suivez les cours selon votre disponibilité", categorie: "Post", projet: "Help Me Prof" },
  { src: "post-ccgs-bepc2026.jpg", titre: "Vous êtes prêts, vous êtes capables, vous allez réussir !", categorie: "Post", projet: "CCGS Immobilier" },
  { src: "post-ccgs-weekend-immobilier.jpg", titre: "Excellent Weekend", categorie: "Post", projet: "CCGS Immobilier" },
  { src: "post-ccgs-weekend-conseils.jpg", titre: "Excellent Weekend !", categorie: "Post", projet: "CCGS Conseils et Expertises" },
  { src: "post-legumes-afrique.jpg", titre: "Retrouvez nos produits frais livrés à domicile", categorie: "Post", projet: "Légumes d’Afrique" },
  { src: "post-truelight-ebook.jpg", titre: "Maîtrisez votre gestion administrative", categorie: "Post", projet: "Truelight Communication" },
  { src: "post-zenith-village-des-fetes.jpg", titre: "Village des fêtes", categorie: "Post", projet: "Zenith Productions Group" },
  { src: "post-cceibank-cancer-du-sein.jpg", titre: "Journée internationale de lutte contre le cancer du sein", categorie: "Post", projet: "CCEI Bank Bénin" },
  { src: "post-cceibank-credit-noel.jpg", titre: "As-tu déjà souscrit au Crédit Noël ?", categorie: "Post", projet: "CCEI Bank Bénin" },
  { src: "post-cceibank-ebanking-releves.jpg", titre: "E-banking : imprimez vos relevés de compte", categorie: "Post", projet: "CCEI Bank Bénin" },
  { src: "post-cceibank-ebanking-virements.jpg", titre: "Réglez vos dépenses mensuelles par virements en ligne", categorie: "Post", projet: "CCEI Bank Bénin" },
  { src: "flyer-esbia-domaine.jpg", titre: "Découvrez le domaine qui vous passionne", categorie: "Flyer", projet: "ESBIA" },
  { src: "flyer-esbia-technologie.jpg", titre: "Devenez ingénieur dans les métiers de la technologie", categorie: "Flyer", projet: "ESBIA" },
  { src: "flyer-esbia-commerce-logistique.jpg", titre: "BTS commerce, transport et logistique", categorie: "Flyer", projet: "ESBIA" },
  { src: "flyer-esbia-finance.jpg", titre: "Finance, Banque, Assurance, Tourisme, Business…", categorie: "Flyer", projet: "ESBIA" },
  { src: "flyer-esbia-inscription.jpg", titre: "Des enseignements aux normes internationales", categorie: "Flyer", projet: "ESBIA" },
  { src: "logo-loulous.jpg", titre: "Galeries des Loulous", categorie: "Logo", projet: "Galeries des Loulous" },
  { src: "logo-gama-services-bleu.jpg", titre: "Gama Services Int. · version bleue", categorie: "Logo", projet: "Gama Services International" },
  { src: "logo-gama-services-degrade.jpg", titre: "Gama Services International · version dégradé", categorie: "Logo", projet: "Gama Services International" },
  { src: "logo-cafe-matinal.jpg", titre: "Le Café Matinal", categorie: "Logo", projet: "Le Café Matinal" },
  { src: "logo-oriental-containers.jpg", titre: "Oriental Containers Group", categorie: "Logo", projet: "Oriental Containers Group" },
  { src: "logo-mentor-agri.jpg", titre: "Mentor Agri Group", categorie: "Logo", projet: "Mentor Agri Group" },
  { src: "logo-esd-global-partner.jpg", titre: "ESD Global Partner", categorie: "Logo", projet: "ESD Global Partner" },
  { src: "logo-global-caf-partner.jpg", titre: "Global CAF Partner", categorie: "Logo", projet: "Global CAF Partner" },
  { src: "logo-help-me-prof.jpg", titre: "Help Me Prof", categorie: "Logo", projet: "Help Me Prof" },
  { src: "logo-padol-energy.jpg", titre: "Padol Energy", categorie: "Logo", projet: "Padol Energy" },
  { src: "logo-upebil.jpg", titre: "UPEBIL", categorie: "Logo", projet: "Union Professionnelle des Électriciens de Lokossa" },
];
/* ====================================================== */
/* ====== À MODIFIER : vos coordonnées (laissez "" pour masquer un bouton) ====== */
const CONTACT = {
  whatsapp: "",   // numéro international sans + ni espaces, ex. "22901234567"
  email: "",      // ex. "contact@votredomaine.com"
  linkedin: "",   // ex. "https://www.linkedin.com/in/votre-profil"
  instagram: ""   // ex. "https://www.instagram.com/votre-compte"
};
/* ============================================================================= */
(function () {
  var box = document.getElementById("contact-links");
  var items = [
    [CONTACT.whatsapp && "https://wa.me/" + CONTACT.whatsapp, "WhatsApp", true],
    [CONTACT.email && "mailto:" + CONTACT.email, "E-mail", false],
    [CONTACT.linkedin, "LinkedIn", false],
    [CONTACT.instagram, "Instagram", false]
  ];
  items.forEach(function (it) {
    if (!it[0]) return;
    var a = document.createElement("a");
    a.href = it[0]; a.textContent = it[1];
    a.className = "btn " + (it[2] ? "primary" : "ghost");
    if (it[0].indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
    box.appendChild(a);
  });
  if (!box.children.length) box.innerHTML = '<p>Coordonnées bientôt disponibles.</p>';
  document.getElementById("year").textContent = new Date().getFullYear();
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .12 });
  els.forEach(function (el) { el.classList.add("pre"); io.observe(el); });
})();

/* ---------- Galerie ---------- */
(function () {
  var data = REALISATIONS.slice(), preview = false;
  function ph(w, h, t, c) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '"><rect width="100%" height="100%" fill="' + c + '"/><text x="50%" y="50%" fill="#fff" font-family="Georgia,serif" font-size="' + Math.round(w / 12) + '" text-anchor="middle" dominant-baseline="middle">' + t + '</text></svg>';
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }
  if (!data.length && /apercu/.test(location.search)) {
    preview = true;
    data = [
      { src: ph(800, 1000, "Flyer", "#3a2f1c"), titre: "Exemple de flyer", categorie: "Flyers & affiches", projet: "Aperçu" },
      { src: ph(800, 800, "Post", "#b8893b"), titre: "Exemple de publication", categorie: "Réseaux sociaux", projet: "Aperçu" },
      { src: ph(800, 600, "Logo", "#1a1814"), titre: "Exemple de logo", categorie: "Logos & identités", projet: "Aperçu" },
      { src: ph(800, 1100, "Story", "#6b4e1e"), titre: "Exemple de story", categorie: "Réseaux sociaux", projet: "Aperçu" },
      { src: ph(800, 800, "Carrousel", "#8a6a2c"), titre: "Exemple de carrousel", categorie: "Réseaux sociaux", projet: "Aperçu" },
      { src: ph(800, 1000, "Affiche", "#2a241b"), titre: "Exemple d’affiche", categorie: "Flyers & affiches", projet: "Aperçu" }
    ];
  }
  var sec = document.getElementById("creations");
  if (!data.length || !sec) return;
  sec.hidden = false;
  document.getElementById("nav-creations").hidden = false;

  var gal = document.getElementById("gallery"), fbox = document.getElementById("filters");
  var lb = document.getElementById("lightbox"), lbImg = document.getElementById("lb-img"), lbCap = document.getElementById("lb-cap");
  var current = "Tous", shown = [], idx = 0;

  var cats = ["Tous"];
  data.forEach(function (d) { if (d.categorie && cats.indexOf(d.categorie) < 0) cats.push(d.categorie); });
  if (cats.length > 2) cats.forEach(function (c) {
    var b = document.createElement("button");
    b.type = "button"; b.textContent = c; b.className = "chip" + (c === "Tous" ? " on" : "");
    b.addEventListener("click", function () {
      current = c;
      Array.prototype.forEach.call(fbox.children, function (x) { x.classList.toggle("on", x === b); });
      render();
    });
    fbox.appendChild(b);
  });

  function render() {
    gal.innerHTML = "";
    shown = data.filter(function (d) { return current === "Tous" || d.categorie === current; });
    shown.forEach(function (d, i) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "item";
      var img = document.createElement("img");
      img.src = d.src; img.alt = d.titre || "Réalisation"; img.loading = "lazy"; img.decoding = "async";
      var cap = document.createElement("span");
      cap.className = "cap";
      cap.textContent = (d.titre || "") + (d.projet ? " · " + d.projet : "");
      b.appendChild(img); b.appendChild(cap);
      b.addEventListener("click", function () { open(i); });
      gal.appendChild(b);
    });
  }
  function show() {
    var d = shown[idx];
    lbImg.src = d.src; lbImg.alt = d.titre || "";
    lbCap.textContent = (d.titre || "") + (d.projet ? " · " + d.projet : "") + (d.categorie ? " · " + d.categorie : "");
  }
  function open(i) { idx = i; show(); if (!lb.open) lb.showModal(); }
  function step(n) { idx = (idx + n + shown.length) % shown.length; show(); }
  document.getElementById("lb-close").addEventListener("click", function () { lb.close(); });
  document.getElementById("lb-prev").addEventListener("click", function () { step(-1); });
  document.getElementById("lb-next").addEventListener("click", function () { step(1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
  render();
})();
