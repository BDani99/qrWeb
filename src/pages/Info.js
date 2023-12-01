import React from "react";
import "../styles/Info.css"

const Info = () => {
    return (
      <div className="info">
        <h2 className="title">Információk</h2>
        <h2 className="infotitle">Rólunk</h2>
        <p>
          A weboldal egy qr kód alapú jegyértékesítési oldal, amely megkönnyíti a jegyek vásárlását és felhasználását. A weboldalon keresztül a felhasználók gyorsan és egyszerűen vásárolhatnak jegyet bármilyen rendezvényre, legyen szó koncertről, sporteseményről, kulturális programról vagy bármi másról.
        </p>
        <p>
          A weboldal célja, hogy megkönnyítse a felhasználók számára a jegyek vásárlását és felhasználását. A qr kód alapú rendszernek köszönhetően a felhasználók gyorsan és egyszerűen beléphetnek a rendezvényekre. A weboldalon keresztül a felhasználók megtalálhatják a számukra megfelelő rendezvényeket, és pillanatok alatt megvásárolhatják a jegyeket.
        </p>
        <p>
          A csapata elkötelezett amellett, hogy a legjobb jegyértékesítési élményt nyújtsa a felhasználóinak. A weboldalt folyamatosan fejlesztik, hogy még jobb legyen a felhasználói élmény.
        </p>
        <h3>A weboldal előnyei</h3>
        <ul>
          <li>Gyors és egyszerű jegyvásárlás</li>
          <li>Egyszerű belépés a rendezvényekre</li>
          <li>Széleskörű rendezvénykínálat</li>
          <li>Folyamatos fejlesztés</li>
        </ul>
      </div>
    );
}

export default Info;
