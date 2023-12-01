import React from "react";
import "../styles/Info.css"

const Info = () => {
    return (
      <div>
        <h2 className="info-title">Információk</h2>
        <div className="info">
        <h3>Rólunk</h3>
        <p>
          A weboldal egy qr kód alapú jegyértékesítési oldal, amely megkönnyíti a jegyek vásárlását és felhasználását. A weboldalon keresztül a felhasználók gyorsan és egyszerűen vásárolhatnak jegyet bármilyen rendezvényre, legyen szó koncertről, sporteseményről, kulturális programról vagy bármi másról.
        </p>
        <p>
          A weboldal célja, hogy megkönnyítse a felhasználók számára a jegyek vásárlását és felhasználását. A qr kód alapú rendszernek köszönhetően a felhasználók gyorsan és egyszerűen beléphetnek a rendezvényekre. A weboldalon keresztül a felhasználók megtalálhatják a számukra megfelelő rendezvényeket, és pillanatok alatt megvásárolhatják a jegyeket.
        </p>
        <p>
          A csapata elkötelezett amellett, hogy a legjobb jegyértékesítési élményt nyújtsa a felhasználóinak. A weboldalt folyamatosan fejlesztik, hogy még jobb legyen a felhasználói élmény.
        </p>
        <h4>A weboldal előnyei</h4>
        <ul>
          <li>Gyors és egyszerű jegyvásárlás</li>
          <li>Egyszerű belépés a rendezvényekre</li>
          <li>Széleskörű rendezvénykínálat</li>
          <li>Folyamatos fejlesztés</li>
        </ul>
        </div>
      </div>
    );
}

export default Info;
