function updateDates() {

    const selectedDate = document.getElementById('datepicker').value;

    document.getElementById('currentDate').innerText = selectedDate;

    function calculateDate(offset) {

      const currentDate = new Date(selectedDate);

      const futureDate = new Date(currentDate);

      futureDate.setDate(currentDate.getDate() + offset);

      return futureDate.toLocaleDateString('en-IN');

    }

    document.getElementById('day0').innerText = 'Start: ' + calculateDate(0);

    document.getElementById('day2').innerText = '4 Days: ' + calculateDate(4);

    document.getElementById('day3').innerText = '7 Days: ' + calculateDate(7);

    document.getElementById('day4').innerText = '14 Days: ' + calculateDate(14);

    document.getElementById('end').innerText = '28 Days:' + calculateDate(28);


  }

  // Initialize with the current date

  const currentDate = new Date().toLocaleDateString();

  document.getElementById('currentDate').innerText = 'Selected Date: ' + currentDate;
