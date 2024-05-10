export const scrollToTop = (id) => {
  const getSection = document.querySelector(id);
  if (!getSection) return;
  const isMobileView = window.innerWidth < 768;
  const isTabletView = window.innerWidth >= 768 && window.innerWidth < 1440;
  const topOffset = isMobileView ? 56 : isTabletView ? 72 : 76;
  const topPosition = getSection.offsetTop - topOffset;

  window.scrollTo({
    top: topPosition,
    behavior: 'smooth',
  });
};
