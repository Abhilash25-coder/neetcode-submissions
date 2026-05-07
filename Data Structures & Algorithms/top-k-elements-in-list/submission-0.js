class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(let num of nums){
            map.set(num, map.get(num)+1||0);
        }
        let entries = [...map.entries()];
        entries.sort((a,b)=>b[1]-a[1]);
        let ans=[];
        for(let [key,value] of entries){
            ans.push(key);
            if(ans.length>=k) break;
        }
        return ans;
    }
}
