import { sayHello as greeting } from "./greeting.js";
import application from "CssFolder/application.scss";
import $ from "jquery";
greeting();
$("body").append(
  '<div style="background:green;padding:10px;">Hello jQuery!</div>'
);
$("body").append(
  '<div style="background:red;padding:10px;">Hello jQuery!</div>'
);

if (module.hot) {
  module.hot.accept(function (err) {
    console.log(err);
  });
}
