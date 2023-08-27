import { BurgerMenu } from './BurgerMenu';
import { DecktopMenu } from './DecktopMenu';
import { getViewportWidth } from 'utils/commonFunctions';

// userData is object: { contactName, contactNumber, contactId }
// 620px is breaking point for my pet project
export const ContactItemControl = userData => {
  return getViewportWidth() < 620 ? (
    <BurgerMenu {...userData} />
  ) : (
    <DecktopMenu {...userData} />
  );
};
