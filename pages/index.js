import Layout from "../components/Layout";
import Image from "next/image"

export default function Home() {
  return (
    <Layout title="Start">
      <h2>Responsive Bilder</h2>
      <img
        className="logo"
        src="/img/logo@1x.jpg"
        srcSet="/img/logo@1x.jpg 1x,/img/logo@2x.jpg 2x"
        alt="Logo"
        width="32"
        height="10"
        loading="lazy"
      />
      <img
        className="image"
        src="https://picsum.photos/id/1011/900/450"
        srcSet="https://picsum.photos/id/1011/450/225 450w, https://picsum.photos/id/1011/900/450 900w, https://picsum.photos/id/1011/1350/675 1350w, https://picsum.photos/id/1011/1800/900 1800w"
        sizes="(max-width: 52rem) 90vw, 50rem"
        alt=""
        loading="lazy"
        width="2"
        height="1"
      />
      <picture>
        <source media="(max-width: 30rem) and (orientation: portrait)"
        srcSet="/img/header-image-portrait.jpg"/>
        <source media="(max-width: 40rem) and (orientation: portrait)"
        srcSet="/img/header-image-square.jpg"/>
      <img
        className="image" src="/img/header-image-landscape@1000.jpg"
        srcSet="/img/header-image-landscape@1000.jpg 1000w, /img/header-image-landscape@1500.jpg 1500w,/img/header-image-landscape@2000.jpg 2000w"
        sizes="(max-width: 52rem) 90vw, 50rem"
        loading="lazy"
        alt=""
        />
        </picture>
        <picture>
          <source srcSet="/img/herbst.webp"  type="image/webp"/>
        <img
        className="image" 
        src="/img/herbst_comp.jpg"
        alt=""
        loading="lazy"
        width="4" height="3"
        />
        </picture>
        <Image src="/img/hong-kong.jpg"
        alt="Hong Kong"
        sizes="(max-width: 52rem) 90vw, 50rem"
        layout="responsive"
        width={5184}
        height={3456}
        />
    </Layout>
  );
}
