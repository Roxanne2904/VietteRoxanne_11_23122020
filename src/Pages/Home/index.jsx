//---Styled
import { StyledBanner } from '../../Styled/Pages/Home/index'
import { StyledBannerImg } from '../../Styled/Pages/Home/index'
import { StyleBlackLayer } from '../../Styled/Pages/Home/index'
import { StyledBannerTxt } from '../../Styled/Pages/Home/index'
//Context
import { DatasContext } from '../../Utils/Context/index'
import { useContext } from 'react'
//
import Img from '../../assets/banner.png'
import Cards from '../../Components/Cards'

function Home() {
  const { datas } = useContext(DatasContext)
  console.log(datas)

  return (
    <main>
      <StyledBanner>
        <StyledBannerImg src={Img} alt="la bannière" />
        <StyleBlackLayer></StyleBlackLayer>
        <StyledBannerTxt>Chez vous, partout et ailleurs</StyledBannerTxt>
      </StyledBanner>
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
