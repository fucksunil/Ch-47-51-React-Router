import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User Id
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          type="text"
          name="body"
          className="form-control"
          id="body"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="likes"
                className="form-control"
                id="reactionsLike"
                placeholder="How many people Likes"
              />
            </div>

            <div className="col">
              <input
                type="text"
                name="dislikes"
                className="form-control"
                id="reactionsDislike"
                placeholder="How many people dislike"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space..."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction (data) {
  const formData = await data.request.formData()
  const postData = Object.fromEntries(formData)
  postData.tag = postData.tags.split(" ")
  console.log(postData)

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post)
    });

  return redirect('/')
};

export default CreatePost;
