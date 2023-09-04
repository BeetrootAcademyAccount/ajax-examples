const list = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts")
  .then((resp) => {
    for (const item of resp) {
      const listItem = document.createElement("li"); // <li></li>
      listItem.id = item.id;
      listItem.classList.add("list-group-item");
      listItem.innerHTML = `<span>${item.id}.${item.title}</span><button class="btn btn-danger ml-2">Delete</button>`;
      list.appendChild(listItem);
    }
  })
  .catch((error) => console.log(error));

const body = {
  title: "title",
  body: "description",
  userId: 11,
};
sendHttpRequest(
  "POST",
  "https://jsonplaceholder.typicode.com/posts",
  body
).then((resp) => {
  console.log(resp);
});
