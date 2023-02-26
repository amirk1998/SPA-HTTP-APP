import { useEffect, useState } from 'react';
import Comment from '../../Components/Comment/Comment';
import FullComment from '../../Components/FullComment/FullComment';
import NewComment from '../../Components/NewComment/NewComment';
import { toast } from 'react-toastify';
import { getAllComments } from '../../services/getAllCommentService';
import { Link } from 'react-router-dom';

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedID, setSelectedID] = useState(null);
  const [error, setError] = useState(false);
  //
  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/comments')
  //     .then((response) => {
  //       setComments(response.data.slice(0, 3));
  //     })
  //     .catch((error) => {
  //       console.log('Error => ', error);
  //     });
  // }, []);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (error) {
        // console.log(err);
        setError(true);
      }
    };
    getComments();
  }, []);

  const selectCommentHandler = (id) => {
    console.log(id);
    setSelectedID(id);
  };

  const renderComments = () => {
    let renderValue = (
      <p className='text-center font-semibold text-xl text-slate-800'>
        Loading ...
      </p>
    );
    if (error) {
      renderValue = (
        <p className='text-center font-semibold text-xl text-slate-800'>
          fetching data failed !!!
        </p>
      );
      toast.error('fetching data failed!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        toastId: 'custom-id-yes',
        progress: undefined,
        theme: 'light',
      });
    }

    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Link to={`/comment/${c.id}`} key={c.id}>
          <Comment
            name={c.name}
            email={c.email}
            onClick={() => selectCommentHandler(c.id)}
          />
        </Link>
      ));
    }

    return renderValue;
  };

  // const postCommentHandler = (event, comment) => {
  //   event.preventDefault();

  //   axios
  //     .post('/comments', { ...comment, postId: 1 })
  //     .then((res) => axios.get('/comments'))
  //     .then((res) => setComments(res.data))
  //     .catch((error) => console.log(error));
  // };

  return (
    <>
      <section className='grid grid-cols-3 auto-rows-max items-center justify-center gap-x-20 gap-y-10 w-full border-2 border-gray-400 rounded-lg p-4 my-4  '>
        {renderComments()}
      </section>
      {/* <section className='flex items-center justify-center w-full border-2 border-gray-400 rounded-lg p-4 my-4 '>
        <FullComment
          commentID={selectedID}
          setComments={setComments}
          setSelectedID={setSelectedID}
        />
      </section> */}
      {/* <section className='flex items-center justify-center w-full border-2 border-gray-400 rounded-lg p-4 my-4 '>
        <NewComment setComments={setComments} />
      </section> */}
    </>
  );
};

export default Discussion;
