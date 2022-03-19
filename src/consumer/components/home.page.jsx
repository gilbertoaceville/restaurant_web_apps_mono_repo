import React from "react"
// import { Header } from "../../../components/Header/header.component"
import {Square} from "../components/Square/square.component"
 import { Container,SecondSection,SmallCardContainer } from "../features/Home/home.styles"
 import Logo from '../../lib/assets/logo/logo.png'
 import {HorizontalCard} from "../components/HorizontalFoodCard/horizontalFoodCard.component"
// import { TopTabs } from "../././../components/TopTabNavigator/topTabNavigation.component"

const Home = () =>{
const card=[
    {
        image:Logo,
    },
    {
        image:Logo,
    },
    {
        image:Logo,
    },
    {
        image:Logo,
    },
]


    return(
        <Container>
          
            <SecondSection>
                <div className="horizontalSection">
                    <HorizontalCard/>
                    <SmallCardContainer>
                    {
                        card.map(({},idx)=>(
                                <Square key={idx}/>
                        ))
                    }
                    </SmallCardContainer>
                </div>

            </SecondSection>

        </Container>
    )
}
export default Home