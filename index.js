// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")
// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// const tabBtn = document.getElementById("tab-btn")

// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     render(myLeads)
//     // saves the bookmarked tabs even after restart or refresh of page
// }

// tabBtn.addEventListener("click", function () {
//     chrome.tabs.query({
//         active: true,
//         lastFocusedWindow: true
//     }, function (tabs) {
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads))
//         render(myLeads)
//     })
// })

// function render(leads) {
//     let listItems = ""
//     for (let i = 0; i < leads.length; i++) {
//         listItems += `<li>
//         <a target = '_blank' href='${leads[i]}'>
//         ${leads[i]}
//         </a>
//         </li>`
//     }
//     ulEl.innerHTML = listItems
// }

// deleteBtn.addEventListener("dblclick", function () {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })

// inputBtn.addEventListener("click", function () {
//     myLeads.push(inputEl.value)
//     inputEl.value = "" // creates blank space after input is done
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
// })

const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel vero placeat, pariatur qui alias beatae nulla aut corporis possimus magni voluptatem voluptate, iusto aliquid laborum, mollitia nihil dicta tempora fugiat.
    Eaque quas quod ea quidem, dolor nihil, doloribus totam veritatis modi similique fuga non maxime numquam vero doloremque laboriosam suscipit dolorum voluptate excepturi consequuntur! Ratione rerum eos vitae quibusdam nam?
    Voluptatem dolores quod atque saepe deleniti distinctio magni. Repellendus autem mollitia vel illum vero aliquid animi perspiciatis dolorum. Rerum ullam quibusdam officiis doloribus nobis enim molestias commodi ex magnam harum.
    Autem dolorum explicabo labore esse expedita sequi quasi est? Repellat totam consequatur earum laborum, hic magnam voluptatibus laudantium dolores iusto. Exercitationem omnis sed aspernatur inventore eius adipisci, quod fuga est.
    Incidunt nihil pariatur quae, consequuntur animi illo odit! Enim quas mollitia at explicabo optio quaerat quae ut? Temporibus, reiciendis tenetur, adipisci dicta at libero repudiandae possimus nulla a architecto aliquam.
    Perspiciatis assumenda distinctio vitae porro tempore, maiores, voluptatum reiciendis pariatur illo, natus aliquam sunt veritatis molestias quibusdam accusamus molestiae. Ut harum obcaecati quaerat soluta. Voluptates placeat debitis impedit non aut?
    Ad illum recusandae libero! Unde pariatur itaque repudiandae voluptate at error reprehenderit debitis quibusdam mollitia doloremque nihil quae qui perspiciatis molestiae iste recusandae distinctio, rem laboriosam. Quibusdam exercitationem fugiat modi.
    Eaque repudiandae dolor suscipit nobis ad? Autem non nulla reiciendis, molestias inventore est quod velit vel accusantium voluptatum ea blanditiis, delectus rem architecto, asperiores ratione ducimus corporis cupiditate. Officiis, minus.
    Exercitationem reiciendis quis, quam qui at ad sequi consectetur expedita est culpa. Magnam eos nisi ipsum dolores, eveniet at nam ex deleniti in blanditiis, sit nesciunt quae iste quisquam excepturi.
    Officia, voluptates quisquam numquam quia maiores ratione nobis magni, culpa eius rem unde, quis molestias? Hic, animi praesentium mollitia totam perferendis minus iusto? Corporis labore cumque velit omnis nam neque.
    Dolorum id rem consequuntur aliquid voluptate veniam quidem explicabo dolore ad a, architecto dolores deserunt maiores. Debitis aspernatur velit illum excepturi, id quos, veritatis obcaecati praesentium dolor nesciunt quam ratione.
    Nam nobis consequuntur at, excepturi quo cum ea ad maxime esse sapiente blanditiis reiciendis qui obcaecati eos est quam facere dolor. Odio excepturi officiis tempora explicabo, quisquam molestiae similique praesentium.
    Labore accusantium assumenda dolore tempora aliquam repellendus eligendi illo recusandae beatae iure obcaecati libero ullam qui, cum quod? Laboriosam nam reiciendis magni asperiores repellendus quae ab magnam deleniti itaque? Architecto.
    Fuga blanditiis nisi placeat dolores omnis excepturi velit id, hic unde quibusdam laborum ab sunt aut facilis esse veniam ipsum debitis aspernatur nobis labore doloremque! Voluptas, facilis? Distinctio, dolor laboriosam.
    Quam reiciendis nam, quae libero harum velit tempora amet possimus nemo fuga porro, perferendis numquam. Cumque harum non explicabo, porro vero odio quod dolorum perferendis iure. Corrupti esse quam eum.
    Nihil, eaque repellendus veritatis harum et dicta repellat doloremque atque, modi animi numquam hic iusto illo voluptatibus laudantium. Vitae deserunt consequatur commodi, similique nobis numquam quis ipsam labore enim laudantium.
    Tempore ratione, suscipit, molestiae odit dolore molestias magni provident earum dolorem cumque, libero quasi debitis atque possimus voluptatem obcaecati. Laborum id culpa ipsam commodi alias, cumque iusto doloremque ad eum?
    Accusamus vitae eaque quia numquam natus architecto distinctio maxime, qui quis non ex blanditiis doloremque maiores culpa, exercitationem sit nesciunt commodi impedit sequi neque adipisci facilis nulla. Esse, necessitatibus? Molestias.
    Ex magnam dolor modi, eum illo molestias nulla? Ea, eos ad molestias obcaecati saepe sapiente, odit, vitae fugiat unde beatae tenetur quidem? Fugit possimus, nam optio vitae autem labore ad?
    Inventore obcaecati rerum deserunt, laborum dolore aperiam, nisi totam minus repudiandae animi error ex veritatis ullam ad provident facere nemo dignissimos neque fugit sunt dolor, iusto quasi. Officiis, et recusandae?`;

const createJobBtn = document.getElementById("createJobBtn");
const fillFormBtn = document.getElementById("createJobBtn");

createJobBtn.addEventListener("click", () => {
  let list = document.getElementsByClassName(
    "app-aware-link  global-nav__primary-link"
  );
  for (let i = 0; i < list.length; i++) {
    if (list[i].innerText === "Jobs") {
      list[i].click();
    }
  }

  function postNewJob() {
    let x = document.getElementsByClassName(
      "ember-view display-flex align-items-center link-without-hover-state"
    );
    x[0].click();
  }

  window.onload = setTimeout(postNewJob, 3000);
});

fillFormBtn.addEventListener('click', () => {
  let input = document.getElementById("job-title-typeahead-input-ember22");
  input.value = "This is a Job";

  let startBtn = document.getElementsByClassName(
    "artdeco-button artdeco-button--4 artdeco-button--primary ember-view full-width mt5"
  );
  startBtn[0].click();

// window.onload = setTimeout(startJobCreation, 3000);
})