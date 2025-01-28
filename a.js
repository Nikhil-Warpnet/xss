fetch('https://xopk1cggprrhafobzbg1tx91jspjdc11.oastify.com')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
