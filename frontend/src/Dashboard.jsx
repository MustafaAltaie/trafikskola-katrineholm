import Header from "./components/Header";
import Section3settings from "./dashboardComponents/Section3settings";
import Section5Settings from './dashboardComponents/Section5Settings';

const Dashboard = () => {
    return (
        <>
        <Header />
        <main>
          <Section3settings />
          <Section5Settings />
        </main>
      </>
    )
}

export default Dashboard;