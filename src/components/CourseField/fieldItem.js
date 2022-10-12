/**
 *  @author 前端组
 *  @Date 2022-10-09 22:04
 *  @description
 *  @params
 *  @return
 * */
import React, {Component} from "react"

export default class FieldItem extends Component {
  render() {
    const {item, curField, changeCourseField} = this.props
    return (
      <span
        className={['field-item', item.field === curField ? "current-field" : ""].join(' ')}
        onClick={() => changeCourseField(item.field)}
      >{item.field_name}</span>
    )
  }
}
