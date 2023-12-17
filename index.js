import { posts } from "/data.js"

//Elements needed for updating like count
// const btnLikeEl = document.getElementById("btn-like-el")
// const likesCountEl = document.getElementById("likes-count-el")
let clicked = false

//Elements needed for constructing post and displaying to window
const mainEl = document.getElementById("main-el")

//Displays posts on window
window.addEventListener("DOMContentLoaded", function(){
    for(let i = 0; i < posts.length; i++) {
        render(posts[i])
    }
})

//creation of post section
function render(post) {
    mainEl.innerHTML += `<section>
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
                                <button id="btn-like-el">
                                    <i id="icon" class="fa-regular fa-heart fa-2xl icon"></i>
                                </button>
                                <button>
                                    <img src="images/icon-comment.png" class="icon">
                                </button>
                                <button>
                                    <img src="images/icon-dm.png" class="icon">
                                </button>
                            </div>
                            <p id="likes-count-el" class="bold-text likes-count">
                                ${post.likes} likes
                            </p>
                            <p class="comment">
                                <span class="bold-text">${post.username}</span> ${post.comment}
                            </p>
                        </section>
                        `
    //original
    // handles like status
    // btnLikeEl.addEventListener("click", function() {
    //     // if(clicked === true) {
    //     //     removeLike(post)
    //     //     // setLikeStatus(likesAmmtPEl, likeBtnIconEl, post)
    //     // }
    //     // else {
    //     //     addLike(post)  
    //     //     // setLikeStatus(likesAmmtPEl, likeBtnIconEl, post)
    //     // }
    // })
}

//Handle likes
function addLike(post) {
    post.likes += 1
    clicked = true
}

function removeLike(post) {
    post.likes -= 1
    clicked = false
}

function setLikeStatus(likesEl, likeIcon, post) {
    likesEl.textContent = `${post.likes} likes`
    likeIcon.classList.toggle("fa-solid")
}



