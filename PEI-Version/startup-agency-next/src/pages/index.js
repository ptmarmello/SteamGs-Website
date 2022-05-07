import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import OurTeam from 'sections/our-team';
import OtherServices from 'sections/other-services';
import WhyUs from 'sections/why-us';
import SubscribeUs from 'sections/subscribe-us';
import WorkFlow from 'sections/workflow';
import Data from '../data/data.json';

export default function IndexPage() {
  console.log(Data.homepage.SEO.title);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title={Data.homepage.SEO.title}
          description={Data.homepage.SEO.description}
        />
        <Banner />
        {/* <AgencyBanner /> tá muito bom, mas precisa melhorar a imagem de fundo, não tá 100% da tela */}

        <Services />
        <WorkFlow />
        {/* <Testimonials /> */}
        <OurTeam />
                                                    {/* <OtherServices /> */}
        <WhyUs />
        <SubscribeUs />
        {/* <TestimonialCard /> aqui tá dando ruim */}
        {/* <Package /> Tá funcionando, mas tá meio zoado. Dá pra mudar o flex */}
        {/* <TeamSection /> Top, só precisa ajustar os textos de Header (estão sem espaço) */}
        {/* <Pricing /> Toptop, só precisa tirar um pouco o padding-top */}
        {/* <WorkFlow /> Simplesmente o melhor até agora */}
      </Layout>
    </ThemeProvider>
  );
}
