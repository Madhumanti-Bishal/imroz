import React from 'react'
import Count from './components/BodySec/Count'
import DesignTeam from './components/BodySec/DesignTeam'
import FutureHouse from './components/BodySec/FutureHouse'
import GetWork from './components/BodySec/GetWork'
import ModernDesign from './components/BodySec/ModernDesign'
import Button from './components/Button'
import Footer from './components/Footer/Footer'
import Bannerbg from './components/Header/BannerBg'

export const Home = () => {
    return (
        <>
            <Bannerbg />
            <FutureHouse />
            <GetWork />
            <Count />
            <ModernDesign />
            <DesignTeam />
            <Footer />
            <Button />
        </>
    )
}
