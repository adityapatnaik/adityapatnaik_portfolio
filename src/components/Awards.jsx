import { Layout, Title, Tagline, Footer } from "../StyledComponents/Components";
import Globals from "../Globals";
const Awards = () => {
  return (
    <Layout>
      <Title>{Globals.position}</Title>
      <Tagline>{Globals.roleAtOrg}</Tagline>
      {/* <Footer>{Globals.menu["work"]}</Footer> */}
    </Layout>
  );
};

export default Awards;
