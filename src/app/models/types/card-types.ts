import { CardType } from '../card-type';
import { CardTypeDetails } from './card-type-details';
import { ICard } from '../card';

const door = {
  name: 'door',
  plural: 'doors',
  nameUkr: 'Двері',
  pluralUkr: 'Двері',
  parent: null
};

export class CardTypes {

  static cardTypes = new Map<CardType, CardTypeDetails>([
    [
      CardType.CLASS,
      new CardTypeDetails({
        name: 'class',
        plural: 'classes',
        nameUkr: 'Клас',
        pluralUkr: 'Класи',
        parent: door
      })
    ],
    [
      CardType.CURSE,
      new CardTypeDetails({
        name: 'curse',
        plural: 'curses',
        nameUkr: 'Прокляття',
        pluralUkr: 'Прокляття',
        parent: door
      })
    ],
    [
      CardType.MONSTER_ENHANCER,
      new CardTypeDetails({
        name: 'monsterEnhancer',
        plural: 'monsterEnhancers',
        nameUkr: 'Підсилювач потвори',
        pluralUkr: 'Підсилювачі потвори',
        parent: door
      })
    ],
    [
      CardType.MONSTER,
      new CardTypeDetails({
        name: 'monster',
        plural: 'monsters',
        nameUkr: 'Потвора',
        pluralUkr: 'Потвори',
        parent: door
      })
    ],
    [
      CardType.OTHER_DOOR,
      new CardTypeDetails({
        name: 'otherDoor',
        plural: 'otherDoors',
        nameUkr: 'Інше',
        pluralUkr: 'Інше',
        parent: door
      })
    ],
    [
      CardType.RACE,
      new CardTypeDetails({
        name: 'race',
        plural: 'races',
        nameUkr: 'Раса',
        pluralUkr: 'Раси',
        parent: door
      })
    ],
  ]);

  static getCardType(card: ICard): CardTypeDetails {
    return this.getCardTypeDetails(card.type);
  }

  static getCardTypeDetails(type: CardType): CardTypeDetails {
    return this.cardTypes.get(type);
  }
}
