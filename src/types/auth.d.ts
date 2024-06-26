declare namespace Tony.Auth {
    interface LoginData {
        email: string,
        password: string,
    }
    interface LoginResponse {
        tokenType: string,
        accessToken: string,
        expiresIn: number,
        refreshToken: string,
    }
}
