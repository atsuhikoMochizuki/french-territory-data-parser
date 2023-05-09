// constants
// ============================================
const REGIONS = "regions";
const API_GET_REGIONS = "https://geo.api.gouv.fr/regions";

let regions = document.getElementById("regions");
let departments = document.getElementById("departments");
let communes = document.getElementById("communes");
let communeInformationsArea = document.getElementById("communeInformations");

//Affectation des callbacks aux signaux
regions.addEventListener("change", (event) => {
  region_initialize(regions, departments, communes, communeInformationsArea);
  let request =
    "https://geo.api.gouv.fr/regions/" + regions.value + "/departements";

  fetch(request)
    .then((res) => {
      return res.json();
    })
    .then((datas) => {
      for (let data of datas) {
        let option = document.createElement("option");
        option.textContent = data.nom;
        option.value = data.code;
        departments.appendChild(option);
      }
    });
});

departments.addEventListener("change", (event) => {
  department_initialize(
    regions,
    departments,
    communes,
    communeInformationsArea
  );
  let request =
    "https://geo.api.gouv.fr/departements/" + departments.value + "/communes";
  console.log(request);

  fetch(request)
    .then((res) => {
      return res.json();
    })
    .then((datas) => {
      for (let data of datas) {
        let option = document.createElement("option");
        option.textContent = data.nom;
        option.value = data.code;
        communes.appendChild(option);
      }
    });
});

communes.addEventListener("change", (event) => {
  let request = "https://geo.api.gouv.fr/communes/" + communes.value;

  fetch(request)
    .then((res) => {
      return res.json();
    })
    .then((datas) => {
      let datasToDisplay = `
      ${datas.nom}
      Population : ${datas.population}
      Code postal : ${datas.code}
      `;
      communeInformationsArea.value = datasToDisplay;
    });
});

region_initialize(regions, departments, communes, communeInformationsArea);

function region_initialize(
  regionsElem,
  departmentsElem,
  communesElem,
  communeInformationsAreaElem
) {
  let promptRegions = document.createElement("option");
  promptRegions.textContent = "Choisissez une région...";
  regionsElem.appendChild(promptRegions);

  document.querySelector("#departments").innerHTML = "";
  let promptDepartments = document.createElement("option");
  promptDepartments.textContent = "Choisissez un département...";
  departmentsElem.appendChild(promptDepartments).disabled = "true";

  document.querySelector("#communes").innerHTML = "";
  let promptCommunes = document.createElement("option");
  promptCommunes.textContent = "Choisissez une commune...";
  communesElem.appendChild(promptCommunes).disabled = "true";

  communeInformationsArea.value = "";

  fetch(API_GET_REGIONS)
    .then((res) => {
      return res.json();
    })
    .then((datas) => {
      for (let data of datas) {
        let option = document.createElement("option");
        option.textContent = data.nom;
        option.value = data.code;
        regions.appendChild(option);
      }
    });
}

function department_initialize(
  regionsElem,
  departmentsElem,
  communesElem,
  communeInformationsAreaElem
) {
  //   document.querySelector("#departments").innerHTML = "";
  //   let promptDepartments = document.createElement("option");
  //   promptDepartments.textContent = "Choisissez un département...";
  //   departmentsElem.appendChild(promptDepartments).disabled = "true";

  //   let request =
  //     "https://geo.api.gouv.fr/regions/" + regions.code + "/departements";

  document.querySelector("#communes").innerHTML = "";
  let promptCommunes = document.createElement("option");
  promptCommunes.textContent = "Choisissez une commune...";
  communesElem.appendChild(promptCommunes).disabled = "true";

  communeInformationsArea.value = "";

  //   fetch(request)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((datas) => {
  //       for (let data of datas) {
  //         let option = document.createElement("option");
  //         option.textContent = data.nom;
  //         option.value = data.code;
  //         departmentsElem.appendChild(option);
  //       }
  //     });
}
