const products = [
  {
    name: "Mandarin Cookies",
    type: "sativa",
    grams: 3.5,
    price: 23.43,
    category: "Dried Flower",
    tags: ["fruity", "citrus", "high-thc"],
    desc: "Tangy citrus, 25–31% THC.",
    terpenes: ["Limonene", "Caryophyllene", "Myrcene"],
    reportedEffects: ["Uplifted", "Focused", "Creative"],
    flavourNotes: ["Citrus", "Mandarin", "Herbal"],
    bestFor: ["Daytime", "Creative Work"],
    keywords: ["mandarin cookies", "sativa citrus", "high thc sativa", "energizing flower"],
    url: "https://www.oneplant.ca/locations/toronto-kensington#/product/6039/",
    img: "https://oneplant-new-waio-app.b-cdn.net/media/f/5f/7e/05/16/5f7e0516-8486-4449-b5cb-dc1996c62a47.jpg"
  },
  {
    name: "Banana OG Pre-Roll",
    type: "indica",
    grams: 3.5,
    price: 22.40,
    category: "Pre-Rolls",
    tags: ["pre-roll", "banana", "chill"],
    desc: "Smooth indica with banana flavour. 22–29.5% THC.",
    terpenes: ["Myrcene", "Limonene", "Pinene"],
    reportedEffects: ["Relaxed", "Sleepy", "Euphoric"],
    flavourNotes: ["Banana", "Earthy", "Sweet"],
    bestFor: ["Evening", "Relaxation", "Stress Relief"],
    keywords: ["banana og", "indica banana", "pre-roll relaxing", "chill indica"],
    url: "https://www.oneplant.ca/locations/toronto-kensington#/product/6031/",
    img: "https://oneplant-new-waio-app.b-cdn.net/media/f/7d/f5/3d/28/7df53d28-5b8b-4cef-843a-d634aa6ef074.jpg"
  },
  {
    name: "Jack Haze Pre-Roll",
    type: "sativa",
    grams: 1,
    price: 9.84,
    category: "Pre-Rolls",
    tags: ["pre-roll", "sativa", "energize"],
    desc: "2x0.5g. Uplifting and herbal. THC 17–23%.",
    terpenes: ["Terpinolene", "Pinene", "Caryophyllene"],
    reportedEffects: ["Energetic", "Talkative", "Creative"],
    flavourNotes: ["Herbal", "Citrus", "Pepper"],
    bestFor: ["Daytime", "Focus", "Socializing"],
    keywords: ["jack haze", "sativa pre-roll", "herbal weed", "focus joint"],
    url: "https://www.oneplant.ca/locations/toronto-kensington#/product/6008/",
    img: "https://oneplant-new-waio-app.b-cdn.net/media/f/4c/6d/4a/fa/4c6d4afa-0a66-46b2-b196-47952e39d236.jpg"
  },
  {
    name: "No.11 Distillate Delta 9 - Multi-Flavour",
    type: "hybrid",
    price: 4.49,
    category: "Edibles",
    tags: ["edible", "multi-flavour", "gummy"],
    desc: "4-pack soft chews, 10mg THC total. Flavours: cherry, watermelon, apple, strawberry.",
    terpenes: ["Unknown (Distillate)"],
    reportedEffects: ["Balanced", "Mild", "Happy"],
    flavourNotes: ["Cherry", "Watermelon", "Strawberry", "Apple"],
    bestFor: ["Edible Beginners", "Mild Experience"],
    keywords: ["gummy edible", "multi flavour gummies", "10mg thc edibles"],
    url: "https://www.oneplant.ca/locations/toronto-kensington#/product/5989/",
    img: "https://oneplant-new-waio-app.b-cdn.net/media/91280d5b8410/9a/b4/f1/84/9ab4f184-37b3-4155-bb0e-69a7a41b4ce5.jpg"
  },
  {
    name: "Mandarin Cookies (28g)",
    type: "sativa",
    grams: 28,
    price: 99.99,
    category: "Dried Flower",
    tags: ["flower", "sale", "bundle"],
    desc: "Back Forty | 28g | THC: 25–31%",
    terpenes: ["Limonene", "Caryophyllene", "Myrcene"],
    reportedEffects: ["Uplifted", "Creative", "Relaxed"],
    flavourNotes: ["Mandarin", "Spicy", "Earthy"],
    bestFor: ["Bulk Sativa", "Productivity", "Creativity"],
    keywords: ["mandarin cookies ounce", "back forty", "bulk flower sativa"],
    url: "https://www.oneplant.ca/locations/toronto-kensington#/product/6040/",
    img: "https://oneplant-new-waio-app.b-cdn.net/media/f/04/7d/71/b5/047d71b5-86a6-4ae7-a5cf-16e50f374f8f.jpg"
  },
  {
    name: "Panda Puff",
    type: "indica",
    grams: 28,
    price: 104.76,
    category: "Dried Flower",
    tags: ["flower", "plant perks", "relax"],
    desc: "Back Forty | 28g | THC: 24–30% | CBD: 1%",
    terpenes: ["Myrcene", "Caryophyllene", "Linalool"],
    reportedEffects: ["Relaxed", "Calm", "Euphoric"],
    flavourNotes: ["Sweet", "Earthy", "Spicy"],
    bestFor: ["Nighttime", "Wind Down", "Anxiety"],
    keywords: ["panda puff", "relaxing indica", "plant perks", "indica ounce"],
    url: "https://www.oneplant.ca/locations/toronto-kensington#/product/6042/",
    img: "https://oneplant-new-waio-app.b-cdn.net/media/f/3b/9f/d0/ec/3b9fd0ec-4045-43c3-beb9-c0856c70aa0f.jpg"
  },
  {
    name: "Redecan Gems 5:0 Capsules",
    type: "hybrid",
    price: 13.44,
    category: "Capsules",
    tags: ["capsules", "softgel", "mild-thc"],
    desc: "15 softgels | 4–6mg THC each | CBD: 1mg | Ethanol-extracted hybrid MCT formula.",
    terpenes: ["None (Extracted Capsules)"],
    reportedEffects: ["Mild", "Balanced", "Steady Onset"],
    flavourNotes: ["Neutral"],
    bestFor: ["Discreet Use", "Beginner"],
    keywords: ["redecan gems", "5:0 capsules", "hybrid softgels", "mild thc caps"],
    url: "https://www.oneplant.ca/locations/toronto-kensington#/product/6353/",
    img: "https://oneplant-new-waio-app.b-cdn.net/media/f/45/95/c9/50/4595c950-1031-4a54-a387-d70bf573f570.png"
  },
  {
    name: "CBD GEMS + 15 Caps",
    type: "blend",
    price: 36.15,
    category: "Capsules",
    tags: ["capsules", "high-cbd", "softgel"],
    desc: "15 caps | 1.5% THC | 2.2% CBD | 30mg CBD per cap | CO2-extracted, MCT oil base.",
    terpenes: ["None (CO2 extract)"],
    reportedEffects: ["Calm", "Clear Headed", "Non-intoxicating"],
    flavourNotes: ["Neutral"],
    bestFor: ["Daily Use", "CBD Relief", "Non-psychoactive"],
    keywords: ["cbd gems", "high cbd capsules", "softgel cbd", "non intoxicating"],
    url: "https://www.oneplant.ca/locations/toronto-kensington#/product/6355/",
    img: "https://oneplant-new-waio-app.b-cdn.net/media/f/69/b8/e3/8b/69b8e38b-7f3f-4f2b-8d6b-098f75b4b2b3.jpg"
  },
  {
    name: "Redecan CBD Reign Drops",
    type: "blend",
    price: 16.55,
    category: "Oils and Sprays",
    tags: ["oil", "cbd", "low-thc"],
    desc: "30ml bottle | 57mg THC | 384–471mg CBD | CO2-extracted, MCT formula for ingestion only.",
    terpenes: ["None (Oil Extract)"],
    reportedEffects: ["Calm", "Relief", "Steady"],
    flavourNotes: ["Neutral", "MCT"],
    bestFor: ["Daytime CBD", "Microdosing", "Oil-based"],
    keywords: ["redecan reign", "cbd oil", "low thc drops", "tincture style cbd"],
    url: "https://www.oneplant.ca/locations/toronto-kensington#/product/6359/",
    img: "https://oneplant-new-waio-app.b-cdn.net/media/f/b5/09/23/7d/b509237d-3adf-47f9-ae0f-bd701b74312a.jpg"
  }
];


