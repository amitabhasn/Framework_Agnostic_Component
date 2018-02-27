import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import DemoComponent from './DemoComponent.vue';

// Configure Vue to ignore the element name when defined outside of Vue.
Vue.config.ignoredElements = [
  'demo-component'
];

// Enable the plugin
Vue.use(vueCustomElement);

// Register the component
Vue.customElement('demo-component', DemoComponent, {
  
});