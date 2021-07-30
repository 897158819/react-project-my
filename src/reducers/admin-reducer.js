import { USER_DETAIL_STATUS, SET_USER_INFO, SET_USER_OTP_DEVICE_DATA, SET_CURRENT_USER_INFO, SET_CURRENT_EDIT_ID, SET_CURRENT_EDIT_USERNAME,
    SERVICE_DESK_STATUS, SET_MENU_STATUS, SET_MENU_ROLE_INFO, SET_MENU_USER_PROFILE_INFO, SET_MENU_INFO,
    MENU_UPDATE_STATUS, SET_CREATION_EDIT_INFO, SET_AWS_STATUS, AWS_ACCOUNT_EDIT_INFO, AWS_DEV_OPS_EDIT_INFO } from "../actions/admin-action";

const initialData= {
    userStatus: {
        modalDetailVisible: false,
        modalCreateVisible: false,
        modalEditVisible: false,
        modalCodeVisible:false,
        modalPasswordVisible:false,
        modalResetPasswordVisible:false,
        loadStatus: false
    },
    currentUserInfo:null,
    currentUserEditId:null,
    currentUserEditUsername:null,
    userInfo:null,
    userOtpDeviceData:null,
    userId:null,
    serviceDeskStatus:{
        creationModalCreateVisible:false,
        creationModalEditVisible:false,
        modalAddCategoryVisible:false,
        modalEditCategoryVisible:false,
        addCategoryName:null,
        editCategoryName:null,
        editCategoryObj:null,
        loadStatus:false
    },
    creationEditInfo:null,
    menuStatus:{
        modalMenuDetailVisible: false,
        modalMenuCreateVisible: false,
        modalMenuEditVisible: false,
        modalMenuRoleDetailVisible: false,
        modalMenuRoleCreateVisible: false,
        modalMenuRoleEditVisible: false,
        modalMenuUserProfileDetailVisible: false,
        modalMenuUserProfileCreateVisible: false,
        modalMenuUserProfileEditVisible: false,
    },
    menuRoleInfo:null,
    menuUserProfileInfo:null,
    menuInfo:null,
    menuUpdateStatus:false,
    awsStatus:{
        modalAWSAccountCreateVisible:false,
        modalAWSAccountEditVisible:false,
        modalAWSAccountDetailVisible:false,
        modalAWSDevOpsCreateVisible:false,
        modalAWSDevOpsEditVisible:false,
    },
    awsAccountEditInfo:null,
    awsDevOpsEditInfo:null
};

export default function(state=initialData,action){
    switch(action.type){
        case USER_DETAIL_STATUS:
            return {...state,userStatus:action.payload};
        case SET_USER_INFO:
            return {...state,userInfo:action.payload};
        case SET_USER_OTP_DEVICE_DATA:
            return {...state,userOtpDeviceData:action.payload};
        case SET_CURRENT_USER_INFO:
            return {...state,currentUserInfo:action.payload};
        case SET_CURRENT_EDIT_ID:
            return {...state,currentUserEditId:action.payload};
        case SET_CURRENT_EDIT_USERNAME:
            return {...state,currentUserEditUsername:action.payload};
        case SERVICE_DESK_STATUS:
            return {...state,serviceDeskStatus:action.payload};
        case SET_MENU_STATUS:
            return {...state,menuStatus:action.payload};
        case SET_MENU_ROLE_INFO:
            return {...state,menuRoleInfo:action.payload};
        case SET_MENU_USER_PROFILE_INFO:
            return {...state,menuUserProfileInfo:action.payload};
        case SET_MENU_INFO:
            return {...state,menuInfo:action.payload};
        case MENU_UPDATE_STATUS:
            return {...state,menuUpdateStatus:action.payload};
        case SET_CREATION_EDIT_INFO:
            return {...state,creationEditInfo:action.payload};
        case SET_AWS_STATUS:
            return {...state,awsStatus:action.payload};
        case AWS_ACCOUNT_EDIT_INFO:
            return {...state,awsAccountEditInfo:action.payload};
        case AWS_DEV_OPS_EDIT_INFO:
            return {...state,awsDevOpsEditInfo:action.payload};
        default:
            return state;
    }
}

