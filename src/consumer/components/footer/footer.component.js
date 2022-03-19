import React, { Fragment } from "react";
import BankBuilding from "../../assets/bank-building.png";
import Paypal from "../../assets/paypal-logo.png";
import Symbols from "../../assets/symbols.png";
import Logo from "../../assets/logo.png";
import PlayStore from "../../assets/play-store.png";
import AppStore from "../../assets/app-store.png";
import Image from "next/image";
import { Container, NewsLetterWrapper } from "./footer.styles";
import NewsLetterForm from "../newsLetterForm/newsLetterForm.component";

const footerprops = [
  {
    title: "Menu",
    list: [
      {
        to: "/",
        link: "About Crunchies",
      },
      {
        to: "/",
        link: "Terms and Condition",
      },
      {
        to: "/",
        link: "Privacy and Policy",
      },
      {
        to: "/",
        link: "Purchasing Policy",
      },
    ],
  },
  {
    title: "Let's Help You",
    list: [
      {
        to: "/",
        link: "Help Center",
      },
      {
        to: "/",
        link: "How to shop on crunchies",
      },
      {
        to: "/",
        link: "Delivery Option and Timeline",
      },
      {
        to: "/",
        link: "Report a Menu",
      },
    ],
  },
  {
    title: "Contact Us",
    list: [
      {
        to: "/",
        link: "42B Aba Owerri Road, Aba, Abia State",
      },
      {
        to: "mailto:crunchiesfriedchicken@gmail.com?cc=crunchiesfriedchicken@gmail.com",
        link: "crunchiesfriedchicken@gmail.com",
      },
      {
        to: "tel:+23481643555",
        link: "+23481643555",
      },
    ],
  },
];
const Footer = () => {
  return (
    <Fragment>
      <NewsLetterWrapper>
        <Image
          src={Logo}
          alt="logo"
          objectFit="contain"
          height="150px"
          width="150px"
        />
        <NewsLetterForm />
        <aside>
          <header>
            <h4 className="store-header">
              Download The Crunchies App for free
            </h4>
          </header>
          <div className="store-container">
            <Image
              src={AppStore}
              alt="app store"
              objectFit="contain"
              height="45px"
              width="160px"
            />
            <Image
              src={PlayStore}
              alt="app store"
              objectFit="contain"
              height="45px"
              width="160px"
            />
          </div>
        </aside>
      </NewsLetterWrapper>
      <Container>
        <nav className="nav">
          {footerprops.map((item) => (
            <section key={item.title}>
              <header>
                <h4>{item.title}</h4>
              </header>
              <ul>
                {item.list.map((listItem) => (
                  <li key={Math.random().toString()}>{listItem.link}</li>
                ))}
              </ul>
            </section>
          ))}
          <section className="payment-section">
            <header>
              <h4>Payment Methods</h4>
            </header>
            <div className="img-wrap">
              {[Paypal, Symbols, BankBuilding].map((img) => (
                <Image key={Math.random().toString()} src={img} width="45%" height="45%" objectFit="contain" />
              ))}
              <div className="img-container"></div>
            </div>
            <header>
              <h4>Follow Us</h4>
            </header>
          </section>
        </nav>
      </Container>
    </Fragment>
  );
};

export default Footer;
