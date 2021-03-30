import Footer from "./Footer";
import Header from "./Header";

import Head from "next/head";

export default function Layout({children,title}){

return(
    <div className="site-wrapper">
    <Head>
        <title>{title || "NextJS"}</title>
    </Head>
    <Header />
    <main className="site-main inner-width">
    {title && <h1>{title}</h1>}
    {children}
    </main>
    <Footer />
    
    </div>
    )
}