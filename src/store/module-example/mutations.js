export function SET_LOCATION(state, newCoordenade) {
    return (state.userCoordenade = newCoordenade);
  }
  export function LOAD_COORDENADE_SERVICE_POINT(state, payload) {
    return (state.coordenadeServicePoint = payload);
  }
  export function LOAD_NAME_SERVICE_POINT(state, payload) {
    return (state.nameServicePoint = payload);
  }
  export function LOAD_OPEN_HOUR_SERVICE_POINT(state, payload) {
    return (state.openHourServicePoint = payload);
  }
  export function LOAD_CLOSE_HOUR_SERVICE_POINT(state, payload) {
    return (state.closeHourServicePoint = payload);
  }
  export function LOAD_ADDRESS_SERVICE_POINT(state, payload) {
    return (state.addressServicePoint = payload);
  }
  export function LOAD_DISTANCE_SERVICE_POINT(state, payload) {
    return (state.distanceServicePoint = payload);
  }
