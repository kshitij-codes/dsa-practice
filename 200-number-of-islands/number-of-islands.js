/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
   if(!grid || !grid.length) return 0
   const rows = grid.length
   const cols = grid[0].length
   let islandCount = 0

    function dfs(r, c) {
        if(r<0 || c<0 || r>=rows || c>=cols) return 
        if(grid[r][c] !== "1") return
        grid[r][c] = "#"
        dfs(r, c-1)
        dfs(r, c+1)
        dfs(r+1, c)
        dfs(r-1, c)
    }

   for(let i=0; i<rows; i++) {
    for(let j=0; j<cols; j++) {
        if(grid[i][j] === "1") {
            dfs(i, j)
            islandCount++
        }
    }
   }
   return islandCount
};