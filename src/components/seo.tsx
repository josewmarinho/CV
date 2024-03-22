import Head from 'next/head';

export interface SEOComponentProps {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
  url?: string;
  site_name?: string;
}

const SEOComponent = ({
  title = 'Uma Internet. Um grupo. Infinitas possibilidades',
  description = 'Desde o nosso primeiro projeto a OIG foi digital. Somos especialistas em encontrar modelos de negócios lucrativos e eficazes que tiram o melhor do potencial de monetização da internet e das Redes Sociais.',
  image = 'https://oneinternetgroup.com/img/logo_with_name.d745ace0.svg',
  keywords = 'Internet, grupo, google ads, facebok ads, monetização, jogos online, bolsa, investimento, capital, mundo',
  url = 'https://oneinternetgroup.com/',
  site_name = 'OIG - One Internet Group',
}: SEOComponentProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="desc" />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site_name} />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export { SEOComponent };
