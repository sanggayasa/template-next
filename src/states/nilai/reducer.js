function totalNilaiReducer(nilai = 0, action = {}) {
  if (action.type === 'ADD_NILAI') {
    console.log('action ', action)
    return nilai+ 1;
  }
 
  if (action.type === 'SUBTRACT_NILAI') {
    return nilai - 1 ;
  }
 
  return nilai;
}
   
export {totalNilaiReducer };