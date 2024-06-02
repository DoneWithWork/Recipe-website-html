import React from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import produce from "./assets/produce.jpg";
import { recipes } from "./utils/constants";
export default function App() {
  return (
    <Container>
      <Navbar />
      <main>
        <header className="hero">
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simple Recipes</h1>
              <h4>Simple stuff</h4>
            </div>
          </div>
        </header>
      </main>
      <section className="recipe-container">
        <div className="tags-container">
          <h2>Recipes</h2>
          <div className="tags-list">
            <a href="#">Beef</a>
            <a href="#">Italian</a>
          </div>
        </div>
        <div className="recipes-list">
          {recipes &&
            recipes.map((recipe, index) => {
              const { name, image, category, serving, cookingTime, prepTime } =
                recipe;
              return (
                <article key={index} className="recipe">
                  <div>
                    <img src={image} alt={name} />
                    <div className="recipe-info">
                      <h4>{name}</h4>
                      <p>
                        Prep {prepTime} | Cook {cookingTime}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </section>
    </Container>
  );
}
