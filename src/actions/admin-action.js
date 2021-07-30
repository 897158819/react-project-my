export const USER_DETAIL_STATUS="USER_DETAIL_STATUS";
export const SET_USER_INFO="SET_USER_INFO";
export const SET_USER_OTP_DEVICE_DATA="SET_USER_OTP_DEVICE_DATA";
export const SET_CURRENT_USER_INFO="SET_CURRENT_USER_INFO";
export const SET_CURRENT_EDIT_ID="SET_CURRENT_EDIT_ID";
export const SET_CURRENT_EDIT_USERNAME="SET_CURRENT_EDIT_USERNAME";
export const SERVICE_DESK_STATUS="SERVICE_DESK_STATUS";
export const SET_MENU_STATUS="SET_MENU_STATUS";
export const SET_MENU_ROLE_INFO="SET_MENU_ROLE_INFO";
export const SET_MENU_USER_PROFILE_INFO="SET_MENU_USER_PROFILE_INFO";
export const SET_MENU_INFO="SET_MENU_INFO";
export const MENU_UPDATE_STATUS="MENU_UPDATE_STATUS";
export const SET_CREATION_EDIT_INFO="SET_CREATION_EDIT_INFO";
export const SET_AWS_STATUS="SET_AWS_STATUS";
export const AWS_ACCOUNT_EDIT_INFO="AWS_ACCOUNT_EDIT_INFO";
export const AWS_DEV_OPS_EDIT_INFO="AWS_DEV_OPS_EDIT_INFO";

export function userStatus(status){
    return {
        type:USER_DETAIL_STATUS,
        payload:status
    }
}

export function setUserInfo(data){
    return {
        type:SET_USER_INFO,
        payload:data
    }
}

export function setUserOtpDeviceData(data){
    return {
        type:SET_USER_OTP_DEVICE_DATA,
        payload:data
    }
}

export function setCurrentUserInfo(data){
    return {
        type:SET_CURRENT_USER_INFO,
        payload:data
    }
}

export function setCurrentEditId(id){
    return {
        type:SET_CURRENT_EDIT_ID,
        payload:id
    }
}

export function setCurrentEditUsername(username){
    return {
        type:SET_CURRENT_EDIT_USERNAME,
        payload:username
    }
}

export function serviceDeskStatus(status){
    return {
        type:SERVICE_DESK_STATUS,
        payload:status
    }
}

export function menuStatus(status){
    return {
        type:SET_MENU_STATUS,
        payload:status
    }
}

export function menuRoleInfo(info){
    return {
        type:SET_MENU_ROLE_INFO,
        payload:info
    }
}

export function menuUserProfileInfo(info){
    return {
        type:SET_MENU_USER_PROFILE_INFO,
        payload:info
    }
}

export function menuInfo(info){
    return {
        type:SET_MENU_INFO,
        payload:info
    }
}

export function menuUpdateStatus(status){
    return {
        type:MENU_UPDATE_STATUS,
        payload:status
    }
}

export function setCreationEditInfo(info){
    return {
        type:SET_CREATION_EDIT_INFO,
        payload:info
    }
}

export function setAWSStatus(status){
    return {
        type:SET_AWS_STATUS,
        payload:status
    }
}

export function awsAccountEditInfo(info){
    return {
        type:AWS_ACCOUNT_EDIT_INFO,
        payload:info
    }
}

export function awsDevOpsEditInfo(info) {
    return {
        type:AWS_DEV_OPS_EDIT_INFO,
        payload:info
    }
}
