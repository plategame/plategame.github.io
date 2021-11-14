
  const allStates = [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
      'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
      'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
      'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
      'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
      'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
      'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
      'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
      'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
      'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  const codeTable = "0123456789" +
                    "abcdefghijklmnopqrstuvwxyz" +
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const isValidGame = (gameState) => gameState != null && gameState.length > 0;

  const newGame = () => allStates.map (s => {
    return {
      name: s,
      seen: false
    };
   });

   const restoreGame = (gameState) => {

      let game = newGame();
      let current = 0;

      for (let i = 1; i < gameState.length; i++) {
         let num = codeTable.indexOf(gameState[i]);

         for (let j = 0; j < 5 && current < game.length; j++, current++) {
            game[current].seen = ((0x1 & num) > 0);
            num = num >> 1;
         }
      }

      return [ gameState[0] === '1', game ];
   };

   const saveGame = (game, showSeen) => {

      let num = game[0].seen ? 1 : 0;
      let digit = 0;
      let encoded = showSeen ? "1" : "0";

      for (let i = 1; i < game.length; i++) {

         if (i % 5 === 0) {
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

   export { isValidGame, newGame, restoreGame, saveGame }