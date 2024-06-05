// Ensures script runs only after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.getElementById("commentForm");

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    // Validate the input (optional)
    if (name.trim() === "" || comment.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    // Create a new comment object
    const newComment = {
      name: name,
      comment: comment,
    };

    // Save the comment to local storage
    saveComment(newComment);

    // Clear the form
    commentForm.reset();

    // Open blog.html in a new page to see the comments
    window.location.href = "blog.html";
  });
});
