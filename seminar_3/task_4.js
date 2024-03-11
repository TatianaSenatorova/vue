Vue.component("product", {
  props: ["product"],
  template: `
  <div>
   <h3 >{{ product.name }}</h3>
  <p>Цена: {{ product.price }}</p>
  </div>
  `,
});


// еще решение:
// sortCol({target, currentTarget}) {
//     if (!(currentTarget.dataset.checkAscending === "true")) {
//     this.products.sort((a, b) => sortFunction(a, b, target.dataset.sortKey, true));
//     currentTarget.dataset.checkAscending = "true";
//     } else {
//     this.products.sort((a, b) => sortFunction(a, b, target.dataset.sortKey, false));
//     currentTarget.dataset.checkAscending = "false";
//     }
//     function sortFunction (a, b, sortKey, checkAscending) {
//     const valueA = String(a[sortKey]).toLowerCase();
//     const valueB = String(b[sortKey]).toLowerCase();
    
//     if (checkAscending) {
//     return valueA.localeCompare(valueB);
//     } else {
//     return valueB.localeCompare(valueA);
//     }
//     }
//     }