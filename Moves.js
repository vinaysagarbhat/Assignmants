const streetFighterSelection = (fighters, position, moves)=>{
    let row = position[0];
    let col = position[1];
    let path = []
    
    
    const move = (str) => {
        switch (str) {
            case "up": row -= 1;
              break;
            case "down": row += 1;
              break;
            case "left": col -= 1;
              break;
            case "right": col += 1;
              break;
        }
        if (row < 0) row = 0;
        if (row === fighters.length) row--;
        if (col === fighters[0].length) col = 0;
        if (col === -1) col = fighters[0].length - 1;
        path.push(fighters[row][col]);
        
    }
  
    for (let i = 0; i < moves.length; i++) {
        move(moves[i]);
    }
    
    return path;
}


fighters = [
["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = [0,0]
moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
console.log(streetFighterSelection(fighters,initial_position,moves))