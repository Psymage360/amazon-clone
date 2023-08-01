import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
        {/* <h1>Home Component</h1> */}
        <img className="home__image" src="https://storage.googleapis.com/freesat-production-assets/styles/teaser_hero_image_1440x500_/cloud-storage/news/headliners/amazon-prime-video-banner.jpg?itok=zUbCf_wT" alt="amazon baner" />
        
        <div className="home__row">
        <Product id='12321341' title='Ikigai : Japanese Art of staying Young.. While growing Old' price={169} image='https://m.media-amazon.com/images/I/71B-7twlcFL._AC_UF1000,1000_QL80_.jpg' rating={4} />
        <Product id='12321341' title='Ikigai : Japanese Art of staying Young.. While growing Old' price={169} image='https://m.media-amazon.com/images/I/71B-7twlcFL._AC_UF1000,1000_QL80_.jpg' rating={4} />
        
        </div>
        <div className="home__row">
        <Product id='12321341' title='Ikigai : Japanese Art of staying Young.. While growing Old' price={169} image='https://m.media-amazon.com/images/I/71B-7twlcFL._AC_UF1000,1000_QL80_.jpg' rating={4} />
        <Product id='12321341' title='Ikigai : Japanese Art of staying Young.. While growing Old' price={169} image='https://m.media-amazon.com/images/I/71B-7twlcFL._AC_UF1000,1000_QL80_.jpg' rating={4} />
        <Product id='12321341' title='Ikigai : Japanese Art of staying Young.. While growing Old' price={169} image='https://m.media-amazon.com/images/I/71B-7twlcFL._AC_UF1000,1000_QL80_.jpg' rating={4} />
        </div>
        <div className="home__row">
        <Product id='12321341' title='Ikigai : Japanese Art of staying Young.. While growing Old' price={169} image='https://m.media-amazon.com/images/I/71B-7twlcFL._AC_UF1000,1000_QL80_.jpg' rating={4} />
        <Product id='12321341' title='Ikigai : Japanese Art of staying Young.. While growing Old' price={169} image='https://m.media-amazon.com/images/I/71B-7twlcFL._AC_UF1000,1000_QL80_.jpg' rating={4} />
        <Product id='12321341' title='Ikigai : Japanese Art of staying Young.. While growing Old' price={169} image='https://m.media-amazon.com/images/I/71B-7twlcFL._AC_UF1000,1000_QL80_.jpg' rating={4} />
        <Product id='12321341' title='Ikigai : Japanese Art of staying Young.. While growing Old' price={169} image='https://m.media-amazon.com/images/I/71B-7twlcFL._AC_UF1000,1000_QL80_.jpg' rating={4} />
        </div>
    </div>

  )
}

export default Home