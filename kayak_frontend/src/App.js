import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Router, Redirect} from 'react-router-dom';
import ShowCars from './components/show_cars';
import ShowFlights from './components/show_flights';
import ShowHotels from './components/show_hotels';
import SearchCar from "./components/search_car";
import CarSearchBar from './components/searchbars/car_search_bar';
import SearchFlight from './components/search_flight';
import SearchHotel from './components/search_hotel';
import HomePageHeader from './components/headers/homepage_header';
import HomeScreenButtonPanel from './components/searchbars/homescreen_button_panel';
import CarSearchLeftNav from './components/searchbars/car_search_leftnav';
import CarTile from './components/searchbars/car_tiles';
import FlightTile from './components/searchbars/flight_tiles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {history} from './utils/util';
import ViewCar from './components/subcomponents/view_car';
import BookingDetails from './components/subcomponents/booking_details';
import RentalCarPrice from './components/subcomponents/rental_car_price';
import FlightBillingPage from './components/flight_billing_page';
import CarBillingPage from './components/car_billing_page';
import AdminDashboard from './components/admin_dashboard';
import AddCarAdmin from './components/subcomponents/add_car_admin';
import AddHotelAdmin from './components/subcomponents/add_hotel_admin';
import AddFlightAdmin from './components/subcomponents/add_flight_admin';
import UserProfile from './components/user_profile';
import SignUp from './components/sign_up';
import AdminLogin from './components/admin_login'


import EditHotels from './components/editHotels';
import editHotelTile from './components/searchbars/edithotel_tiles';
import EditHotelForm from './components/searchbars/edithotel_form';
import EditCarForm from './components/searchbars/editcar_form';
import EditFlightForm from './components/searchbars/editflight_form';
import EditCars from './components/editCars';
import EditCarTile from './components/searchbars/editcar_tiles';
import EditFlights from './components/editFlights';
import EditFlightTile from './components/searchbars/editflight_tiles';

import CarGraphs from './components/subcomponents/car_graphs';



class App extends Component {

    constructor(){
        super();

             this.hotels = [{
                name:"Sofitel Los Angeles at Beverly Hills",
                stars:4,
                rating:8.5,
                reviews:"Good",
                city : "San Jose",
                state : "California",
                zip : 95126,
                capacity : 10,
                address:"Beverly Grove",
                price:249
              }]

               this.cars = [{
                name:"Audi Q3",
                duration:4,
                no_of_bags:8,
                no_of_doors:4,
                src_city : "San Jose",
                dest_city : "San Diego",
                agency : "Audi Rental Groups",
                price:249,
                capacity : 4
              }]

               this.flights = [{
                carrier:"Lufthanza",
                operation_day:3,
                dep_time:1500,
                duration:240,
                src_city : "San Jose",
                dest_city : "San Diego",
                price:249
              }]


            }


    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <MuiThemeProvider>

                            <Route  exact path="/edithotelform" render ={() => (<EditHotelForm data={this.hotels}/>)}/>
                            <Route  exact path="/editcarform" render ={() => (<EditCarForm data={this.cars}/>)}/>
                            <Route  exact path="/editflightform" render ={() => (<EditFlightForm data={this.flights}/>)}/>
                            <Route  exact path="/editHotels" render ={() => (<EditHotels/>)}/>
                            <Route  exact path="/editFlights" render ={() => (<EditFlights/>)}/>
                            <Route  exact path="/editCars" render ={() => (<EditCars/>)}/>
                            <Route  exact path="/cardetails" render ={() => (<ShowCars/>)}/>
                            <Route  exact path="/flightdetails" render ={() => (<ShowFlights/>)}/>
                            <Route  exact path="/hoteldetails" render ={() => (<ShowHotels/>)}/>
                            <Route  exact path="/cars" render ={() => (<SearchCar/>)}/>
                            <Route  exact path="/flights" render ={() => (<SearchFlight/>)}/>
                            <Route  exact path="/hotels" render ={() => (<SearchHotel/>)}/>
                            <Route  exact path="/flightbillingpage" render ={() => (<FlightBillingPage/>)}/>
                            <Route  exact path="/admindashboard" render ={() => (<AdminDashboard/>)}/>
                            <Route  exact path="/cargraphs" render ={() => (<CarGraphs/>)}/>
                            <Route  exact path="/addcaradmin" render ={() => (<AddCarAdmin/>)}/>
                            <Route  exact path="/addhoteladmin" render ={() => (<AddHotelAdmin/>)}/>
                            <Route  exact path="/addflightadmin" render ={() => (<AddFlightAdmin/>)}/>
                            <Route  exact path="/carbillingpage" render ={() => (<CarBillingPage/>)}/>
                            <Route  exact path="/adminlogin" render ={() => (<AdminLogin/>)}/>


                    </MuiThemeProvider>
                </Router>
            </div>
        );
    }
}

export default App;
