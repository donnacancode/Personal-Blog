function loadComments() {
  return JSON.parse(localStorage.getItem("comments")) || [];
}

function saveComment(comment) {
  const comments = loadComments();
  comments.push(comment);
  localStorage.setItem("comments", JSON.stringify(comments));
}

function appendComment(comment, commentsSection) {
  if (commentsSection) {
    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.innerHTML = `<p><strong>${comment.name}:</strong> ${comment.comment}</p>`;
    commentsSection.appendChild(newComment);
  } else {
    console.error("commentsSection not found");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");

  // Check if the themeToggle button exists
  if (!themeToggle) {
    console.error("Theme toggle button not found!");
    return;
  }

  // Get the current theme from localStorage or default to light
  const currentTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", currentTheme);

  // Log the current theme
  console.log("Current theme:", currentTheme);

  // Add an event listener to the toggle button
  themeToggle.addEventListener("click", function () {
    const theme =
      document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    console.log("Theme changed to:", theme);
  });
});
