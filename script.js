// Menu hambúrguer, sombra do cabeçalho e ano do rodapé.
(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");

  const setOpen = (open) => {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };

  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) { setOpen(false); toggle.focus(); }
  });
  document.addEventListener("click", (e) => {
    if (menu.classList.contains("is-open") && !header.contains(e.target)) setOpen(false);
  });
  matchMedia("(min-width: 961px)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });

  const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
