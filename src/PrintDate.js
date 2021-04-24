const PrintDateMsg = () => {
  // Imprime un h1 con la fecha y hora del momento
  const today = new Date().toDateString();
  const dateMsg = "Ésta es la fecha de hoy " + today;
  return (
    <h1> {dateMsg} </h1>
  )
}

export default PrintDateMsg;