declare namespace Tony.App {
    interface Station {
        id: string,
        geo: [number, number],
        name: string,
    }
    interface Error {
        title: string,
        message: string
    }
}
