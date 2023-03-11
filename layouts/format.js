import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head"

export default function format(props) {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <title>Los Amigos Club</title>
                <meta name="description" content="Los meta tags de HTML codifican información para ser interpretada por el navegador y los buscadores. ¿Sabes cuáles son imprescindibles?" />
                <meta name="keywords" content="palabra clave 1, palabra clave 2, palabra clave 3" />
                <meta name="author" content="Nombre del autor" />
                <meta name="copyright" content="Propietario del copyright" />
                <meta name="robots" content="index" />
                <meta property="og:description" content="Los meta tags de HTML codifican información para ser interpretada por el navegador y los buscadores. ¿Sabes cuáles son imprescindibles?" />
            </Head>

            <Header type={props.type}></Header>
            <main>
                {props.children}
            </main>
            <Footer></Footer>

        </>
    )
}