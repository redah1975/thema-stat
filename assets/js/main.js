/* Search main button+ Modal show search block */
const searchMainBtn = document.getElementById('search-main-btn');
const searchBlock = document.getElementById('search-block');
const searchCloseMenu = document.getElementById('btnClose');
searchMainBtn.addEventListener('click', () => {
  searchMainBtn.classList.toggle('form-visible');
  searchBlock.classList.toggle('search-block-visible');
});
searchCloseMenu.addEventListener('click', ()=> {
    if (searchBlock.classList.contains('search-block-visible')) {
        searchBlock.classList.remove('search-block-visible');
        searchMainBtn.classList.toggle('form-visible');
    }
})