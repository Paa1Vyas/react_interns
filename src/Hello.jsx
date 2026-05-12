import React from 'react'

export default function Hello(name_data) {
    console.log(name_data.name);
    let department = name_data.dept;
    let name = name_data.name;
  return (

    <div>Hello {name}, {department}</div>
  )
}
