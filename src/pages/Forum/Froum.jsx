import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../../redux/user/userSlice";

const Froum = () => {
  const user = useSelector(isLoggedIn);
  const [isReply, setIsReply] = useState(false);
  const [message, setMessage] = useState("");
  const [postMessage, setPostMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [editCommentId, setEditCommentId] = useState(null); // Track the comment being edited
  const [editMessage, setEditMessage] = useState("");
  const [replyToCommentId, setReplyToCommentId] = useState(null);

  const [replyMessage, setReplyMessage] = useState("");
  const [replyCommentId, setReplyCommentId] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/comment"); // Assuming this endpoint fetches all comments
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchComments();
  }, []);

  const handlePostMessageChange = (e) => {
    setPostMessage(e.target.value);
  };

  const handlePostSubmitComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id, // Replace with actual userId
          comment: postMessage,
          parent: null, // Set to null or parent ID for replies
        }),
      });

      // Check if the response is OK (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Attempt to parse the response to JSON
      const newComment = await response.json();
      console.log("Response data:", newComment); // Debug log to see the response
      setPostMessage("");
      setComments([...comments, newComment]);
    } catch (error) {
      console.error("Error posting comment:", error.message);
    }
  };

  const handleIconClick = () => {
    setIsReply(!isReply);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // const handleSubmitComment = (e) => {
  //   e.preventDefault();
  //   console.log(message);
  //   setMessage("");
  //   setIsReply(false);
  // };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "USER_ID", // Replace with actual userId
          comment: message,
          parent: "PARENT_COMMENT_ID", // Replace with actual parent comment ID
        }),
      });
      const newComment = await response.json();
      setMessage("");
      setIsReply(false);
      setComments([...comments, newComment]);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleEditComment = async (commentId) => {
  //   const newComment = prompt("Edit your comment:");
  //   if (newComment) {
  //     try {
  //       const response = await fetch(`http://localhost:3000/api/comment${commentId}`, {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           userId: user._id, // Replace with actual userId
  //           comment: newComment,
  //         }),
  //       });
  //       const updatedComment = await response.json();
  //       setComments(
  //         comments.map((comment) =>
  //           comment._id === commentId ? updatedComment : comment
  //         )
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  const handleReplyClick = (commentId) => {
    setReplyCommentId(commentId); // Set the comment ID being replied to
    setReplyMessage("");
    if (replyToCommentId === commentId) {
      // If already replying to the same comment, toggle the reply box
      setReplyToCommentId(null);
    } else {
      setReplyToCommentId(commentId); // Set the comment ID being replied to
    }
  };

  // Handle submitting a reply
  const handleSubmitReply = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id, // Replace with actual userId
          comment: message,
          parent: replyToCommentId, // Associate reply with the parent comment
        }),
      });
      const newReply = await response.json();
      setComments([...comments, newReply]);
      setMessage(""); // Clear the reply textarea after posting
      setIsReply(false); // Hide the reply form
      setReplyToCommentId(null); // Reset the replyToCommentId
    } catch (error) {
      console.error("Error posting reply:", error);
    }
  };

  const handleEditComment = (commentId) => {
    const commentToEdit = comments.find((comment) => comment._id === commentId);
    setEditCommentId(commentId); // Set the ID of the comment being edited
    setEditMessage(commentToEdit.comment); // Pre-fill the textarea with the current comment text
  };

  // Handle edit message change
  const handleEditMessageChange = (e) => {
    setEditMessage(e.target.value);
  };

  // Handle submitting the edited comment
  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/comment/${editCommentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user._id, // Replace with actual userId
            comment: editMessage,
          }),
        }
      );
      const updatedComment = await response.json();

      // Update the comment in the state
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment._id === editCommentId ? updatedComment : comment
        )
      );
      setEditCommentId(null); // Reset after editing
      setEditMessage(""); // Clear the textarea after editing
      if (response.ok) {
        const updatedComment = await response.json();
        setComments(
          comments.map((comment) =>
            comment._id === editCommentId ? updatedComment : comment
          )
        );
        setEditCommentId(null); // Clear edit state after successful update
      }
    } catch (error) {
      console.error("Error editing comment:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await fetch(`http://localhost:3000/api/comment/${commentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id, // Replace with actual userId
        }),
      });
      setComments(comments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="h-screen overflow-y-auto">
        <div>
          <Header />
        </div>
        <div>
          <div className=" mt-20 py-52 px-1 md:px-8 object-cover object-center  inset-0 bg-black bg-opacity-50 text-center relative overflow-auto bg-gradient-overlay-froum ">
            <h1 className="text-5xl font-bold leading-tight mb-4 text-bermuda">
              Disscussion Forum
            </h1>
            <div className="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
              <div className="relative z-30 text-base text-black">
                <p className="text-lg text-gray-300 mb-8">
                  Discover amazing features and services that await you.
                </p>
                <a
                  href="#"
                  className="bg-bermuda text-gray-900 hover:bg-blue-300 py-2 px-6 rounded-full text-lg z-100 relative font-semibold transition r duration-300  transform hover:scale-105 hover:shadow-lg"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
            <div className="max-w-6xl mx-auto bg-[#e5f7f8] p-6 ">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Discussion Forum
                </h2>
              </div>
              <form className="mb-6" onSubmit={handlePostSubmitComment}>
                <div className="py-2 px-4 mb-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <textarea
                    id="comment"
                    rows="6"
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:bg-gray-800"
                    placeholder="Write a comment..."
                    required
                    value={postMessage}
                    onChange={handlePostMessageChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#26aba3] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Post comment
                </button>
              </form>

              {/* Comments List */}
              {comments
                .filter((comment) => !comment.parent) // Filter for top-level comments only
                .map((comment) => (
                  <article
                    key={comment._id}
                    className="p-6 text-base bg-white rounded-lg dark:bg-gray-900"
                  >
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                          <img
                            className="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                            alt="User"
                          />
                          {comment.userId}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time>{new Date(comment.createdAt).toLocaleString()}</time>
                        </p>
                      </div>
                    </footer>

                    {/* Edit comment functionality */}
                    {editCommentId === comment._id ? (
                      <form onSubmit={handleSubmitEdit}>
                        <textarea
                          value={editMessage}
                          onChange={handleEditMessageChange}
                          className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                        ></textarea>
                        <button
                          type="submit"
                          className="mt-2 px-3 py-1.5 rounded-md text-white bg-indigo-500"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditCommentId(null)} // Cancel edit
                          className="ml-2 mt-2 px-3 py-1.5 rounded-md text-white bg-red-500"
                        >
                          Cancel
                        </button>
                      </form>
                    ) : (
                      <p className="text-gray-500 dark:text-gray-400">
                        {comment.comment}
                      </p>
                    )}

                    <div className="flex items-center mt-4 space-x-4">
                      {/* Reply button */}
                      <button
                        type="button"
                        className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                        onClick={() => handleReplyClick(comment._id)}
                      >
                        Reply
                      </button>

                      {/* Show Edit button only for the author of the comment */}
                      {user._id === comment.userId && editCommentId !== comment._id && ( // Check if user is the author and not in edit mode
                        <button
                          type="button"
                          className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                          onClick={() => handleEditComment(comment._id)}
                        >
                          Edit
                        </button>
                      )}

                      {/* Delete button, visible to the author only */}
                      {user._id === comment.userId && (
                        <button
                          type="button"
                          className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                          onClick={() => handleDeleteComment(comment._id)}
                        >
                          Delete
                        </button>
                      )}
                    </div>


                    {/* {isReply && (
                <form
                  className="max-w-3xl bg-white rounded-lg border p-3 mx-auto mt-5"
                  onSubmit={handleSubmitComment}
                >
                  <div className="px-3 mb-2">
                    <textarea
                      placeholder="comment"
                      value={message}
                      onChange={handleMessageChange}
                      className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                    ></textarea>
                  </div>
                  <div className="flex justify-end px-4">
                    <input
                      type="submit"
                      className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
                      value="Comment"
                    />
                  </div>
                </form>
              )} */}

                    {replyToCommentId === comment._id && (
                      <form
                        className="max-w-3xl bg-white rounded-lg border p-3 mx-auto mt-5"
                        onSubmit={handleSubmitReply}
                      >
                        <div className="px-3 mb-2">
                          <textarea
                            placeholder="Reply to comment"
                            value={message}
                            onChange={handleMessageChange}
                            className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                          ></textarea>
                        </div>
                        <div className="flex justify-end px-4">
                          <input
                            type="submit"
                            className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
                            value="Reply"
                          />
                        </div>
                      </form>
                    )}

                    {/* Show replies (nested comments)
                    {comments
                      .filter((reply) => reply.parent === comment._id)
                      .map((reply) => (
                        <div
                          key={reply._id}
                          className="ml-10 mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                        >
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {reply.userId} •{" "}
                            {new Date(reply.createdAt).toLocaleString()}
                          </p>
                          <p className="mt-2 text-gray-500 dark:text-gray-400">
                            {reply.comment}
                          </p>
                          <div className="flex items-center mt-4 space-x-4">
                      <button
                        type="button"
                        className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                        // onClick={handleIconClick}
                        onClick={() => handleReplyClick(reply._id)}
                      >
                        Reply
                      </button>
                      <button
                        type="button"
                        className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                        onClick={() => handleEditComment(reply._id)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                        onClick={() => handleDeleteComment(reply._id)}
                      >
                        Delete
                      </button>
                    </div>
                        </div>
                        
                      ))} */}

                    {comments
                      .filter((reply) => reply.parent === comment._id)
                      .map((reply) => (
                        <div
                          key={reply._id}
                          className="ml-10 mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                        >
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {reply.userId} •{" "}
                            {new Date(reply.createdAt).toLocaleString()}
                          </p>

                          {editCommentId === reply._id ? (
                            <form onSubmit={handleSubmitEdit}>
                              <textarea
                                value={editMessage}
                                onChange={(e) => setEditMessage(e.target.value)}
                                className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                              />
                              <button
                                type="submit"
                                className="mt-2 px-3 py-1.5 rounded-md text-white bg-indigo-500"
                              >
                                Save
                              </button>
                              <button
                                type="button"
                                onClick={() => setEditCommentId(null)} // Cancel editing
                                className="ml-2 mt-2 px-3 py-1.5 rounded-md text-white bg-red-500"
                              >
                                Cancel
                              </button>
                            </form>
                          ) : (
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                              {reply.comment}
                            </p>
                          )}

                          <div className="flex items-center mt-4 space-x-4">
                            <button
                              type="button"
                              className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                              onClick={() => handleReplyClick(reply._id)}
                            >
                              Reply
                            </button>
                            {user._id === reply.userId && ( // Check if user is the author of the reply
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                  onClick={() => handleEditComment(reply._id)}
                >
                  Edit
                </button>
              )}
                            {user._id === reply.userId && ( // Check if user is the author of the reply
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                  onClick={() => handleDeleteComment(reply._id)} // Delete the reply
                >
                  Delete
                </button>
              )}
                          </div>

                          {replyCommentId === reply._id && (
                            <form
                              onSubmit={handleSubmitReply}
                              className="ml-10 mt-4"
                            >
                              <textarea
                                value={replyMessage}
                                onChange={(e) =>
                                  setReplyMessage(e.target.value)
                                }
                                placeholder="Write your reply..."
                                className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                              />
                              <button
                                type="submit"
                                className="mt-2 px-3 py-1.5 rounded-md text-white bg-indigo-500"
                              >
                                Submit Reply
                              </button>
                            </form>
                          )}



                        </div>
                      ))}
                  </article>
                ))}


                
            </div>
          </section>
        </div>

        {/* <div>
          <section class="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
            <div class="max-w-6xl mx-auto bg-[#e5f7f8] p-6 ">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Discussion Forum
                </h2>
              </div>
              <form class="mb-6" onSubmit={handlePostSubmitComment }>
                <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label for="comment" class="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="6"
                    class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..."
                    required
                    value={postMessage}
                    onChange={handlePostMessageChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#26aba3] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Post comment
                </button>
              </form>
              <article class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
                <footer class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                    <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                      <img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough"
                      />
                      Michael Gough
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        July. 6, 2024
                      </time>
                    </p>
                  </div>
                </footer>
                <p class="text-gray-500 dark:text-gray-400">
                Invest in your well-being! Our curated collection of self-care essentials empowers you to manage stress, boost mood, and find inner peace. Explore journals, aromatherapy tools, and mindfulness resources – 
                all designed to nurture your mental health journey.

                </p>
                <div class="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                    onClick={handleIconClick}
                  >
                    <svg
                      class="w-6 h-6 text-gray-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                      />
                    </svg>
                    Reply
                  </button>
                  <button
                    type="button"
                    class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                  >
                    <svg
                      class="w-6 h-6 text-gray-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    type="button"
                    class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                  >
                    <svg
                      class="w-6 h-6 text-gray-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="3.5"
                      height="3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
                {isReply && (
                  <form
                    class="max-w-3xl bg-white rounded-lg border p-3 mx-auto mt-5"
                    onSubmit={handleSubmitComment}
                  >
                    <div class="px-3 mb-2 ">
                      <textarea
                        placeholder="comment"
                        value={message}
                        onChange={handleMessageChange}
                        class="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                      ></textarea>
                    </div>
                    <div class="flex justify-end px-4">
                      <input
                        type="submit"
                        class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
                        value="Comment"
                      />
                    </div>
                  </form>
                )}
              </article>



              
             

            
            </div>
          </section>
        </div> */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Froum;

{
  /* <article class="p-7 mb-3 mt-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
                <footer class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                    <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                      <img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="Jese Leos"
                      />
                      Jese Leos
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-12"
                        title="February 12th, 2022"
                      >
                        July. 05, 2024
                      </time>
                    </p>
                  </div>
               
                </footer>
                <p class="text-gray-500 dark:text-gray-400">
                "Wow, that session was really helpful. I never thought about reframing my negative thoughts that way!"
                </p>
                <div class="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                   
                  >
                    <svg
                      class="w-6 h-6 text-gray-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                      />
                    </svg>
                    Reply
                  </button>
                  <button
                    type="button"
                    class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                  >
                    <svg
                      class="w-6 h-6 text-gray-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    type="button"
                    class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                  >
                    <svg
                      class="w-6 h-6 text-gray-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="3.5"
                      height="3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
                

              </article> */
}
{
  /* <article class="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
                <footer class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                    <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                      <img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="Jese Leos"
                      />
                      Jese Leos
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-12"
                        title="February 12th, 2022"
                      >
                        July. 01, 2024
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment2Button"
                    data-dropdown-toggle="dropdownComment2"
                    class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span class="sr-only">Comment settings</span>
                  </button>

                  <div
                    id="dropdownComment2"
                    class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p class="text-gray-500 dark:text-gray-400">
                "I feel so much lighter after talking about this. It's a relief to not have to bottle everything up."
                </p>
                <div class="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                  >
                    <svg
                      class="mr-1.5 w-3.5 h-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                      />
                    </svg>
                    Reply
                  </button>
                </div>
              </article> */
}
{
  /* <article class="p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <footer class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                    <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                      <img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie Green"
                      />
                      Bonnie Green
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-03-12"
                        title="March 12th, 2022"
                      >
                        June. 12, 2024
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment3Button"
                    data-dropdown-toggle="dropdownComment3"
                    class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span class="sr-only">Comment settings</span>
                  </button>

                  <div
                    id="dropdownComment3"
                    class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p class="text-gray-500 dark:text-gray-400">
                Unleash your inner calm. Our curated selection of self-care essentials empowers you to manage stress, elevate mood, 
                and cultivate inner peace. From calming candles to guided meditations, 
                explore tools designed to nurture your mental well-being.
                </p>
                <div class="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                  >
                    <svg
                      class="mr-1.5 w-3.5 h-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                      />
                    </svg>
                    Reply
                  </button>
                </div>
              </article> */
}
{
  /* <article class="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <footer class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                    <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                      <img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                        alt="Helene Engels"
                      />
                      Helene Engels
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-06-23"
                        title="June 23rd, 2022"
                      >
                        June. 23, 2024
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment4Button"
                    data-dropdown-toggle="dropdownComment4"
                    class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  </button>

                  <div
                    id="dropdownComment4"
                    class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p class="text-gray-500 dark:text-gray-400">
                Self-care made simple. Discover our hand-picked collection of stress-busting tools and mood-boosting resources. Explore aromatherapy diffusers, 
                mindfulness journals, and more - all designed to empower your mental health journey.
                </p>
                <div class="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                  >
                    <svg
                      class="mr-1.5 w-3.5 h-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                      />
                    </svg>
                    Reply
                  </button>
                </div>
              </article> */
}
