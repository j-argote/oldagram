import { posts } from "/data.js"

//Elements needed for updating like count
let isLiked = false

//Elements needed for displaying to window
const mainEl = document.getElementById("main-el")

//Display posts 
function renderPost() {
    mainEl.innerHTML = constructPost() 
    setLikeStatus()
}   

//creation of post sections
function constructPost() {
    let section = ""
    let postNumber = 0

    for (let post of posts) {
        postNumber = posts.indexOf(post)

        section += `<section>
                    <div class="post-header">
                        <a href="#">
                            <img src="${post.avatar}" class="user-img">
                        </a>
                        <div>
                            <h2 class="user-name bolt-text">${post.name}</h2>
                            <p class="user-location">${post.location}</p>
                        </div>
                    </div>
                    <img src="${post.post}" class="main-img">
                    <div class="btn-container">
                        <button id="btn-like-${postNumber}">
                            <i id="${postNumber}" class="fa-regular fa-heart fa-2xl icon"></i>
                        </button>
                        <button>
                            <img src="images/icon-comment.png" class="icon">
                        </button>
                        <button>
                            <img src="images/icon-dm.png" class="icon">
                        </button>
                    </div>
                    <p id="likes-count-${postNumber}" class="bold-text likes-count">
                        ${post.likes} likes
                    </p>
                    <p class="comment">
                        <span class="bold-text">${post.username}</span> ${post.comment}
                    </p>
                </section>
                `
    }
    return section
}

//Update the likes count
function setLikeStatus() {
    for(let post of posts) {
        let postNumber = posts.indexOf(post)
        const btnLike = document.getElementById(`btn-like-${postNumber}`)
        
        btnLike.addEventListener("click", () => toggleLikesStatus(post, postNumber))
    }
}

//Handle likes
function toggleLikesStatus(post, postNumber) {
    const iconLikeEl = document.getElementById(`${postNumber}`)
    const likesCountEl = document.getElementById(`likes-count-${postNumber}`)
    
    if (isLiked) {
        removeLike(post)
        iconLikeEl.classList.toggle("fa-solid")
        likesCountEl.textContent = `${post.likes} likes`
    }
    else {
        addLike(post)
        iconLikeEl.classList.toggle("fa-solid")
        likesCountEl.textContent = `${post.likes} likes`
    }
}

function addLike(post) {
    post.likes += 1
    isLiked = true
}

function removeLike(post) {
    post.likes -= 1
    isLiked = false
}

renderPost(posts) 