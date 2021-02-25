import nav from "./nav";
// import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
// import * as GSAP from "gsap";
const getGSAP = () => import("gsap")

import css from "./footer.css";
import buttonStyles from "./button.css";
const getFooter = () => import("./footer")

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

button.addEventListener("click", function () {
    getFooter().then(function(footerModule) {
        document.body.appendChild(footerModule.footer);

    })
})

document.body.appendChild(button);
document.body.appendChild(image);

