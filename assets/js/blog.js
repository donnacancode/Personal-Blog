document.addEventListener("DOMContentLoaded", function () {
  const commentsSection = document.getElementById("commentsSection");

  if (commentsSection) {
    const comments = loadComments();

    comments.forEach((comment) => {
      appendComment(comment, commentsSection);
    });
  } else {
    console.error("commentsSection not found");
  }

  const backButton = document.getElementById("backButton");

  if (backButton) {
    backButton.addEventListener("click", function () {
      window.history.back();
    });
  } else {
    console.error("backButton not found");
  }
});
