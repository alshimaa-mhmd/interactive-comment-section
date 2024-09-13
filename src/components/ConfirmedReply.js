function ConfirmedReply({setAllReplies, handleConfirmedReply, id}){
    function deleteReply(id){
        
        setAllReplies(
            replies => replies.filter(reply => reply.id !== id)
        );
        handleConfirmedReply();
    };
    return(
        <div className="fixed left-0 right-0 top-0 bottom-0 z-40 bg-[#7a7a7c] bg-opacity-55 w-full h-full">
        <div className="w-[350px] h-[250px] bg-white text-black rounded-lg relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6">
        <p className="text-2xl font-semibold">Delete reply</p>
            <p className="text-slate-500 my-6">Are you sure want to delete this reply? This will remove the reply and can't be undone.</p>
            <div className="flex items-center justify-evenly">
            <button onClick={handleConfirmedReply} className="bg-[#69717e] text-white uppercase p-3 rounded-lg text-center w-32">NO, CANCEL</button>
            <button onClick={() => deleteReply(id)} className="bg-[#ED6368] text-white uppercase p-3 rounded-lg text-center w-32">YES, DELETE</button>
            </div>
        </div>
        
    </div>)
}

export default ConfirmedReply;