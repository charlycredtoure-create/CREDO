/* =====================================================================
   À MODIFIER : vos informations. Laissez "" ou [] pour masquer un élément :
   les sections vides n'apparaissent pas sur le site.
   ===================================================================== */
const SITE = {
  contact: {
    whatsapp: "",   // numéro international sans + ni espaces, ex. "22901234567"
    email: "",      // ex. "contact@votredomaine.com"
    linkedin: "",   // ex. "https://www.linkedin.com/in/votre-profil"
    instagram: "",  // ex. "https://www.instagram.com/votre-compte"
    facebook: ""    // ex. "https://www.facebook.com/votre-page"
  },
  depuis: "",        // ex. "2020"
  experience: "",    // ex. "5+ ans"
  competences: [],   // ex. ["Stratégie de communication", "Création de contenu"]
  outils: [],        // ex. ["Meta Ads", "Canva", "CapCut", "Notion"]
  ia: [],            // ex. ["Claude", "ChatGPT"]
  langues: "",       // ex. "Français professionnel · Anglais intermédiaire"
  parcours: [],      // { periode:"Janv. 2024 – Aujourd'hui", poste:"…", structure:"…", lieu:"…", texte:"…" }
  diplomes: [],      // { titre:"…", ecole:"…", annee:"2021" }
  certifications: [],// { titre:"…", organisme:"…", date:"Sept. 2023", lien:"https://…" }
  avis: []           // { texte:"…", nom:"…", role:"…" }
};

/* =====================================================================
   À MODIFIER : vos réalisations graphiques.
   1) Déposez les images à la racine du dépôt.
   2) Ajoutez une ligne par image (copiez le modèle).
   categorie : ex. "Post", "Flyer", "Logo". Les filtres se créent tout seuls.
   Liste vide = la section est masquée.
   ===================================================================== */
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

