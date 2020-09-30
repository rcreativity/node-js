module.exports = (req, res) => {
  if (req.method === "GET") {
    res.json([
      { name: "James", location: "north carolina" },
      { name: "Geotgw", location: "New Jersey" },
    ]);
  }
};
