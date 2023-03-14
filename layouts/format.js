import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head"

export default function format(props) {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <title>Los Amigos Club</title>
                <meta name="description" content="Club de idioma Español e ingles ubicado en Asia Central - Kirguistan" />
                <meta name="keywords" content="palabra clave 1, palabra clave 2, palabra clave 3" />
                <meta name="author" content="Rahamsis CG" />
                <meta name="copyright" content="Propietario del copyright" />
                <meta name="robots" content="index" />
                <meta property="og:description" content="Club de idioma Español e ingles ubicado en Asia Central - Kirguistan" />
                <link  rel="icon"   href="faviconLosAmigos.ico" type="image/ico" />
            </Head>

            <Header type={props.type}></Header>
            <main>
                {props.children}
            </main>
            <Footer></Footer>

        </>
    )
}