import {useState} from "react";
import "./AddQuestionPopUp.css";
import AddQuestionDataTable from "../../common/AddQuestionDataTable";
function AddQuestionPopUp(props){
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                </span>
                <AddQuestionDataTable onSubmit={props.onSubmit}setPopUpActive={props.setPopUpActive}service={props.service}/>
            </div>
        </div>
    );
}
export default AddQuestionPopUp;