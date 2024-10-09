
class Bucket {
  min = 0;
  max = 0;
  values =  []

  constructor(min,max) {
    this.min = min;
    this.max = max;
  }

  add(value) {
    if (value >= this.min && value <= this.max) {
      this.values.push(value);
      this.values.sort();
      return true;
    }
    return false;
  }
}


const _getMinAndMax = (array)=> {
  let min = 0;
  let max = 1;

  for ( let x=0; x<array.length; x++ ) {
    if (array[x] < min ) min = array[x];
    if (array[x] > max ) max = array[x];
  }
  return [min,max];
}

const _createBuckets = (min, max,items_qtd) => {
  let tmp_buckets = [];

  while ( min <= max ) {
    let tmp_bucket = new Bucket(min,(min+items_qtd))
    tmp_buckets.push(tmp_bucket)
    min = (min+items_qtd)+1;
  }
  return tmp_buckets;
}


function bucketSort(array,buckets_length) {
  if (array.length > 0 ) {
    let [min,max] = _getMinAndMax(array); // get min and max
    let buckets = _createBuckets(min,max,buckets_length);

    array.forEach(value => {
      buckets.forEach(b => {b.add(value);});
    });

    array = [] 
    buckets.forEach(b => {
      array = array.concat(b.values);
    });

    return array;
  }

  return -1;
}

console.log(bucketSort([8,7,6,1,8,8,7,5,4,5,9,0,1,0,1],5));
