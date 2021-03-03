import React from "react";
import styled from "styled-components";
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg";
import github from "../assets/github.svg";
import { colors, fonts, responsive } from "../styles";

const SFooter = styled.footer`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 160px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  @media screen and (${responsive.sm.max}) {
    flex-direction: column;
    height: auto;
    margin: 30px 0;
    & a {
      margin: 10px 0;
    }
  }
`;

const SSocialIcon = styled.div`
  width: 20px;
  height: 20px;
  & img {
    height: 100%;
  }
`;

interface IExternalLinkStyleProps {
  activeLink?: boolean;
}

const SExternalLink = styled.a<IExternalLinkStyleProps>`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    display: flex;
    align-items: center;
    padding-left: 0.5em;
    font-size: ${fonts.size.h6};
    color: rgb(${colors.lightBlue});
    font-weight: ${({ activeLink }) => (activeLink ? `700` : `500`)};
  }
`;
const Footer = (props: any) => (
  <SFooter {...props}>
    <SExternalLink
      href="https://discord.gg/jhxMvxP"
      target="blank"
      rel="noreferrer noopener"
    >
      <SSocialIcon>
        <img src={discord} alt="Discord" />
      </SSocialIcon>
      <p>Discord</p>
    </SExternalLink>

    <SExternalLink
      href="https://twitter.walletconnect.org/"
      target="blank"
      rel="noreferrer noopener"
    >
      <SSocialIcon>
        <img src={twitter} alt="Twitter" />
      </SSocialIcon>
      <p>Twitter</p>
    </SExternalLink>

    <SExternalLink
      href="https://github.com/walletconnect"
      target="blank"
      rel="noreferrer noopener"
    >
      <SSocialIcon>
        <img src={github} alt="GitHub" />
      </SSocialIcon>
      <p>GitHub</p>
    </SExternalLink>
  </SFooter>
);

export default Footer;
