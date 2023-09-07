class AppConfig {
    public productsUrl = "http://localhost:3030/delay/api/products/" //include the ending slash
    public employeesUrl = "http://localhost:3030/delay/api/employees/" //include the ending slash
}

const appConfig = new AppConfig()

export default appConfig