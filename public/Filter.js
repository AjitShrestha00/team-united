const data = [
  {
    "id": 1,
    "service": "child care",
    "period": "daily",
    "time": "morning",
    "hours": 1,
    "qualification": "qualified",
    "budget": 250,
    "name": "ramu"
  },
  {
    "id": 2,
    "service": "Aged care",
    "period": "weekly",
    "time": "afternoon",
    "hours": 5,
    "qualification": "non-qualified",
    "budget": 250,
    "name": "shyamu"
  },
  // Add the rest of the data here...
];

function filterServices() {
  const service = document.getElementById('service').value.toLowerCase();
  const time = document.getElementById('time').value.toLowerCase();
  const qualification = document.getElementById('qualification').value.toLowerCase();
  const period = document.getElementById('period').value.toLowerCase();

  let filteredData = data;

  if (service) {
    filteredData = filteredData.filter(entry => entry.service.toLowerCase() === service);
  }
  if (time) {
    filteredData = filteredData.filter(entry => entry.time.toLowerCase() === time);
  }
  if (qualification) {
    filteredData = filteredData.filter(entry => entry.qualification.toLowerCase() === qualification);
  }
  if (period) {
    filteredData = filteredData.filter(entry => entry.period.toLowerCase() === period);
  }

  displayResults(filteredData);
}

function displayResults(filteredData) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (filteredData.length === 0) {
    resultsContainer.innerHTML = '<p>No results found.</p>';
    return;
  }

  filteredData.forEach(item => {
    const resultItem = document.createElement('div');
    resultItem.classList.add('result-item');
    resultItem.innerHTML = `
      <p><strong>Name:</strong> ${item.name}</p>
      <p><strong>Service:</strong> ${item.service}</p>
      <p><strong>Time:</strong> ${item.time}</p>
      <p><strong>Qualification:</strong> ${item.qualification}</p>
      <p><strong>Period:</strong> ${item.period}</p>
      <p><strong>Hours:</strong> ${item.hours}</p>
      <p><strong>Budget:</strong> ${item.budget}</p>
    `;
    resultsContainer.appendChild(resultItem);
  });
}