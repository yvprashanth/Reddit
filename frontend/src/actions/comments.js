export const CREATE_COMMENT = "CREATE_COMMENT"

export const SET_COMMENT = "SET_COMMENT"

export const GET_COMMENTS_BY_POST = "GET_COMMENTS_BY_POST"

export const VOTE_COMMENT = "VOTE_COMMENT"

export const UPDATE_COMMENT = "UPDATE_COMMENT"

export const DELETE_COMMENT = "DELETE_COMMENT"

export function createComment(comment){
    return {
        type: CREATE_COMMENT,
        comment
    }
}

export function getComments(comment){
    return {
        type: GET_COMMENTS_BY_POST,
        comment
    }
}

export function setComment(comment){
    return {
        type: GET_COMMENTS_BY_POST,
        comment
    }
}

export function updateComment(comment){
    return {
        type: UPDATE_COMMENT,
        comment
    }
}

// VOTE ON COMMENT
export function voteComment(comment) {
    return {
        type: VOTE_COMMENT,
        comment
    }
}

// DELETE
export function deleteComment(comment) {
    return {
        type: DELETE_COMMENT,
        comment
    }
};