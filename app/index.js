// /*Projet tri de cartes
// 2 mai 2023*/

// /*Constants*/
// /*========================================================================*/
// /*Filters*/
// const TOUS = "Tous";
// const HTML = "Html";
// const CSS = "Css";
// const JS = "Js";

// /*Events*/
// const CLICK = "click";

// /*HTML balises*/
// const DIV = "div";
// const MAIN = "main";
// const P = "p";
// const FOOTER = "footer";
// const H1 = "h1";
// const H2 = "h2";

// /*HTML attributes*/
// const CLASS = "class";
// const BUTTON = "button";
// const NAME = "name";
// const VALUE = "value";

// /*BOOTSTRAP class*/
// const BOOTSTRAP_CONTAINER = "container-fluid border text-center";
// const BOOTSTRAP_ROW = "row align-items-center border border-success";

// /*BOOTSTRAP Class (created for Project)*/
// const BOOTSTRAP_CSS_ARTICLES =
//   "col-3 rounded shadow p-5 border border-dark bg-info";
// const BOOTSTRAP_HTML_ARTICLES =
//   "col-3 rounded shadow p-5 border border-dark bg-success";
// const BOOTSTRAP_JS_ARTICLES =
//   "col-3 rounded shadow p-5 border border-dark bg-warning";
// const BOOTSTRAP_BUTTONS =
//   "col  btn btn-secondary rounded shadow-5 border border-dark  m-3";
// const BOOTSTRAP_TITLE = "H1 m-5";

// /*Messages*/
// const MSG_ARTICLE_CATEGORY_NOT_RECOGNIZED =
//   "Catégorie de l'article non reconnue";
// const MSG_WELCOME = "Choissisez votre langage préféré...Et bonne lecture!";

// /*Others*/
// const TITLE = "FRENCH-TERRITORY-DATA-PARSER";
// const LEGAL_MENTIONS =
//   "@Atsuhiko Mochizuki - Avril 2023 - for Diginamic formations";

// /*main*/
// /*========================================================================*/
// console.log(`
//       _                  _                       _
//      | |                | |                     | |
//      | | ___ _   _    __| | ___    ___ __ _ _ __| |_ ___  ___
//  _   | |/ _ \\ | | |  / _  |/ _ \\  / __/ _\\ | | _| __/ _ \\/ __|
// | |__| |  __/ |_| | | (_| |  __/ | (_| (_| | |  | ||  __/\\__ \\
//  \\____/ \\___|\\__,_|  \\__,_|\\___|  \\___\\__,_|_|   \\__\\___||___/
// by Atsuhiko Mochizuki
// v1.0
// April 2023
// `);

// //let anchorToPrintDynamicsElements = displayStatic_elements();

// // let dynamicZone = displayDynamic_elements(TOUS, anchorToPrintDynamicsElements);

// // const btn_Tous = document.querySelector(`.${TOUS}`);
// // btn_Tous.addEventListener(CLICK, () => {
// //   dynamicZone.remove();
// //   dynamicZone = displayDynamic_elements(TOUS, anchorToPrintDynamicsElements);
// // });

// // const btn_Html = document.querySelector(`.${HTML}`);
// // btn_Html.addEventListener(CLICK, () => {
// //   dynamicZone.remove();
// //   dynamicZone = displayDynamic_elements(HTML, anchorToPrintDynamicsElements);
// // });

// // const btn_Css = document.querySelector(`.${CSS}`);
// // btn_Css.addEventListener(CLICK, () => {
// //   dynamicZone.remove();
// //   dynamicZone = displayDynamic_elements(CSS, anchorToPrintDynamicsElements);
// // });

// // const btn_Js = document.querySelector(`.${JS}`);
// // btn_Js.addEventListener(CLICK, () => {
// //   dynamicZone.remove();
// //   dynamicZone = displayDynamic_elements(JS, anchorToPrintDynamicsElements);
// // });
// /*========================================================================*/

// /*Global functions*/
// /*========================================================================*/
// function displayStatic_elements() {
//   const header = createMarkup(DIV, null, document.body, [
//     { name: CLASS, value: BOOTSTRAP_CONTAINER },
//   ]);

//   const header_row0 = createMarkup(DIV, null, header, [
//     { name: CLASS, value: BOOTSTRAP_ROW },
//   ]);

//   const header_title = createMarkup(H1, TITLE, header_row0, [
//     { name: CLASS, value: BOOTSTRAP_TITLE },
//   ]);

//   let main = createMarkup(MAIN, null, document.body, [
//     { name: CLASS, value: BOOTSTRAP_CONTAINER },
//   ]);

//   let main_div0 = createMarkup(DIV, null, main, [
//     { name: CLASS, value: "mb-3 border border-success" },
//   ]);

//   let label0 = createMarkup2(DIV, null, main, [
//     {
//       name: CLASS,
//       value: "mb-3 border border-success",
//       for: "exampleInputEmail1",
//     },
//   ]);

//   {
//     /* <form>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1">
//   </div>
//   <div class="mb-3 form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1">
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form> */
//   }

//   let footer = createMarkup(FOOTER, null, document.body, [
//     { name: CLASS, value: BOOTSTRAP_CONTAINER },
//   ]);

