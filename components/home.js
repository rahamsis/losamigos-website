import Format from '../layouts/format';
import Banner from './banner';
import PostBanner from './postBanner';
import BannerSecundario from './bannerSecundario';
import PostBannerSecundario from './postBannerSecundario';
import Profesores from './profesores';
import Precios from './precios';
import Contactos from './contactos';
import Resenas from './resenas';
import Material from './material';

function Home() {
  return (
    <Format>
      <Banner />
      <PostBanner />
      <BannerSecundario />
      <PostBannerSecundario />
      <Profesores />
      <Precios />
      <Contactos />
      <Resenas />
      <Material/>
    </Format>
  )
}

export default Home;