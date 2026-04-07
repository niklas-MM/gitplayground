const produkteLaden = async () => {
  console.log("Lade Produkte...")

  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=3")
    const produkte = await response.json()

    produkte.forEach((p) => {
      console.log(`${p.title} | ${p.price}€`)
    })
  } catch (fehler) {
    console.log("Fehler beim Laden:", fehler)
  }
}

produkteLaden()