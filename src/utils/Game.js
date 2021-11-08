
  const allStates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut'];

  const codeTable = "0123456789_=" +
                    "abcdefghijklmnopqrstuvwxyz" +
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const newGame = () => allStates.map (s => {
    return {
      name: s,
      seen: false
    };
   });

   const restoreGame = (gameState) => {

      let game = newGame();
      let current = 0;

      for (let i = 0; i < gameState.length; i++) {
         let num = codeTable.indexOf(gameState[i]);

         for (let j = 0; j < 6 && current < game.length; j++, current++) {
            game[current].seen = ((0x1 & num) > 0);
            num = num >> 1;
         }
      }

      return game;
   };

   const saveGame = (game) => {

      let num = game[0].seen ? 1 : 0;
      let digit = 0;
      let encoded = "";

      for (let i = 1; i < game.length; i++) {

         if (i % 6 === 0) {
            encoded += codeTable[num];
            digit = 0;
            num = 0;
         } else {
            digit += 1;
         }
         
         if (game[i].seen) {
            num += (2 ** digit);
            // console.log('num: ' + num);
         }
      }

  encoded += codeTable[num];
      return encoded;
   };

   export { newGame, restoreGame, saveGame }