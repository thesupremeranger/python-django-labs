var foldBtns = document.getElementsByClassName("fold-button");

for (var i = 0; i < foldBtns.length; i++) {
    foldBtns[i].addEventListener("click", function(e) {
        var onePost = e.target.parentElement.parentElement;
        
        if (e.target.className == "fold-button folded") {
            e.target.innerHTML = "свернуть";
            e.target.className = "fold-button";
            var displayState = "block";
        } else {
            e.target.innerHTML = "развернуть";
            e.target.className = "fold-button folded";
            var displayState = "none";
        }

        onePost.getElementsByClassName('article-author')[0].style.display = displayState;
        onePost.getElementsByClassName('article-created-date')[0].style.display = displayState;
        onePost.getElementsByClassName('article-text')[0].style.display = displayState;
    });
}