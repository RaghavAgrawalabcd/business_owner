const initialState = "Business Owner";

const changeNumber = (state=initialState,action) => {
    switch ((action.type)) {
        case "BusinessOwner": return state="Located in Us";
        case "NotBusinessOwner": return state = "Login with facebook";
        case "LocatedInUs": return state = "Large Corporation";
        case "NotLocatedInUs": return state = "Access Denied Error";
        case "LargeCorporation": return state = "Interested in taking Survey";
        case "NotLargeCorporation": return state = "Contracted With Large Corporation";
        case "UserMustContactLargeCorp": return state = "User Must Contact Large Corporation";
        case "SmallCorpSignupForm": return state = "Small Corp Sign-Up Form";
        case "InterestedSurvey": return state = "Large Corporation Signup form";
        case "FacebookLoginWidget": return state = "Facebook Login Widget";
        case "NotFacebookLoginWidget": return state = "Email Signup Form";
        case "Backend": return state = "Backend";
        default: return state;  
    }
}
export default changeNumber;