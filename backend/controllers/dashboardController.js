exports.getDashboardData = (req, res) => {
    res.json([
      { id: 1, name: "Card 1" },
      { id: 2, name: "Card 2" },
      { id: 3, name: "Card 3" },
    ]);
  };
  