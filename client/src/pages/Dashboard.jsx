import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import DashSidebar from "../components/DashSideBar.jsx";
import DashProfile from "../components/DashProfile.jsx";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search])
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* sideBar */}
      <div className="md:w-56">
        <DashSidebar />
      </div>
      {tab === 'profile' && <DashProfile />}
    </div>
    
  )
}
