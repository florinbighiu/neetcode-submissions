class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      const numsCount = new Map();

      for(const num of nums) {
        numsCount.set(num, (numsCount.get(num) || 0) + 1)
      }
      const counts = [...numsCount.entries()]

      return counts.sort((a, b) => b[1] - a[1]).slice(0, k).map(([num]) => num) 
    }
}
