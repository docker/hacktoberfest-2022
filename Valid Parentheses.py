class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        closetoopen = {")":"(","]":"[", "}":"{"}
        for i in s:
            if i in closetoopen:
                if stack and stack[-1] == closetoopen[i]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(i)
        return True if  not stack else False
        
