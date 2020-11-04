//Business Logic-----------

function Ticket (holderAge, showTime, premierStatus) {
  this.holderAge = holderAge;
  this.showTime = showTime;
  this.premierStatus = premierStatus;
}

Ticket.prototype.assignAgePrice = function () {
  let ticketPrice = 12;
    if (this.premierStatus === "new") {
    return (ticketPrice + 8)
  } else if (this.holderAge < 18 && this.showTime === "morning" && this.premierStatus != "new") {
    return (ticketPrice - 5);
  } else if (this.holderAge < 18 && this.showTime === "evening" && this.premierStatus != "new") {
    return (ticketPrice - 4);
  } else if (this.holderAge > 18 && this.showTime === "morning" && this.premierStatus != "new"){
    return (ticketPrice - 1)
  } else {
    return ticketPrice;
  }
}

//User Interface Logic-----------------

$(document).ready(function() {
  
});