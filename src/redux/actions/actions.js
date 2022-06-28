import {BLOG_ID, IS_SEARCH_BOX_ACTIVE, MENU, RESET_SEARCH_BOX_VALUE, SEARCH_BOX_VALUE} from "./actionTypes";

export function menu() {
    return {
        type: MENU,
    }
}

export function searchBoxActive() {
    return {
        type: IS_SEARCH_BOX_ACTIVE,
    }
}

export function changeSearchBoxValue(event) {
    return {
        type: SEARCH_BOX_VALUE,
        payload: event.target.value
    }
}

export function resetSearchBoxValue() {
    return {
        type: RESET_SEARCH_BOX_VALUE,
    }
}

export function changeBlogId(index) {
    return {
        type: BLOG_ID,
        payload: index,
    }
}