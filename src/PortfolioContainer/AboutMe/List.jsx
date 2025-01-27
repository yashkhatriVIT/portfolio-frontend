import { response } from 'express';
import React from 'react'
import { useEffect, useCallback } from 'react';
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { isRouteErrorResponse } from 'react-router-dom';
// import { useDrag, useDrop } from "react-dnd";

// export default function CurrencyConverter() {
// //     const [convertedCurr, setConvertedCurr] = useState(0);
// //     const[curr, setCurr] = useState(0);
// //     let handleChangeCurr = (e) => {
// //         setCurr(()=>{
// //             return parseFloat(e.target.value);
// //         })
// //     }
// //     let handleSubmit = (e) => {
// //         e.preventDefault();
// //         setConvertedCurr(() => {
// //             return (curr*72.3).toFixed(2);
// //         }) 
// //         console.log(convertedCurr);
// //     }
// //   return (
// //     <div>
// //         <form action="submit">
// //             <input type="text" name="curr" id="curr" placeholder='' onChange={(e) => handleChangeCurr(e)}/>
// //             <input type="text" name="converted-curr" id="converted-curr" value={convertedCurr} disabled/>
// //             <Button onClick={handleSubmit}>Convert to Rs</Button>
// //         </form>
        
// //     </div>
// const [time, setTime] = useState(0);
// const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let intervalId;
//     if(isRunning) {
//         intervalId = setInterval(() => {
//             setTime((prevTime) => prevTime+1);
//         }, 1000);
//     } else {
//         clearInterval(intervalId);
//     }
//     return () => clearInterval(intervalId);
//   }, [isRunning]);
//   let startTimer = () => {
//     setIsRunning(true);
//   }
//   let toggleTimer = () => {
//     setIsRunning(prevState => !prevState);
//   }
//   let resetTimer = () => {
//     setIsRunning(false);
//     setTime(0);
//   }
//   let formatTime = (time) => {
//     let currentTime = time;
//     const hrs = Math.floor(currentTime/(24*60));
//     let hh = hrs <= 9 ? "0"+hrs : hrs;
//     currentTime -= (hrs*24*60);
//     const min = Math.floor(currentTime/(60));
//     let mm = min <= 9 ? "0"+min: min;
//     currentTime -= min*60;
//     let ss = currentTime <= 9 ? "0"+currentTime: currentTime;
//     return `${hh}:${mm}:${ss}`;
//   }
//   return (
//     <div>
//         <h1>Timer</h1>
//         <p>{formatTime(time)}</p>
//         {!isRunning ? 
//             <Button onClick= {startTimer}>Start</Button> : 
//             <Button onClick={resetTimer}>Reset</Button>
//         }
//         <Button onClick={toggleTimer}>{isRunning ? "Pause" : "Resume"}</Button> 
//     </div>
//   )
// }
// const ItemType = "ITEM";

// const Item = ({ id, text, index, moveItem }) => {
//   const [{ isDragging }, drag] = useDrag({
//     item: { type: ItemType, id, index },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   const [, drop] = useDrop({
//     accept: ItemType,
//     hover(item, monitor) {
//       if (!dragRef.current) {
//         return;
//       }
//       const dragIndex = item.index;
//       const hoverIndex = index;
//       if (dragIndex === hoverIndex) {
//         return;
//       }
//       moveItem(dragIndex, hoverIndex);
//       item.index = hoverIndex;
//     },
//   });

//   const opacity = isDragging ? 0.5 : 1;
//   const style = {
//     opacity,
//   };

//   const dragRef = React.useRef(null);
//   drag(drop(dragRef));

//   return (
//     <div ref={dragRef} style={style}>
//       {text}
//     </div>
//   );
// };
const List = () => {
  // const [count, setCount] = useState(0);
 
  // const increment = useCallback(() => {
	// setCount(prevCount => prevCount+1);
  // }, [setCount]);
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/", {
  //     method: 'GET'
  //   }).then(response => {
  //     return response.json();
  //   }).then(res => {
  //     setPosts(res);
  //   });
  // }, []);
  // const deletePost = (postId) => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
  //     method: 'DELETE'
  //   }).then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network error');
  //     }
  //     setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  //     return response.json();
  //   }).then(data => {
  //     console.log("successfully deleted: ", data);
  //   }).catch(error => {
  //     console.error("Error deleting post: ", error);
  //   });
  // }
  // let renderPosts = () => {
  //   return posts.map(post => {
  //     <div>
  //       <li key = {post.id}>
  //         {post.title}
  //       </li>
  //       <Button onClick={() => deletePost(post.id)}> Delete </Button>
  //     </div>
  //   })
  // }
  //  return (
	// <div>
  // 	{renderPosts()}
	// </div>
  // );
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPosts, setNumberOfPosts] = useState(10);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => {
        setPosts(json);
      });
  }, []);

  const deletePost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE'
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network error');
      }
      setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
      return response.json();
    }).then(data => {
      console.log("successfully deleted: ", data);
    }).catch(error => {
      console.error("Error deleting post: ", error);
    });
  }
  const endPageIndx = Math.min(numberOfPosts*page, posts.length);
  const startPageIndx = Math.max(endPageIndx-numberOfPosts, 0);
  const currentPosts = posts.slice(startPageIndx, endPageIndx);
  let paginate  = (page) => setPage(page); 
  const renderPosts = currentPosts.map(post => (
    <li key={post.id}>
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      <Button onClick={() => deletePost(post.id)}>DELETE</Button>
    </li>
  ));

  return (
    <div>
      <ul>
        {renderPosts}
      </ul>
      <br />
      {page !== 1 ? <Button onClick={() => paginate(page-1)}>Previous</Button> : <></>}
      <Button onClick={() => paginate(page+1)}>Next</Button>
      <p>Showing {startPageIndx+1} - {endPageIndx} of {posts.length}</p>
    </div>
  );
};

export default List;