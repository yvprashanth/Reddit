import { combineReducers } from 'redux';

import { posts } from './posts'
import { category, categories } from './categories'


export default combineReducers({
    categories, 
    posts,
    category
})