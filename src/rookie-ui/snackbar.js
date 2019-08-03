import './styles/snackbar.css'
class Snackbar{
  constructor(){
    this.snackbar = document.createElement('div');
  }
  init(){
    this.snackbar.classList.add('snackbar');
    document.querySelector('body').append(this.snackbar);
  }
  show(msg){
    this.snackbar.textContent = msg;
    this.snackbar.classList.add('active');
    setTimeout(()=>{
      this.snackbar.classList.remove('active');
    },2300)
  }
}

export { Snackbar as default };