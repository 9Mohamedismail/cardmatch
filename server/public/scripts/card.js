const renderList = (elementId, items) => {
  const list = document.getElementById(elementId);
  list.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
};

const renderCard = async () => {
  const requestedSlug = window.location.href.split("/").pop();

  const response = await fetch("/cards");
  const data = await response.json();

  const card = data.find((card) => card.slug === requestedSlug);

  if (!card) {
    window.location.href = "/404.html";
    return;
  }

  document.getElementById("image").src = card.image;
  document.getElementById("image").alt = card.name;
  document.getElementById("name").textContent = card.name;
  document.getElementById("id").textContent = "ID: " + card.id;
  document.getElementById("issuer").textContent = "Issuer: " + card.issuer;
  document.getElementById("minCreditLevel").textContent =
    "Recommended Credit: " + card.minCreditLevel;
  document.getElementById("annualFee").textContent =
    "Annual Fee: " + card.annualFee;
  document.getElementById("rewardType").textContent =
    "Reward Type: " + card.rewardType;
  document.getElementById("bestCategories").textContent =
    "Best Categories: " + card.bestCategories.join(", ");
  document.getElementById("welcomeBonus").textContent =
    "Welcome Bonus: " + card.welcomeBonus;
  document.getElementById("description").textContent = card.description;
  renderList("pros", card.pros);
  renderList("cons", card.cons);

  document.title = `CardMatch - ${card.name}`;
};

renderCard();
