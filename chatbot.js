const messages = document.getElementById('messages');
const input = document.getElementById('userInput');

const replies = [
  'cheap indica', 'relaxing hybrid', 'under $12', 'high THC', 'CBD rich',
  'citrus flavour', 'edibles', 'vapes', 'pre-rolls', 'beverages',
  'capsules', 'oils', 'sleep', 'energizing', 'sweet',
  'what is limonene?', 'what is myrcene?'
];

replies.forEach(text => {
  const btn = document.createElement('button');
  btn.textContent = text.charAt(0).toUpperCase() + text.slice(1);
  btn.onclick = () => handleQuick(text);
  document.getElementById('quick-replies').appendChild(btn);
});

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') handleSend();
  if (e.key === 'Escape') document.getElementById('chat-widget').style.display = 'none';
});

function addMessage(text) {
  const div = document.createElement('div');
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
      <p>${product.desc}</p>
      ${product.url ? `<p><a href="${product.url}" target="_blank">View product ↗</a></p>` : ""}
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
  addMessage(`<strong>You:</strong> ${query}`);
  respondTo(query);
  input.value = '';
}

function respondTo(query) {
  const normalized = query.toLowerCase();
  const education = {
    limonene: "🍋 Limonene is a citrus-scented terpene known to elevate mood and reduce stress.",
    myrcene: "🌿 Myrcene is a musky, earthy terpene that can promote relaxation and sleep.",
    caryophyllene: "🌶️ Caryophyllene is a spicy terpene found in pepper, often associated with anti-inflammatory effects."
  };
  const key = Object.keys(education).find(k => normalized.includes(k));
  if (key) return addMessage(`<strong>Bot:</strong> ${education[key]}`);

  const highTHC = /high thc|thc over (\d+)/.exec(normalized);
  const highCBD = /cbd rich|cbd over (\d+)/.exec(normalized);
  const minTHC = highTHC ? parseFloat(highTHC[1] || 20) : 0;
  const minCBD = highCBD ? parseFloat(highCBD[1] || 10) : 0;

  const results = products.filter(p => {
    const pricePerGram = p.grams ? p.price / p.grams : null;
    const matchesCheap = normalized.includes('cheap') || normalized.includes('under $12') || normalized.includes('under 12');
    const matchesTag = p.tags && p.tags.some(tag => normalized.includes(tag));
    const matchesType = ['indica', 'sativa', 'hybrid', 'blend'].some(t => normalized.includes(t)) ? normalized.includes(p.type) : true;
    const matchesCategory = p.category && normalized.includes(p.category.toLowerCase());
    const matchesTHC = p.thc ? parseFloat(p.thc) >= minTHC : true;
    const matchesCBD = p.cbd ? parseFloat(p.cbd) >= minCBD : true;

    return matchesType && matchesTHC && matchesCBD && (matchesCheap && pricePerGram < 12 || matchesTag || matchesCategory);
  });

  if (results.length > 0) {
    results.sort((a, b) => {
      const aRate = a.grams ? a.price / a.grams : a.price;
      const bRate = b.grams ? b.price / b.grams : b.price;
      return aRate - bRate;
    });
    results.forEach(showProductCard);
  } else {
    addMessage("<strong>Bot:</strong> Nothing matched that. Try 'indica', 'cheap', 'edibles', or 'high THC'.");
  }
}
