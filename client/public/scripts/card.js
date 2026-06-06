const renderCard = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch("/cards");
  const data = await response.json();

  const cardContent = document.getElementById("card-content");

  let card;

  card = data.find((card) => card.id === requestedID);

  if (card) {
    document.getElementById("image").src = `http://localhost:3001${card.image}`;
    document.getElementById("image").alt = card.name;
    document.getElementById("name").textContent = card.name;
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

    document.title = `CardMatch - ${card.name}`;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Cards Available 😞";
    cardContent.appendChild(message);
  }
};

renderCard();
