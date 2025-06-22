// chatbot.js

const messages = document.getElementById('messages');
const input = document.getElementById('userInput');
const quickRepliesContainer = document.getElementById('quick-replies');

const replies = [
  '🌙 Cheap Indica', '😌 Relaxing Hybrid', '💸 Under $12', '🔥 High THC',
  '🧘 CBD Rich', '🍋 Citrus Flavour', '🍬 Edibles', '💨 Vapes',
  '🚬 Pre-rolls', '🥤 Beverages', '💊 Capsules', '🛢 Oils',
  '😴 Sleep', '⚡ Energizing', '🍭 Sweet',
  '🍋 What is Limonene?', '🌿 What is Myrcene?', '🌶 What is Caryophyllene?'
];

let isExpanded = false;

function renderQuickReplies() {
  quickRepliesContainer.innerHTML = '';
  const visibleReplies = isExpanded ? replies : replies.slice(0, 6);

  visibleReplies.forEach(text => {
    const btn = document.createElement('button');
    btn.textContent = text.charAt(0).toUpperCase() + text.slice(1);
    btn.onclick = () => handleQuick(text);
    quickRepliesContainer.appendChild(btn);
  });

  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = isExpanded ? 'Show Less' : 'More Options';
  toggleBtn.onclick = () => {
    isExpanded = !isExpanded;
    renderQuickReplies();
  };
  quickRepliesContainer.appendChild(toggleBtn);
}

renderQuickReplies();

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') handleSend();
  if (e.key === 'Escape') document.getElementById('chat-widget').style.display = 'none';
});

function addMessage(text, sender = 'bot') {
  const div = document.createElement('div');
  div.className = sender === 'bot' ? 'bot-message' : 'user-message';
  div.innerHTML = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function showProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}" />
    <div class="product-info">
      <h4>🌿 ${product.name}</h4>
      <p><strong>Type:</strong> ${product.type}</p>
      <p><strong>Price:</strong> $${product.price.toFixed(2)} / ${product.grams ? product.grams + 'g' : 'unit'}</p>
      <p><strong>THC Info:</strong> ${product.desc}</p>
      <p><strong>Terpenes:</strong> ${product.terpenes?.join(', ') || "N/A"}</p>
      <p><strong>Effects:</strong> ${product.reportedEffects?.join(', ') || "N/A"}</p>
      ${product.url ? `<a href="${product.url}" target="_blank">View product ↗</a>` : ""}
    </div>
  `;
  messages.appendChild(card);
  messages.scrollTop = messages.scrollHeight;
}

function handleQuick(text) {
  input.value = text;
  handleSend();
}

function handleSend() {
  const query = input.value.trim();
  if (!query) return;
  addMessage(`<strong>You:</strong> ${query}`, 'user');
  respondTo(query);
  input.value = '';
}

function respondTo(query) {
  const normalized = query.toLowerCase();

  // 🍋 Terpene education
  const terpeneInfo = {
    limonene: {
      text: "🍋 Limonene is known for citrusy aromas, boosts mood and helps with stress.",
      tags: ["citrus", "limonene"]
    },
    myrcene: {
      text: "🌿 Myrcene has an earthy scent and helps you relax or fall asleep.",
      tags: ["myrcene", "relax"]
    },
    caryophyllene: {
      text: "🌶️ Caryophyllene is spicy, found in pepper, may help with inflammation.",
      tags: ["caryophyllene", "spice"]
    }
  };

  const terpeneMatch = Object.keys(terpeneInfo).find(t => normalized.includes(t));
  if (terpeneMatch) {
    addMessage(`<strong>Bot:</strong> ${terpeneInfo[terpeneMatch].text}<br>Want to see products with this terpene? (yes/no)`);
    window.pendingTerpene = terpeneInfo[terpeneMatch].tags;
    return;
  }

  if (window.pendingTerpene && (normalized.includes("yes") || normalized.includes("sure"))) {
    const terpTags = window.pendingTerpene;
    window.pendingTerpene = null;
    const filtered = products.filter(p => terpTags.some(tag => p.tags?.includes(tag)));
    if (filtered.length) filtered.forEach(showProductCard);
    else addMessage(`<strong>Bot:</strong> No terpene-tagged products found yet.`);
    return;
  }

  // 🧠 Match custom queries to product name, tags, or keywords
  const matches = matchProductToQuery(normalized);
  if (matches.length > 0) {
    matches.forEach(showProductCard);
    return;
  }

  // Fallback: scoring logic
  const highTHC = /high thc|thc over (\d+)|strong thc|potent thc/.exec(normalized);
  const highCBD = /cbd rich|cbd over (\d+)/.exec(normalized);
  const minTHC = highTHC ? parseFloat(highTHC[1] || 20) : 0;
  const minCBD = highCBD ? parseFloat(highCBD[1] || 10) : 0;

  const results = products.map(p => {
    const pricePerGram = p.grams ? p.price / p.grams : null;
    const score = [
      (normalized.includes('cheap') || normalized.includes('under $12') || normalized.includes('under 12')) && pricePerGram !== null && pricePerGram < 12 ? 2 : 0,
      p.tags?.some(tag => normalized.includes(tag)) ? 2 : 0,
      ['indica', 'sativa', 'hybrid', 'blend'].some(t => normalized.includes(t) && p.type.includes(t)) ? 2 : 0,
      p.category && normalized.includes(p.category.toLowerCase()) ? 2 : 0,
      p.thc && parseFloat(p.thc) >= minTHC ? 1 : 0,
      p.cbd && parseFloat(p.cbd) >= minCBD ? 1 : 0
    ].reduce((a, b) => a + b, 0);
    return { ...p, score };
  }).filter(p => p.score > 0);

  if (results.length > 0) {
    results.sort((a, b) => b.score - a.score);
    results.forEach(showProductCard);
  } else {
    addMessage("<strong>Bot:</strong> Nothing matched that. Want to try something new like <em>‘show me popular picks under $25’</em>?");
    const fallback = products.filter(p => p.tags?.includes("popular") || p.price > 30).slice(0, 3);
    if (fallback.length) {
      fallback.forEach(showProductCard);
      addMessage("<strong>Bot:</strong> These are some favourites 💚");
    }
  }
}

function matchProductToQuery(input) {
  const query = input.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.tags?.some(tag => query.includes(tag)) ||
    (p.keywords && p.keywords.some(kw => query.includes(kw)))
  );
}
