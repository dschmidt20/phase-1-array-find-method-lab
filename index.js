const superbowlWin = record => {
   
  const firstWin =  record.find(year => {

        return year.result === 'W'
    })
    return firstWin ? firstWin.year : firstWin
}
