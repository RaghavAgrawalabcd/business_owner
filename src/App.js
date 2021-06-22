import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { BUSINESS, NOTBUSINESS, LOCATEDINUS, NOTLOCATEDINUS, LARGECORPORATION, NOTLARGECORPORATION, FACEBOOKLOGINWIDGET, NOTFACEBOOKLOGINWIDGET,INTERESTEDSURVEY,SMALLCORPSIGNUPFORM,USERMUSTCONTACTLARGECORP, BACKEND} from "./actions/index"
function App() {
  const state = useSelector(state => state.changeNumber);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      {(() => {
        console.log(state)
        if (state === "Business Owner") {
          return (
            <div>
              <h3>{state}</h3>
              <div className="Questions">
              <a onClick={()=> dispatch(NOTBUSINESS())}><h4>NO</h4></a>
              <a onClick={()=> dispatch(BUSINESS())}><h4>YES</h4></a>
            </div>
            </div>
          )
        } else if (state === "Located in Us") {
          return (
            <div>
                <h3>{state}</h3>
              <div className="Questions">
              <a onClick={()=> dispatch(NOTLOCATEDINUS())}><h4>NO</h4></a>
              <a onClick={()=> dispatch(LOCATEDINUS())}><h4>YES</h4></a>
            </div>
            </div>
          )
        }
          else if (state === "Login with facebook") {
          return (
            <div>
                <h3>{state}</h3>
              <div className="Questions">
              <a onClick={()=> dispatch(NOTFACEBOOKLOGINWIDGET())}><h4>NO</h4></a>
              <a onClick={()=> dispatch(FACEBOOKLOGINWIDGET())}><h4>YES</h4></a>
            </div>
            </div>
          )
        }
          else if (state === "Large Corporation") {
          return (
            <div>
                <h3>{state}</h3>
              <div className="Questions">
              <a onClick={()=> dispatch(NOTLARGECORPORATION())}><h4>NO</h4></a>
              <a onClick={()=> dispatch(LARGECORPORATION())}><h4>YES</h4></a>
            </div>
            </div>
          )
        }
          else if (state === "Contracted With Large Corporation") {
          return (
            <div>
                <h3>{state}</h3>
              <div className="Questions">
              <a onClick={()=> dispatch(SMALLCORPSIGNUPFORM())}><h4>NO</h4></a>
              <a onClick={()=> dispatch(USERMUSTCONTACTLARGECORP())}><h4>YES</h4></a>
            </div>
            </div>
          )
        }
          else if (state === "Facebook Login Widget") {
          return (
            <div>
              <h3>{state}</h3>
              <div className="Questions">
              <a onClick={()=> dispatch(BACKEND())}><h4>Then</h4></a>
            </div>
            </div>
          )
        }
          else if (state === "Email Signup Form") {
          return (
            <div>
              <h3>{state}</h3>
              <div className="Questions">
              <a onClick={()=> dispatch(BACKEND())}><h4>Then</h4></a>
            </div>
            </div>
          )
        }
           else if (state === "Backend") {
          return (
            <div>
              <h3>{state}</h3>
              <div className="Questions">
              <a onClick={()=> dispatch(LOCATEDINUS())}><h4>YES</h4></a>
            </div>
            </div>
          )
        }
         else if (state === "Interested in taking Survey") {
          return (
            <div>
                <h3>{state}</h3>
              <div className="Questions">
              <a onClick={()=> dispatch(INTERESTEDSURVEY())}><h4>NO</h4></a>
              <a onClick={()=> dispatch(INTERESTEDSURVEY())}><h4>YES</h4></a>
            </div>
            </div>
          )
        }
           else if (state === "Large Corporation Signup form") {
          return (
            <div>
                <h3>{state}</h3>
            </div>
          )
        }
           else if (state === "Located in Us") {
          return (
            <div>
                <h3>{state}</h3>
              <div className="Questions">
              <a onClick={()=> dispatch(NOTLOCATEDINUS())}><h4>NO</h4></a>
              <a onClick={()=> dispatch(LOCATEDINUS())}><h4>YES</h4></a>
            </div>
            </div>
          )
        }
        else if (state === "User Must Contact Large Corporation") {
          return (
            <div>
                <h3>{state}</h3>
            </div>
          )
        }
         else if (state === "Small Corp Sign-Up Form") {
          return (
            <div>
                <h3>{state}</h3>
            </div>
          )
        }
        else {
          return (
            <div>catch all</div>
          )
        }
      })()}
    </div>
  );
}
export default App;
