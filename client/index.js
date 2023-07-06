const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

const form = document.getElementById("teamForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const objectData = Object.fromEntries(formData.entries());

    const jsonData = JSON.stringify(objectData);

    console.log(jsonData);

    createTeam(jsonData);
});

// funciona!
const createTeam = async (data) => {
    const response = await fetch(BASE_URL + "/api/team", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data,
    });

    const jsonResponse = await response.json();
};
