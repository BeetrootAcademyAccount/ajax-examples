const btn = document.querySelector("button");

const getRestaurants = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching restaurants");
      resolve("Restaurants fetched");
    }, 2000);
  });

  return promise;
};

const getPosition = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Position");
        resolve(position);
      },
      (error) => {
        console.error("This failed");
        reject(error);
      }
    );
  });

  return promise;
};

(async function () {
  await getRestaurants();
})();

async function getLocation() {
  console.log("Started");
  try {
    const restaurantList = await getRestaurants();
    const personalPosition = await getPosition();
  } catch {
    console.log("message");
  }

  console.log("Executed");
  console.log(personalPosition, restaurantList);

  //   getPosition()
  //     .then((personPosition) => {
  //       return getRestaurants(personPosition);
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       console.log("list of restaurants ++++");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
}

btn.addEventListener("click", () => {
  getLocation();
});
