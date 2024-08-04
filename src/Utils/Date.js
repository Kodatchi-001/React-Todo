export function displayDate() {
    const Today = new Date();

    var day_name = Today.toLocaleString('default', { weekday: 'long' });
    var day = Today.getDate();
    var month = Today.toLocaleString('default', { month: 'long' });
    var year = Today.getFullYear();

    return <>
        <h1 className="text-xl text-gray-500">Today ,{day_name} {day} {month} {year}</h1>
    </>
}

