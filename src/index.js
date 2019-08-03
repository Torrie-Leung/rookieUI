import Tooltip from './rookie-ui/tooltip'
import Dropdown from './rookie-ui/dropdown'
import Tabs from './rookie-ui/tabs'
import Snackbar from './rookie-ui/snackbar'

//create a Tooltip instance
const tooltip =new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create Dropdown instances
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

//create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snackbar
const snackbar = new Snackbar();
snackbar.init();

const btn = document.querySelector('.snackbar-trigger');
btn.addEventListener('click',() => {
  snackbar.show('U clicked me :)');
});