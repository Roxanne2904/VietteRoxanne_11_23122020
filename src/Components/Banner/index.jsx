//styled
// import { StyledBanner } from '../../Styled/Components/Banner/index'
// import { StyledBannerImg } from '../../Styled/Components/Banner/index'
// import { StyledBlackLayer } from '../../Styled/Components/Banner/index'
// import { StyledBannerTxt } from '../../Styled/Components/Banner/index'
// import { StyledBannertxt01 } from '../../Styled/Components/Banner/index'
import banner from '../../assets/banner.png'
import bannerAbout from '../../assets/banner_about.png'
import smallerBannerAbout from '../../assets/smaller-banner_about.png'

//propTypes
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

function Banner(props) {
  const { page } = props
  let img = null
  const [width, setWindowWidth] = useState(window.innerWidth)

  if (page === 'about') {
    img = width <= 1080 ? smallerBannerAbout : bannerAbout
  } else {
    img = banner
  }

  useEffect(() => {
    //Handle the update window dimension
    const updateDimensions = () => {
      const currentWidth = window.innerWidth
      setWindowWidth(currentWidth)
    }

    if (page === 'about') {
      window.addEventListener('resize', updateDimensions)

      return () => window.removeEventListener('resize', updateDimensions)
    }
  }, [page, width])

  return page !== 'about' ? (
    <figure className="banner">
      <span className="banner__layer"></span>
      <img className="banner__img" src={img} alt="la bannière" />
      <figcaption className="banner__title">
        <span className="banner__title__main">Chez vous, </span>
        <span>partout et ailleurs</span>
      </figcaption>
    </figure>
  ) : (
    <figure className="banner banner--about" about="true">
      <span className="banner__layer" about="true"></span>
      <img
        className="banner__img banner__img--about"
        about="true"
        src={img}
        alt="la bannière"
      />
    </figure>
  )
}

Banner.propTypes = {
  img: PropTypes.string,
}
export default Banner
