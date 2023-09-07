class AppConfig {
    public productsUrl = "http://localhost:3030/api/products/" //include the ending slash
    public productsTop3Url = "http://localhost:3030/api/products/top-three/" //include the ending slash
    public productsOutOfStockUrl = "http://localhost:3030/api/products/out-of-stock/" //include the ending slash
    public employeesUrl = "http://localhost:3030/api/employees/" //include the ending slash
    public registerUrl = "http://localhost:3030/api/register/" //include the ending slash
    public loginUrl = "http://localhost:3030/api/login/" //include the ending slash
}

const appConfig = new AppConfig()

export default appConfig