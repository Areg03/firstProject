import { connect } from "react-redux"
import { addTextAC, updateNewTextBodyAC } from "../../../redux/aboutMeReducer"
import AboutMe from "./AboutMe"

let mapStateToProps = (state) => {
    return {
        newText: state.aboutMePage.newText,
        newTextBody: state.aboutMePage.newTextBody,
        headers: state.aboutMePage.header,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addText: () => {
            dispatch(addTextAC())
        },
        updateNewTextBody: (text) => {
            dispatch(updateNewTextBodyAC(text))
        },
    }
}

const AboutMeContainer = connect(mapStateToProps, mapDispatchToProps)(AboutMe);

export default AboutMeContainer;

