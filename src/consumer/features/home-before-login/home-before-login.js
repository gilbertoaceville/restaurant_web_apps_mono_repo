import React, { useReducer, useRef } from "react";
import Image from "next/image";
import { Header1 } from "../../components/Header/header.component";
import { Button } from "../../components/Button/button.component";
import Pizza from "../../assets/pizza.png";
import { GiEntryDoor, GiFoodTruck } from "react-icons/gi";
import {
  FaPeopleCarry,
  FaQuoteLeft,
  FaQuoteRight,
  FaTimes,
} from "react-icons/fa";
import { BsImageFill } from "react-icons/bs";
import Illustration from "../../assets/food1.png";
import {
  Container,
  HeroSection,
  MenuSection,
  ModalCard,
  OutdoorQuotationSection,
  ServicesOfferedSection,
  TestimonialSection,
} from "./home-before-login.styles";
import Footer from "../../components/footer/footer.component";

const services_offered = [
  {
    icon: <GiEntryDoor />,
    title: "Home Delivery",
    text: "For the convenience of our ever busy customers, we offer an Office/Home delivery service with a quick response time; we do not keep our customers waiting for long.",
  },
  {
    icon: <GiFoodTruck />,
    title: "Catering Services",
    text: "We offer outdoor catering services to the delight of our Clients and we brighten up their occasion with our unique event management services.",
  },
  {
    icon: <FaPeopleCarry />,
    title: "Eat Ins",
    text: "We have imbibed a service culture that offers every customer the chance to conveniently site and order their meals from fresh and hygienically displayed array of products.",
  },
];

const HomeBeforeLogin = () => {
  const topElem = useRef();

  const addModal = () => {
    topElem.current.classList.add("top-element");
    document.documentElement.style.position = "fixed";
  };

  const removeModal = () => {
    topElem.current.classList.remove("top-element");
    document.documentElement.style.position = "unset";
  };

  return (
    <Container>
      <div ref={topElem}>
        <div className="overlay"></div>
        <Header1 addModal={addModal} />
        <div className="modal-container">
          <ModalCard>
            <header className="modal-order-header">
              <h1>Start Order</h1>
              <FaTimes size={20} onClick={removeModal} />
            </header>
            <p className="modal-order-text">
              HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?
            </p>
            <div className="modal-btn">
              <Button
                background="transparent"
                border={"2px solid #f38b1c"}
                text={"PICK UP"}
                btnColor={"#f38b1c"}
              />
              <Button
                background="transparent"
                border={"2px solid #f38b1c"}
                text={"DELIVERY"}
                btnColor={"#f38b1c"}
              />
            </div>
          </ModalCard>
        </div>
        <HeroSection>
          <div className="hero-section-wrap">
            <section className="hero-section-left">
              <header className="header-section">
                <h1 className="hero-section-title">Crunchies Pizza</h1>
              </header>
              <p className="hero-section-text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no
              </p>
              <div className="hero-btn">
                <Button
                  background="transparent"
                  border={"1.5px solid #f38b1c"}
                  text={"View Menu"}
                  btnColor={"#f38b1c"}
                />
              </div>
            </section>
            <section className="hero-section-right">
              <div className="hero-img-container">
                <Image
                  src={Pizza}
                  alt="pizza picture"
                  height="300px"
                  width="300px"
                  objectFit="cover"
                />
              </div>
            </section>
          </div>
        </HeroSection>
        <ServicesOfferedSection>
          <section className="services-section">
            <div className="services-section-left">
              <header>
                <h1>Services you can't miss to have</h1>
              </header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="services-section-right">
              <Image src={Illustration} alt="illustration" objectFit="cover" />
            </div>
          </section>
          <section className="services-section-list-wrap">
            <section className="services-section-list">
              {services_offered?.map(({ icon, title, text }) => (
                <div key={title} className="services-method">
                  <div className="services-method-icon">{icon}</div>
                  <header>
                    <h1>{title}</h1>
                  </header>
                  <p>{text}</p>
                </div>
              ))}
            </section>
            <Button
              background="transparent"
              border={"1.5px solid #f38b1c"}
              text={"See More"}
              btnColor={"#f38b1c"}
              padding={".5em 1.8em"}
              fontSize={"15px"}
            />
          </section>
        </ServicesOfferedSection>
        <MenuSection>
          <header className="header-menu">
            <h1>Crunchies Menu</h1>
          </header>
          <section className="menu-items-list">
            {[...Array(6)]?.map((_) => (
              <div
                style={{
                  backgroundImage: `url(${Illustration.src})`,
                }}
                className="menu-items"
              >
                <div className="menu-price">$59</div>
              </div>
            ))}
          </section>
          <div className="pointer-dots-container">
            {[...Array(4)].map((_) => (
              <div className="pointer-dots"></div>
            ))}
          </div>
          <div className="menu-btn">
            <Button
              background="transparent"
              border={"2px solid #f38b1c"}
              text={"View Menu"}
              btnColor={"#f38b1c"}
              fontSize={"15px"}
              padding={".5em 1.8em"}
            />
          </div>
        </MenuSection>
        <TestimonialSection>
          <header className="testimony-header">
            <h1>What our Customers Says</h1>
          </header>
          <section className="comment-section-wrap">
            {Array(3)
              .fill("")
              .map(() => (
                <div className="comment-section-container">
                  <div className="comment-section">
                    <p>
                      <FaQuoteLeft /> Auto Flow makes it easy to draw stunning
                      flows for creating WireFrames, UserFlows. <FaQuoteRight />
                    </p>
                  </div>

                  <div className="testimony-profile">
                    <div className="testimony-profile-icon">
                      <BsImageFill />
                    </div>
                    <header>
                      <h1>Joseph Jackson</h1>
                    </header>
                    <p>Product Manager</p>
                  </div>
                </div>
              ))}
          </section>
        </TestimonialSection>
        <OutdoorQuotationSection>
          <section className="outdoor-quote-section">
            <div className="outdoor-quote-section-left">
              <header>
                <h1>Outdoors Catering Service</h1>
              </header>
              <p>
                We offer outdoor catering services to the delight of our Clients
                and we brighten up their occasion with our unique event
                management services.
              </p>
            </div>
            <div className="outdoor-quote-section-right">
              <Button
                text={"Get Quotation"}
                fontSize={"16px"}
                borderRadius={"8px"}
              />
            </div>
          </section>
        </OutdoorQuotationSection>
        <Footer />
      </div>
    </Container>
  );
};

export default HomeBeforeLogin;
