//Context
// import { DatasContext } from '../../Utils/Context/index'
// import { useContext } from 'react'
//Components
import Cards from '../../Components/Cards'
import Banner from '../../Components/Banner'

function Home() {
  return (
    <main>
      <Banner page="home" />
      <Cards />
    </main>

    // <DatasContext.Consumer>
    //   {(datas) => (
    //     <div>
    //       <StyledBanner>
    //         <StyledBannerImg
    //           src={Banniere}
    //           alt="la bannière"
    //           className="banner_img"
    //         />
    //         <StyleBlackLayer className="banner_blackLayer"></StyleBlackLayer>
    //         <StyledBannerTxt className="banner_txt">
    //           Chez vous, partout et ailleurs
    //         </StyledBannerTxt>
    //       </StyledBanner>
    //       <StyledRentalCover>
    //         {datas !== null &&
    //           datas.map((data) => {
    //             return (
    //               <StyledRentals key={`${data.id}-${data.title}`}>
    //                 <StyledRentalsTitle>{data.title}</StyledRentalsTitle>
    //                 <StyledRentalsGradient></StyledRentalsGradient>
    //                 <StyledRentalsImgContain>
    //                   <StyledRentalsImg
    //                     src={`${data.pictures[0]}`}
    //                     alt={`${data.title}`}
    //                   />
    //                 </StyledRentalsImgContain>
    //               </StyledRentals>
    //             )
    //           })}
    //       </StyledRentalCover>
    //     </div>
    //   )}
    // </DatasContext.Consumer>
  )
}

export default Home
