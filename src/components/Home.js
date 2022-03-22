import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
    <Section 
        title="Model S"
        description="Order online for touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exisiting Inventory"

    />
    <Section 
        title="Model Y"
        description="Order online for touchless delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exisiting Inventory"

    />
    <Section 
        title="Model 3"
        description="Order online for touchless delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exisiting Inventory"

    />
    <Section 
        title="Model X"
        description="Order online for touchless delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Exisiting Inventory"

    />
    <Section 
        title="Lowest Cost Solar Panels in America"
        description="Money-back Guarantee "
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn More"

    />
    <Section 
        title="Solar for New Roofs"
        description="Solar Roof Costs less than a New Roof plus Solar panels "
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn More"

    />
    <Section 
        title="Accessories"
        description=" "
        backgroundImg="accessories.jpg"
        leftBtnText="Order now"
        

    />
 
    </Container >
  )
}

export default Home

const Container = styled.div`
height: 100vh;


`
