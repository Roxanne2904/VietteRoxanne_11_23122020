//styled
import { StyledBanner } from '../../Styled/Pages/Home/index'
import { StyledBannerImg } from '../../Styled/Pages/Home/index'
import { StyleBlackLayer } from '../../Styled/Pages/Home/index'
import { StyledBannerTxt } from '../../Styled/Pages/Home/index'

function Banner(props) {
  const { img } = props
  const isBanner = img.split('banner')[1]
  return (
    <StyledBanner>
      <StyledBannerImg src={img} alt="la bannière" />
      <StyleBlackLayer></StyleBlackLayer>
      {isBanner !== '_about.png' ? (
        <StyledBannerTxt>Chez vous, partout et ailleurs</StyledBannerTxt>
      ) : null}
    </StyledBanner>
  )
}

export default Banner
