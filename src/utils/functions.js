export const getGemstoneName = (gemstoneId) => {
  let gemstoneName = "";
  switch (gemstoneId - 1) {
    case 0:
      gemstoneName = "Amethyst";
      break;
    case 1:
      gemstoneName = "Sapphire";
      break;
    case 2:
      gemstoneName = "Emerald";
      break;
    case 3:
      gemstoneName = "Citrine";
      break;
    case 4:
      gemstoneName = "Amber";
      break;
    case 5:
      gemstoneName = "Ruby";
      break;
    default:
      gemstoneName = "Amethyst";
      break;
  }
  return gemstoneName;
};
