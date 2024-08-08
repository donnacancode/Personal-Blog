function loadComments() {
  return JSON.parse(localStorage.getItem("comments")) || [];
}

function saveComment(comment) {
  const comments = loadComments();
  comments.push(comment);
  localStorage.setItem("comments", JSON.stringify(comments));
}

function appendComment(comment, commentsSection) {
  const newComment = document.createElement("div");
  newComment.classList.add("comment");
  newComment.innerHTML = `<p><strong>${comment.name}:</strong> ${comment.comment}</p>`;
  commentsSection.appendChild(newComment);
}
