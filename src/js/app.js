import GameSavingLoader from "./GameSavingLoader";

(async () => {
  try {
    let result = await GameSavingLoader.load();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return 'Ошибка загрузки';
  }
})();
