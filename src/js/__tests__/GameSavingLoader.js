import GameSavingLoader from '../GameSavingLoader'
import GameSaving from '../GameSaving';
jest.setTimeout(25000);

describe('Проверка класса GameSavingLoader', () => { 

  test(' Тестирование метода load',  async () => {
      const expObj = new GameSaving (9, 1546300800, {id: 1, name: 'Hitman', level: 10, points: 2000 });
      let saving = await GameSavingLoader.load();
      expect(saving).toEqual(expObj);
   });

}); 
