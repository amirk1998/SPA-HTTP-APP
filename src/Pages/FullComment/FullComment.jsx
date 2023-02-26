import { useEffect, useState } from 'react';
import { deleteComment } from '../../services/deleteCommentService';
import { getOneComment } from '../../services/getOneCommentService';
import { useParams, useNavigate } from 'react-router-dom';

const FullComment = () => {
  const [comment, setComment] = useState(null);
  let params = useParams();
  let navigate = useNavigate();
  const commentID = params.id;
  // console.log(commentID);

  useEffect(() => {
    if (commentID) {
      getOneComment(commentID)
        .then((res) => {
          setComment(res.data);
          // console.log(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [commentID]);

  const deleteHandler = async () => {
    try {
      await deleteComment(commentID);

      navigate('/');
      setComment(null);
    } catch (error) {
      console.log(error);
    }
  };

  let commentDetail = (
    <p className='bg-indigo-200 text-slate-800 px-8 py-2 w-1/2 text-center rounded-md font-semibold'>
      Please select a comment
    </p>
  );

  if (commentID)
    <p className='bg-indigo-200 text-slate-800 px-8 py-2 w-1/2 text-center rounded-md font-semibold'>
      Loading ...
    </p>;

  if (comment) {
    commentDetail = (
      <div className='bg-indigo-200 text-slate-800 rounded-lg flex flex-col items-center gap-y-2 w-2/3'>
        <p className='px-4 py-2 text-center'>{comment.name} </p>
        <p className='px-4 py-2 text-center'>{comment.email} </p>
        <p className='px-4 py-2 text-center'>{comment.body}</p>
        <button
          onClick={deleteHandler}
          className='flex items-center justify-center bg-slate-100 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 '
        >
          Delete
        </button>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
