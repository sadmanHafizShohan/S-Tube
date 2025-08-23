const loadCategories = () =>{
    //fetch categories
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error));

}
const loadVideos = () =>{
    //fetch videos
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error));

}

const displayCategories = (categories) =>{
    const category = document.getElementById('categories')
    categories.forEach(item =>{
        console.log(item)
        const categoryButton = document.createElement('button')
        categoryButton.classList = 'btn btn-outline btn-secondary'
        categoryButton.innerText = item.category;
        
        category.append(categoryButton);
    })
}

loadCategories();