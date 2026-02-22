// ============================================================
// CONFIGURACI\u00d3N CENTRAL DEL SITIO
// Edita estos datos sin tocar el layout ni los componentes.
// ============================================================

export const siteConfig = {
  name: "Max Hebeling",
  title: "MAX HEBELING",
  subtitle: "FORMANDO L\u00cdDERES. EDIFICANDO LEGADO.",
  manifesto: "El pensamiento define el gobierno de una generaci\u00f3n.",
  ctaText: "Descubrir mi pensamiento",
}

export const menuItems = [
  { label: "Biograf\u00eda", href: "#biografia" },
  { label: "Libros", href: "#libros" },
  { label: "Conferencias", href: "#conferencias" },
  { label: "Medios", href: "#medios" },
  { label: "Contacto", href: "#contacto" },
]

export const biographyData = {
  headline: "Autor, conferencista internacional y formador de l\u00edderes con impacto en m\u00e1s de 17 pa\u00edses.",
  bullets: [
    { role: "Autor", description: "de ocho libros sobre liderazgo, gobierno y prop\u00f3sito." },
    { role: "Conferencista", description: "internacional con presencia en m\u00e1s de 17 pa\u00edses." },
    { role: "Formador de l\u00edderes", description: "comprometido con la transformaci\u00f3n generacional." },
  ],
  bio: "Director Internacional de la Red Apost\u00f3lica Reino y Avivamiento. Pastor Principal de Revival & Kingdom Ministries, Inc. CEO de Reino Editorial. Diplomado en Colaboraci\u00f3n Internacional y Diplomacia. En 2023, fue nombrado Embajador de la Paz y la Justicia por la A.M.P.P. (Academia Mundial para a Promo\u00e7\u00e3o da Paz - Brasil).",
  pdfLink: "#",
}

export const booksData = [
  {
    id: 1,
    obra: "OBRA 01",
    categoria: "GENERAL / VIDA CRISTIANA",
    titulo: "PARAL\u00cdTICOS EN SILLAS SIN RUEDAS",
    descripcion: "Un llamado a salir de la Religi\u00f3n y el Legalismo.",
    coverImage: "/covers/paraliticos.png",
    amazonUrl: "https://a.co/d/0hy4yNwT",
  },
  {
    id: 2,
    obra: "OBRA 02",
    categoria: "GENERAL / VIDA CRISTIANA",
    titulo: "FINANZAS DEL REINO",
    descripcion: "Las finanzas no tienen que ver con el bolsillo, sino con el coraz\u00f3n.",
    coverImage: "/covers/finanzas-del-reino.png",
    amazonUrl: "https://a.co/d/0abLHmOr",
  },
  {
    id: 3,
    obra: "OBRA 03",
    categoria: "GENERAL / VIDA CRISTIANA",
    titulo: "GUERRA DE ALTARES",
    descripcion: "Los tres elementos m\u00e1s importantes del Reino vinculados en la adoraci\u00f3n.",
    coverImage: "/covers/guerra-de-altares.png",
    amazonUrl: "https://a.co/d/04g2PV9A",
  },
  {
    id: 4,
    obra: "OBRA 04",
    categoria: "GENERAL / VIDA CRISTIANA",
    titulo: "DIMENSIONES DE TRANSFORMACI\u00d3N",
    descripcion: "El desierto es como un quir\u00f3fano de alta complejidad.",
    coverImage: "/covers/dimensiones-de-transformacion.png",
    amazonUrl: "https://a.co/d/0aHrM6K5",
  },
  {
    id: 5,
    obra: "OBRA 05",
    categoria: "GENERAL / VIDA CRISTIANA",
    titulo: "EL VIENTRE DEL PADRE",
    descripcion: "La paternidad no es un lujo, un exceso o un artilugio; es sencillamente la cubierta de todo ministerio, que le da la legalidad de estar expuesto al trato de su propio car\u00e1cter.",
    coverImage: "/covers/el-vientre-del-padre.png",
    amazonUrl: "https://a.co/d/0ahoPxzh",
  },
  {
    id: 6,
    obra: "OBRA 06",
    categoria: "GENERAL / VIDA CRISTIANA",
    titulo: "EL PODER DE LA INICIACI\u00d3N",
    descripcion: "Revelando el Bautismo y el Ministerio.",
    coverImage: "/covers/el-poder-de-la-iniciacion.png",
    amazonUrl: "https://a.co/d/0bmM9XMw",
  },
  {
    id: 7,
    obra: "OBRA 07",
    categoria: "GENERAL / VIDA CRISTIANA",
    titulo: "JUDAS",
    descripcion: "Judas es un paseo a las cavernas de la deshonra y un refrescante y revelador panorama que incita a la sabidur\u00eda y madurez.",
    coverImage: "/covers/judas.png",
    amazonUrl: "https://a.co/d/08EVAFk0",
  },
  {
    id: 8,
    obra: "OBRA 08",
    categoria: "GENERAL / VIDA CRISTIANA",
    titulo: "EL BOCADO DE LA MUERTE",
    descripcion: "Cuando la Gracia se sienta a la mesa con la Traici\u00f3n.",
    coverImage: "/covers/el-bocado-de-la-muerte.png",
    amazonUrl: "https://a.co/d/0iuy92dx",
  },
]

export const conferencesData = [
  {
    title: "Gobierno y Liderazgo del Reino",
    description: "Principios fundamentales para gobernar con sabiduría, integridad y visión trascendente en todas las esferas de influencia.",
    date: "15-17 Abril 2026",
    location: "Ciudad de México, México",
    venue: "Centro de Convenciones",
    image: "/events/evento-placeholder.jpg",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661673106068!2d-99.16869!3d19.427023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzM3LjMiTiA5OcKwMTAnMDcuMyJX!5e0!3m2!1ses!2smx!4v1",
    status: "proximo" as const,
  },
]

export const mediaData = {
  interviews: [] as { title: string; link: string; platform: string }[],
  podcasts: [] as { title: string; link: string; platform: string }[],
  articles: [] as { title: string; link: string; platform: string }[],
  logos: [] as string[],
}

export const contactSubjects = [
  "Libros",
  "Conferencias",
  "Prensa",
  "Otros",
]

export const socialLinks = {
  email: "contacto@maxhebeling.com",
  instagram: "#",
  facebook: "#",
  youtube: "#",
}
