/**
 *  @author 前端组
 *  @Date 2022-10-09 21:52
 *  @description
 *  @params
 *  @return
 * */
import React, {Component} from "react"

export default class CourseList extends Component {
  state = {
    fieldList: [
      {
        field: "0",
        course_name: "css css css css css css css css"
      },
      {
        field: "1",
        course_name: "js js js js js js js js"
      },
      {
        field: "2",
        course_name: "vue vue vue vue vue vue vue vue"
      },
      {
        field: "3",
        course_name: "react react react react react react react react"
      }
    ]
  }

  filterData(data, field) {
    if (field === "-1") {
      return data
    } else {
      return data.filter(v => v.field === field)
    }
  }

  render() {
    const {fieldList} = this.state,
      {curField} = this.props
    return (
      <div>
        {
          this.filterData(fieldList, curField).map((item, index) => {
            return (
              <p key={index}>{item.course_name}</p>
            )
          })
        }
      </div>
    )
  }
}
