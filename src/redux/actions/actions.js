import {IS_SEARCH_BOX_ACTIVE, MENU, SEARCH_BOX_VALUE} from "./actionTypes";

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