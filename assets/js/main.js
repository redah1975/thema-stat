/* Search main button+ Modal show search block */
const searchMainBtn = document.getElementById('search-main-btn');
const searchBlock = document.getElementById('search-block');
const searchCloseMenu = document.getElementById('btnClose');
searchMainBtn.addEventListener('click', () => {
  searchMainBtn.classList.toggle('form-visible');
  searchBlock.classList.toggle('search-block-visible');
});
searchCloseMenu.addEventListener('click', () => {
  if (searchBlock.classList.contains('search-block-visible')) {
    searchBlock.classList.remove('search-block-visible');
    searchMainBtn.classList.toggle('form-visible');
  }
});

/* Form main start - Money size */
let rangeIn = document.getElementById('moneySizeRange');
let numIn = document.getElementById('moneySizeNum');

rangeIn.addEventListener('input', (e) => {
  numIn.value = e.target.value;
  numIn.value = numIn.value.replace(/[^\d.]/g, '');
  numIn.value = numIn.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
});

numIn.addEventListener('input', (e) => {
  rangeIn.value = e.target.value;
  numIn.value = numIn.value.replace(/[^\d.]/g, '');
  numIn.value = numIn.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
});

/* Form main start - Day size */
let dayIn = document.getElementById('daySizeRange');
let days = document.getElementById('daySizeNum');

dayIn.addEventListener('input', (e) => {
  days.value = e.target.value;
});

days.addEventListener('input', (e) => {
  dayIn.value = e.target.value;
});
/* Wrapper card */
const wrapperVisible = document.getElementById('wrapper-visible');
const wrapperColums = document.getElementById('wrapper-col');
const wrapperPreset = document.getElementById('wrapper-preset');

wrapperVisible.addEventListener('click', () => {
  let itemChild = wrapperPreset.children;
  for (let i = 0; i < itemChild.length; i++) {
    itemChild[i].classList.add('col-lg-12');
  }
});

wrapperColums.addEventListener('click', () => {
  let itemChild = wrapperPreset.children;
  for (let i = 0; i < itemChild.length; i++) {
    itemChild[i].classList.remove('col-lg-12');
  }
});

/* Scroll Button */
const btnUp = {
  el: document.querySelector('.btn-up'),
  scrolling: false,
  show() {
    if (
      this.el.classList.contains('btn-up_hide') &&
      !this.el.classList.contains('btn-up_hiding')
    ) {
      this.el.classList.remove('btn-up_hide');
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  hide() {
    if (
      !this.el.classList.contains('btn-up_hide') &&
      !this.el.classList.contains('btn-up_hiding')
    ) {
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.add('btn-up_hide');
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;
      if (scrollY > 400) {
        this.show();
      } else {
        this.hide();
      }
    });
    document.querySelector('.btn-up').onclick = () => {
      this.scrolling = true;
      this.hide();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();
