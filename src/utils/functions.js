export const getGemstoneName = (gemstoneId) => {
  let gemstoneName = "";
  switch (gemstoneId) {
    case 1:
      gemstoneName = "Amethyst";
      break;
    case 2:
      gemstoneName = "Sapphire";
      break;
    case 3:
      gemstoneName = "Emerald";
      break;
    case 4:
      gemstoneName = "Citrine";
      break;
    case 5:
      gemstoneName = "Amber";
      break;
    case 6:
      gemstoneName = "Ruby";
      break;
    default:
      gemstoneName = "Amethyst";
      break;
  }
  return gemstoneName;
};
