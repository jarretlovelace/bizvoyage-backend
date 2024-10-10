const axios = require('axios');

// In-memory storage (you'll use a database in real-world scenarios)
let travelData = [];

// Controller to get all travel requests
exports.getAllTravel = (req, res) => {
  res.json(travelData); // Return stored travel data
};

// Controller to create a new travel request
exports.createTravelRequest = async (req, res) => {
  const { destination, dates, budget } = req.body;

  // Make API call to external 'git travel API' (assuming this is a real API)
  try {
    const response = await axios.post('https://api.git-travel.com/travel', {
      destination, dates, budget
    });

    // Create a new travel object and push it into the mock database
    const newTravel = {
      id: travelData.length + 1,
      destination,
      dates,
      budget,
      status: response.data.status // Status from the external API
    };

    travelData.push(newTravel); // Save to mock database
    res.status(201).json(newTravel); // Respond with the newly created object
  } catch (error) {
    res.status(500).json({ message: 'Error creating travel request', error });
  }
};

// Controller to get a travel request by ID
exports.getTravelById = (req, res) => {
  const { id } = req.params;
  const travel = travelData.find(trip => trip.id === parseInt(id));

  if (!travel) {
    return res.status(404).json({ message: 'Travel request not found' });
  }

  res.json(travel);   
};
 