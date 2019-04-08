
//remove post
export const removePost = (index) => {
    return {
        type: 'REMOVE_POST',
        index: index
    }
}

//add photo
export const addPost = (post) => {
    return {
        type: 'ADD_POST',
        post: post
    }
}