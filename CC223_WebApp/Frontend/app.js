document.getElementById('fetchData').addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/api/data');
    const data = await response.json();
    document.getElementById('response').innerText = data.message;
});