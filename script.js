document.getElementById("fetch-fact").addEventListener("click", fetchFact);

function fetchFact() {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
        .then(response => response.json())
        .then(data => {
            document.getElementById("fact-text").textContent = data.text;
            document.getElementById("fact-source").textContent = `Source: ${data.source}`;
            document.getElementById("fact-link").textContent = "View Source";
            document.getElementById("fact-link").href = data.source_url;
            document.getElementById("fact-id").textContent = `ID: ${data.id}`;
        })
        .catch(error => {
            console.error("Error fetching fact:", error);
            document.getElementById("fact-text").textContent = "Failed to load a fact. Try again!";
        });
}
