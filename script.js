
let equipos = [];

fetch('equipos.json')
  .then(res => res.json())
  .then(data => {
    equipos = data;
    generateTeams();
  });

function generateTeams() {
  const t1 = equipos[Math.floor(Math.random() * equipos.length)];
  let t2;
  do {
    t2 = equipos[Math.floor(Math.random() * equipos.length)];
  } while (t1.nombre === t2.nombre);

  document.getElementById('team1').innerHTML = `
    <img src="${t1.logo}" alt="${t1.nombre}">
    <h3>${t1.nombre}</h3>
    <p><strong>Liga:</strong> ${t1.liga}</p>
    <p>Ataque: ${t1.ataque} | Defensa: ${t1.defensa} | Media: ${t1.media}</p>
  `;
  document.getElementById('team2').innerHTML = `
    <img src="${t2.logo}" alt="${t2.nombre}">
    <h3>${t2.nombre}</h3>
    <p><strong>Liga:</strong> ${t2.liga}</p>
    <p>Ataque: ${t2.ataque} | Defensa: ${t2.defensa} | Media: ${t2.media}</p>
  `;
}
