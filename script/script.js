//fetch categories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
// fetch video by category
const loadVideosByCategory = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayVideos(data.category))
    .catch((error) => console.log(error));
};

// display category buttons
const displayCategories = (categories) => {
  const category = document.getElementById("categories");
  categories.forEach((item) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.innerHTML =`
    <button onclick = "loadVideosByCategory(${item.category_id})" class="btn btn-outline btn-secondary">
      ${item.category}
    </button>
    `
    category.append(categoryContainer);
  });
};
//fetch videos
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};
// converted posted time
function convertTime(time) {
  const hour = parseInt(time / 3600);
  let remainingSecond = time % 60;
  const minute = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}

// display video on ui
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video");
  videoContainer.innerHTML = "";
  if(videos.length === 0){
    videoContainer.classList.remove("grid")
    videoContainer.innerHTML = 
    `
    <div class = "flex flex-col justify-center items-center gap-4">
      <img src = "icon.png" />
      <h2 class = "text-3xl font-bold text-center">No videos found</h2>
    </div>
    `
  }else{
    videoContainer.classList.add("grid")
  }
  videos.forEach((video) => {
    const cart = document.createElement("div");
    cart.classList = "card card-compact";
    cart.innerHTML = `<figure class="h-[200px] relative">
    <img
      src= ${video.thumbnail}
      class = "h-full w-full object-cover"
      alt="thumbnail" />
      ${
        video.others.posted_date?.length === 0
          ? ""
          : `<span class="absolute bg-black rounded text-white right-2 bottom-2 p-1">${convertTime(video.others.posted_date)}</span>`
      }
  </figure>
  <div class="px-0 py-2  flex gap-2">
    <div>
        <img class = "w-10 h-10 rounded-full object-cover" src = ${
          video.authors[0].profile_picture
        }>
    </div>
    <div>
        <h2 class = "font-bold">${video.title}</h2>
        <div class = "flex items-center gap-2">
            <p class = "text-gray-400">${video.authors[0].profile_name}</p>
            ${
              video.authors[0].verified === true
                ? `<img class = "w-5 h-5" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000"/>`
                : ""
            }
        </div>
        <p>${video.others.views} views</p>
    </div>
  </div>`;
    videoContainer.append(cart);
  });
};

// call categories and videos
loadCategories();
loadVideos();
