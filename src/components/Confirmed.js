function Confirmed({setComments, handleConfirmed, id}){
    function deleteComment(id){
        
        setComments(
            comments => comments.filter(comment => comment.id !== id)
        );
        handleConfirmed();
    };
    return(
        <div className="fixed left-0 right-0 top-0 bottom-0 z-40 bg-[#7a7a7c] bg-opacity-50 w-full h-full">
        <div className="w-[350px] h-[250px] bg-white text-black rounded-lg relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6">
        <p className="text-2xl font-semibold">Delete comment</p>
            <p className="text-slate-500 my-6">Are you sure want to delete this comment? This will remove the comment and can't be undone.</p>
            <div className="flex items-center justify-evenly">
            <button onClick={handleConfirmed} className="bg-[#69717e] text-white uppercase p-3 rounded-lg text-center w-32">NO, CANCEL</button>
            <button onClick={() => deleteComment(id)} className="bg-[#ED6368] text-white uppercase p-3 rounded-lg text-center w-32">YES, DELETE</button>
            </div>
        </div>
        
    </div>)
}

export default Confirmed;