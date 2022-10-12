/**
 *  @author 前端组
 *  @Date 2022-10-09 21:36
 *  @description
 *  @params
 *  @return
 * */

import React, {Component} from "react"
import {connect} from "react-redux"
import CourseField from "./../components/CourseField"
import CourseList from "./../components/CourseList"
import {changeCourseField} from "../store/action/courseTabList"

class IndexPage extends Component {
  render() {
    const {curField, changeCourseField} = this.props
    return (
      <div>
        <CourseField
          curField={curField}
          changeCourseField={changeCourseField}
        />
        <CourseList curField={curField}/>
      </div>
    )
  }
}

export default connect(
  function mapStateToProps(state) {
    return {
      curField: state.courseTabList.curField
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      changeCourseField: (field) => dispatch(changeCourseField(field))
    }
  }
)(IndexPage)
