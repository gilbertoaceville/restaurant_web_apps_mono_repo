import React from "react";
import { Header2 } from "../../components/Header/header.component";

import { Header1 } from "../../components/Header/header.component";
import { Square } from "../../components/Square/square.component";
import {
  Container,
  FourthSection,
  SecondSection,
  SmallCardContainer,
  ThirdSection,
  UnoCard,
} from "./home.styles";
import Logo from "../../../lib/assets/logo/logo.png";
import { BiChevronRight } from "react-icons/bi";

import Food1 from "../../assets/food1.png";
import Food2 from "../../assets/food2.png";
import Food3 from "../../assets/food3.png";
import Poster1 from "../../assets/1.jpeg";
import Poster2 from "../../assets/2.jpeg";
import Poster3 from "../../assets/png.jpeg";
import Poster4 from "../../assets/images.jpeg";
import Restaurant from "../../assets/restaurant.png";
import { VerticalFoodCard } from "../../components/VerticalFoodCard/verticalFoodCard.component.component";
import { HorizontalCard } from "../../components/HorizontalFoodCard/horizontalFoodCard.component";
import { DropDownSelect } from "../../components/DropdownSelect/dropDownSelect.component";
import SubHeader from "../../components/subheader/subheader.component";
import Footer from "../../components/footer/footer.component";
import RatingStars from "../../components/RatingStars";
const Home = () => {
  const card = [
    { image: Poster1 },
    { image: Poster2 },
    { image: Poster3 },

    { image: Poster4 },
  ];

  const cards = [
    {
      image: Logo,
    },
    {
      image: Logo,
    },
    {
      image: Logo,
    },
    {
      image: Logo,
    },
    {
      image: Logo,
    },
    {
      image: Logo,
    },
    {
      image: Logo,
    },
  ];

  const verticalFoodCard = [
    {
      name: "Chicken peppersoup",
      image: Food1,
      location: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
      price: "₦1,400",
    },
    {
      name: "Chicken Crunch",
      image: Food2,
      location: "11 Faulks Road Abia State, Nigeria.",
      price: "₦1,000",
    },
    {
      name: "Hot Dog Pie",
      image: Food3,
      location: "54 East West Road Abia State, Nigeria.",
      price: "₦500",
    },
    {
      name: "Chicken peppersoup",
      image: Food1,
      location: "54 East West Road Abia State, Nigeria.",
      price: "₦1,400",
    },
    {
      name: "Chicken Crunch",
      image: Food1,
      location: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
      price: "₦1,000",
    },
    {
      name: "Chicken peppersoup",
      image: Food1,
      location: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
      pprice: "₦1,400",
    },
    {
      name: "Chicken Crunch",
      image: Food2,
      location: "11 Faulks Road Abia State, Nigeria.",
      price: "₦1,000",
    },
    {
      name: "Hot Dog Pie",
      image: Food3,
      location: "54 East West Road Abia State, Nigeria.",
      price: "₦1,400",
    },
    {
      name: "Chicken peppersoup",
      image: Food1,
      location: "54 East West Road Abia State, Nigeria.",
      price: "₦1,000",
    },
    {
      name: "",
      image: Food1,
      location: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
      price: "₦500",
    },
  ];

  return (
    <Container>
      <Header2 />
      <SubHeader search={false} />
      <SecondSection>
        <div className="horizontalSection">
          <HorizontalCard />
          <SmallCardContainer>
            {card.map(({ image }) => (
              <Square image={image.src} />
            ))}
          </SmallCardContainer>
        </div>
      </SecondSection>
      <article className="text-section-wrap">
        <section className="text-section">
          <div>
            <header>
              <h1>Today New Arivable</h1>
            </header>
            <p>Best of the today food list update</p>
          </div>
          <p className="text-section-right">
            See All <BiChevronRight size={20} />
          </p>
        </section>
      </article>
      <ThirdSection>
        <div className="inner">
          {verticalFoodCard.map(({ name, image, location, price }) => (
            <VerticalFoodCard
              src={image}
              Name={name}
              Location={location}
              price={price}
            />
          ))}
        </div>
      </ThirdSection>
      <FourthSection>
        <article className="text-section-wrap">
          <section className="text-section">
            <div>
              <header>
                <h1>Restaurants Near By</h1>
              </header>
              <p>Check Crunchies Restaurants nearby to you</p>
            </div>
            <p className="text-section-right">
              See All <BiChevronRight size={20} />
            </p>
          </section>
        </article>
        <section className="restaurant-card-container">
          <div className="restaurant-card-wrapper">
            {[...Array(6)]?.map((_) => (
              <RestaurantCard />
            ))}
          </div>
        </section>
      </FourthSection>
      <Footer />
    </Container>
  );
};
export default Home;

const RestaurantCard = () => {
  return (
    <UnoCard style={{ backgroundImage: `url(${Restaurant.src})` }}>
      <footer className="card-footer">
        <div className="card-footer-header">
          <header>
            <h1>Faulks Branch</h1>
          </header>
          <RatingStars iconSize={10} />
        </div>
        <div className="card-footer-address">
          <p>162 Old Glenridge St Fountain Aba, Abia State, Nigeria.</p>
          <p>4.9</p>
        </div>
      </footer>
    </UnoCard>
  );
};
