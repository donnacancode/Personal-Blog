document.addEventListener("DOMContentLoaded", function () {
  const commentsSection = document.getElementById("commentsSection");
  const comments = loadComments();

  comments.forEach((comment) => {
    appendComment(comment, commentsSection);
  });
});

const backButton = document.getElementById("backButton");

backButton.addEventListener("click", function () {
  window.history.back();
});
