// Load Styles
import '../assets/scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap";

// Loading bootstrap with optional features
initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});
