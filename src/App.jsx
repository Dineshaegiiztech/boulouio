import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Forget from "./Authentication/Forget Password/Forget";
import Login from "./Authentication/LoginPage/Login";
import CreateAccount from "./Authentication/SignUp/Signup";
import FilterPage from "./Prospect Search/Prospect";
import Navbar from "./Navbar/Navbar";
import './App.css'
import UserProfile from "./My-Profile/Profile";
import SubscriptionPlans from "./Subscription/Subscription";
import ProtectedRoute from "./ProtectedRoute";
import Success from "./Subscription/success";
import Cancel from "./Subscription/cancel";
import SavedSearchList from "./saved search/SavedSearchList";
import TermsAndConditions from "./Policy/Terms";
import Privacy from "./Policy/Privacy";
import Website from "./website/website";
import Webprice from "./website/website-pricing/pricingweb";
import DemoForm from "./website/Demo form/demo";
import HealthcareIntelligence from "./website/healthcare page/HealthcareIntelligence";
import Energy from "./website/Energy/Energy";
import HiringManagers from "./website/Hiring Managers/HiringManagersGrid ";
import Companies from "./website/IT Companies/companies";
import Fleet from "./website/Fleet/Fleet";
import USdata from "./website/US Data/usdata";
import Appending from "./website/Data appending/Appending";
import Cleansing from "./website/Data cleansing/Cleansing";
import Custom from "./website/Custom-data/custom";
import Contact from "./website/contact-us/contact";
import Enrichment from "./website/Data Enrichment/Enrichment";
import B2bLeads from "./website/B2B Leads/B2bleads";
import Sales from "./website/infynd for sale/Sales";
import Marketing from "./website/infynd for marketing/marketing";
import Recruitment from "./website/infynd for recruitment/recruitment";
import GdprCompliancePolicy from "./website/GDPR/GDPR";
import DoNotSellMyInfo from "./website/Do not sell my info/sellinfo";
import Downloads from "./Download/download";
import Blogsmain from "./website/Blogs/main";
import ContentMetricsArticle from "./website/Blogs/Content Marketing Metrics to Track/content";
import Commonmistakes from "./website/Blogs/5 common mistakes/common";
import B2BLeadGeneration from "./website/Blogs/What is B2B Lead Generation/generation";
import AligningSalesMarketing from "./website/Blogs/Aligning Sales & Marketing/alignment";
import CustomBuiltData from "./website/Blogs/How Custom-Built Data Helps/custombuild";
import B2BMarketing2025 from "./website/Blogs/B2BMarketing/B2BMarketing";
import CookiePolicy from "./Policy/CookiePolicy";
import Upselling from "./website/services/upselling/upselling";
import Medical from "./website/services/medical/medical";
import Outsource from "./website/services/Outsource/Outsource";
import AboutUs from "./website/About-us/about";
import PlanTable from "./payment tracking/Credits";
import Creditsbuy from "./credit tracking/buy";
import VideoPreviews from "./website/video preview/VideoPreviews";
import RealUsersTable from "./website/sample data/sampledata";


const AppLayout = ({children }) => {
  const location = useLocation();

  return (
    <div>

      {location.pathname === "/prospect-search" && < Navbar />}
      {location.pathname === "/my-profile" && < Navbar />}
      {location.pathname === "/subscription" && < Navbar />}
      {location.pathname === "/saved-search" && < Navbar />}
      {location.pathname === "/downloads" && < Navbar />}
      {location.pathname === "/credits-tracking" && < Navbar />}
      {location.pathname === "/payments-tracking" && < Navbar />}
      {/* {location.pathname === "/terms-conditions" && < Navbar />} */}

      <div style={{ marginTop: location.pathname === "/prospect-search" }}>
        <Routes>
          <Route path="/" element={< Website />} />
          <Route path="/demo" element={< DemoForm />} />
          <Route path="/pricing" element={< Webprice />} />
          <Route path="/login" element={< Login />} />
          <Route path="/sign-up" element={<CreateAccount />} />
          <Route path="/forget-password" element={< Forget />} />
          <Route path="/prospect-search" element={<ProtectedRoute element={<FilterPage />} />} />
          <Route path="/my-profile" element={<ProtectedRoute element={<UserProfile />} />} />
          <Route path="/subscription" element={<ProtectedRoute element={<SubscriptionPlans />} />} />
          <Route path="/Success" element={<ProtectedRoute element={<Success />} />} />
          <Route path="/Cancel" element={<ProtectedRoute element={<Cancel />} />} />
          <Route path="/saved-search" element={<ProtectedRoute element={<SavedSearchList />} />} />
          <Route path="/terms-conditions" element={< TermsAndConditions />} />
          <Route path="/privacy-policy" element={< Privacy />} />
          <Route path="/health-care" element={< HealthcareIntelligence />} />
          <Route path="/energy" element={< Energy />} />
          <Route path="/HiringManagers" element={< HiringManagers />} />
          <Route path="/companies" element={< Companies />} />
          <Route path="/fleet" element={< Fleet />} />
          <Route path="/us-data" element={< USdata />} />
          <Route path="/appending" element={< Appending />} />
          <Route path="/cleansing" element={< Cleansing />} />
          <Route path="/custom-data" element={< Custom />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/enrichment" element={< Enrichment />} />
          <Route path="/B2bleads" element={< B2bLeads />} />
          <Route path="/sales" element={< Sales />} />
          <Route path="/marketing" element={< Marketing />} />
          <Route path="/recruitment" element={< Recruitment />} />
          <Route path="/gdpr" element={< GdprCompliancePolicy />} />
          <Route path="/do-not-sell-myinfo" element={< DoNotSellMyInfo />} />
          <Route path="/downloads" element={< Downloads />} />
          <Route path="/blogs" element={< Blogsmain />} />
          <Route path="/blogs/content-marketing-metrics-to-track" element={< ContentMetricsArticle />} />
          <Route path="/blogs/5-common-b2b-data-mistakes" element={< Commonmistakes />} />
          <Route path="/blogs/What-is-b2b-lead-generation" element={< B2BLeadGeneration />} />
          <Route path="/blogs/aligning-sales-marketing" element={< AligningSalesMarketing />} />
          <Route path="/blogs/how-custom-built-data-helps" element={< CustomBuiltData />} />
          <Route path="/blogs/b2b-marketing-in-2025" element={< B2BMarketing2025 />} />
          <Route path="/cookiepolicy" element={< CookiePolicy />} />
          <Route path="/about" element={< AboutUs />} />
          <Route path="/payments-tracking" element={< PlanTable />} />
          <Route path="/credits-tracking" element={< Creditsbuy />} />
          <Route path="/demo-videos" element={< VideoPreviews />} />
           <Route path="/sample-data" element={< RealUsersTable />} />
          {/* <Route path="/upselling" element={< Upselling />} />
          <Route path="/medical" element={< Medical />} />
          <Route path="/outsource" element={< Outsource />} /> */}
          {/* <Route path="/prospect-search" element={< FilterPage />} /> */}
          {/* <Route path="/my-profile" element={<UserProfile/>} /> */}
          {/* <Route path="/subscription" element={<SubscriptionPlans/>} /> */}
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
