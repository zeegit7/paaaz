var carsercices = require('./car_services');
var flightservices = require('./flight_services');
var hotelservices = require('./hotel_services');
var userservices = require('./user_services');

function handle_request(topic, data, callback){
    console.log("[Kafka] handle_request topic: "+topic+" ,data: ",data);
    if(topic === "car_search_req"){
      carsercices.searchCars(data, callback);
    }else if(topic === "add_car_req"){
      carsercices.addCar(data, callback);
    }else if(topic === "delete_car_req"){
      carsercices.deleteCar(data, callback);
    }else if(topic === "edit_car_req"){
      carsercices.editCar(data, callback);
    }else if(topic === "flight_search_req"){
    	flightservices.searchFlights(data,callback);
    }else if(topic === "add_flight_req"){
    	flightservices.addFlight(data,callback);
    }else if(topic === "delete_flight_req"){
    	flightservices.deleteFlight(data,callback);
    }else if(topic === "edit_flight_req"){
    	flightservices.editFlight(data,callback);
    }else if(topic === "hotel_search_req"){
      hotelservices.searchHotels(data, callback);
    }else if(topic === "hotel_add_req"){
      hotelservices.addNewHotel(data, callback);
    }else if(topic === "signup_req"){
        userservices.addUser(data, callback);
  }
}

exports.handle_request = handle_request;
