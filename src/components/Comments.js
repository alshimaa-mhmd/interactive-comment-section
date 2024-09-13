import { useState } from "react";
import Reply from "./Reply";
import UserReply from "./UserReply";
import CommentsContext from "./CommentsContext";
import EditReply from "./EditReply";
import ConfirmedReply from "./ConfirmedReply";

function Comments({comment, userData, handleEdit, handleConfirmed}){
    const {content, createdAt, replies, score, user} = comment;
    const [likes, setLikes] = useState(score);
    const [showCommentReply, setShowCommentReply] = useState(false);
    const [allReplies, setAllReplies] = useState(replies);
    const [editReply, setEditReply] = useState(false);
    const [confirmedReply, setConfirmedReply] = useState(false);

    function handleConfirmedReply(){
        setConfirmedReply(confirmedReply => !confirmedReply)
    }

  function handleEditReply(){
      setEditReply(edit => !edit)
  }

    return(
<>
        <CommentsContext.Provider value={{
      content,
      createdAt, 
      replies,
      score,
      user,
      userData,
      setAllReplies,
    }}>

 


        <div className="flex items-center justify-between p-4 bg-white rounded-lg my-4 mx-2 min-w-full">
            <div className="sm:flex flex-col justify-center items-center  bg-[#f5f6fa] px-2 py-4 rounded-md font-bold min-w-10 hidden">
                <button className="text-[#94989d] hover:text-[#5358b6]" onClick={()=> setLikes(likes => likes+1)}>+</button>
                <span className="text-[#5358b6]">{likes}</span>
                <button className="text-[#94989d] hover:text-[#5358b6]" onClick={()=> setLikes(likes => likes-1)}>-</button>
            </div>
            <div className="p-4 pr-10 min-w-full">
                <div className="flex justify-between items-center ">
                    <div className="flex items-center justify-around w-[260px] ">
                        <img src="https://picsum.photos/30/30" alt="" className="rounded-[50%]"/>
                        <span className="font-semibold">{user.username} </span>
                        {user.username === userData.username ? <span className="text-white bg-[#5358b6] rounded-[4px] w-10 h-6 text-center">you</span> : " "}
                        <span className="text-slate-700"> {createdAt}</span>
                    </div>
                    {user.username === userData.username ?

                    <div className="hidden sm:block">
                        <button className="text-[#ED6368] mr-4" onClick={handleConfirmed}><svg className="inline" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>Delete</button>

                        <button className="text-[#5357B6]" onClick={handleEdit}>
                            <svg className="inline " width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>Edit
                        </button>
                    </div> :
                    <button className="text-[#5357b6]  hover:text-slate-500 hidden sm:inline "  onClick={ () => setShowCommentReply (showReply => !showReply)}><svg className="inline-block mr-1" width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>Reply</button>}
                </div>
                <p className="text-slate-500 mt-3">
                    {content}
                </p>
                <div className="flex items-center justify-between sm:hidden mt-4">
                    <div className="flex justify-between items-center px-4 max-h-10 bg-[#f5f6fa] py-2 rounded-md font-bold w-[100px] ">
                        <button className="text-[#94989d] hover:text-[#5358b6]" onClick={()=> setLikes(likes => likes+1)}>+</button>
                        <span className="text-[#5358b6]">{likes}</span>
                        <button className="text-[#94989d] hover:text-[#5358b6]" onClick={()=> setLikes(likes => likes-1)}>-</button>
                    </div>

                    {user.username === userData.username ?

                    <div>
                        <button className="text-[#ED6368] mr-4" onClick={handleConfirmed}><svg className="inline" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>Delete</button>

                        <button className="text-[#5357B6]" onClick={handleEdit}><svg className="inline " width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>Edit</button>
                    </div> :

                    <button className="text-[#5357b6]  hover:text-slate-500 "  onClick={ () => setShowCommentReply (showReply => !showReply)}><svg className="inline-block mr-1" width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>Reply</button>}
                </div>
            </div>
        </div>
        
        <div className="border-l-4 pl-2 md:pl-16 ml-3">
            {allReplies.map(reply =>
                <>
                <Reply reply={reply} key={reply.id} userData={userData} setAllReplies={setAllReplies} handleEditReply={handleEditReply} handleConfirmedReply={handleConfirmedReply}/>

                {editReply ? <EditReply handleEditReply={handleEditReply} id={reply.id} setAllReplies={setAllReplies} content ={reply.content} /> : " "}
                {confirmedReply ? <ConfirmedReply setAllReplies={setAllReplies} 
   handleConfirmedReply={handleConfirmedReply} id={reply.id}/> : " "}
                </>
                )}
        </div>

        {showCommentReply ? <UserReply replyingTo={user.username} hideReply={setShowCommentReply}/> : " "}
            
        </CommentsContext.Provider>
            
        </>
            
    )
}

export default Comments;