import * as React from 'react';
function NewCommentInput({ onNewComment }) {
  const [comment, setComment] = React.useState({ name: '', field: '' });
  const [commentError, setCommentError] = React.useState({
    missingName: false,
    missingField: false,
  });
  const handleChange = (event) => {
    setComment((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    // Prevents page from redirecting after comment
    event.preventDefault();

    const error = {
      missingName: comment.name === '',
      missingField: comment.field === '',
    };
    setCommentError(error);
    if (error.missingName || error.missingField) {
      return; // Don't submit if there are errors in comment
    }
    // reset comment fields
    setComment({ name: '', field: '' });
    // call parent handler
    onNewComment(comment);
  };

  return (
    <div>
      {commentError.missingName || commentError.missingField ? (
        <h4 className="warning">
          Error when submitting the comment!{' '}
          {commentError.missingName && !commentError.missingField
            ? "You're missing your name!"
            : !commentError.missingName && commentError.missingField
            ? "You're missing the comment!"
            : commentError.missingName && commentError.missingField
            ? "You're missing your name and comment!"
            : null}
        </h4>
      ) : null}
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input
          type="text"
          id="i-comment-name"
          name="name"
          value={comment.name || ''}
          onChange={handleChange}
        />
        <p>Comment:</p>
        <input
          type="text"
          id="i-comment-field"
          name="field"
          value={comment.field || ''}
          onChange={handleChange}
        />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}

function CommentSection() {
  const [comments, setComments] = React.useState([
    {
      name: 'William Pearl',
      field: 'That pic is awesome! Looks like a lot of fun.',
    },
    { name: 'Adem Odza', field: 'Thats my favorite mountain' },
    { name: 'Hudson Samuels', field: 'I took that photo' },
  ]); // Include some default comments

  const onNewComment = ({ name, field }) => {
    // add new comment to state
    setComments([...comments, { name: name, field: field }]);
  };

  return (
    <div>
      <h3>
        <strong>New Comment</strong>
        <NewCommentInput onNewComment={onNewComment}></NewCommentInput>
      </h3>
      <h3>
        <strong>Comment History</strong>
      </h3>
      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li key={index} className="comment">
            <strong>{comment.name}</strong>: {comment.field}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;
