const DEBUG = process.env.REACT_APP_NODE_ENV !== "production";
const errorInterceptor = (axiosInstance) => {
axiosInstance.interceptors.response.use((response) => {
  //Response Successful
  return response;
},(error) => {
   if (error?.status?.code === 401) {
     //Unauthorized
     //redirect to Login
   } else {
    //dispatch your error in a more user friendly manner
      if (DEBUG) {
      //easier debugging
      console.group("Error");
      console.log(error);
      console.groupEnd();
     }
  }
});
};
export default errorInterceptor;