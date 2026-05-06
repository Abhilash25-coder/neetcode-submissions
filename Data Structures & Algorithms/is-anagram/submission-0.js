class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false
        }

        const normalize = (str)=> str.toLowerCase().split('').sort().join('')

        return normalize(s) === normalize(t)
    }
}
