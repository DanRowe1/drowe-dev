import React from 'react'
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"
import { Wrapper, Flex } from "./styles"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`, marginBottom: `0px`}}>
        <a style={{ textDecoration: `none`, color: `inherit`, height: `2.2rem`}} href={props.href}>{props.children}</a>
    </li>
)


export default () => (
    <Wrapper>
        <ul style={{ textAlign: `center`, paddingTop: `.1em`, paddingBottom: `0`, marginBottom: `0`}}>
            <ListLink href="mailto:daniel@drowe.dev">
                <FaEnvelope size="1.7em"/>
            </ListLink>
            <ListLink href="https://linkedin.com/in/danielrowe2">
                <FaLinkedinIn size="1.7em"/>
            </ListLink>
            <ListLink href="https://github.com/DanRowe1/">
                <FaGithub size="1.9em"/>
            </ListLink>
        </ul>
    </Wrapper>
)