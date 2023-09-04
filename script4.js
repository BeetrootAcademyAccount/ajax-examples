$(document).ready(() => {
  const body = {
    title: "title",
    body: "description",
    userId: 11,
  };

  //   $.ajax({
  //     method: "POST",
  //     url: "https://jsonplaceholder.typicode.com/posts",
  //     dataType: "json",
  //     data: JSON.stringify(body),
  //   }).done((resp) => {
  //     console.log(resp);
  //   });

  $.get("https://jsonplaceholder.typicode.com/posts", (data) => {
    console.log(data);
  });
  $.post("https://jsonplaceholder.typicode.com/posts", body, (data) => {
    console.log(data);
  });
});
