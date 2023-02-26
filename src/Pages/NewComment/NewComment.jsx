import { useState } from 'react';
import { addNewPost } from '../../services/addNewCommentService';
import { useNavigate } from 'react-router-dom';

const NewComment = () => {
  const [comment, setComment] = useState({
    name: '',
    email: '',
    content: '',
  });

  let navigate = useNavigate();

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = async (event) => {
    event.preventDefault();
    try {
      await addNewPost({ ...comment, postId: 1 });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='bg-indigo-200 rounded-lg flex flex-col items-center gap-y-4 py-2 px-4 w-2/3'>
      <h3 className='block text-violet-600 font-medium'>Add New Comment</h3>
      <div className='flex items-center justify-start gap-x-4'>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-violet-600 '
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={changeHandler}
          placeholder='Name'
          className='bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-slate-600 '
        ></input>
      </div>
      <div className='flex items-center justify-start gap-x-4'>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-violet-600 '
        >
          Email
        </label>
        <input
          type='text'
          id='email'
          name='email'
          onChange={changeHandler}
          placeholder='Email'
          className='bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-slate-600 '
        ></input>
      </div>
      <div className='flex items-center justify-start gap-x-4'>
        <label
          htmlFor='content'
          className='block text-sm font-medium text-violet-600 '
        >
          Content
        </label>
        <textarea
          type='textarea'
          id='content'
          name='content'
          onChange={changeHandler}
          placeholder='Content'
          className=' bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[70px] resize-none p-2.5 placeholder:text-slate-600 '
          // className='resize-none bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[100px] p-2.5 placeholder:text-slate-600 '
        ></textarea>
      </div>
      <button
        onClick={postCommentHandler}
        className='bg-indigo-500 text-white px-4 py-2 my-2 rounded-lg hover:bg-indigo-700 '
      >
        Add New Comment
      </button>
    </form>
  );
};

export default NewComment;
