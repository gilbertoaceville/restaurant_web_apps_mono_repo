import styled from "styled-components";

export const Container = styled.main`
  position: relative;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  label,
  li,
  div,
  aside {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .overlay {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background: #000000 0% 0% no-repeat padding-box;
    opacity: 0.5;
    z-index: 1;
    display: none;
  }

  .modal-container {
    display: none;
  }

  .top-element .overlay,
  .top-element .modal-container {
    display: block;
  }
`;

export const ModalCard = styled.aside`
  height: 80%;
  width: 90%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 2px 2px -1px #ccc;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  .modal-order-header {
    text-align: center;
    border-bottom: 1px solid #999;
    padding: 1em 0;
    position: relative;

    h1 {
      font-size: 30px;
      line-height: 45px;
    }

    svg {
      top: 50%;
      right: 5%;
      position: absolute;
      transform: translate(-5%, -50%);
      cursor: pointer;
    }
  }

  .modal-order-text {
    text-align: center;
    margin: 1.5em 0;
    font-size: 35px;
    font-weight: 600;
    line-height: 55px;
  }

  .modal-btn {
    display: flex;
    justify-content: center;

    button {
      margin-right: 15px;
      font-size: 40px;
      line-height: 55px;
      border-radius: 8px;
      ${"" /* padding: .5em 2em; */}
      max-width: 423px;
      max-height: 126px;
    }
  }

  @media (max-width: 750px) {
    .modal-order-header {
      h1 {
        font-size: 25px;
        line-height: unset;
      }
    }

    .modal-order-text {
      margin: 2em 0;
      font-size: 20px;
      line-height: 30px;
    }

    .modal-btn {
      button {
        margin-right: 0;
        font-size: 15px;
        line-height: unset;
        max-width: 280px;
        max-height: 126px;
        border-radius: 5px;
      }

      button:nth-child(1) {
        margin-right: 10px;
      }
    }
  }
`;

export const HeroSection = styled.div`
  height: 590px;
  background: transparent linear-gradient(117deg, #000000 0%, #e5e8e9 100%) 0%
    0% no-repeat padding-box;
  padding: 0 0 0 6em !important;
  display: flex;
  align-items: center;

  .hero-section-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  .hero-section-left,
  .hero-section-right {
    flex: 0.5;
  }

  .hero-section-title {
    font-size: 65px;
    color: #ffffff;
  }

  .hero-section-text {
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    margin: 1.5em 0;
  }

  .hero-img-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 0 0 0 3em !important;
  }

  .hero-section-title {
    font-size: 35px;
  }

  @media (max-width: 750px) {
    padding: 3em 2em 2em 2em !important;
    height: auto;

    .hero-section-wrap {
      flex-direction: column;
    }

    .hero-section-left,
    .hero-section-right {
      flex: unset;
    }

    .hero-section-title {
      font-size: 30px;
    }

    .hero-section-left {
      margin-bottom: 4em;
    }

    .hero-btn {
      ${
        "" /* display: flex;
        justify-content: center; */
      }
    }

    .hero-btn button {
      padding: 0.5rem 1.5rem;
    }
  }
`;

export const ServicesOfferedSection = styled.article`
  height: auto;
  padding: 2em 6em;

  .services-section {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .services-section-left,
  .services-section-right {
    flex: 0.45;
  }

  .services-section-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .services-section-left h1 {
    color: #000000de;
    font-size: 40px;
  }

  .services-section-left p {
    font-size: 16px;
    color: #000000;
    line-height: 23px;
    margin-top: 2em;
  }

  .services-section-list-wrap {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 2em 0 4em 0;
  }

  .services-section-list {
    margin: 0 0 2em 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: center;
    grid-gap: 2em;
  }

  .services-method-icon {
    height: 83px;
    width: 83px;
    border-radius: 50%;
    background: #fff9ec 0% 0% no-repeat padding-box;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: #f38b1c;
      font-size: 30px;
    }
  }

  .services-method h1 {
    color: #212121de;
    font-size: 30px;
    line-height: 46px;
    font-weight: 500;
  }

  .services-method p {
    color: #212121de;
    font-size: 14px;
    line-height: 26px;
  }

  @media (max-width: 768px) {
    padding: 2em 3em;

    .services-section-left h1 {
      font-size: 30px;
    }

    .services-method h1 {
      font-size: 20px;
      line-height: 36px;
    }
  }

  @media (max-width: 750px) {
    padding: 2em;

    .services-section {
      flex-direction: column;
      text-align: center;
    }

    .services-section-left,
    .services-section-right {
      flex: unset;
    }

    .services-section-left h1 {
      font-size: 25px;
    }

    .services-section-right {
      margin-top: 3em;
    }

    .services-method h1 {
      font-size: 18px;
      line-height: 34px;
    }
  }
`;

