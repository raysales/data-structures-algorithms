class MinHeap {
    constructor(array) {
      this.heap = this.buildHeap(array);
    }
  
    buildHeap(array) {
      const lastParentIdx = Math.floor((array.length - 2) / 2);
      for (let currentIdx = lastParentIdx; currentIdx >= 0; currentIdx--) {
        this.siftDown(currentIdx, array.length - 1, array);
      }
      return array;
    }
  
    siftDown(currentIdx, endIdx, heap) {
      let leftChildIdx = currentIdx * 2 + 1;
      while (leftChildIdx <= endIdx) {
        const rightChildIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
        let idxToSwap;
        if (rightChildIdx !== -1 && heap[rightChildIdx] < heap[leftChildIdx]) {
          idxToSwap = rightChildIdx;
        } else idxToSwap = leftChildIdx;
        if (heap[idxToSwap] < heap[currentIdx]) {
          this.swap(currentIdx, idxToSwap, heap);
          currentIdx = idxToSwap;
          leftChildIdx = currentIdx * 2 + 1;
        } else return;
      }
    }
  
    siftUp(currentIdx, heap) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
        this.swap(currentIdx, parentIdx, heap);
        currentIdx = parentIdx;
        parentIdx = Math.floor((currentIdx - 1) / 2);
      }
    }
  
    peek() {
      return this.heap[0];
    }
  
    remove() {
      this.swap(0, this.heap.length - 1, this.heap);
      const valToRemove = this.heap.pop();
      this.siftDown(0, this.heap.length - 1, this.heap);
      return valToRemove;
    }
  
    insert(value) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1, this.heap);
    }
  
    swap(i, j, heap)  {
      // const tmp = heap[i];
      // heap[i] = heap[j];
      // heap[j] = tmp;
      [heap[i], heap[j]] = [heap[j], heap[i]];
    }
  }
  const testArr = [10,2,5,200,88,15,50,4];
  const heap = new MinHeap(testArr);
  
  console.log(heap.buildHeap(testArr));
  
  heap.insert(3);
  console.log(heap.buildHeap(testArr));
  heap.remove();
  console.log(heap.buildHeap(testArr));
  heap.insert(9);
  console.log(heap.buildHeap(testArr));