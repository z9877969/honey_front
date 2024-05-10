export const scrollToElementById = (id) => {
  const getSectionById = document.querySelector(`#${id}`);
  if (!getSectionById) return;
  const isMobileView = window.innerWidth < 768;
  const isTabletView = window.innerWidth >= 768 && window.innerWidth < 1440;
  const topOffset = isMobileView ? 56 : isTabletView ? 72 : 76;
  const topPosition = getSectionById.offsetTop - topOffset;

  window.scrollTo({
    top: topPosition,
    behavior: 'smooth',
  });
};
