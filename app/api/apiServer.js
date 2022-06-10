import axios from "axios";

export default axios.create({
  baseURL: "https://time-workout.herokuapp.com/api/v1",
});
