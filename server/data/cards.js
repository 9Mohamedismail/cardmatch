const cardData = [
  {
    id: 1,
    name: "Savor Student Card",
    issuer: "Capital One",
    minCreditLevel: "Fair",
    annualFee: "$0",
    rewardType: "Cash Back",
    bestCategories: ["Dining", "Groceries", "Entertainment"],
    welcomeBonus: "$50 after spending $100 in the first 3 months",
    pros: ["No annual fee", "Good for food spending", "Beginner friendly"],
    cons: ["Lower rewards outside bonus categories", "Not ideal for travel"],
    description:
      "A student-friendly card focused on food, groceries, and entertainment rewards.",
    image: "/assets/savor-student.png",
  },
  {
    id: 2,
    name: "Freedom Flex Card",
    issuer: "Chase",
    minCreditLevel: "Good",
    annualFee: "$0",
    rewardType: "Cash Back",
    bestCategories: ["Dining", "Drugstores", "Rotating Categories"],
    welcomeBonus: "$200 after spending $500 in the first 3 months",
    pros: ["No annual fee", "Strong rotating rewards", "Good dining rewards"],
    cons: ["Requires tracking categories", "Best value needs planning"],
    description:
      "A flexible cash back card for people who like maximizing different spending categories.",
    image: "/assets/freedom-flex.png",
  },
  {
    id: 3,
    name: "Blue Cash Everyday Card",
    issuer: "American Express",
    minCreditLevel: "Good",
    annualFee: "$0",
    rewardType: "Cash Back",
    bestCategories: ["Groceries", "Gas", "Online Shopping"],
    welcomeBonus: "$200 statement credit after meeting spending requirement",
    pros: [
      "No annual fee",
      "Great for groceries",
      "Useful for online shopping",
    ],
    cons: ["Cash back categories have limits", "Not accepted everywhere"],
    description:
      "A strong everyday card for people who spend on groceries, gas, and online purchases.",
    image: "/assets/blue-cash-everyday.png",
  },
  {
    id: 4,
    name: "Custom Cash Card",
    issuer: "Citi",
    minCreditLevel: "Good",
    annualFee: "$0",
    rewardType: "Cash Back",
    bestCategories: ["Dining", "Gas", "Groceries", "Transit"],
    welcomeBonus: "$200 after spending $1500 in the first 6 months",
    pros: [
      "Automatically rewards top category",
      "No annual fee",
      "Good for focused spending",
    ],
    cons: [
      "Bonus rewards have a monthly cap",
      "Not as strong for multiple categories",
    ],
    description:
      "A smart cash back card that rewards your highest eligible spending category each month.",
    image: "/assets/custom-cash.png",
  },
  {
    id: 5,
    name: "Venture Rewards Card",
    issuer: "Capital One",
    minCreditLevel: "Excellent",
    annualFee: "$95",
    rewardType: "Travel Points",
    bestCategories: ["Travel", "Hotels", "Flights", "Everyday Spending"],
    welcomeBonus: "Large miles bonus after meeting spending requirement",
    pros: [
      "Simple travel rewards",
      "Good for everyday spending",
      "Useful for frequent travelers",
    ],
    cons: ["Has an annual fee", "Best value comes from travel use"],
    description:
      "A travel-focused card for people who want simple miles on purchases and travel benefits.",
    image: "/assets/venture-rewards.png",
  },
];

export default cardData;
