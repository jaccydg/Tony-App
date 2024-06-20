declare namespace Tony.App {
    interface Station {
        geo: [number, number],
        name: string,
    }
    interface StationInfo {
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
