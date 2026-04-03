const produkte = [
  { name: "Vitamin D Tropfen", preis: 29.99, lager: 50 },
  { name: "Omega 3", preis: 24.99, lager: 0 },
  { name: "Vitamin B12", preis: 19.99, lager: 3 },
  { name: "Jod Tropfen", preis: 17.99, lager: 25 }
]

const verfuegbare = produkte.filter((p) => p.lager > 0)

const mitStatus = verfuegbare.map((p) => {
  const status = p.lager < 10 ? "⚠️ Fast ausverkauft" : "✅ Auf Lager"
  const angebotspreis = (p.preis * 0.9).toFixed(2)
  return { name: p.name, status, angebotspreis }
})

mitStatus.forEach((p) => {
  console.log(`${p.name} | ${p.status} | Angebot: ${p.angebotspreis}€`)
})