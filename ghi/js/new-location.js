window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/states/';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            // bad response
        } else {
            const data = await response.json();
            console.log(data);

            const selectTag = document.getElementById('state');
            for (let state of data.states) {
                const option = document.createElement('option');
                option.value = state.abbreviation;
                option.innerHTML = state.name;
                selectTag.appendChild(option);
            }
        }
    } catch (e) {
        console.error(e);
    }

    const formTag = document.getElementById('create-location-form');
    formTag.addEventListener('submit', async event => {
        event.preventDefault();
        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData));

        const fetchConfig = {
            method: "post",
            body: json,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const locationUrl = 'http://localhost:8000/api/locations/';
        const locationResponse = await fetch(locationUrl, fetchConfig);
        if (locationResponse.ok) {
            formTag.reset();
            const newLocation = await locationResponse.json();

        }
    });

});
