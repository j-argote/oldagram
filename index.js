const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

//Elements needed for updating like count
const btnLikeEl = document.getElementById("btn-like-el")
const likesCountEl = document.getElementById("likes-count-el")
let clicked = false

//Elements needed for constructing post and displaying to window
const mainEl = document.getElementById("main-el")

//Displays posts on window
window.addEventListener("DOMContentLoaded", function(){
    let newPost
    for(let i = 0; i < posts.length; i++) {
        newPost = constructPost(posts[i])
        mainEl.appendChild(newPost)
    }
})

//creation of post section
function constructPost(post) {
    const newSectionEl = document.createElement("section")
    
    const postHeaderDivEl = createDivEl("post-header")      

    const postUserAnchorEl = document.createElement("a")
    postUserAnchorEl.setAttribute("href", "#")

    const postUserImgEl = createImgEl("src", `${post.avatar}`, "user-img")                   

    const newContainerDivEl = createDivEl()      

    const postUserNameH2El = document.createElement("h2") 
    postUserNameH2El.classList.add("user-name", "bold-text")
    postUserNameH2El.textContent = `${post.name}`

    const postUserLocationPEl = createPEl()                 
    postUserLocationPEl.classList.add("user-location")
    postUserLocationPEl.textContent = `${post.location}`

    const postImgEl = createImgEl("src", `${post.post}`, "main-img")                      
    
    const btnContainerDivEl = createDivEl()                 
    btnContainerDivEl.classList.add("btn-container")

    const likeBtnEl = createBtnEl()                     
    likeBtnEl.setAttribute("id", "btn-like-el")
    const likeBtnIconEl = document.createElement("i")                     
    likeBtnIconEl.classList.add("fa-regular", "fa-heart", "fa-2xl", "icon")

    const commentBtnEl = createBtnEl()                  
    const commentBtnImgEl = createImgEl("src", "images/icon-comment.png", "icon")                  

    const dmBtnEl = createBtnEl()                       
    const dmBtnImgEl = createImgEl("src", "images/icon-dm.png", "icon")                      

    const likesAmmtPEl = createPEl()                        
    likesAmmtPEl.setAttribute("id", "likes-count-el")
    likesAmmtPEl.classList.add("bold-text", "likes-count")
    likesAmmtPEl.textContent = `${post.likes} likes`

    const postCommentEl = createPEl()                       
    postCommentEl.classList.add("bold-text", "comment")
    const spanEl = document.createElement("span")                          
    spanEl.classList.add("font-weight-normal")
    spanEl.textContent = `${post.comment}`
    postCommentEl.textContent = `${post.username} `
    
    newSectionEl.appendChild(postHeaderDivEl)
    postHeaderDivEl.appendChild(postUserAnchorEl)
    postUserAnchorEl.appendChild(postUserImgEl)
    postHeaderDivEl.appendChild(newContainerDivEl)
    newContainerDivEl.appendChild(postUserNameH2El)
    newContainerDivEl.appendChild(postUserLocationPEl)
    newSectionEl.appendChild(postImgEl)
    newSectionEl.appendChild(btnContainerDivEl)
    btnContainerDivEl.appendChild(likeBtnEl)
    likeBtnEl.appendChild(likeBtnIconEl)
    btnContainerDivEl.appendChild(commentBtnEl)
    commentBtnEl.appendChild(commentBtnImgEl)
    btnContainerDivEl.appendChild(dmBtnEl)
    dmBtnEl.appendChild(dmBtnImgEl)
    newSectionEl.appendChild(likesAmmtPEl)
    postCommentEl.appendChild(spanEl)
    newSectionEl.appendChild(postCommentEl)

    //handles like status
    likeBtnEl.addEventListener("click", function() {
       
        if(clicked === true) {
            removeLike(post)
            setLikeStatus(likesAmmtPEl, likeBtnIconEl, post)
        }
        else {
            addLike(post)  
            setLikeStatus(likesAmmtPEl, likeBtnIconEl, post)
        }
    })
    
    return newSectionEl

}

//Handle creation of repeated elements
function createDivEl(className) {
    if(className) {
        const div = document.createElement("div")
        div.classList.add(className)
        return div
    }
    else {
        return document.createElement("div")
    }
}

function createImgEl(attributeType, attributeName, className) {
    const img = document.createElement("img")
    img.setAttribute(attributeType, attributeName)
    img.classList.add(className)
    return img
}

function createPEl() {
    return document.createElement("p")
}

function createBtnEl() {
    return document.createElement("button")
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



