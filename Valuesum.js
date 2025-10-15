function solution(D) {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const result = { 'Mon': 0, 'Tue': 0, 'Wed': 0, 'Thu': 0, 'Fri': 0, 'Sat': 0, 'Sun': 0 };

  for (const [dateStr, value] of Object.entries(D)) {
    const day = new Date(dateStr).getDay();
    const dayName = dayNames[day];
    result[dayName] += value;
  }

  const days = Object.keys(result);
  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    if (result[day] === 0) {
      let prev = result[days[(i - 1 + 7) % 7]];
      let next = result[days[(i + 1) % 7]];
      result[day] = Math.round((prev + next) / 2);
    }
  }

  return result;
}