/* ---------- Moteur du site (ne pas modifier) ---------- */
(function () {
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function show(sec) { var s = $(sec); if (s) s.hidden = false; var n = document.querySelector('[data-nav="' + sec + '"]'); if (n) n.hidden = false; }
  function chips(list) { var d = el("div", "tags"); list.forEach(function (t) { d.appendChild(el("span", "", t)); }); return d; }

  /* Contact */
  var C = SITE.contact, box = $("contact-links");
  [[C.whatsapp && "https://wa.me/" + C.whatsapp, "WhatsApp", 1], [C.email && "mailto:" + C.email, "E-mail", 0], [C.linkedin, "LinkedIn", 0], [C.instagram, "Instagram", 0], [C.facebook, "Facebook", 0]]
    .forEach(function (it) {
      if (!it[0]) return;
      var a = el("a", "btn " + (it[2] ? "primary" : "ghost"), it[1]); a.href = it[0];
      if (it[0].indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
      box.appendChild(a);
    });
  if (!box.children.length) box.appendChild(el("p", "", "Coordonnées bientôt disponibles."));
  if (C.whatsapp) { var fab = $("fab"); fab.href = "https://wa.me/" + C.whatsapp; fab.hidden = false; }
  $("year").textContent = new Date().getFullYear();

  /* Chiffres clés */
  var facts = $("facts");
  function addFact(label, value) { var d = el("div"); d.appendChild(el("dt", "", label)); d.appendChild(el("dd", "", value)); facts.appendChild(d); }
  if (SITE.depuis) addFact("Depuis", SITE.depuis);
  if (SITE.experience) addFact("Expérience", SITE.experience);

  /* Compétences & outils */
  var blocks = [["Compétences", SITE.competences], ["Outils", SITE.outils], ["Intelligence artificielle", SITE.ia]].filter(function (b) { return b[1] && b[1].length; });
  if (blocks.length || SITE.langues) {
    show("outils");
    blocks.forEach(function (b) { var d = el("div", "skill"); d.appendChild(el("h3", "", b[0])); d.appendChild(chips(b[1])); $("skills").appendChild(d); });
    if (SITE.langues) $("langs").textContent = "Langues : " + SITE.langues; else $("langs").hidden = true;
  }

  /* Parcours */
  if (SITE.parcours.length) {
    show("parcours");
    SITE.parcours.forEach(function (p) {
      var r = el("div", "tl reveal"), r2 = el("div");
      r.appendChild(el("div", "tl-date", p.periode || ""));
      r2.appendChild(el("h3", "", p.poste || ""));
      r2.appendChild(el("div", "tl-org", [p.structure, p.lieu].filter(Boolean).join(" · ")));
      if (p.texte) r2.appendChild(el("p", "", p.texte));
      r.appendChild(r2); $("timeline").appendChild(r);
    });
  }

  /* Formation & certifications */
  if (SITE.diplomes.length || SITE.certifications.length) {
    show("formation");
    if (SITE.diplomes.length) {
      $("dipl-box").hidden = false;
      SITE.diplomes.forEach(function (d) { var li = el("li"); li.appendChild(el("b", "", d.titre)); li.appendChild(el("span", "", [d.ecole, d.annee].filter(Boolean).join(" · "))); $("diplomes").appendChild(li); });
    }
    if (SITE.certifications.length) {
      $("cert-box").hidden = false;
      SITE.certifications.forEach(function (c) {
        var li = el("li"); li.appendChild(el("b", "", c.titre));
        var s = el("span", "", [c.organisme, c.date].filter(Boolean).join(" · "));
        if (c.lien) { var a = el("a", "", "Voir le certificat ↗"); a.href = c.lien; a.target = "_blank"; a.rel = "noopener"; s.appendChild(a); }
        li.appendChild(s); $("certs").appendChild(li);
      });
    }
  }

  /* Avis */
  if (SITE.avis.length) {
    show("avis");
    SITE.avis.forEach(function (a) { var d = el("div", "review reveal"); d.appendChild(el("p", "", "« " + a.texte + " »")); d.appendChild(el("b", "", a.nom || "")); if (a.role) d.appendChild(el("span", "", a.role)); $("reviews").appendChild(d); });
  }

  /* Réalisations */
  var data = REALISATIONS.slice();
  if (!data.length && /apercu/.test(location.search)) data = [];
  if (data.length) {
    show("creations");
    var counts = {}; data.forEach(function (d) { if (d.projet) counts[d.projet] = (counts[d.projet] || 0) + 1; });
    var names = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a] || a.localeCompare(b); });
    var fw = $("f-works"); fw.querySelector("dd").textContent = data.length; fw.hidden = false;
    var fc = $("f-clients"); fc.querySelector("dd").textContent = names.length; fc.hidden = false;
    names.forEach(function (n) { var s = el("span", "", n); if (counts[n] > 1) s.appendChild(el("b", "", counts[n])); $("clients").appendChild(s); });

    var gal = $("gallery"), fbox = $("filters"), lb = $("lightbox"), lbImg = $("lb-img"), lbCap = $("lb-cap");
    var current = "Tous", shown = [], idx = 0, cats = ["Tous"];
    data.forEach(function (d) { if (d.categorie && cats.indexOf(d.categorie) < 0) cats.push(d.categorie); });
    if (cats.length > 2) cats.forEach(function (c) {
      var n = c === "Tous" ? data.length : data.filter(function (d) { return d.categorie === c; }).length;
      var b = el("button", "chip" + (c === "Tous" ? " on" : ""), c + " · " + n); b.type = "button";
      b.addEventListener("click", function () { current = c; Array.prototype.forEach.call(fbox.children, function (x) { x.classList.toggle("on", x === b); }); render(); });
      fbox.appendChild(b);
    });
    var render = function () {
      gal.innerHTML = "";
      shown = data.filter(function (d) { return current === "Tous" || d.categorie === current; });
      shown.forEach(function (d, i) {
        var b = el("button", "item"); b.type = "button";
        var img = el("img"); img.src = d.src; img.alt = d.titre || "Réalisation"; img.loading = "lazy"; img.decoding = "async";
        b.appendChild(img); b.appendChild(el("span", "cap", (d.titre || "") + (d.projet ? " · " + d.projet : "")));
        b.addEventListener("click", function () { idx = i; show1(); if (!lb.open) lb.showModal(); });
        gal.appendChild(b);
      });
    };
    var show1 = function () { var d = shown[idx]; lbImg.src = d.src; lbImg.alt = d.titre || ""; lbCap.textContent = [d.titre, d.projet, d.categorie].filter(Boolean).join(" · "); };
    var step = function (n) { idx = (idx + n + shown.length) % shown.length; show1(); };
    $("lb-close").addEventListener("click", function () { lb.close(); });
    $("lb-prev").addEventListener("click", function () { step(-1); });
    $("lb-next").addEventListener("click", function () { step(1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
    lb.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
    render();
  } else { $("cta-works").setAttribute("href", "#projets"); }

  /* Animations d'apparition + menu actif */
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(function (x) { x.classList.add("pre"); io.observe(x); });
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { document.querySelectorAll("#menu li").forEach(function (li) { li.classList.toggle("on", li.getAttribute("data-nav") === e.target.id); }); } });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section, section[id]").forEach(function (s) { spy.observe(s); });
  }
})();
