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
// {
//     "category_id": "1003",
//     "video_id": "aaak",
//     "thumbnail": "https://i.ibb.co/ZNggzdm/cake.jpg",
//     "title": "Beyond The Pale",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/MZ2vbXR/jimm.jpg",
//             "profile_name": "Jim Gaffigan",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "2.6K",
//         "posted_date": "15400"
//     },
//     "description": "'Beyond The Pale' by Jim Gaffigan, with 2.6K views, is a comedic gem that explores everyday observations and family life with a light-hearted and witty approach. Jim's humor is accessible and delightful, making this show perfect for anyone who enjoys clean, observational comedy."
// }
//display video
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video");
  videos.forEach((video) => {
    console.log(video);
    const cart = document.createElement("div");
    cart.classList = "card card-compact";
    cart.innerHTML = `<figure class="h-[200px] relative">
    <img
      src= ${video.thumbnail}
      class = "h-full w-full object-cover"
      alt="thumbnail" />
      ${video.others.posted_date?.length === 0 ? "" : `<span class="absolute bg-black rounded text-white right-2 bottom-2 p-1">${video.others.posted_date}</span>` }
  </figure>
  <div class="px-0 py-2  flex gap-2">
    <div>
        <img class = "w-10 h-10 rounded-full object-cover" src = ${video.authors[0].profile_picture}>
    </div>
    <div>
        <h2 class = "font-bold">${video.title}</h2>
        <div class = "flex items-center gap-2">
            <p class = "text-gray-400">${video.authors[0].profile_name}</p>
            ${video.authors[0].verified === true ? `<img class = "w-5 h-5" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000"/>` : ""}
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
