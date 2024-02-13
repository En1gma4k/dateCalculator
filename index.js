function updateDates() {

    const selectedDate = document.getElementById('datepicker').value;

    document.getElementById('currentDate').innerText = selectedDate;

    function calculateDate(offset) {

      const currentDate = new Date(selectedDate);

      const futureDate = new Date(currentDate);

      futureDate.setDate(currentDate.getDate() + offset);

      return futureDate.toLocaleDateString();

    }

    document.getElementById('day0').innerText = 'Day 0: ' + calculateDate(0);

    document.getElementById('day2').innerText = 'Day 14: ' + calculateDate(14);

    document.getElementById('day3').innerText = 'Day 28: ' + calculateDate(28);

    document.getElementById('day4').innerText = 'Day 56: ' + calculateDate(56);

    document.getElementById('end').innerText = 'Day 60 end:' + calculateDate(60);


  }

  // Initialize with the current date

  const currentDate = new Date().toLocaleDateString();

  document.getElementById('currentDate').innerText = 'Selected Date: ' + currentDate;
