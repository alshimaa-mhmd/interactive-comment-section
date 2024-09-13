
function UserComment({userData, comments, handleComments, text, setText}){

    const handleChange = (event) => {
    setText(event.target.value); 
  };

  const generateId = () => {
    return Math.floor(Math.random() * 1000);
  };

  function addComment(){
    handleComments(
        [...comments,
            
        {
            id: generateId,
            content: text,
            createdAt : `at ${new Date().toLocaleTimeString()}`,
            replies:[],
            score:0,
            user: userData, 
        }

    ]
    );
    setText("");
  }
    return (
      <>
      <div className="sm:flex items-start justify-around p-4 bg-white rounded-lg my-4 mx-2 hidden">
             <img src="https://picsum.photos/30/30" alt="" className="rounded-[50%]"/>
            <textarea
            className="border border-slate-400 rounded-md lg:min-w-[75%] min-w-[65%]  h-20 px-4 outline-none py-2 " 
            placeholder="  Add your comment..."
        value={text} 
        onChange={handleChange} 
      /> 
      <button className="text-white w-[80px] h-[38px] rounded-md bg-[#5358b6]" onClick={addComment}>SEND</button>
        </div>

      <div className="sm:hidden flex flex-col items-center justify-center p-4 bg-white rounded-lg my-4 mx-2">
            <textarea
            className="border border-slate-400 rounded-md lg:min-w-[75%] min-w-[80%]  h-20 px-4 py-2 outline-none" 
            placeholder="  Add your comment..."
        value={text} 
        onChange={handleChange} 
      /> 
      <div className="flex items-center justify-between mt-6 w-[80%]">
          <img src="https://picsum.photos/30/30" alt="" className="rounded-[50%]"/>
          <button className="text-white w-[80px] h-[38px] rounded-md bg-[#5358b6]" onClick={addComment}>SEND</button>
      </div>
        </div>
        </>

    )
}
export default UserComment;