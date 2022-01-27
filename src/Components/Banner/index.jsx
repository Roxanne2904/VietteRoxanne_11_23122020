//styled
import { StyledBanner } from '../../Styled/Components/Banner/index'
import { StyledBannerImg } from '../../Styled/Components/Banner/index'
import { StyleBlackLayer } from '../../Styled/Components/Banner/index'
import { StyledBannerTxt } from '../../Styled/Components/Banner/index'
import { StyledBannertxt01 } from '../../Styled/Components/Banner/index'

function Banner(props) {
  const { img } = props
  const isBanner = img.split('banner')[1]
  return (
    <StyledBanner>
      <StyledBannerImg src={img} alt="la bannière" />
      <StyleBlackLayer></StyleBlackLayer>
      {isBanner !== '_about.png' ? (
        <StyledBannerTxt>
          <StyledBannertxt01>Chez vous, </StyledBannertxt01>
          <span>partout et ailleurs</span>
        </StyledBannerTxt>
      ) : null}
    </StyledBanner>
  )
}

export default Banner
