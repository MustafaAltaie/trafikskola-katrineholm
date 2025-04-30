import Header from "./components/Header";
import Section3settings from "./dashboardComponents/Section3settings";
import Section5Settings from './dashboardComponents/Section5Settings';
import FooterSettings from './dashboardComponents/FooterSettings';

const Dashboard = () => {
    return (
        <>
        <Header />
        <main>
          <Section3settings />
          <Section5Settings />
        </main>
        <FooterSettings />
      </>
    )
}

export default Dashboard;