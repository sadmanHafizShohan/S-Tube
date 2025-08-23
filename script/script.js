//fetch categories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
// display category buttons
const displayCategories = (categories) => {
  const category = document.getElementById("categories");
  categories.forEach((item) => {
    const categoryButton = document.createElement("button");
    categoryButton.classList = "btn btn-outline btn-secondary";
    categoryButton.innerText = item.category;

    category.append(categoryButton);
  });
};
//fetch videos
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};
//display video
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video");
  videos.forEach((video) => {
    console.log(video);
    const cart = document.createElement("div");
    cart.classList = "card card-compact";
    cart.innerHTML = `<figure class="h-[200px]">
    <img
      src= ${video.thumbnail}
      class = "h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2  flex gap-2">
    <div>
        <img class = "w-10 h-10 rounded-full object-cover" src = ${video.authors[0].profile_picture}>
    </div>
    <div>
        <h2 class = "font-bold">${video.title}</h2>
        <div class = "flex items-center gap-2">
            <p class = "text-gray-400">${video.authors[0].profile_name}</p>
            <img class = "w-5 h-5" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000"/>
        </div>
        <p>${video.others.views}</p>
    </div>
  </div>`;
    videoContainer.append(cart);
  });
};

// call categories and videos
loadCategories();
loadVideos();
