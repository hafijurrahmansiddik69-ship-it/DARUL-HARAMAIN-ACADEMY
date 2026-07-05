export default function Clock() {
  const date = new Date();

  const formattedDateBn = date.toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Get Islamic date components
  const islamicDate = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).formatToParts(date);

  const day = islamicDate.find(p => p.type === 'day')?.value;
  const monthIndex = parseInt(islamicDate.find(p => p.type === 'month')?.value || '1');
  const year = islamicDate.find(p => p.type === 'year')?.value;

  const islamicMonthsBn = [
    "",
    "মহররম",
    "সফর",
    "রবিউল আউয়াল",
    "রবিউস সানি",
    "জমাদিউল আউয়াল",
    "জমাদিউস সানি",
    "রজব",
    "শাবান",
    "রমজান",
    "শাওয়াল",
    "জিলকদ",
    "জিলহজ"
  ];

  const formattedDateArBn = `${day} ${islamicMonthsBn[monthIndex]}, ${year} হিজরি`;

  return (
    <div className="font-sans text-sm text-gray-600 flex justify-center gap-4">
      <span>{formattedDateBn}</span>
      <span className="text-gray-300">|</span>
      <span>{formattedDateArBn}</span>
    </div>
  );
}
