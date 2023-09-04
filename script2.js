const list = document.querySelector("ul");
const form = document.querySelector("form");

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.onload = () => {
      const response = JSON.parse(xhr.response);

      if (xhr.status >= 200 && xhr.status <= 300) {
        resolve(response);
      } else {
        reject(response);
      }
    };

    xhr.send(JSON.stringify(data));
  });

  return promise;
}

async function getList() {
  try {
    const response = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );
    // .then((resp) => {
    for (const item of resp) {
      const listItem = document.createElement("li"); // <li></li>
      listItem.id = item.id;
      listItem.classList.add("list-group-item");
      listItem.innerHTML = `<span>${item.id}.${item.title}</span><button class="btn btn-danger ml-2">Delete</button>`;
      list.appendChild(listItem);
    }
  } catch {
    console.log("ERROR");
  }

  // })
}

getList();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userId = Math.floor(Math.random() * 10);
  const title = e.currentTarget.querySelector("#title").value;
  const description = e.currentTarget.querySelector("#desc").value;
  const body = {
    title: title,
    body: description,
    userId: userId,
  };

  sendHttpRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    body
  ).then((resp) => {
    getList();
  });
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then((resp) => {
      getList();
    });
  }
});
