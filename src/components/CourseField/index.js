/**
 *  @author 前端组
 *  @Date 2022-10-09 21:52
 *  @description
 *  @params
 *  @return
 * */

import React, {Component} from "react"
import FieldItem from "./fieldItem"
import "./index.css"

export default class CourseField extends Component {
  state = {
    fieldArr: [
      {
        field: "0",
        field_name: "css"
      },
      {
        field: "1",
        field_name: "js"
      },
      {
        field: "2",
        field_name: "vue"
      },
      {
        field: "3",
        field_name: "react"
      },
    ]
  }

  render() {
    const {fieldArr} = this.state,
      {curField, changeCourseField} = this.props
    return (
      <div className="field-box">
        <FieldItem
          key={"-1"}
          item={{field: "-1", field_name: "全部"}}
          curField={curField}
          changeCourseField={() => changeCourseField("-1")}
        />
        {
          fieldArr.map((v, index) => {
            return (
              <FieldItem
                key={index}
                item={v}
                curField={curField}
                changeCourseField={() => changeCourseField(v.field)}
              />
            )
          })
        }
      </div>
    )
  }
}
