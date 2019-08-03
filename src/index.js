import Tooltip from './rookie-ui/tooltip'
import Dropdown from './rookie-ui/dropdown'

//create a Tooltip instance
const tooltip =new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create Dropdown instances
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});