// Emoji tagging map
const effectsMap = {
  "indica": "🌙", "sativa": "🌞", "hybrid": "🌀", "blend": "🧬",
  "pre-roll": "🚬", "edible": "🍬", "gummy": "🧸", "capsules": "💊",
  "oil": "🛢", "cbd": "🧘", "banana": "🍌", "citrus": "🍋",
  "sweet": "🍭", "relax": "😌", "energize": "⚡", "sale": "🔥",
  "fruity": "🍓", "multi-flavour": "🌈", "high-thc": "🔥", "bundle": "📦"
};

// Helper functions
function extractTHC(desc) {
  const match = desc.match(/THC[: ]*([\d.–]+%)/i);
  return match ? match[1] : "Varies";
}
function extractCBD(desc) {
  const match = desc.match(/CBD[: ]*([\d.–]+%|[\d]+mg)/i);
  return match ? `<p><strong>CBD:</strong> ${match[1]}</p>` : "";
}

// Render logic
function renderProduct(product) {
  const container = document.createElement("div");
  container.className = "product-card";

  const emojiTags = product.tags
    .map(tag => effectsMap[tag] || "")
    .filter(Boolean)
    .join(" ");

  const productInfo = `
    <img src="${product.img}" alt="${product.name}">
    <div class="product-info">
      <h4>${emojiTags} ${product.name}</h4>
      <p>${product.category} | ${product.type}${product.grams ? ` | ${product.grams}g` : ''}</p>
      <p><strong>THC:</strong> ${extractTHC(product.desc)}</p>
      ${extractCBD(product.desc)}
      <p>${product.desc}</p>
      <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
      <p style="font-size: 0.8rem; color: #666;">⚠️ Potency may vary by batch. Check store for exact %.</p>
      <a href="${product.url}" target="_blank">👉 View at One Plant</a>
    </div>
  `;

  container.innerHTML = productInfo;
  document.getElementById("messages").appendChild(container);
}
