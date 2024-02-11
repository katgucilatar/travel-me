async function showTravelDetails() {
    const response = await fetch("/travel_recommendation_api.json", {
        headers: {
            'Accept': 'application/json'
        }
    });
    const data = await response.json();
    const travelInput = document.getElementById("travelInput").value;
    const travelInfo = document.getElementById("travelInfo");

    if  (travelInput === data.countries) {
        travelInfo.innerHTML = ``
    }
}

showTravelDetails();