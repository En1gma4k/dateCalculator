document.addEventListener('DOMContentLoaded', () => {
    const startDateInput = document.getElementById('startDate');
    const datesContainer = document.getElementById('datesContainer');

    startDateInput.addEventListener('change', () => {
        const selectedDate = new Date(startDateInput.value);
        if (isNaN(selectedDate)) return;

        const days = [0, 1, 4, 7, 14, 28];
        const dates = days.map(day => ({
            label: `Day ${day}:`,
            date: formatDate(addDays(selectedDate, day))
        }));

        datesContainer.innerHTML = '';
        dates.forEach(({ label, date }) => {
            const dateElement = document.createElement('div');
            dateElement.className = 'flex items-center p-3 border rounded bg-gray-50';
            dateElement.innerHTML = `
                <span class="mr-2">${label}</span>
                <div class="relative flex-1">
                    <input type="text" value="${date}" readonly class="w-full p-3 border rounded" />
                    <button class="copy-btn text-blue-500 hover:text-blue-700 absolute right-3 top-3" data-clipboard-text="${date}">
                        <i class="far fa-copy"></i>
                    </button>
                </div>
            `;
            datesContainer.appendChild(dateElement);
        });

        document.querySelectorAll('.copy-btn').forEach(button => {
            button.addEventListener('click', () => {
                const textToCopy = button.getAttribute('data-clipboard-text');
                navigator.clipboard.writeText(textToCopy).then(() => {
                    alert('Date copied to clipboard');
                });
            });
        });
    });

    function addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
});
