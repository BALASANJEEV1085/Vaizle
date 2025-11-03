function solution(D) 
{
    const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    function getDayName(dateStr) {
        const date = new Date(dateStr);
        return weekdays[date.getDay()];
    }

    const weekValues = { Mon:0, Tue:0, Wed:0, Thu:0, Fri:0, Sat:0, Sun:0 };
    const countValues = { Mon:0, Tue:0, Wed:0, Thu:0, Fri:0, Sat:0, Sun:0 };

    for (let date in D) {
        const day = getDayName(date);
        weekValues[day] += D[date];
        countValues[day] += 1;
    }

    const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

    for (let i = 0; i < days.length; i++) 
        {
        if (countValues[days[i]] === 0) {

            
            let prev = i - 1;
            while (prev >= 0 && countValues[days[prev]] === 0) prev--;

            
            let next = i + 1;
            while (next < 7 && countValues[days[next]] === 0) next++;

            const prevVal = weekValues[days[prev]];
            const nextVal = weekValues[days[next]];

            const gap = next - prev;
            const step = (nextVal - prevVal) / gap;

            weekValues[days[i]] = Math.round(prevVal + step * (i - prev));
        }
    }

    return weekValues;
}

const input = 
{
  "2020-01-01": 6,  
  "2020-01-04": 12, 
  "2020-01-05": 14, 
  "2020-01-06": 2,  
  "2020-01-07": 4   
};

console.log(solution(input));
