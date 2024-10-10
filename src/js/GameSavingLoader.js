import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      let rd = await read();
      let rd1 = await json(rd);
      let jsonData = JSON.parse(rd1);
      return new GameSaving(jsonData.id, jsonData.created, jsonData.userInfo);
    } catch (error) {
      return 'Ошибка загрузки'        
    }
    
  }
}


