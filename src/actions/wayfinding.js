// *** Action Types ***
export const UPDATE_WAYFINDING_STATUS = 'UPDATE_WAYFINDING_STATUS';

export const START_SCANNING_FAILURE = 'START_SCANNING_FAILURE';
export const START_SCANNING_SUCCESS = 'START_SCANNING_SUCCESS';

// *** Location Services Types ***
export const LOCATION_SERVICES_STATUS_NOTDETERMINED = 'LOCATION_SERVICES_STATUS_NOTDETERMINED';
export const LOCATION_SERVICES_STATUS_DENIED = 'LOCATION_SERVICES_STATUS_DENIED';
export const LOCATION_SERVICES_STATUS_AUTHORIZED = 'LOCATION_SERVICES_STATUS_AUTHORIZED';

export function updateWayfindingStatus(bluetoothOn, locationServicesStatus) {
  return {
    bluetoothOn,
    locationServicesStatus,
    type: UPDATE_WAYFINDING_STATUS,
  };
}

function startScanningSuccessful(rangingUUID, rangingIdentifier) {
  return {
    type: START_SCANNING_SUCCESS,
    rangingUUID,
    rangingIdentifier,
  };
}

function startScanningFailure(error) {
  return {
    type: START_SCANNING_FAILURE,
  };
}