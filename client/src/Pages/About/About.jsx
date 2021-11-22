import React from 'react'
import BcEthDmed from '../../Components/Bc-Eth-Dmed/Bc-Eth-Dmed'
import Intro from '../../Components/Intro/Intro'
import Problem from '../../Components/Problem/Problem'
import Solution from '../../Components/Solution/Solution'

const About = () => {
    return (
        <>
            <Intro/>
            <Problem/>
                <hr />
            <Solution/>
                <hr/>
            <BcEthDmed/>
        </>
    )
}

export default About
