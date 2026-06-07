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

      const annualFee = document.createElement("p");
      annualFee.textContent = "Annual Fee: " + creditCard.annualFee;
      bottomContainer.appendChild(annualFee);

      const bestCategories = document.createElement("p");
      bestCategories.textContent =
        "Best For: " + creditCard.bestCategories.join(", ");
      bottomContainer.appendChild(bestCategories);

      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.setAttribute("role", "button");
      link.href = `/cards/${creditCard.slug}`;
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

const requestedUrl = window.location.href.split("/").pop();

if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderCards();
}
