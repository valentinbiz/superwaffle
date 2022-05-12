
export function quickSort(array, left, right){ 
    let pivot;
    let partitionIndex;

    const animations = [];
  
    if(left < right) {
      pivot = right;
      partitionIndex = partition(array, pivot, left, right, animations);
      
      //sort left and right
      quickSort(array, left, partitionIndex - 1, animations);
      quickSort(array, partitionIndex + 1, right, animations);
    }
    return animations;
  }
     
  function partition(array, pivot, left, right, animations){
    let pivotValue = array[pivot];
    let partitionIndex = right;
  
    for(let i = left; i < right; i++) {
        animations.push([array[i], array[i]]);
        animations.push([array[i], array[i]]);
      if(array[i] < pivotValue){
        swap(array, i, partitionIndex);
        partitionIndex--;
        animations.push([array[i], array[i]])
        console.log(animations)
      }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
  }
  
  function swap(array, firstIndex, secondIndex){
      var temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
  }
  