import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import hero from "../assets/hero.png";
import heroText from "../assets/heroText.png";
import Button from "./Button";
export default function Home() {
  return (
    <Section id="home">
      <Navbar />
      <div className="ellipse"></div>
      <div className="container">
        <div className="content">
          <h1>
            Explore Our{" "}
            <span>
              <img src={heroText} alt="Hero Text" />
            </span>{" "}
            Digital NFT Market Place
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            est! Iure enim voluptatum perferendis expedita cum. Vitae alias
            voluptas quod asperiores magni laborum soluta minus natus, nisi
            dolores eum. Neque?
          </p>
          <div className="buttons">
            <Button blue text="Explore Now" />
            <Button text="Create NFT" />
          </div>
          <div className="data">
            <div className="dataTabe">
              <h2>40k</h2>
              <h5>Artwork</h5>
            </div>
            <div className="dataTabe">
              <h2>20k</h2>
              <h5>Auction</h5>
            </div>
            <div className="dataTabe">
              <h2>12k</h2>
              <h5>Artiste</h5>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={hero} alt="" />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 0.5rem;
  background-color: #232835;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;
  .ellipse {
    height: 30rem;
    width: 30rem;
    background-color: #ae54c27d;
    opacity: 0.5;
    border-radius: 100%;
    filter: blur(2000px);
    position: absolute;
    bottom: -30%;
    left: -10%;
    z-index: 1;
  }
  .container {
    padding: 2rem;
    margin: 0 2rem;
    display: flex;
    .content {
      z-index: 10;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 5rem;
      padding-right: 2rem;
      h1 {
        color: white;
        font-size: 5rem;

      }
      p{
        color: #a6a6a6;
      }
      .buttons{
        display: flex;
        gap: 2rem;
      }
      .data {
        display: flex;
        gap: 5rem;
        .dataTabe{
          display: flex;
          flex-direction: column;
          gap: 1rem;
          h2{
            color: white;
            font-size: 2rem;
          }
          h5 {
            text-align: center;
            color: #a6a6a6;
          }
        }
      }
    }
    .image{
      img {
        height: 40rem;
      }
    }
  }
`;
