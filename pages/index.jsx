import RestaurantLandingPage from "../src/restaurant";
import ForgotPasswordPage from "../src/restaurant/features/AuthPages/ForgotPassword";
import NewPasswordPage from "../src/restaurant/features/AuthPages/NewPassword";
import SubHeader from "../src/consumer/components/subheader/subheader.component";
import HorizontalTable from "../src/consumer/components/horizontalTable/horizontalTable.component";
import TimeStamp from "../src/consumer/components/timeStamp/timeStamp.component";
import Footer from "../src/consumer/components/footer/footer.component";
import EditableProfile from "../src/consumer/components/editableProfile/editableProfile.component";
import DeliveryCardProgress from "../src/consumer/components/deliveryProgressCard/deliveryProgess.component";
import DeliveryManagementCard from "../src/consumer/components/deliveryManagementCard/deliveryManagement.component";
import Modal from "../src/consumer/components/modal/modal.component";
import NewsLetterForm from "../src/consumer/components/newsLetterForm/newsLetterForm.component";
import Home from "../src/consumer/features/Home/home.page"
import HomeBeforeLogin from "../src/consumer/features/home-before-login/home-before-login";
import Pagination from "../src/lib/components/Paginator";
import CustomTable from "../src/lib/components/Table/index";
const Index = () => (
  <div>
    {/* <HorizontalTable
      nameOrCardNumber="Card Number"
      nameOrNumber={false}
      cardNumber="0000123456789"
      emailOrcardHolder="Card Holder Name"
      emailOrHolder="Matthew Cabret"
      address={false}
    /> */}
    {/* <RestaurantLandingPage /> */}
    <HomeBeforeLogin />
  </div>
);

export default Index;
