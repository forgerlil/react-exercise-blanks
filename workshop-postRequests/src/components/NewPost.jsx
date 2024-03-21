const NewPost = () => {
  return (
    <form>
      <fieldset>
        <legend>
          <b>Create new post</b>
        </legend>
        <div>
          <label htmlFor='title'>
            <b>Post title:</b>
          </label>
          <input id='title' type='text' />
        </div>
        <div>
          <label htmlFor='body'>
            <b>Post content:</b>
          </label>
          <textarea id='body' cols='50' rows='6'></textarea>
        </div>
        <button>Create post!</button>
      </fieldset>
    </form>
  );
};

export default NewPost;
