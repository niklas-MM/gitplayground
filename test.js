const produkte = [
  { name: "Vitamin D Tropfen", preis: 29.99, verfuegbar: true },
  { name: "Omega 3", preis: 24.99, verfuegbar: false },
  { name: "Vitamin B12", preis: 19.99, verfuegbar: true }
]

const rabattBerechnen = (preis, prozent) => {
  return (preis - (preis * prozent / 100)).toFixed(2)
}

const verfuegbare = produkte.filter((p) => p.verfuegbar === true)

verfuegbare.forEach((p) => {
  console.log(`${p.name}: normal ${p.preis}€ → Angebot ${rabattBerechnen(p.preis, 10)}€`)
})
