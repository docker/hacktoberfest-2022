class Solution:
    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:
        
        @lru_cache(None)
        def dp(idx,d,curr):
		
            if idx == len(jobDifficulty) and d == 0: return curr
            if idx >= len(jobDifficulty) or  d <= 0: return inf
            
            return min(dp(idx+1,d,max(curr,jobDifficulty[idx])),
                       max(curr,jobDifficulty[idx])+dp(idx+1,d-1,0))
       
        ans = dp(0,d,0)

        return ans if ans != inf else -1
