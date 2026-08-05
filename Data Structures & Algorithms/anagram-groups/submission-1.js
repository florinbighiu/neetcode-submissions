class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const groups = new Map();

      for(const s of strs) {
        const string = [...s].sort().join('');

        if(!groups.has(string)) groups.set(string, [])
        groups.get(string).push(s)

      }
return [...groups.values()]

    }

}
