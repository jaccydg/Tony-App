/* eslint-disable no-unused-vars */
declare namespace Tony.App {
    interface Gateway {
        id: number,
        name: string,
        longitude: number,
        latitude: number,
    }
    interface GatewayInfo {
        name: string,
        longitude: number,
        latitude: number,
        freeChargingStations: number,
        totalChargingStations: number,
    }
    interface Error {
        title: string,
        message: string
    }
}