//   let footer_div0 = createMarkup("a", null, footer, [
//     { name: "href", value: "https://github.com/atsuhikoMochizuk" },
//   ]);
//   let footer_div1 = createMarkup("img", "null", footer_div0, [
//     { name: "src", value: "./app/github_logo_xsmall.png" },
//   ]);

//   let footer_div2 = createMarkup(
//     P,
//     "@Atsuhiko_Mochizuki - 2023 - Tous droits réservés",
//     footer,
//     [{ name: CLASS, value: "" }]
//   );

//   // <div class="mt-5">
//   //   <a
//   //     class="text-decoration-none mt-2"
//   //     href="https://github.com/atsuhikoMochizuki"
//   //   >
//   //     <img src="./images/logos/github_logo_xsmall.png" alt="" />
//   //     <p>https://github.com/atsuhikoMochizuki</p>
//   //   </a>
//   //   <p>@Atsuhiko_Mochizuki - 2023 - Tous droits réservés</p>
//   // </div>;

//   // const header_row1 = createMarkup(DIV, null, header, [
//   //   { name: CLASS, value: "row m-5" },
//   // ]);

//   // let mainAnchor = createMarkup(MAIN, null, document.body, [
//   //   { name: CLASS, value: BOOTSTRAP_CONTAINER },
//   // ]);

//   // let footer = createMarkup(FOOTER, null, document.body, [
//   //   { name: CLASS, value: "container mt-5" },
//   // ]);

//   // let mentions = createMarkup(P, LEGAL_MENTIONS, footer, [
//   //   { name: CLASS, value: "h6 text-center mt-5  mb-5 " },
//   // ]);

//   return mainAnchor;
// }

// function displayDynamic_elements(filterToKeep, anchor) {
//   const main_row0 = createMarkup(DIV, null, anchor, [
//     { name: CLASS, value: "row text-left" },
//   ]);

//   fetch(JSON_FILE_ARTICLES)
//     .then((response) => response.json())
//     .then((jsonResponse) => {
//       let parsedObjectsNumber = 0;
//       for (let readObject of jsonResponse) {
//         let article = 0;
//         let articleFilter = 0;
//         if (filterToKeep !== TOUS && readObject.categorie !== filterToKeep) {
//         } else {
//           switch (readObject.categorie) {
//             case HTML:
//               article = createMarkup(DIV, null, main_row0, [
//                 {
//                   name: CLASS,
//                   value: BOOTSTRAP_HTML_ARTICLES,
//                 },
//               ]);
//               articleFilter = createMarkup(DIV, null, article, [
//                 {
//                   name: CLASS,
//                   value: readObject.categorie,
//                 },
//               ]);
//               break;
//             case CSS:
//               article = createMarkup(DIV, null, main_row0, [
//                 {
//                   name: CLASS,
//                   value: BOOTSTRAP_CSS_ARTICLES,
//                 },
//               ]);
//               articleFilter = createMarkup(DIV, null, article, [
//                 {
//                   name: CLASS,
//                   value: readObject.categorie,
//                 },
//               ]);
//               break;
//             case JS:
//               article = createMarkup(DIV, null, main_row0, [
//                 {
//                   name: CLASS,
//                   value: BOOTSTRAP_JS_ARTICLES,
//                 },
//               ]);
//               articleFilter = createMarkup(DIV, null, article, [
//                 {
//                   name: CLASS,
//                   value: readObject.categorie,
//                 },
//               ]);
//               break;
//             default:
//               throw Error(MSG_ARTICLE_CATEGORY_NOT_RECOGNIZED);
//           }

//           let article_titre = createMarkup(
//             H2,
//             readObject.titre,
//             articleFilter,
//             [
//               {
//                 name: CLASS,
//                 value: `text-left h4 `,
//               },
//             ]
//           );

//           const article_content = createMarkup(
//             P,
//             readObject.contenu,
//             articleFilter,
//             [
//               {
//                 name: CLASS,
//                 value: `text-left mt-5`,
//               },
//             ]
//           );
//         }
//       }
//     });
//   return main_row0;
// }

// function createFilteredButton(name, parent) {
//   let btnFilteredContainer = createMarkup(DIV, null, parent, [
//     {
//       name: CLASS,
//       value: "col m-5",
//     },
//   ]);

//   let btnFilter = createMarkup(DIV, null, btnFilteredContainer, [
//     {
//       name: CLASS,
//       value: name,
//     },
//   ]);

//   let divForInsertAndAlignButton = createMarkup(DIV, null, btnFilter, [
//     {
//       name: CLASS,
//       value: BOOTSTRAP_ROW,
//     },
//   ]);

//   let btn = createMarkup(BUTTON, name, divForInsertAndAlignButton, [
//     {
//       name: CLASS,
//       value: BOOTSTRAP_BUTTONS,
//     },
//   ]);

//   return btn;
// }

// /*Insert Element in DOM with one attribute*/
// function createMarkup(markup_name, text, parent, attributes = []) {
//   const markup = document.createElement(markup_name);
//   markup.textContent = text;
//   parent.appendChild(markup);
//   attributes.forEach((attribute) => {
//     if (
//       attribute &&
//       attribute.hasOwnProperty(NAME) &&
//       attribute.hasOwnProperty(VALUE)
//     ) {
//       markup.setAttribute(attribute.name, attribute.value);
//     }
//   });

//   return markup;
// }
