function formatedDate( date ){
  const collator = new Intl.DateTimeFormat('en-US', {
      day:'2-digit',
      month:'2-digit',
      year:'numeric'
  });

  const dateFormat = collator.format(date)
  return dateFormat
}


function formatInputDate(fechaInput) {
  
  const fecha = new Date(fechaInput);

  
  const year = fecha.getFullYear();

  
  let month = fecha.getMonth() + 1;
  if (month < 10) {
      month = `0` + month;
  }

  
  let day = fecha.getDate();
  if (day < 10) {
      day = `0` + day;
  }

  
  const formatedDate = `${year}-${month}-${day}`;

  
  return formatedDate;
}