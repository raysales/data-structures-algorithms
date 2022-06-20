const getChild = (arr, parentIndex, boundary) => {
    let childIndex1 = 2*parentIndex + 1
    let childIndex2 = 2* parentIndex + 2
  
    if(childIndex1 >= boundary){
      return childIndex1
    }else if(childIndex2 >= boundary){
      return childIndex1
      //fixed error here
    }else if(arr[childIndex1] > arr[childIndex2]){
      return childIndex1
    }else{
      return childIndex2
    }
  }
  
  const swap = (arr, p, c) => {
    [arr[p], arr[c]] = [arr[c], arr[p]]
  }
  
  const bubbleDown = (arr, parentIndex, boundary) => {
    let childIndex = getChild(arr, parentIndex, boundary)
  
    while(childIndex < boundary && arr[childIndex] > arr[parentIndex]){
      //swap index around
      swap(arr, parentIndex, childIndex);
  
      parentIndx = childIndex;
      childIndex = getChild(arr, parentIndex, boundary);
    }
  }
  
  const heapSort = (arr) => {
    console.log("input: ", arr);
  
    let i = arr.length-1;
  
    while(i > -1){
      bubbleDown(arr, i , arr.length);
      i--;
    }
  
    console.log("after heapify: ", arr);
  
    let w = arr.length - 1;
  
    while(w > 0){
      swap(arr,0,w);
      bubbleDown(arr, 0, w)
      w--;
    }
  
    return arr
  }
  
  let test = [10,2,5,200,88,15,50,4]
  console.log("results: " , heapSort(test))