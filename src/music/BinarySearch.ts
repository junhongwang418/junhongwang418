class BinarySearch {

  /**
   * Find the largest number smaller than target
   * @param items - items to search from
   * @param item - item to search the floor of
   * @return index of item found. -1 if not found.
   */
  static findFloorIndex(items: number[], item: number): number {
    return this.findFloorIndexHelper(items, item, 0, items.length - 1);
  }

  private static findFloorIndexHelper(items: number[], item: number, lo: number, hi: number): number {
    
    if (lo >= hi) return lo;

    if (lo + 1 === hi) {
      if (items[hi] <= item) return hi;
      else return lo;
    }

    const mid = lo + Math.floor((hi - lo) / 2);

    if (items[mid] === item) return mid;

    if (items[mid] < item) {
      return this.findFloorIndexHelper(items, item, mid, hi);
    }
    else {
      return this.findFloorIndexHelper(items, item, lo, mid - 1);
    }

  }

}

export default BinarySearch;