def solution(str):
     arr = str.lower().split(" ");
     answer = ''
     for s in arr:
        answer = answer + ' ' + s.capitalize()
     return answer;

print(solution("3people unFollowed me"))