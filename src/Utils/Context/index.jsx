import { createContext } from 'react'
import { useState, useEffect } from 'react'
//import React, { Component } from 'react'

export const DatasContext = createContext()

// export class DatasProvider extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { Datas: null }
//   }

//   componentDidMount() {
//     fetch('http://localhost:3000/logements.json')
//       .then((response) => response.json())
//       .then((jsonResponse) => {
//         return this.setState({ Datas: jsonResponse })
//       })
//       .catch((error) => console.log(error))
//   }

//   render() {
//     console.log(this.state.Datas)
//     return (
//       <DatasContext.Provider value={this.state.Datas}>
//         {this.props.children}
//       </DatasContext.Provider>
//     )
//   }
// }

export function DatasProvider({ children }) {
  const [datas, setDatas] = useState(null)

  useEffect(() => {
    fetch('logements.json').then((response) =>
      response
        .json()
        .then((datas) => setDatas(datas))
        .catch((error) => console.log(error))
    )
  }, [])

  return (
    <DatasContext.Provider value={{ datas }}>{children}</DatasContext.Provider>
  )
}
