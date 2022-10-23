const scrollToElement = (id: string, headerHeight = 0) => {
  const target = document.getElementById(id.replace('#', ''));
  const finalHeaderHeight = headerHeight ? headerHeight : 80;

  if (typeof window !== 'undefined' && target) {
    window.scroll({
      top: target.getBoundingClientRect().top + window.scrollY - finalHeaderHeight,
      behavior: 'smooth',
    });
  }
};

export { scrollToElement };
