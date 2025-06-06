import HeaderSettings from "./dashboardComponents/HeaderSettings";
import Section1Settings from "./dashboardComponents/Section1Settings";
import Section3settings from "./dashboardComponents/Section3settings";
import Section4Settings from "./dashboardComponents/Section4Settings";
import Section5Settings from './dashboardComponents/Section5Settings';
import FooterSettings from './dashboardComponents/FooterSettings';

const Dashboard = () => {
    return (
        <>
        <HeaderSettings />
        <main>
          <Section1Settings />
          <Section3settings />
          <Section4Settings />
          <Section5Settings />
        </main>
        <FooterSettings />
      </>
    )
}

export default Dashboard;