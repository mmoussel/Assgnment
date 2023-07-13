// NOTE: i did this functions regarding to the requirement of loading local images dynamically
export const loadImage = (imageName: string) => {
  let image: number | null;
  switch (imageName) {
    case 'printer.png':
      image = require('src/assets/imgs/models/printer.png');
      break;

    case 'lcd.png':
      image = require('src/assets/imgs/models/lcd.png');
      break;
    case 'laptop.png':
      image = require('src/assets/imgs/models/laptop.png');
      break;
    case 'printer-inc.png':
      image = require('src/assets/imgs/models/printer-inc.png');
      break;

    default:
      image = null;
      break;
  }
  return image;
};
