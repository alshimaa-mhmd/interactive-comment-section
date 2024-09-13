import { useContext, useState } from "react";
import CommentsContext from "./CommentsContext";

function UserReply({replyingTo, hideReply}){
    const { userData, setAllReplies} = useContext(CommentsContext);
    const [text, setText] = useState("");

    const handleChange = (event) => {
    setText(event.target.value); 
  };

  function addReply() {
    setAllReplies((prevReplies) => [
      ...prevReplies,
      {
        id: Math.random(),
        content: text,
        createdAt: `at ${new Date().toLocaleTimeString()}`,
        replyingTo,
        score: 0,
        user: userData,
      }
    ]);
    setText("");
   hideReply(false);
 
  }
  
        return (
          <>
          <div className="sm:flex items-start justify-around p-4 bg-white rounded-lg my-4 mx-2 hidden">
          <img src="https://picsum.photos/30/30" alt="" className="rounded-[50%]"/>
         <textarea
         className="border border-slate-400 rounded-md w-[65%] h-20 px-4 py-2 outline-none" 
         placeholder="  Add your reply..."
            value={text}
            onChange={handleChange} 
          /> 
          <button className="text-white w-[80px] h-[38px] rounded-md bg-[#5358b6]" onClick={addReply}>REPLY</button>
            </div>

            <div className="sm:hidden flex flex-col items-center justify-center p-4 bg-white rounded-lg my-4 mx-2">
            <textarea
            className="border border-slate-400 rounded-md lg:min-w-[75%] min-w-[80%]  h-20 px-4 py-2 outline-none" 
            placeholder="  Add your reply..."
        value={text} // Bind the value of the textarea to the state
        onChange={handleChange} // Update the state when the user types
      /> 
          <div className="flex items-center justify-between mt-6 w-[80%]">
              <img src="https://picsum.photos/30/30" alt="" className="rounded-[50%]"/>
              <button className="text-white w-[80px] h-[38px] rounded-md bg-[#5358b6]" onClick={addReply}>REPLY</button>
          </div>
        </div>
        </>
        )
}

export default UserReply;