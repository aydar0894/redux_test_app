//increment likes count
export function incrementLikes(index){
  return{
    type: "INCREMENT_LIKES",
    index
  }
}

//add comments
export function addComment(postId, author, comment){
  return{
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  }
}


//remove comment
export function removeComment(postId, commentIindex){
  return{
    type: "REMOVE_COMMENT",
    postId,
    commentIindex
  }
}
