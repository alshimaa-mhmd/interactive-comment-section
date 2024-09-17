import { useEffect, useState } from "react";
import UserComment from "./components/UserComment";
import Comments from "./components/Comments";
import Editing from "./components/Editing";
import Confirmed from "./components/Confirmed";

function App() {

  const [comments, setComments] = useState([]);
  const [userData, setUserData] = useState({});
  const [text, setText] = useState("");
  const [edit, setEdit] = useState(false);
  const [confirmed, setConfirmed] = useState(false);


  function handleEdit(){
      setEdit(edit => !edit)
  }
  function handleConfirmed(){
      setConfirmed(confirmed => !confirmed)
  }
  useEffect( function() {
    async function getComments() {
      const res = await fetch('https://mocki.io/v1/52784da7-6a3c-4391-88ef-04f26a7bc29c');
      const data =await res.json();
      console.log(data);
      setComments(data.comments);
    } 
    getComments()
  }, [setComments])

  useEffect( function() {
    async function getUserData() {
      const res = await fetch('https://mocki.io/v1/52784da7-6a3c-4391-88ef-04f26a7bc29c');
      const data =await res.json();
      console.log(data);
      setUserData(data.currentUser);
    } 
    getUserData()
  }, [setUserData])

  return (
      <div className="bg-[#f5f6fa] px-2 py-4 lg:px-52 overflow-x-hidden">
        {comments.map(comment => 
        <>
          <Comments  comment={comment} key={comment.id} userData={userData} setComments={setComments} text={text} setText={setText} handleEdit={handleEdit} handleConfirmed={handleConfirmed}/>
          {edit ? <Editing handleEdit={handleEdit} id={comment.id} setComments={setComments} content ={comment.content}/> : " "}
          {confirmed ? <Confirmed setComments={setComments} 
   handleConfirmed={handleConfirmed} id={comment.id}/> : " "} 
        </>
        )}
        <UserComment userData={userData} comments={comments} handleComments={setComments} text={text} setText={setText}/>
      </div>

  )
}

export default App;
