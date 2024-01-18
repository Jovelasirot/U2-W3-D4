//ITIkOLdo8aaRVGwwlhqHiCZ9xc6VdA6NL3mKbxo8WwdQhUJKF3CJuHwF

const apiKey = "ITIkOLdo8aaRVGwwlhqHiCZ9xc6VdA6NL3mKbxo8WwdQhUJKF3CJuHwF";

const fetchImg = (query) => {
  const myUrl = `https://api.pexels.com/v1/search?query=${query}`;

  fetch(myUrl, {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Status: ${response.status}`);
      }
    })
    .then((data) => {
      console.log("content of data", data.photos);
      appendImg(data.photos);
    })
    .catch((err) => {
      console.log("Error fetching the data:", err);
    });
};

const appendImg = (images) => {
  const imgPlace = document.querySelectorAll(".bd-placeholder-img");

  imgPlace.forEach((picture, index) => {
    if (index < images.length) {
      picture.src = images[index].src.medium;
      picture.alt = images[index].alt;
    } else {
    }
  });
};

document.getElementById("load-btn").addEventListener("click", () => {
  fetchImg("mountains");
});

// second btn

const fetchImgTwo = (query) => {
  const myUrl = `https://api.pexels.com/v1/search?query=${query}`;

  fetch(myUrl, {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Status: ${response.status}`);
      }
    })
    .then((data) => {
      console.log("content of data", data.photos);
      appendImgTwo(data.photos);
    })
    .catch((err) => {
      console.log("Error fetching the data:", err);
    });
};

const appendImgTwo = (images) => {
  const imgPlace = document.querySelectorAll(".bd-placeholder-img");

  imgPlace.forEach((picture, index) => {
    if (index < images.length) {
      picture.src = images[index].src.medium;
      picture.alt = images[index].alt;
    } else {
    }
  });
};

document.getElementById("loadTwo-btn").addEventListener("click", () => {
  fetchImgTwo("stars");
});

// hide part

const allEditBtn = document.querySelectorAll(
  ".btn-group .btn-outline-secondary:nth-child(2)"
);
allEditBtn.forEach((button) => {
  button.textContent = "Hide";
  button.addEventListener("click", function () {
    const card = button.closest(".col-md-4");
    card.remove();
  });
});
