function createCard(name, description, pictureUrl, starts, ends, location) {
    return `
        <div class="col">
            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                <img src="${pictureUrl}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${location}</h6>
                    <p class="card-text">${description}</p>
                </div>
                <div class = "card-footer">
                    <p>${starts} - ${ends}</p>
                </div>
            </div>
        </div>
    `;
}

function alert() {
    return `
        <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">Uh Oh!</h4>
            <p>You came across an error!</p>
            <hr>
            <p class="mb-0">Error 404 (Not Found)</p>
        </div>
    `;
}

window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';
    const columns = document.querySelectorAll('.col')
    let colIndx = 0

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const column = document.querySelector(".container");
            column.innerHTML += alert();
        } else {
            const data = await response.json();

            for (let conference of data.conferences) {
                const detailUrl = `http://localhost:8000${conference.href}`;
                const detailResponse = await fetch(detailUrl);
                if (detailResponse.ok) {
                    const details = await detailResponse.json();
                    const name = details.conference.name;
                    const description = details.conference.description;
                    const pictureUrl = details.conference.location.picture_url;
                    const starts = new Date(details.conference.starts).toLocaleDateString();
                    const ends = new Date(details.conference.ends).toLocaleDateString();
                    const location = details.conference.location.name;
                    const html = createCard(name, description, pictureUrl, starts, ends, location);
                    const column = columns[colIndx % 3];
                    column.innerHTML += html;
                    colIndx = (colIndx + 1) % 3
                }
            }
        }
    } catch (e) {
        console.error(e);
    }

});
