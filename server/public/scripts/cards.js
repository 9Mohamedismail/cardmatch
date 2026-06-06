const renderCards = async () => {
  const response = await fetch("/cards");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");

  if (data && data.length > 0) {
    data.map((creditCard) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${creditCard.image})`;

      const name = document.createElement("h3");
      name.textContent = creditCard.name;
      bottomContainer.appendChild(name);

      const issuer = document.createElement("p");
      issuer.textContent = "Issuer: " + creditCard.issuer;
      bottomContainer.appendChild(issuer);

      const creditLevel = document.createElement("p");
      creditLevel.textContent =
        "Recommended Credit: " + creditCard.minCreditLevel;
      bottomContainer.appendChild(creditLevel);

      const annualFee = document.createElement("p");
      annualFee.textContent = "Annual Fee: " + creditCard.annualFee;
      bottomContainer.appendChild(annualFee);

      const rewardType = document.createElement("p");
      rewardType.textContent = "Reward Type: " + creditCard.rewardType;
      bottomContainer.appendChild(rewardType);

      const bestCategories = document.createElement("p");
      bestCategories.textContent =
        "Best For: " + creditCard.bestCategories.join(", ");
      bottomContainer.appendChild(bestCategories);

      const welcomeBonus = document.createElement("p");
      welcomeBonus.textContent = "Welcome Bonus: " + creditCard.welcomeBonus;
      bottomContainer.appendChild(welcomeBonus);

      const description = document.createElement("p");
      description.textContent = creditCard.description;
      bottomContainer.appendChild(description);

      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.setAttribute("role", "button");
      link.href = `/cards/${creditCard.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);
      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Credit Cards Available 😞";
    mainContent.appendChild(message);
  }
};

renderCards();
