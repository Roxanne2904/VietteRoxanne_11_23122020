//Context
import { DatasContext } from '../../Utils/Context/index'
import { useContext } from 'react'
//Components
import Cards from '../../Components/Cards'
import Banner from '../../Components/Banner'
import Error from '../Error'

function Home() {
  const { datas } = useContext(DatasContext)
  return datas !== null ? (
    <main>
      <Banner page="home" />
      <Cards />
    </main>
  ) : (
    <Error />
  )

  // return (
  //   <DatasContext.Consumer>
  //     {(datas) => console.log(datas.datas)}
  //     {/* j'accède aux données */}
  //   </DatasContext.Consumer>
  // )
}

export default Home
