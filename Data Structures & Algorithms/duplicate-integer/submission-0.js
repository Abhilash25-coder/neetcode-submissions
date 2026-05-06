class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let temp =  [...new Set(nums)];

        if(temp.length < nums.length){
            return true
        }else{
            return false
        }
        
    }
}
