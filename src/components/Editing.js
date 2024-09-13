import { useState } from "react";

function Editing({handleEdit,content, id, setComments}){
    const [editText, setEditText] = useState(content);
    function submitEdit(id){
        if (!editText.trim()) return;
        setComments(Comments => Comments.map(comment => comment.id === id ? {...comment, content:editText} : comment))
        setEditText("");
        handleEdit();
    }
    return (
        <div className="fixed left-0 right-0 top-0 bottom-0 z-40 bg-[#7a7a7c] bg-opacity-50 w-full h-full">
        <div className="w-72 h-52 bg-white text-black rounded-lg relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6">
            <p className="text-2xl font-semibold">Edit comment</p>
            <input value={editText} onChange={(e) => setEditText(e.target.value)} className="w-full px-2 my-4 outline-none border border-slate-500 rounded-md text-slate-500 h-9"/>
            <div className="flex items-center justify-between">
                <button onClick={handleEdit} className="bg-[#69717e] text-white uppercase p-3 rounded-lg text-center w-28"> 
                    Cancle
                </button>
                <button onClick={() => submitEdit(id)} className="bg-[#5357B6] text-white uppercase p-3 rounded-lg text-center w-28">
                    Edit
                </button>
            </div>
        </div>
        </div>
    )
}

export default Editing;