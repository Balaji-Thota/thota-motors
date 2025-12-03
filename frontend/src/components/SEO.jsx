import { Helmet } from 'react-helmet-async';

function SEO({ 
  title = "Thota Motors - Trusted Auto Service Center in Nellore", 
  description = "Professional car service and repair center in Nellore. Expert mechanics, genuine parts, oil change, brake service, engine diagnostics, and more. 15+ years of experience.",
  keywords = "car service nellore, auto repair nellore, car maintenance, TATA motors service, brake service, engine repair, oil change, car wash nellore"
}) {
  const siteUrl = "https://thota-motors.netlify.app";
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Thota Motors" />
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Nellore" />
      <meta name="geo.position" content="14.4053971;79.9499416" />
      <meta name="ICBM" content="14.4053971, 79.9499416" />

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
}

export default SEO;