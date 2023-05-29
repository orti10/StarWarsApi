const express = require('express');

const app = express();
const port = 5000;

app.get('/films', async (req, res) => {
  const { title } = req.query;
  let url = 'https://swapi.dev/api/films';

  if (title) {
    url += `?search=${encodeURIComponent(title)}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error fetching films:', error);
    res.status(500).json({ error: 'An error occurred while fetching films' });
  }
});

app.get('/films/:id', async (req, res) => {
  const { id } = req.params;
  const { expand } = req.query;
  let url = `https://swapi.dev/api/films/${id}`;

  if (expand) {
    url += `?expand=${encodeURIComponent(expand)}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching film:', error);
    res.status(500).json({ error: 'An error occurred while fetching the film' });
  }
});

app.get('/people/:id', async (req, res) => {
    const { id } = req.params;
    const { expand } = req.query;
    let url = `https://swapi.dev/api/people/${id}`;
  
    if (expand) {
      url += `?expand=${encodeURIComponent(expand)}`;
    }
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error fetching film:', error);
      res.status(500).json({ error: 'An error occurred while fetching the film' });
    }
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
