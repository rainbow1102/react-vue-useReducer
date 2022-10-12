/**
 *  @author 前端组
 *  @Date 2022-10-09 22:43
 *  @description
 *  @params
 *  @return
 * */
const CHANGE_COURSE_FIELD = "CHANGE_COURSE_FIELD"

export const changeCourseField = (field) => {
  return {
    type: CHANGE_COURSE_FIELD,
    field
  }
}

/*function changeCourseField(field) {
  return {
    type: CHANGE_COURSE_FIELD,
    field
  }
}

export {
  changeCourseField
}*/
