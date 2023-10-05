import React from 'react'
const CommentData = [{
    name: "Amith Sulakhe",
    text: "lorem ipsum doolr mango apple grapes",
    replies: [
        {

            name: "Amith Sulakhe",
            text: "lorem ipsum doolr mango apple grapes",
            replies: [
                {
                    name: "Amith Sulakhe",
                    text: "lorem ipsum doolr mango apple grapes",
                    replies: [

                    ]
                }, {
                    name: "Amith Sulakhe",
                    text: "lorem ipsum doolr mango apple grapes",
                    replies: [

                    ]
                }
            ]
        }
        ,
        {

            name: "Amith Sulakhe",
            text: "lorem ipsum doolr mango apple grapes",
            replies: [
                {
                    name: "Amith Sulakhe",
                    text: "lorem ipsum doolr mango apple grapes",
                    replies: [

                    ]
                }
                ,
                {
                    name: "Amith Sulakhe",
                    text: "lorem ipsum doolr mango apple grapes",
                    replies: [

                    ]
                }
            ]
        }
    ]
  
    
},
{
    name: "Amith Sulakhe",
    text: "lorem ipsum doolr mango apple grapes",
    replies:[
        
    ]
},
{
    name: "Amith Sulakhe",
    text: "lorem ipsum doolr mango apple grapes",
    replies:[
        
    ]
},
{
    name: "Amith Sulakhe",
    text: "lorem ipsum doolr mango apple grapes",
    replies:[
        
    ]
}

]
const Comment=({data})=>{
    const {name,text}=data
    return <div className='flex shadow-lg items-center rounded-lg bg-gray-100'>
        <img className='w-10 h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHv5SRkqgXKiDxk5z4WySyBqhlwGem5gsohjEjs1o&s" alt="logo" />
        <div className='font-bold pl-2'>
            <p>Name:{name}</p>
            <p>Comment{text}</p>
        </div>
    </div>
}
const CommentList=({comments})=>{
    return comments.map((comment,i)=>(<div key={i} ><Comment data={comment}/>
    
    <div className='border border-l-black px-5 mt-2 ml-2'>
        <CommentList comments={comment.replies}/>
    </div>

    </div>))
}
const CommentSection = () => {
    return (
        <div className='m-5 p-3'>
            <h1 className='font-bold text-2xl'>Comments</h1>
            <CommentList comments={CommentData}/>
        {/* <Comment data={CommentData[0]}/> */}
        </div>
    )
}

export default CommentSection