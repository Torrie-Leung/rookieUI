import Tooltip from './rookie-ui/tooltip'
import Dropdown from './rookie-ui/dropdown'
import Tabs from './rookie-ui/tabs'

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