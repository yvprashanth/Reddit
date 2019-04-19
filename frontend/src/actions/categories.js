import * as API from '../utils/Api'

export const SET_CATEGORY = 'SET_CATEGORY'

export const LOADING_POST_CATEGORIES = "LOADING_POST_CATEGORIES"

export const LOADED_POST_CATEGORIES = "LOADED_POST_CATEGORIES"

export const SET_POST_CATEGORIES = "SET_POST_CATEGORIES"

export const createCategory = text => ({
    type:'ADD_CATEGORY',
    name:''
})

export const removeCategory = text => ({
    type:'REMOVE_CATEGORY',
    name:''
})

export function setCategories(categories) {
    return {
        type: SET_POST_CATEGORIES,
        all: categories.categories
    };
}

export const getCategories = () => dispatch => (
    API.getCategories().then(data => {
        dispatch(setCategories(data.categories))
    })
)

export function setCategory(category) {
    return {
        type: SET_CATEGORY,
        category
    };
}