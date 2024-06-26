declare namespace Tony.App {
    interface Gateway {
        id: number,
        name: string,
        longitude: number
        latitude: number,
    }
    interface GatewayInfo {
        geo: [number, number],
        free: number,
        total: number,
        name: string,
    }
    interface Error {
        title: string,
        message: string
    }
}