export const MenuSection = styled.article`
  height: auto;
  padding: 6em 6em 3em 6em;
  background: #fff9ec 0% 0% no-repeat padding-box;

  .header-menu h1 {
    color: #000000de;
    font-size: 35px;
    line-height: 63px;
  }

  .menu-items-list {
    display: grid;
    grid-gap: 2em 1em;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .menu-items {
    height: 350px;
    width: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    .menu-price {
      color: #ffffff;
      font-size: 16px;
      background: #f38b1c 0% 0% no-repeat padding-box;
      width: 65px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 10%;
      transform: translate(0, -10%);
      border-radius: 18px 0 0 18px;
      font-weight: 550;
    }
  }
  .pointer-dots-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5em 0;
    .pointer-dots {
      width: 10px;
      height: 10px;
      background: #f38b1c 0% 0% no-repeat padding-box;
      border-radius: 100%;
      margin-right: 0.5em;
    }
  }

  .menu-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4em;
  }

  @media (max-width: 811px) {
    padding: 3em;

    .header-menu h1 {
      font-size: 30px;
    }

    .menu-items {
      justify-self: center;
    }
  }

  @media (max-width: 750px) {
    padding: 2em;

    .header-menu h1 {
      font-size: 25px;
      text-align: center;
    }
  }
`;

export const TestimonialSection = styled.article`
  height: auto;
  padding: 6em;

  .testimony-header h1 {
    font-size: 40px;
    line-height: 65px;
    color: #000000de;
    text-align: center;
    margin-bottom: 1em;
  }

  .comment-section-wrap {
    display: grid;
    grid-gap: 2em;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .comment-section-container {
    ${"" /* width: 80%; */}
  }

  .comment-section p {
    color: #212121de;
    font-size: 16px;
    line-height: 23px;
    position: relative;

    svg {
      font-size: 12px;
      color: #f38b1c;
      position: absolute;
    }

    svg:nth-child(1) {
      left: -4%;
      top: 0;
      transform: translate(4%, 0);
    }

    svg:nth-child(2) {
      bottom: 0;
      transform: translate(0);
    }
  }

  .testimony-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;
  }

  .testimony-profile-icon {
    height: 80px;
    width: 80px;
    background: #f2f7fb 0% 0% no-repeat padding-box;
    border-radius: 44px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: #dfe2f2;
      font-size: 25px;
    }
  }

  .testimony-profile h1 {
    color: #212121de;
    font-size: 20px;
    line-height: 27px;
    font-weight: 500;
    margin: 0.2em 0;
  }

  .testimony-profile p {
    color: #212121de;
    font-size: 15px;
    line-height: 22px;
  }

  @media (max-width: 768px) {
    padding: 3em;

    .testimony-header h1 {
      font-size: 30px;
    }

    .testimony-profile h1 {
      font-size: 17px;
    }

    .testimony-profile p {
      font-size: 14px;
      line-height: 22px;
    }
  }

  @media (max-width: 750px) {
    .testimony-header h1 {
      font-size: 25px;
      line-height: unset;
    }

    .comment-section p {
      text-align: center;

      svg:nth-child(1) {
        left: 4%;
        top: 0;
        transform: translate(-4%, 0);
      }
    }
  }
`;

export const OutdoorQuotationSection = styled.article`
  height: auto;
  padding: 4em 6em;
  background: #fff9ec 0% 0% no-repeat padding-box;

  .outdoor-quote-section {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .outdoor-quote-section-left,
  .outdoor-quote-section-right {
    flex: 0.45;
  }

  .outdoor-quote-section-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .outdoor-quote-section-left h1 {
    color: #000000de;
    font-size: 40px;
  }

  .outdoor-quote-section-left p {
    font-size: 16px;
    color: #000000;
    line-height: 23px;
    margin-top: 2em;
  }

  .outdoor-quote-section-right button {
    padding: 0.7em 5em;
  }

  @media (max-width: 768px) {
    padding: 2em 3em;

    .outdoor-quote-section-left h1 {
      font-size: 25px;
    }

    .outdoor-quote-section-right button {
      padding: 0.7rem 3em;
    }
  }

  @media (max-width: 750px) {
    padding: 2em;
    .outdoor-quote-section {
      flex-direction: column;
    }

    .outdoor-quote-section-left,
    .outdoor-quote-section-right {
      flex: unset;
      text-align: center;
    }

    .outdoor-quote-section-right {
      margin-top: 2em;
    }
  }
`;
