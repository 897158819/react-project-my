export const REDUX_TEXT = 'REDUX_TEXT'
export const REDUX_INDEX = 'REDUX_INDEX'
export const REDUX_FILTER = 'REDUX_FILTER'
export const REDUX_PAYLOAD = 'REDUX_PAYLOAD'

// 以text形式传输
export function userText(text){
    return(
        {
            type: REDUX_TEXT,
            text
        }
    )
}
// 以index的形式传输
export function userIndex(index){
    return(
        {
            type:REDUX_INDEX,
            index
        }
    )
}
// 以filter的形式传输
export function userFilter(filter){
    return(
        {
            type:REDUX_FILTER,
            filter
        }
    )
}
// 以payload的形式传输
export function userPayload(payload){
    return (
        {
            type:REDUX_PAYLOAD,
            payload
        }

    )
}
// 因常量的形式传输
export const REDUX_CONST = {
    CONST_ONE:'CONST_ONE',
    CONST_TOW:'CONST_TOW',
    CONST_THREE:'CONST_THREE'  
}
